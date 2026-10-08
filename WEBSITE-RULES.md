# Website rules for your agent (FWAI, version 6 Oct 2026)

You were told to read this file before building the member's website. It is the whole design
direction for a small business site, written as numbers you can check. Where it differs from
sections 3c and 3e of `AGENTS.md`, or from the LOOK lines of the prompt, this file wins. Everything
else in `AGENTS.md` (evidence, never invent, deploy checks, REPORT.md) still applies.

If you could not read this whole file, write `UNVERIFIED: website rules not read` at the top of
`REPORT.md` and build from `AGENTS.md` 3c and 3e instead.

The target is bold and premium: big type, strong colour blocks, real photos of the member's own
kind of work. A page that is tidy and pale has failed, even if every line below is met.

## 1. The page is exactly these seven sections, in this order

Build the 375 px layout first, then widen it. Every section is one full width block (edge to edge,
text held in a 1200 px column inside it). No other sections, no sidebar, no popup.

| # | Section | Block colour (from their palette) | Photo |
|---|---------|-----------------------------------|-------|
| 1 | Hero with the offer | PRIMARY | 1, large, right half on a laptop |
| 2 | Proof | DARK TEXT colour | none |
| 3 | What you get | LIGHT NEUTRAL | 3, one tall and two small |
| 4 | How it works | SECONDARY | 1, beside the steps |
| 5 | Price or enquiry | CONTRAST | none |
| 6 | WhatsApp or enquiry button | PRIMARY | 1, optional |
| 7 | Footer | DARK TEXT colour | none |

- Palette names are the five roles in their brand kit: PRIMARY, SECONDARY, CONTRAST, LIGHT NEUTRAL,
  DARK TEXT. Use their hex codes exactly, and nothing outside the palette except white and black.
- At least five of the seven sections are a palette colour block that is not LIGHT NEUTRAL, and no
  two touching sections share a colour.
- If a role cannot give readable text (section 5 below) even after the one allowed fix, that
  section uses LIGHT NEUTRAL with a PRIMARY panel inside it. Never grey.
- If the member's prompt lists other sections (the problem their client has, three services, who
  they are, a FAQ), fold them in and add no section: the client's problem is the line under the
  hero headline; the services are the tiles of section 3; who they are, in their own words with
  why they started, is the first block of section 2, above the figures; FAQ answers, if the brief
  has them, become three one-line answers under the price in section 5.
- No palette in the project folder: say so in one line, then pick one saturated colour (saturation
  65 to 90 percent, lightness 30 to 45 percent) for PRIMARY, a dark neutral, a light neutral and one
  warm accent. Not beige with brass, not a purple gradient.

What each section holds, all of it taken from the member's brief and CONTACT DETAILS:

1. **Hero.** H1 is the offer in ten words or fewer, with the price or the lead time in it when the
   brief gives one. One line under it saying who it is for. One button, the main action ("Order on
   WhatsApp"). On a laptop (900 px and wider) text is on the left 55 percent and the photo fills the
   right 45 percent, running to the screen edge and the full height of the block. Never a centred
   headline over a gradient. On a phone the text comes first and the photo sits under it, 4:3, full width.
2. **Proof.** Three figures, each set at 64 px or more with a 16 px label under it: years in the
   work, orders or clients, a rating or a promise the brief states. Only figures the brief gives.
3. **What you get.** Three or four items. One is a tall photo tile (two rows high), the others
   shorter tiles beside it. Each tile: photo, a 28 px title, one line. Never three equal cards in a
   row. The price appears once here only if the brief gives one for each item.
4. **How it works.** Three steps with numerals 01, 02, 03 at 64 px or more, a 28 px title and one
   short line each. The photo sits beside the steps on a laptop and under them on a phone.
5. **Price or enquiry.** The price, written once exactly as the brief gives it, or "Tell me the
   date and size" when there is no price. Two or three lines on what is included. No table.
6. **WhatsApp or enquiry button.** One sentence in 36 px or more and the action button: WhatsApp
   first (`https://wa.me/<digits>?text=<short hello naming the business>`), then email, then the
   booking link where the brief holds one. These are links, never a form: the page has no backend.
7. **Footer.** Business name, the contact links, the photo credit line (section 4), nothing else.

**Write plain sentences.** No em dash or en dash anywhere in the page text: use a full stop or a
comma. A numbered step shows its numeral once (01, 02, 03), not twice.

**Never invent proof.** No made-up testimonial, client name, logo wall, star rating, number,
guarantee or refund policy. Where the brief gives none, build the section from what is true and
list each figure the member still has to give in `REPORT.md`.

## 2. Type scale (px, checked at 1440 px wide and at 375 px wide)

Two Google Fonts, both loaded with `<link>`: one display font and one body font. The display font
is one of Bricolage Grotesque, Sora, Outfit, Plus Jakarta Sans, Space Grotesk, Archivo, Epilogue. The
body font is one of DM Sans, Manrope, Figtree, Nunito Sans. Never Inter, Roboto, Arial, Open Sans
or the system font as the headline. No serif unless the brand kit names one.

| Role | At 1440 | At 375 | Weight | Line height |
|------|---------|--------|--------|-------------|
| H1 hero | 64 to 88 | 40 | 800 | 1.05 |
| H2 section | 44 to 56 | 32 | 800 | 1.1 |
| Big figure or numeral | 96 | 64 | 800 | 1 |
| H3 tile or step title | 28 | 22 | 700 | 1.2 |
| Lead line under a headline | 22 | 18 | 500 | 1.45 |
| Body | 18 | 17 | 400 | 1.6 |
| Label, caption, credit | 14 | 14 | 600 | 1.4 |
| Button label | 18 | 18 | 700 | 1 |

Write it as CSS variables so it cannot drift:
`--h1: clamp(40px, 14px + 4vw, 80px); --h2: clamp(32px, 16px + 2.2vw, 52px); --figure: clamp(64px, 24px + 5.5vw, 100px);`
Nothing under 14 px anywhere. Body copy lines are 60 to 75 characters long.

## 3. Space, shape, motion

- Section padding top and bottom: 96 px at 1024 px and wider, 72 px from 600 to 1023, 56 px under
  600. Side padding on a phone: 20 px. Gap between tiles: 16 px on a phone, 24 px on a laptop.
- One corner radius for the whole page, 16 px or 0. Buttons, tiles and photos use it.
- Buttons: height 56 px, padding 0 28 px, one line, a solid fill, pressed state moves it down 1 px.
- One icon set, inline SVG, one size. Never emoji.
- Motion: one fade up as a section arrives (16 px, under 600 ms), in CSS, switched off under
  `prefers-reduced-motion`. Nothing loops, nothing autoplays.

## 4. Real photos of their kind of work

Photos are the second thing that makes a page look expensive, so every photo slot in section 1
gets a real photo. A photo of the wrong thing is worse than none, so check each one.

Order of choice:

1. The member's own pictures in `images/` (`working.*`, `speaking.*`, `shot-1.*` to `shot-6.*`, or
   any file named `work-*`). Use them first, in the slots above.
