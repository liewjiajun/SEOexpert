# SEOExpert Website Style Guide & Wireframe

Version 1.0 (based on finalized black logo)

---

## One-Page Style Guide

### Brand Vibe

**Keywords:** editorial, calm, modern, human, airy, premium

**Intent:** quiet authority (not "SEO spam agency")

**Avoid:** loud gradients everywhere, neon tech vibes, cluttered service cards, stock corporate meeting photos

---

### Color Palette

Mostly monochrome. Add one accent only if needed.

| Token | Hex | Usage |
|-------|-----|-------|
| Ink (primary text) | `#111111` | Headlines, primary text, logo wordmark |
| Ink 2 (secondary) | `#3A3A3A` | Secondary text, descriptions |
| Muted | `#B9B6B0` | Captions, helper text, subtle dividers |
| Background | `#F7F6F3` | Page background (avoid pure white) |
| Surface | `#FFFFFF` | Cards / panels |
| Border | `#E8E6E1` | Card borders, separators |
| Accent (optional) | `#2F5AFF` | Primary CTA, link hover, small highlights |

**Rules:**
- Wordmark stays black. Symbol can be black (primary) or accent (optional).
- Never use more than 1 accent color per page.

---

### Typography

**Recommended pairing (Google Fonts):**
- Headlines: Fraunces (600–700)
- Body / UI: Inter (400–500)
- Buttons: Inter (600)

**Type scale (desktop):**
- H1: 56–64 px / line-height 1.05–1.15
- H2: 36–40 px / line-height 1.15
- H3: 24–28 px / line-height 1.25
- Body: 16–18 px / line-height 1.6
- Small: 13–14 px / line-height 1.5

**Type scale (mobile):**
- H1: 36–40 px
- H2: 28–32 px
- Body: 16 px

**Rules:**
- Headlines in serif; body in sans; buttons always in sans (600).
- Avoid ALL CAPS except tiny labels.
- Keep line length around 60–75 characters for readability.

---

### Spacing & Layout System

- Max content width: 1120 px
- Page gutters: 24 px (mobile), 48–80 px (desktop)
- Spacing rhythm: 8 px system (8/16/24/32/48/64/96)
- Section padding: 80–120 px (desktop), 48–72 px (mobile)
- Card radius: 16–20 px
- Button radius: 12 px
- Shadows: extremely subtle (or none); prefer borders

---

### UI Components

**Buttons:**
- Primary: filled Ink (or Accent), white text; padding 14×18; radius 12
- Secondary: outline Border; Ink text; same padding
- Hover: subtle darken; no glow

**Links:**
- Default Ink 2; hover uses accent underline OR thin underline in Ink

**Cards:**
- Surface white; Border `#E8E6E1`; radius 18; padding 24–32
- Icons: thin-line only; keep secondary

**Forms:**
- Simple: name + email + message (or Typeform embed)
- Inputs 48 px height; radius 12

---

### Imagery & Icons

**Imagery:**
- Real, minimal lifestyle work shots: clean desks, cafés, travel work scenes; soft natural light.
- Avoid corporate meeting room stock photos.

**Icons:**
- Thin line icons (stroke 1.5–2 px). Use sparingly; the logo symbol is the hero.

---

### Logo Usage

- Clear space: at least the symbol height around the logo.
- Use the symbol subtly as a motif (section markers, bullets, footer watermark at 5–8% opacity).

---

## Homepage Wireframe (with Build Instructions)

### 0) Header (sticky)

- **Left:** logo (symbol + SEOExpert wordmark)
- **Right nav:** Services / Results / About / Blog / Contact
- **Primary CTA button:** "Book a call"
- Header height ~72 px; on mobile use hamburger + small CTA

---

### 1) Hero (above the fold)

- **Left:** H1 + 1–2 lines subtext (outcomes + your style)
- **CTAs:** Primary "Book a call"; Secondary "See results"
- Add a tiny reassurance line under CTAs: "No long contracts. Clear deliverables."
- **Right:** one clean lifestyle image OR a minimal "snapshot" card (no fake numbers)
- Keep hero clean; max 2 CTAs

---

### 2) Trust Strip

- If you have proof: "Trusted by ..." or "Worked with ..."
- If not: replace logos with 3 credibility bullets (Strategy-led / White-hat / Clear reporting)
- Do not use fake logos

---

### 3) What You Do (3 Service Cards)

- **Card 1:** SEO Strategy + Roadmap
- **Card 2:** Technical SEO + Fixes
- **Card 3:** Content SEO + Topic Clusters
- Each card: 1–2 sentence description + "Learn more"
- Keep language concrete; equal-height cards on desktop

---

### 4) Differentiators (Culture + Process)

**Two-column section:**

**Left column:** 
- Headline: "SEO without the agency fluff."
- 3–5 bullets (async, no vanity metrics, sustainable growth)

**Right column:**
- 4-step mini timeline:
  1. Audit & goals
  2. Strategy & prioritisation
  3. Execution sprints
  4. Reporting & iteration

Add subtle dividers between steps; keep this section values-led.

---

### 5) Results / Case Studies

- If you have case studies: 2 cards (Context / What you did / Outcome + timeframe / CTA)
- If not: "What clients can expect" + the KPIs you track (rankings, revenue, qualified leads, etc.)
- No inflated claims; 1 testimonial max here

---

### 6) Founder Section

- **Left:** natural founder photo OR minimal motif (avoid corporate headshot styling)
- **Right:** short founder note (3–5 lines) + "Best fit clients" bullets
- **CTA:** "Work with me"
- Keep it human and concise; this is your edge

---

### 7) Contact / CTA Footer Block

- **CTA card:** "Ready to grow sustainably?" + button "Book a call" + secondary email link
- **Footer:** Privacy / Terms, socials, small watermark symbol
- Don't clutter footer early on

---

## Implementation Notes (for Designer/Dev)

### Design Tokens (CSS Variables)

```css
:root {
  --bg: #F7F6F3;
  --ink: #111111;
  --ink2: #3A3A3A;
  --border: #E8E6E1;
  --muted: #B9B6B0;
  --accent: #2F5AFF; /* optional */
  --radius-card: 18px;
  --radius-btn: 12px;
}
```

### Mobile Rules

- Hero stacks: text first, then image/card
- Service cards become a vertical list
- Keep primary CTA visible within first screen
