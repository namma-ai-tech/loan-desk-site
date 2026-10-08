// scripts/cdp.mjs  -- capture a true emulated-width screenshot + layout measurement
// Usage: node scripts/cdp.mjs <fileUrl> <width> <outPng>
import { spawn } from 'node:child_process';
import { writeFileSync, existsSync, rmSync, mkdirSync } from 'node:fs';

const chrome = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const url = process.argv[2];
const width = Number(process.argv[3] || 375);
const out = process.argv[4] || 'shot.png';
const port = 9333;
const profile = 'C:/Users/Suresh/AppData/Local/Temp/kilo/cdp-profile';
mkdirSync(profile, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const proc = spawn(chrome, [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--remote-debugging-port=' + port, '--user-data-dir=' + profile, 'about:blank',
], { stdio: 'ignore' });

let wsUrl = null;
for (let i = 0; i < 40; i++) {
  await sleep(250);
  try {
    const res = await fetch(`http://127.0.0.1:${port}/json/list`);
    const list = await res.json();
    const page = list.find((t) => t.type === 'page');
    if (page && page.webSocketDebuggerUrl) { wsUrl = page.webSocketDebuggerUrl; break; }
  } catch { /* not up yet */ }
}
if (!wsUrl) { console.error('Could not reach Chrome DevTools'); proc.kill(); process.exit(1); }

const ws = new WebSocket(wsUrl);
await new Promise((ok, bad) => { ws.onopen = ok; ws.onerror = bad; });

let id = 0;
const pending = new Map();
const events = [];
ws.onmessage = (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); }
  else if (msg.method) events.push(msg);
};
const send = (method, params = {}) => new Promise((ok) => {
  const mid = ++id;
  pending.set(mid, (m) => ok(m.result ?? m));
  ws.send(JSON.stringify({ id: mid, method, params }));
});
const waitEvent = async (method, ms) => {
  const start = Date.now();
  while (Date.now() - start < ms) {
    const i = events.findIndex((e) => e.method === method);
    if (i >= 0) return events.splice(i, 1)[0];
    await sleep(100);
  }
  return null;
};

await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: true });
await send('Page.navigate', { url });
await waitEvent('Page.loadEventFired', 15000);
await sleep(1200); // let fonts settle

// Trigger lazy-loaded images across the whole page, then return to the top.
await send('Runtime.evaluate', { expression: 'window.scrollTo(0, document.body.scrollHeight)' });
await sleep(1800);
await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
await sleep(600);
await send('Runtime.evaluate', { expression: 'Array.from(document.images).forEach((i) => { i.loading = "eager"; }); Promise.all(Array.from(document.images).map((i) => i.decode().catch(() => 0)))' });
await sleep(1500);

const m = await send('Runtime.evaluate', {
  expression: 'JSON.stringify({innerWidth:window.innerWidth, docScroll:document.documentElement.scrollWidth, bodyScroll:document.body.scrollWidth, docHeight:document.documentElement.scrollHeight})',
  returnByValue: true,
});
console.log('MEASURE width=' + width + ' ' + m.result.value);

const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
writeFileSync(out, Buffer.from(shot.data, 'base64'));
console.log('SAVED ' + out);

ws.close();
proc.kill();
process.exit(0);