2. For every slot still empty, fetch free CC0 photos (no credit needed, commercial use fine) from
   the Openverse search, which covers StockSnap and Rawpixel and needs no account or key. Save the
   script below as `scripts/fetch-photos.mjs` (it needs Node 18 or newer, which the member has) and
   run it once per keyword set:

   - Set A, the product, two words: `node scripts/fetch-photos.mjs "birthday cake" 2 hero`
   - Set B, the finished result or occasion: `node scripts/fetch-photos.mjs "wedding cake" 2 offer`
   - Set C, a close up detail: `node scripts/fetch-photos.mjs "cupcakes frosting" 2 detail`
   - Set D, the process or the place: `node scripts/fetch-photos.mjs "baking" 1 process`

   Make the keywords from the member's real offer, in plain English nouns: no brand names, no city
   names, no adjectives like "best". If a set finds nothing, use the one plainest noun from it
   ("cake"). The search allows 20 a minute and 200 a day, so run at most eight.
3. Still empty: leave a clearly marked slot (a block in the section colour with the words "photo
   goes here") and say so in `REPORT.md`. Never link a photo you did not download. Never make up
   a photo address.

Rules for every photo, checked by opening it:

- It shows the work or its result (a cake, a groomed dog, a clean room), or hands and tools. No
  face of a real person, no handshake, lightbulb, globe, team around a laptop or suited office
  scene. The script drops results tagged with people or those cliches; you still look at each file
  and delete any that shows a face, text, a logo or something other than the keywords.
- It is saved in `images/`, loaded from there, with `width` and `height` attributes and alt text
  that says what is in it. The hero photo has `fetchpriority="high"`, the rest `loading="lazy"`.
  Each file is under 500 KB.
- Each photo file is used once on the page. Never repeat a photo to fill a slot; if there are fewer
  photos than slots, give the leftover slot a PRIMARY or SECONDARY colour panel with the category
  name in it.
- A stock photo is never captioned as the member's own work ("our cakes", "a recent order"). Name
  the category ("Birthday cakes"). Mark each stock image with a `data-stock` attribute.
- The footer carries `Photos: StockSnap and Rawpixel, CC0, for illustration`. `images/CREDITS.md`
  (written by the script) goes in the project and its path goes in `REPORT.md`.
- When the member later adds their own photo of that slot, it replaces the stock one. Say that in
  one line in `REPORT.md`.

```js
// scripts/fetch-photos.mjs
// Usage: node scripts/fetch-photos.mjs "<keywords>" <how many, 1 to 4> <file prefix>
// Finds free (CC0) photos of the keywords and saves them into images/. No account or key needed.
import { mkdirSync, writeFileSync, appendFileSync } from 'node:fs';

const [, , query, countArg = '2', prefix = 'photo'] = process.argv;
if (!query) { console.error('Give the keywords in quotes.'); process.exit(2); }
const want = Math.min(Math.max(Number(countArg) || 2, 1), 4);
// Real people's faces, and the stock-photo cliches, are never used.
const BAD = /\b(person|people|man|men|woman|women|girl|boy|child|children|kid|baby|face|portrait|selfie|couple|bride|groom|family|team|staff|customer|crowd|handshake|shaking|businessman|businesswoman|office|meeting|laptop|lightbulb|globe|suit)\b/i;
const words = query.toLowerCase().split(/\s+/).filter((w) => w.length > 2);

const api = new URL('https://api.openverse.org/v1/images/');
api.search = new URLSearchParams({
  q: query, license: 'cc0', category: 'photograph', source: 'stocksnap,rawpixel', mature: 'false', page_size: '20',
});
let res = await fetch(api, { headers: { 'User-Agent': 'fwai-member-site/1.0' } });
if (res.status === 429) { await new Promise((ok) => setTimeout(ok, 30000)); res = await fetch(api); }
if (!res.ok) { console.error('SEARCH FAILED', res.status, 'leave a marked photo slot and say so in REPORT.md'); process.exit(1); }
const { results = [] } = await res.json();

mkdirSync('images', { recursive: true });
let saved = 0;
for (const r of results) {
  if (saved >= want) break;
  const text = `${r.title ?? ''} ${(r.tags ?? []).map((t) => t.name).join(' ')}`;
  if (BAD.test(text)) continue;
  if (!words.some((w) => text.toLowerCase().includes(w))) continue;
  const img = await fetch(r.url, { headers: { 'User-Agent': 'fwai-member-site/1.0' } });
  const type = img.headers.get('content-type') ?? '';
  const bytes = Buffer.from(await img.arrayBuffer());
  if (!img.ok || !type.startsWith('image/') || bytes.length < 30000) continue;
  saved += 1;
  const file = `images/${prefix}-${saved}.jpg`;
  writeFileSync(file, bytes);
  appendFileSync('images/CREDITS.md', `- ${file}: "${r.title ?? 'untitled'}", ${r.creator ?? 'unknown author'}, ${r.source}, CC0, ${r.foreign_landing_url}\n`);
  console.log(`OK ${file} ${bytes.length} bytes "${r.title}"`);
}
if (saved < want) { console.error(`Only ${saved} of ${want} found for "${query}". Try other words.`); process.exit(1); }
```

## 5. Phone first, and readable

- 375 px wide: one column, nothing scrolls sideways (the page's scroll width equals 375), no
  `overflow-x: hidden` used to hide a problem.
- Every button and link that can be tapped is at least 44 px tall and 44 px wide, with 8 px between
  neighbours. Main buttons are 56 px.
- On a phone a slim bar fixed to the bottom, 56 px high, holds the WhatsApp button, and the page has
  72 px of bottom padding so it never covers the footer. Pure CSS, shown only under 700 px.
- Contrast is WCAG AA: 4.5 to 1 for body text, 3 to 1 for text of 24 px or more and for button
  labels at 18 px bold. Never judge by eye. Work every text and background pair out with this and
  write each pair and its ratio in `WORKLOG.md`:

```js
const lum = (hex) => { const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
```

  Text on a colour block is white, LIGHT NEUTRAL or DARK TEXT, whichever passes. If none passes,
  darken or lighten that block's colour by at most 12 percent, and say so in `REPORT.md`.
- Text never sits directly on a photo. If it must overlap, put it on a solid block of a palette
  colour.
- Visible focus: a 3 px outline on every link and button. Every image has alt text.

## 6. Before you say the website is done

Tick each only after checking it, and write what you checked in `REPORT.md`:

- [ ] Exactly the seven sections of part 1, in that order, nothing extra.
- [ ] H1 measures 64 to 88 px at 1440 px and 40 px or more at 375 px, and is not cut off.
- [ ] Five or more sections are full width palette colour blocks, none touching one of the same colour.
- [ ] Every text and background pair has its ratio in `WORKLOG.md` and meets part 5.
- [ ] Five or more real photos, each opened and checked, each under 500 KB, credited in the footer,
      none captioned as the member's own work, and `images/CREDITS.md` present.
- [ ] No horizontal scroll at 375 px. Every tappable thing is 44 px or more. The WhatsApp bar shows
      on a phone.
- [ ] Section spacing is 96, 72 and 56 px as in part 3. Nothing under 14 px.
- [ ] Two fonts, both loaded, the headline font from the list in part 2.
- [ ] Every contact link points at a real number, address or link the member gave. No placeholder
      text is left in any link.
- [ ] No invented number, name, testimonial or guarantee. Gaps are listed in `REPORT.md`.
- [ ] No photo file appears twice. No em dash or en dash in the page text.
- [ ] You looked at a screenshot at 1440 px and at 375 px and can say what you fixed after looking.
      If you could not take one, write `UNVERIFIED: not looked at`.
