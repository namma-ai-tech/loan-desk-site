# Loan Desk website

One page website for **Loan Desk**, a business that builds a clean enquiry register, a
follow-up board and a morning rate digest for small telecalling teams and independent DSA
desks.

- Built as a single static `index.html` with no backend and no build step.
- Contact links open the founder's own apps: WhatsApp, email and a booking link.
- Design follows `WEBSITE-RULES.md` (seven sections, palette, type scale, spacing).

## Run it locally

Open `index.html` in a browser. To serve it over a local URL:

```
npx serve .
```

## Deploy

Import this repository at vercel.com. Vercel serves `index.html` at the repository root as a
static site, so no build command or output directory is needed.

## Contact links

- Booking: https://cal.com/namma-ai/banktelecalling
- WhatsApp: https://wa.me/919986685355
- Email: nammaai1707@gmail.com

## Files

| Path | What it is |
|---|---|
| `index.html` | The whole page (markup, styles, inline SVG icons) |
| `images/` | The founder's own photos and logos (see `images/CREDITS.md`) |
| `scripts/contrast.mjs` | Computes the WCAG contrast ratios for every text and colour pair |
| `scripts/cdp.mjs` | Captures a screenshot at a given viewport width via Chrome DevTools Protocol |
| `WEBSITE-RULES.md` | The design rules this page was built against |
