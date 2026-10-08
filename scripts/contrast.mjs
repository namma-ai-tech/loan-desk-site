// scripts/contrast.mjs
// WCAG 2.1 relative luminance + contrast ratio. Run: node scripts/contrast.mjs
const lum = (hex) => {
  const c = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

const P = {
  primary: '#0F6B6C',
  secondary: '#D9C7A9',
  contrast: '#14202B',
  light: '#F7F3EC',
  dark: '#14202B',
  white: '#FFFFFF',
};

const pairs = [
  ['white text on PRIMARY hero', P.white, P.primary, 4.5],
  ['light text on PRIMARY hero', P.light, P.primary, 4.5],
  ['secondary H1 accent on PRIMARY', P.secondary, P.primary, 3],
  ['label light on PRIMARY', P.light, P.primary, 4.5],
  ['light text on DARK proof', P.light, P.dark, 4.5],
  ['white figure on DARK proof', P.white, P.dark, 4.5],
  ['secondary label on DARK proof', P.secondary, P.dark, 4.5],
  ['dark text on LIGHT section', P.dark, P.light, 4.5],
  ['primary accent on LIGHT section', P.primary, P.light, 4.5],
  ['dark text on WHITE tile', P.dark, P.white, 4.5],
  ['primary icon on WHITE tile', P.primary, P.white, 3],
  ['dark text on SECONDARY sand', P.dark, P.secondary, 4.5],
  ['primary numeral on SECONDARY sand', P.primary, P.secondary, 3],
  ['light text on PRIMARY start', P.light, P.primary, 4.5],
  ['white text on PRIMARY start', P.white, P.primary, 4.5],
  ['primary label on WHITE button', P.primary, P.white, 3],
  ['light text on DARK footer', P.light, P.dark, 4.5],
  ['secondary credit on DARK footer', P.secondary, P.dark, 4.5],
];

let fail = 0;
for (const [name, a, b, need] of pairs) {
  const r = ratio(a, b);
  const ok = r >= need;
  if (!ok) fail += 1;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${r.toFixed(2)}:1  (need ${need})  ${name}  [${a} on ${b}]`);
}
console.log(fail === 0 ? 'ALL PAIRS PASS' : `${fail} PAIR(S) FAIL`);
