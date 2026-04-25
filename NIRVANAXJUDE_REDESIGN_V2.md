# NIRVANAXJUDE — COMPLETE DESIGN SYSTEM & REBUILD SPECIFICATION
### Version 2.1 | Antigravity Redesign Brief | Based on advisory-agency.webflow.io (Verified via Screenshots)
**Reference Template Analyzed:** advisory-agency.webflow.io (Designed by Grabui, Powered by Webflow)
**Brand:** NirvanaXJude (N/X/J)
**Goal:** Transform the current AI-looking site into a real, human-designed, premium tech consultancy — pixel-matched to the advisory-agency.webflow.io design language, applied fully to NirvanaXJude's content, colour, and brand identity.

---

## 0. CRITICAL DIRECTIVES — READ FIRST

1. **All content is preserved 100%.** Every headline, stat, step, testimonial, and CTA from the current NirvanaXJude site is kept exactly as-is. No copy is rewritten.
2. **Logo stays unchanged.** The N/X/J wordmark is the brand anchor. The gold/amber tone from it is the primary accent colour.
3. **No personal photo of Jude anywhere.** Remove from every page. Replace with contextual human photography (founders, teams, investors, boardrooms, dashboards) as described per section below.
4. **All external links are preserved.** Every CTA button keeps its existing href target (cal.com, instantly.ai, clay.com, etc.).
5. **Design goal:** Match the real, human-designed quality of advisory-agency.webflow.io — generous whitespace, strong type hierarchy, photo-forward sections, smooth interactions, and a consistent accent dot/pill system for eyebrow labels.

---

## 1. WHAT THE ADVISORY TEMPLATE ACTUALLY LOOKS LIKE (From Direct Screenshots)

This section documents the **exact** visual DNA of the reference template so it is replicated faithfully.

### 1.1 Colour System (Advisory Template)
- **Background (dark sections):** Near-black `#0F0F11` — very dark, not pure black
- **Background (light sections):** Off-white `#F5F4F0` — warm white, not pure white — used for stats section, case study cards, process section, team grid section, blog section, FAQ section
- **Primary accent:** Neon/lime green `#C8F04D` — used for: eyebrow dots, CTA button background, arrow icon background circles, active indicators
- **Text (on dark):** White `#FFFFFF` / near-white
- **Text (on light):** Near-black `#1A1A1A`
- **Card backgrounds (on light bg):** White `#FFFFFF` with subtle rounded corners
- **Dashed dividers:** `border: 1px dashed #D0CECC` — used in case study cards between metadata
- **Eyebrow label format:** `● LABEL TEXT` — a small filled square/dot in accent green, then uppercase spaced text in body colour

### 1.2 Typography (Advisory Template)
- **Display font:** Bold sans-serif — appears to be **Inter** or **Neue Haas Grotesk** — very heavy weight (800–900), tight letter-spacing
- **Body font:** Same sans-serif family, regular weight (400)
- **Hero headline size:** Approximately 64–72px, weight 800, very tight line-height (~1.0–1.05)
- **Section headlines:** 48–56px, weight 700
- **The key italic serif accent:** NOT used in advisory template. Advisory uses bold sans throughout. NirvanaXJude's existing Instrument Serif italic CAN be kept for decorative phrase emphasis since it's already part of the brand — but the primary font is bold sans.
- **Eyebrow labels:** 11–12px, uppercase, letter-spacing 0.15em, preceded by a ● dot in accent colour

### 1.3 Navbar (Advisory Template — Exact)
- **Left:** Logo (star/asterisk icon + "Advisory" wordmark) — very minimal, SVG icon
- **Right:** "BOOK A CONSULTATION" pill button (outlined, black border, white fill, dark text) + hamburger menu icon (≡)
- **Background:** Dark (`#0F0F11`), transparent-to-filled on scroll
- **Height:** ~72px
- **Font:** 12–13px, uppercase, letter-spacing 0.12em for the CTA button text

### 1.4 Hero Section (Advisory Template — Exact)
- **Layout:** Full-bleed background photograph filling the entire viewport
- **Overlay:** Dark gradient overlay on the photo: `linear-gradient(to right, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.3) 100%)`
- **Headline:** Bottom-left positioned, ~64–72px bold sans, white text, tight line-height
- **The accent phrase** is on its own line in the **lime green accent colour** (`#C8F04D`) — NOT italic
- **Sub-body text:** Small (14–15px), white, below headline, max-width ~380px
- **CTA button:** Green square-ish button with → arrow icon inside a green circle — "GET IN TOUCH" in small uppercase
- **Client logos:** Bottom-right of hero, white logos scrolling or static — "nand+R | ContrastAI | Elasticware | Clandestine | Co..."
- **"SCROLL DOWN ↓" indicator:** Bottom-left, small uppercase white text with down arrow

### 1.5 About/Stats Section (Advisory Template — Exact)
- **Background:** Off-white/light (`#F5F4F0`)
- **Eyebrow:** `● ABOUT US` — green dot + uppercase label, LEFT-aligned at top-left
- **Headline:** Large bold sans (36–40px), `We work with founders, executives, and leadership teams who are navigating uncertainty and critical strategic decisions.` — left aligned, takes up ~60% width
- **Stats: 3-column card grid** below the headline
  - Each card: white background, rounded corners (12px), subtle shadow
  - Icon at top (thin line icon, not filled)
  - Large number (48–56px, bold)
  - Description text (14px, muted grey)
  - Stats: `150+` / `90%+` / `10+`

### 1.6 Services Section (Advisory Template — Exact)
- **Background:** Near-black (`#0F0F11`)
- **Layout:** Left column (30% width) = text block with headline + sub + CTA button; Right area (70%) = horizontally scrollable cards
- **Left block headline:** `Strategic services for organizations.` — white, bold, 40–48px
- **CTA:** Green arrow button — "VIEW ALL SERVICE"
- **Service cards:** Dark-bordered cards, large photo on top (~60% card height), service title below in white bold, short description in muted white
- **Card corners:** Rounded ~16px
- **Card photo treatment:** Photos are warm, human, business context — people in meetings, at laptops

### 1.7 Process/Steps Section (Advisory Template — Exact)
- **Background:** Off-white/light (`#F5F4F0`)
- **Eyebrow:** `● HOW WE WORK` centred
- **Section headline:** `Our consulting approach` — centred, bold sans, 48px
- **Sub-description:** Small centred text, 2 lines
- **Layout:** LEFT side = one tall photo (sticky or fixed), RIGHT side = vertical list of steps
- **Step format:**
  - `STEP 01` — uppercase, letter-spaced, muted grey, very small (11px)
  - Step title below in bold sans (20–24px) — e.g., "Diagnose", "Problem Clarify", "Business Design", "Support Execution"
  - Step description on the right — body text, 15–16px
  - Thin horizontal divider between steps
- **Photo:** Large rounded rectangle, warm business/consulting context

### 1.8 Case Studies Section (Advisory Template — Exact)
- **Background:** Off-white/light (`#F5F4F0`)
- **Eyebrow:** `● CASE STUDIES` centred
- **Section headline:** `Advisory engagements with business leaders` centred, bold, 48px
- **Each case study card:**
  - White background, rounded corners (16–20px), subtle box-shadow
  - LEFT side (45%): Company name in very large bold sans (36–48px) + short description + dashed divider + metadata in 2 columns (`INDUSTRY:` / `YEAR:` in small caps muted, value below in bold) + dashed divider + green CTA button with "VIEW CASE STUDY"
  - RIGHT side (50%): Large rounded photo, no border, warm human context
  - Cards are stacked vertically (not in a grid)

### 1.9 Testimonials Section (Advisory Template — Exact)
- **Background:** Near-black (`#0F0F11`)
- **Eyebrow:** `● TESTIMONIAL` — green dot + label, top-left of section
- **Section headline:** `Stories that inspire` — white, bold sans, 48px, left-aligned
- **Sub-text:** `Here's what they shared about their experience working with us` — muted grey, left
- **Navigation buttons:** Two circles (prev/next) — LIME GREEN filled circles with white arrow icons — top-right of section
- **Cards:** Full-portrait photo cards — very large, approx 300–400px tall × 280–300px wide
  - Photo fills 100% of card
  - Text overlaid at BOTTOM of photo — white quote text, bold, 18–20px
  - Name and role below quote in lighter text
  - Cards are horizontal scrollable slider
  - Card corners: rounded ~16px

### 1.10 Industries Marquee (Advisory Template — Exact)
- **Background:** Light/off-white
- **Eyebrow:** `● INDUSTRIES` centred
- **Section headline:** `Industries we serve` bold, 48px, centred
- **Layout:** THREE rows of scrolling pills — each row moves in alternating directions
- **Pills:** Rounded pill tags with icon + label — e.g., "Technology & SaaS", "Logistics & Supply Chain", "Financial Services"
- **Row directions:** Row 1 → left, Row 2 → right, Row 3 → left (creates wave effect)

### 1.11 "Work with people / Career" Section (Advisory Template — Exact)
- **Background:** Light/off-white
- **Eyebrow:** `● CAREER` centred
- **Section headline:** `Work with people who value clear thinking` — centred, bold, 48–56px
- **Sub-text:** Centred, 2 lines
- **Below:** Full-width 4-column photo grid — portrait photos of professionals, cropped at roughly 3:4 ratio, side by side with very small gaps (4–8px)
- **Below photos:** Split layout — left: "How to apply" heading; right: description + "JOIN OUR TEAM" green button

### 1.12 Blog Section (Advisory Template — Exact)
- **Background:** Light/off-white
- **Eyebrow:** `● OUR BLOG` centred
- **Section headline:** `Thinking for business leaders` — centred, bold, 48px
- **Cards:** 3-column grid
  - Image top (rounded ~12px), 16:9 ratio
  - Title below (18–20px, bold)
  - Author avatar + author name + date — small, at bottom

### 1.13 "Make better decisions" CTA Section (Advisory Template — Exact)
- **Background:** Near-black (`#0F0F11`)
- **Layout:** Split — left: text + CTA (55%); right: photo (45%)
- **LEFT text:**
  - Headline: `Make better decisions with clarity and confidence` — white, bold, ~40–44px, left-aligned
  - Sub-text: `If you are facing important business decisions. The first step is gaining clarity.` — muted white, 15–16px
  - CTA: Green arrow button — "BOOK A CONSULTATION"
- **RIGHT photo:** Two men in a warm, natural light setting — one is explaining/presenting to the other, both looking engaged — rounded corners (16px), no border
- **The section has a slightly lighter dark card feel** — it sits inside a rounded card `#1A1A17` on the `#0F0F11` background

### 1.14 Footer (Advisory Template — Exact)
- **Background:** Near-black (`#0F0F11`)
- **TOP section:** Left = logo + tagline (2 lines) + "Let's Talk" label + email address (large, clickable); Right = email subscribe input + "SUBSCRIBE" button (lime green)
- **BOTTOM section:** Multi-column nav links (Home / About / Contact / 404 | Service / Service Details / Case study / Case single | Blog / Blog Details / Style Guide / Licenses / Changelog)
- **Very bottom bar:** Left: "Designed by Grabui · Powered by Webflow" — Right: Social icons (Facebook, X, LinkedIn, YouTube) in lime green filled circles

---

## 2. NIRVANAXJUDE COLOUR ADAPTATION

The advisory template's **lime green (#C8F04D)** maps to NirvanaXJude's **gold (#C9A84C)**. Everything else follows the same light/dark alternating structure.

```css
:root {
  /* === DARK BACKGROUNDS (matching advisory #0F0F11) === */
  --color-bg-dark:         #0C0B08;   /* Primary dark — warm near-black from N/X/J logo */
  --color-bg-dark-card:    #161410;   /* Slightly lighter dark for cards within dark sections */
  --color-bg-dark-section: #1A1810;   /* "Make better decisions" card dark */

  /* === LIGHT BACKGROUNDS (matching advisory #F5F4F0) === */
  --color-bg-light:        #F4F1EB;   /* Warm off-white — maps to advisory's light sections */
  --color-bg-light-card:   #FFFFFF;   /* Card backgrounds on light sections */

  /* === ACCENT (N/X/J gold, replaces advisory lime green) === */
  --color-accent:          #C9A84C;   /* Primary gold — logo match */
  --color-accent-hover:    #E2B959;   /* Brighter on hover */
  --color-accent-text:     #0C0B08;   /* Text on gold buttons — dark */

  /* === TEXT === */
  --color-text-on-dark:    #FFFFFF;   /* White text on dark sections */
  --color-text-on-dark-muted: #8A8680; /* Muted text on dark */
  --color-text-on-light:   #1A1814;   /* Dark text on light sections */
  --color-text-on-light-muted: #7A7570; /* Muted on light */

  /* === BORDERS === */
  --color-border-dark:     rgba(255,255,255,0.08);
  --color-border-light:    #E0DDD6;
  --color-border-dashed:   #D0CECC;   /* Dashed dividers in case study cards */

  /* === GRADIENTS === */
  --hero-overlay: linear-gradient(to right, rgba(12,11,8,0.88) 40%, rgba(12,11,8,0.35) 100%);
  --gradient-accent-glow: radial-gradient(ellipse 500px 300px at 50% 100%, rgba(201,168,76,0.07), transparent);
}
```

### Accent Colour Application Rules (Matching Advisory Exactly)
- **Eyebrow dots:** Every section label starts with a small filled gold square/dot `■` or `●` in `--color-accent`
- **CTA buttons:** Gold background, dark text — square-ish style with arrow icon
- **Arrow icon circles:** Gold filled circles containing a `→` arrow (like the advisory "VIEW CASE STUDY" button)
- **Prev/Next sliders:** Gold filled circles with white arrows (testimonial slider)
- **Active nav state:** Gold underline or dot
- **"Scroll Down" indicator:** Gold down arrow

---

## 3. TYPOGRAPHY SYSTEM

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap');

:root {
  --font-display:  'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
  /* Plus Jakarta Sans matches the advisory template's bold humanist sans perfectly */
  --font-serif:    'Instrument Serif', Georgia, serif;
  /* Used ONLY for decorative italic phrases — e.g., "before they close." */
  --font-mono:     'JetBrains Mono', monospace;
  /* Used for architecture tags in lab cards */
}
```

### Type Scale
| Use | Size | Weight | Font | Where |
|---|---|---|---|---|
| Hero H1 | clamp(52px, 6.5vw, 80px) | 800 | Plus Jakarta Sans | Hero headlines |
| Section H2 | clamp(36px, 4.5vw, 56px) | 700 | Plus Jakarta Sans | Every section headline |
| Card H3 | 22–28px | 700 | Plus Jakarta Sans | Company names, card titles |
| Step label | 12px | 600 | Plus Jakarta Sans | "STEP 01", eyebrow labels |
| Body large | 17–18px | 400 | Plus Jakarta Sans | Hero sub-copy, section intros |
| Body | 15–16px | 400 | Plus Jakarta Sans | Cards, step descriptions |
| Caption | 12–13px | 400 | Plus Jakarta Sans | Metadata (INDUSTRY, YEAR), dates |
| Mono | 10–11px | 500 | JetBrains Mono | Architecture tags in Lab cards |
| Serif accent | clamp(40px, 5vw, 64px) | 400 italic | Instrument Serif | One decorative phrase per page max |

### Typography Rules
- Line-height for headlines: **1.0–1.1** (very tight, like advisory)
- Line-height for body: **1.65**
- Letter-spacing for eyebrow labels: `0.15em`
- Letter-spacing for CTA button text: `0.08em`
- `text-wrap: balance` on all headings
- The accent serif italic is used **only** on: "before they close." / "screaming into the void." / "without hiring a technical team." — one phrase maximum per page

---

## 4. LAYOUT SYSTEM

```css
:root {
  --container-max:     1200px;
  --container-padding: clamp(20px, 5vw, 80px);

  /* Section padding — matching advisory's generous breathing room */
  --section-pad-dark:  clamp(80px, 10vw, 140px);  /* Dark sections */
  --section-pad-light: clamp(80px, 10vw, 120px);  /* Light sections */

  /* Grid gaps */
  --gap-sm:   12px;
  --gap-md:   24px;
  --gap-lg:   40px;
  --gap-xl:   64px;
}
```

### Section Alternation Pattern (CRITICAL — This is what makes the advisory site feel "real")
The advisory template **alternates dark and light sections** in a strict pattern. NirvanaXJude must follow this exact pattern:

```
NAVBAR            → Dark
HERO              → Dark (full-bleed photo + dark overlay)
STATS             → LIGHT (off-white #F4F1EB)
TOOL MARQUEE      → Dark
PROBLEM/SOLUTION  → LIGHT
HOW IT WORKS      → LIGHT
CASE STUDIES      → LIGHT (cards with white backgrounds)
TESTIMONIALS      → Dark
BEYOND THE RAISE  → LIGHT (the "Post-Funding Ops" / partner grid section)
"MAKE BETTER DECISIONS" CTA → Dark
FOOTER            → Dark
```

**For Agencies page:**
```
NAVBAR    → Dark
HERO      → Dark
FEATURES  → LIGHT
TESTIMONIALS → Dark
LAB CTA   → Dark (or alternating)
FOOTER    → Dark
```

**For Lab page:**
```
NAVBAR    → Dark
HERO      → Dark
CARDS GRID → LIGHT (slightly) OR Dark — keep dark for tech feel
CTA       → Dark
FOOTER    → Dark
```

---

## 5. COMPONENT SYSTEM (Exact Advisory Patterns)

### 5.1 NAVBAR

```
[N/X/J  NirvanaXJude]                    [SECURE FUNDING →]  [≡]
```

- Background: `--color-bg-dark`, transparent at top → fills on scroll
- Height: 72px
- Logo: N/X/J wordmark SVG (no changes)
- Right side: Pill/outlined button "SECURE FUNDING" (border: 1.5px solid white, white text, transparent bg) + hamburger icon
- On scroll: `backdrop-filter: blur(12px)` + `border-bottom: 1px solid rgba(255,255,255,0.08)`
- Mobile: Logo left, hamburger right. Hamburger opens full-screen overlay menu with staggered fade-in links

**For Agencies page nav:**
- Button changes to "PARTNER WITH ME →"

**For Lab page nav:**
- Shows both "FOR AGENCIES" and "SECURE FUNDING" as text links + CTA button

### 5.2 EYEBROW LABELS (Exact Advisory Pattern)

```html
<div class="eyebrow">
  <span class="eyebrow__dot">■</span>
  <span class="eyebrow__text">SECTION LABEL</span>
</div>
```

```css
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}
.eyebrow__dot {
  width: 10px;
  height: 10px;
  background: var(--color-accent);
  border-radius: 2px; /* small square, like advisory */
  flex-shrink: 0;
}
.eyebrow__text {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: inherit; /* inherits from section (white on dark, dark on light) */
}
```

### 5.3 CTA BUTTONS (Exact Advisory Style)

**Primary Button (Gold arrow button — matches advisory green button):**
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  color: var(--color-text-on-dark);
  border: none;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
}
.btn-primary__arrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 220ms ease, background 220ms ease;
}
.btn-primary__arrow svg {
  color: var(--color-accent-text);
  width: 16px; height: 16px;
}
.btn-primary:hover .btn-primary__arrow {
  transform: translateX(4px);
  background: var(--color-accent-hover);
}
```

**Usage (HTML pattern):**
```html
<a href="#" class="btn-primary">
  <div class="btn-primary__arrow">→</div>
  GET IN TOUCH
</a>
```

**Secondary (Outlined pill — Navbar CTA):**
```css
.btn-outline {
  border: 1.5px solid var(--color-text-on-dark);
  color: var(--color-text-on-dark);
  background: transparent;
  padding: 10px 24px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: background 200ms ease, color 200ms ease;
}
.btn-outline:hover {
  background: var(--color-text-on-dark);
  color: var(--color-bg-dark);
}
```

### 5.4 STATS CARDS (Advisory Light Section)

```css
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-md);
  margin-top: 48px;
}
.stat-card {
  background: var(--color-bg-light-card);
  border-radius: 16px;
  padding: 32px 28px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
}
.stat-card__icon {
  width: 28px; height: 28px;
  color: var(--color-text-on-light-muted);
  margin-bottom: 24px;
}
.stat-card__number {
  font-size: clamp(40px, 5vw, 56px);
  font-weight: 800;
  color: var(--color-text-on-light);
  line-height: 1;
  margin-bottom: 12px;
}
.stat-card__desc {
  font-size: 14px;
  color: var(--color-text-on-light-muted);
  line-height: 1.6;
  max-width: 160px;
}
```

### 5.5 CASE STUDY CARDS (Advisory Light Section)

This is the **most distinctive** component of the advisory template. It has a very specific layout that must be replicated exactly.

```css
.case-study-card {
  background: var(--color-bg-light-card);
  border-radius: 20px;
  padding: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  margin-bottom: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.case-study__company-name {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 800;
  color: var(--color-text-on-light);
  line-height: 1.1;
  margin-bottom: 16px;
}
.case-study__description {
  font-size: 16px;
  color: var(--color-text-on-light-muted);
  line-height: 1.6;
  margin-bottom: 32px;
}
.case-study__divider {
  border: none;
  border-top: 1px dashed var(--color-border-dashed);
  margin: 24px 0;
}
.case-study__meta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;
}
.case-study__meta-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-on-light-muted);
  margin-bottom: 4px;
}
.case-study__meta-value {
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-on-light);
}
.case-study__image {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 16px;
  /* No border, no shadow — clean drop into the card */
}
```

### 5.6 TESTIMONIAL SLIDER CARDS (Advisory Dark Section)

```css
.testimonials-section {
  background: var(--color-bg-dark);
  padding: var(--section-pad-dark) var(--container-padding);
  overflow: hidden;
}
.testimonials-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 48px;
}
.testimonials-nav {
  display: flex;
  gap: 12px;
}
.testimonials-nav__btn {
  width: 48px; height: 48px;
  border-radius: 50%;
  background: var(--color-accent);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 200ms ease, transform 200ms ease;
}
.testimonials-nav__btn:hover {
  background: var(--color-accent-hover);
  transform: scale(1.05);
}
.testimonials-nav__btn svg { color: var(--color-accent-text); }

.testimonial-card {
  width: 300px;
  flex-shrink: 0;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 3/4;
}
.testimonial-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.testimonial-card__overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 24px;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%);
}
.testimonial-card__quote {
  font-size: 17px;
  font-weight: 700;
  color: white;
  line-height: 1.4;
  margin-bottom: 12px;
}
.testimonial-card__name {
  font-size: 14px;
  font-weight: 600;
  color: white;
}
.testimonial-card__role {
  font-size: 13px;
  color: rgba(255,255,255,0.65);
}
/* Slider track */
.testimonials-track {
  display: flex;
  gap: 16px;
  transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

**For NirvanaXJude testimonials — since no real portrait photos of E.J, R.S, T.M exist — use professional portrait photos from Unsplash that match the industry context:**
- E.J (Solar & Roofing Agency): Male, professional, could be in a work site or office context — Unsplash: `https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600`
- R.S (Financial Operations): Professional male, financial context — Unsplash: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600`
- T.M (Coaching Consultant): Male, coaching/office context — Unsplash: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600`

### 5.7 SERVICE CARDS (Advisory Dark Scroll Section — used for "What You Actually Get" on Agencies page)

```css
.services-section {
  background: var(--color-bg-dark);
  padding: var(--section-pad-dark) var(--container-padding);
}
.services-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 64px;
  align-items: start;
}
.services-left { position: sticky; top: 100px; }
.services-left h2 {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 800;
  color: white;
  line-height: 1.1;
  margin-bottom: 20px;
}
.services-left p {
  font-size: 15px;
  color: var(--color-text-on-dark-muted);
  margin-bottom: 32px;
}
.services-cards {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-bottom: 8px;
}
.service-card {
  min-width: 260px;
  scroll-snap-align: start;
  background: var(--color-bg-dark-card);
  border: 1px solid var(--color-border-dark);
  border-radius: 16px;
  overflow: hidden;
  flex-shrink: 0;
}
.service-card__image {
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
}
.service-card__body { padding: 20px; }
.service-card__title {
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
}
.service-card__desc {
  font-size: 14px;
  color: var(--color-text-on-dark-muted);
  line-height: 1.6;
}
```

### 5.8 "MAKE BETTER DECISIONS" CTA SECTION (Advisory — Exact)

```css
.make-decisions-section {
  background: var(--color-bg-dark);
  padding: var(--section-pad-dark) var(--container-padding);
}
.make-decisions-card {
  background: var(--color-bg-dark-section);
  border-radius: 24px;
  padding: 64px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.make-decisions__headline {
  font-size: clamp(32px, 4vw, 44px);
  font-weight: 800;
  color: white;
  line-height: 1.15;
  margin-bottom: 20px;
}
.make-decisions__body {
  font-size: 16px;
  color: var(--color-text-on-dark-muted);
  line-height: 1.7;
  margin-bottom: 40px;
}
.make-decisions__image {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 16px;
}
```

### 5.9 PROCESS STEPS (Advisory "How We Work" Pattern)

```css
.process-section {
  background: var(--color-bg-light);
  padding: var(--section-pad-light) var(--container-padding);
}
.process-layout {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 80px;
  align-items: start;
}
.process-image-sticky {
  position: sticky;
  top: 100px;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 3/4;
  object-fit: cover;
  width: 100%;
}
.process-steps { display: flex; flex-direction: column; }
.process-step {
  padding: 32px 0;
  border-bottom: 1px solid var(--color-border-light);
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 32px;
}
.process-step__label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-on-light-muted);
}
.process-step__number-label {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.process-step__title {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text-on-light);
  margin-top: 6px;
}
.process-step__desc {
  font-size: 15px;
  color: var(--color-text-on-light-muted);
  line-height: 1.7;
  padding-top: 4px;
}
```

### 5.10 TOOL MARQUEE

```css
.marquee-section {
  background: var(--color-bg-dark);
  padding: 48px var(--container-padding);
  overflow: hidden;
}
.marquee-eyebrow { text-align: center; margin-bottom: 40px; }
.marquee-track {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
}
.marquee-inner {
  display: flex;
  gap: 56px;
  animation: marquee 28s linear infinite;
  width: max-content;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.marquee-inner:hover { animation-play-state: paused; }
.marquee-logo {
  height: 20px;
  opacity: 0.35;
  filter: brightness(2) grayscale(1);
  transition: opacity 220ms, filter 220ms;
  flex-shrink: 0;
}
.marquee-logo:hover { opacity: 0.85; filter: brightness(1) grayscale(0); }
```

### 5.11 INTELLIGENCE LAB CARDS (adapted for dark tech theme)

```css
.lab-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.lab-card {
  background: var(--color-bg-dark-card);
  border: 1px solid var(--color-border-dark);
  border-radius: 16px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 0;
  transition: border-color 280ms ease, transform 280ms ease;
}
.lab-card:hover {
  border-color: rgba(201,168,76,0.3);
  transform: translateY(-4px);
}
.lab-card__icon {
  width: 32px; height: 32px;
  color: var(--color-accent);
  margin-bottom: 20px;
  opacity: 0.7;
}
.lab-card__title {
  font-size: 17px;
  font-weight: 700;
  color: white;
  margin-bottom: 6px;
  line-height: 1.3;
}
.lab-card__arch {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-on-dark-muted);
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-border-dark);
}
.lab-card__field-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-on-dark-muted);
  margin-bottom: 4px;
  margin-top: 14px;
}
.lab-card__field-value {
  font-size: 13px;
  color: var(--color-accent);
  font-weight: 500;
  line-height: 1.5;
}
.lab-card__field-value--neutral { color: rgba(255,255,255,0.55); }
.lab-card__btn {
  margin-top: auto;
  padding-top: 24px;
  /* Use .btn-primary style (arrow + text) */
}
```

### 5.12 FOOTER (Advisory Exact Pattern)

```css
.footer {
  background: var(--color-bg-dark);
  padding: 64px var(--container-padding) 32px;
  border-top: 1px solid var(--color-border-dark);
}
.footer-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  padding-bottom: 64px;
  border-bottom: 1px solid var(--color-border-dark);
  margin-bottom: 48px;
}
.footer-brand__logo { margin-bottom: 16px; }
.footer-brand__tagline {
  font-size: 14px;
  color: var(--color-text-on-dark-muted);
  line-height: 1.6;
  max-width: 320px;
  margin-bottom: 32px;
}
.footer-brand__contact-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-on-dark-muted);
  margin-bottom: 6px;
}
.footer-brand__email {
  font-size: 18px;
  font-weight: 600;
  color: white;
  text-decoration: none;
  transition: color 200ms;
}
.footer-brand__email:hover { color: var(--color-accent); }

.footer-subscribe { display: flex; flex-direction: column; justify-content: center; }
.footer-subscribe__label {
  font-size: 20px;
  font-weight: 700;
  color: white;
  line-height: 1.3;
  margin-bottom: 24px;
  max-width: 340px;
}
.footer-subscribe__form {
  display: flex;
  gap: 0;
  border: 1px solid var(--color-border-dark);
  border-radius: 8px;
  overflow: hidden;
}
.footer-subscribe__input {
  flex: 1;
  background: transparent;
  border: none;
  padding: 14px 18px;
  color: white;
  font-size: 14px;
  outline: none;
}
.footer-subscribe__input::placeholder { color: var(--color-text-on-dark-muted); }
.footer-subscribe__btn {
  background: var(--color-accent);
  color: var(--color-accent-text);
  border: none;
  padding: 14px 24px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 200ms;
}
.footer-subscribe__btn:hover { background: var(--color-accent-hover); }

.footer-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 48px;
}
.footer-nav__group-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: white;
  margin-bottom: 16px;
}
.footer-nav__link {
  display: block;
  font-size: 14px;
  color: var(--color-text-on-dark-muted);
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 200ms;
}
.footer-nav__link:hover { color: white; }

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid var(--color-border-dark);
}
.footer-bottom__copy {
  font-size: 13px;
  color: var(--color-text-on-dark-muted);
}
.footer-social { display: flex; gap: 10px; }
.footer-social__btn {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 200ms, transform 200ms;
}
.footer-social__btn:hover {
  background: var(--color-accent-hover);
  transform: scale(1.08);
}
.footer-social__btn svg { color: var(--color-accent-text); width: 16px; }
```

---

## 6. PAGE-BY-PAGE BUILD SPECIFICATION

---

### PAGE 1: HOME (nirvanaxjude.com)

#### SECTION 1 — HERO (Dark, Full-Bleed Photo)

**Background photo:** Two professionals in a meeting — one holding a laptop/tablet, both focused. Warm natural light. Source: `https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800` (founders reviewing data together)

**Overlay:** `--hero-overlay` gradient

**Layout:** Text overlaid bottom-left of photo, max-width ~520px

```
[EYEBROW] ■ CAPITAL INFRASTRUCTURE FOR FOUNDERS

[H1 - white, bold, 72px, tight]:
"Get in front of the right investors,
[NEW LINE - GOLD COLOUR]:
before they close."

[Body - white, 16px, max-width 420px]:
"We map the right investors, land in their inbox, and book the meeting
so you show up to calls, not cold outreach."

[Small text - muted, 14px]:
"Targeted research. Precision outreach. Meetings on your calendar."

[CTA - gold arrow button]:
→  SECURE FUNDING INFRASTRUCTURE

[Logos bottom-right - marquee or static row]:
Notion | HubSpot | Make | n8n | Clay | Apify | Crunchbase

[SCROLL DOWN ↓ - bottom-left, small caps, gold arrow]
```

---

#### SECTION 2 — STATS (Light Background #F4F1EB)

**Eyebrow:** `■ ABOUT N/X/J` (left-aligned)

**Headline (left, 40px, bold, dark text, max-width 620px):**
"We work with founders, agencies, and startups who are building the future of their industry — and need the infrastructure to get there."

**Stats grid (3 cards, white bg):**
- Icon: briefcase outline → **70+** / "Businesses influenced across industries"
- Icon: person/user outline → **12+** / "Startups helped raise capital"
- Icon: clock/time outline → **4 Yrs** / "Supporting startups and agencies"

---

#### SECTION 3 — TOOL MARQUEE (Dark)

**Eyebrow:** `■ BUILT ON THE TOOLS THAT ACTUALLY WORK` (centred)

**Marquee (single row, infinite scroll left):**
Notion → HubSpot → Make → n8n → Clay → Apify → Crunchbase → Instantly → Cal.com → Vapi AI → Twilio → Replicate → Tavily → Claude/Anthropic → [repeat]

---

#### SECTION 4 — REALITY CHECK / PROBLEM-SOLUTION (Light Background)

**Eyebrow:** `■ THE REALITY CHECK` (centred)

**Headline (centred, 52px bold):**
"Why most fundraises feel like screaming into the void."

**Callout stat (centred, standalone):**
```
[Large 72px gold serif number]: 6 months
[Below, 14px muted]: Average time wasted on manual investor searching and pitching on VC sites
```

**Problem/Solution table rows (full-width, on light bg):**
Each row: thin top border, two columns — left (problem, with ✗), right (solution, with ✓ in gold)

Format for each row:
```
[✗ Problem title]                          [✓ Solution title]
[Problem description — muted text]         [Solution description — bold/dark text]
```

Six rows:
1. Time: 6 months gone → Speed: 90 days to 47 meetings
2. Targeting: Pitching investors who spent their fund → Targeting: Only active capital
3. Outreach: Spray-and-pray DMs → Personalisation: Thesis-matched outreach
4. Thesis mismatch: Wrong investors entirely → Objection handling: AI-adapted replies
5. Bandwidth: Fundraising = full-time job → Bandwidth: You step in only for term sheets
6. Feedback: Ghosted, no signal → Feedback loop: Full data on what's landing

**Row hover:** Entire row background shifts from transparent to `rgba(201,168,76,0.04)` — very subtle gold tint

---

#### SECTION 5 — HOW IT WORKS (Light Background — Advisory Process Pattern)

**Eyebrow:** `■ HOW IT WORKS` (centred)

**Headline (centred):** "The 6-Step Investor Process"

**Layout:** Advisory process layout — LEFT: sticky photo, RIGHT: steps list

**LEFT sticky image:**
Photo of a person at a laptop with analytics on screen — professional, focused.
Source: `https://images.unsplash.com/photo-1551434678-e076c223a692?w=800`

**RIGHT steps (advisory STEP 01 format):**
```
STEP  01
Target List
[description text]
[link: app.clay.com/workspace/investors]

——————————————————
STEP  02
Warm-Up
[description text]
[link: linkedin.com/in/yourprofile]

——————————————————
STEP  03
Sniper Execution
[description text]
[link: analytics.instantly.ai/campaigns]

——————————————————
STEP  04
Objection Handling
[description text]
[link: app.instantly.ai/unibox]

——————————————————
STEP  05
The Handshake
[description text]
[link: cal.com/nirvanaxjude/investor-strategy-call]

——————————————————
STEP  06
Iteration
[description text]
[link: analytics.nirvanaxjude.com/iterations]
```

Each step link renders as a small underlined text link in gold colour below the description.

---

#### SECTION 6 — CASE STUDIES / RESULTS (Light Background — Advisory Case Study Cards)

**Eyebrow:** `■ POWERED RESULTS` (centred)

**Headline (centred):** "Startups that worked on their raise. And closed it."

**Pull-quote (centred, italic, muted, max-width 640px):**
"OpenAI, Canva, Anthropic, Ramp, and Rippling use Clay's GTM development environment..." — Clay.com

**Case Study Card — Reflect Orbital:**

LEFT side:
- Badge: `Series A` (small gold pill)
- Company name: **Reflect Orbital** (48px bold)
- Description: "To fund the development and launch of their first orbital mirror satellite, Eärendil-1, to sell sunlight to solar farms after dark."
- Source: `Clay + n8n Outreach Stack` (mono, small, muted)
- [dashed divider]
- Meta grid:
  - ROUND: Series A
  - AMOUNT RAISED: USD 20,000,000 (bold gold)
  - DATE: May 2025
  - LEAD INVESTORS: Lux Capital (Lead)
- [dashed divider]
- CTAs: `→ Verify Report` `→ Reflect Orbital Press` `→ Post-Funding Ops`

RIGHT side image:
Reflect Orbital's satellite/press visual:
`https://cdn.prod.website-files.com/68f145fb8c727e1f6df74df0/68f7d40a9232cb4702d6a6b4_press_1.png`
(This is their official press image from reflectorbital.com — founders Ben Nowack and Tristan Semmelhack)

---

#### SECTION 7 — BEYOND THE RAISE (Light Background — Advisory "Work with people" Pattern)

This replaces the old personal "Architect" section. Uses the advisory **photo grid + features** format.

**Eyebrow:** `■ POST-FUNDING OPS` (centred)

**Headline (centred, 52px bold):**
"Beyond The Raise: Scaling AI Operations"

**Sub-text (centred, max-width 600px):**
"Raising capital is step one. Deploying it efficiently is step two. We serve as your fractional AI infrastructure team, deploying Autonomous Support Agents, Client Onboarding Workflows, and Internal System Automations so your new capital goes into growth, not salaries."

**Photo grid (4-column full-width, like advisory "Work with people" section):**
Four photos of diverse founders/teams at work — business context, warm lighting. Use:
1. `https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500` (team working at laptops)
2. `https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500` (team meeting, reviewing charts)
3. `https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500` (two founders reviewing screen)
4. `https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500` (professional at laptop, focused)

**Below photo grid — split layout (like advisory "How to apply"):**

Left: **"10x"** (large gold 64px) + "Bandwidth for your founding team" (bold, 24px)

Right: 4 feature items in a 2x2 grid:
- Automated SDRs / Scale B2B sales 24/7
- AI Voice Support / Zero wait-time calls
- Dynamic CRMs / Data that works for you
- Content Pipelines / SEO and Social at scale

Each feature item: small gold icon + bold title + muted description, no card background (clean list style)

---

#### SECTION 8 — MAKE BETTER DECISIONS CTA (Dark — Advisory Exact)

This replaces the former "About The Architect" section entirely.

**Layout:** Dark rounded card inside dark section

```
[LEFT - text]:
[EYEBROW] ■ WORK WITH N/X/J

[Headline - white, bold, 44px]:
"Make better decisions
with clarity and confidence."

[Body - muted, 16px]:
"Founders and agencies come to NirvanaXJude to turn
complexity into systems that work — predictably, without
burning out their team or their runway."

[CTA]:
→  SCHEDULE STRATEGY SESSION
(links to cal.com/nirvanaxjude/investor-strategy-call)

[RIGHT - photo]:
Two founders/partners in a warm, focused meeting setting.
Source: `https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800`
(two people in a business conversation, natural light, warm tones)
```

---

#### SECTION 9 — FOOTER

```
[TOP HALF]:
Left:
  N/X/J [logo]
  "Building the AI systems that turn founder decks into funded companies
  — and agencies into ones that can actually deliver."
  [Let's Talk]
  judeolaboboye@gmail.com

Right:
  "Let's craft a custom strategy and build something remarkable together."
  [Email input field] [SUBSCRIBE — gold button]

[BOTTOM NAV - 4 columns]:
SERVICES            LABS                COMPANY             CONNECT
Investor Outreach   Intelligence Lab    About               Twitter/X
AI Operations       Voice Receptionist  Recent Projects     Instagram
Agency Partnership  ROI Calculator      Client Inquiries    LinkedIn
                    Maps Lead Scraper

[VERY BOTTOM BAR]:
© 2026 NirvanaXJude. All rights reserved.        [■ FB] [■ X] [■ LI] [■ YT]
AI systems for founders raising capital and agencies that need to deliver it.
```

---

### PAGE 2: FOR AGENCIES (nirvanaxjude.com/agencies)

#### SECTION 1 — HERO (Dark, Full-Bleed Photo)

**Background photo:** Agency team in a collaborative session — mixed professionals reviewing work on screens. Warm office. Source: `https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800`

**Overlay:** `--hero-overlay`

```
[EYEBROW] ■ PARTNER WITH THE ARCHITECT

[H1 - white, bold, 68px]:
"The technical partner
your agency can sell,
[GOLD LINE]: without hiring a technical team."

[Body]:
"Your clients are asking for AI. Most agencies can't deliver it.
I'm the build layer that changes that."
"You handle the client relationship. I build what you promised."

[CTA]:
→  DISCUSS PARTNERSHIP

[Small badge]:
White-Label Partners: 12+ active agency deployments
```

---

#### SECTION 2 — WHAT YOU ACTUALLY GET (Light Background — Advisory Services Scroll)

**Eyebrow:** `■ HOW THE PARTNERSHIP WORKS` (centred)

**Headline (centred, 52px bold):** "What you actually get."

**Layout:** Advisory services layout — LEFT text block (sticky), RIGHT horizontally scrollable cards

LEFT sticky block:
- "Strategic services for your clients."
- "We help agency owners deliver what their clients are asking for — without hiring anyone new."
- `→ VIEW ALL SERVICE` button

RIGHT scrollable cards (3 cards, advisory dark card style with photo):

Card 1 — No new hires:
- Photo: `https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500` (person at laptop, clean desk)
- Title: No new hires
- Desc: "I slot in behind your agency brand. You scope the project, I build it in n8n or Make. Your client never knows I exist."

Card 2 — Proven systems only:
- Photo: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500` (analytics dashboard)
- Title: Proven systems only
- Desc: "Every build I deploy has a measurable outcome: lower cost per acquisition, faster lead response, or fewer churned clients."

Card 3 — Built to actually get used:
- Photo: `https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=500` (team handover, SOPs)
- Title: Built to actually get used
- Desc: "I write the SOPs alongside the build, so your client's team knows how to run the system from day one."

---

#### SECTION 3 — TESTIMONIALS (Dark — Advisory Testimonial Slider)

**Eyebrow:** `■ VERIFIABLE PROOF` (top-left)

**Headline:** "What partners say." (left, bold, 48px)

**Sub:** "Here's what they shared about working with the system."

**Prev/Next gold circle buttons** (top right)

**Slider — 3 portrait photo cards:**

Card 1 — E.J, Solar & Roofing Agency:
- Photo: `https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400`
- Quote: "He stripped down our messy Zapier web and built a monolithic n8n engine. Our lead response time went from 3 hours to 15 seconds."
- Name: E.J | Role: Solar & Roofing Agency

Card 2 — R.S, Financial Operations:
- Photo: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400`
- Quote: "Jude built it so cleanly that the client's team just... uses it. They treat the AI like a colleague, not a tool they have to babysit."
- Name: R.S | Role: Financial Operations

Card 3 — T.M, Coaching Consultant:
- Photo: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400`
- Quote: "He doesn't just build the system, he understands how the marketing has to work around it. That's rare."
- Name: T.M | Role: Coaching Consultant

---

#### SECTION 4 — TALK IS CHEAP / LAB CTA (Dark)

```
[Centre-aligned]

[Gold icon: database/layers - 48px, centred]

[Headline - white, bold, 48px, centred]:
"Talk is cheap."

[Body - muted, 18px, centred, max-width 560px]:
"I've built 8 live demos you can test right now — from an AI voice booking
agent to a CRM triage engine. See how the systems actually behave
before you commit to anything."

[CTA - gold arrow button, centred]:
→  ENTER THE INTELLIGENCE LAB
```

---

#### SECTION 5 — FOOTER (same as homepage)

---

### PAGE 3: INTELLIGENCE LAB (nirvanaxjude.com/lab)

#### SECTION 1 — HERO (Dark)

No full-bleed photo here — keep it clean and technical.

```
[EYEBROW - centred] ■ INTELLIGENCE LAB

[Headline - centred, white, 80px bold]:
"Live Artifacts."

[Sub - centred, muted, 18px, max-width 520px]:
"Test the deterministic engines powering our partner agencies.
Live deployments, zero hallucinations."
```

Background: `--color-bg-dark` + a very subtle radial gold glow: `radial-gradient(ellipse 800px 400px at 50% 20%, rgba(201,168,76,0.05), transparent)`

---

#### SECTION 2 — TOOL CARDS GRID (Dark)

**4-column grid, 8 cards** (see component 5.11 — lab card)

All 8 tools with exact content from current site, in this order:
1. The Voice Receptionist
2. The 'Insta-Strategy' Roadmap Generator
3. Notion CRM Architect
4. AI Product Generator
5. Content Creator's Friend
6. Google Maps Scraper
7. ROI Leak Calculator
8. Zero-Hallucination RAG

Each card entrance: staggered fadeUp — 0ms, 60ms, 120ms... 420ms

---

#### SECTION 3 — BYPASS CTA (Dark)

```
[Centred]

[Headline - white, Instrument Serif, italic, 64px]:
"Bypass the demos.
Build the engine."

[CTA - large gold arrow button]:
→  REQUEST YOUR OWN SYSTEM
(links to cal.com/nirvanaxjude/investor-strategy-call or existing href)
```

---

#### SECTION 4 — FOOTER (same)

---

## 7. ANIMATION SYSTEM (Matching Advisory Interactions)

### 7.1 Scroll Reveal (All sections)
```javascript
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
```
```css
[data-reveal] {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 700ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
}
[data-reveal].revealed { opacity: 1; transform: translateY(0); }
[data-reveal][data-delay="1"] { transition-delay: 100ms; }
[data-reveal][data-delay="2"] { transition-delay: 200ms; }
[data-reveal][data-delay="3"] { transition-delay: 300ms; }
[data-reveal][data-delay="4"] { transition-delay: 400ms; }
[data-reveal][data-delay="5"] { transition-delay: 500ms; }
```

### 7.2 Navbar Scroll
```javascript
const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });
```
```css
.navbar { position: fixed; top: 0; width: 100%; z-index: 999;
  background: transparent; transition: background 300ms, border 300ms; }
.navbar.scrolled {
  background: rgba(12,11,8,0.92);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
```

### 7.3 Stat Counter
```javascript
function countUp(el, target, suffix = '') {
  const duration = 1800;
  const start = performance.now();
  const update = now => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = Math.floor(eased * parseFloat(target)) + suffix;
    if (t < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}
// Trigger with IntersectionObserver on .stat-card__number elements
// data-target="70" data-suffix="+"
```

### 7.4 Testimonial Slider
```javascript
let currentSlide = 0;
const track = document.querySelector('.testimonials-track');
const cards = document.querySelectorAll('.testimonial-card');
const cardWidth = cards[0].offsetWidth + 16; // width + gap

document.querySelector('.nav-next').addEventListener('click', () => {
  currentSlide = Math.min(currentSlide + 1, cards.length - 3);
  track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
});
document.querySelector('.nav-prev').addEventListener('click', () => {
  currentSlide = Math.max(currentSlide - 1, 0);
  track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
});
```

### 7.5 Process Steps Active State
```javascript
// Update which step is "active" as user scrolls past each
const steps = document.querySelectorAll('.process-step');
const stepObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('active', entry.isIntersecting);
  });
}, { threshold: 0.6 });
steps.forEach(s => stepObs.observe(s));
```
```css
.process-step { opacity: 0.45; transition: opacity 300ms; }
.process-step.active { opacity: 1; }
.process-step.active .process-step__title { color: var(--color-text-on-light); }
```

### 7.6 Mobile Menu (Full-Screen Clip-Path)
```css
.mobile-nav {
  position: fixed; inset: 0;
  background: var(--color-bg-dark);
  z-index: 998;
  clip-path: circle(0% at calc(100% - 36px) 36px);
  transition: clip-path 600ms cubic-bezier(0.16, 1, 0.3, 1);
  display: flex; flex-direction: column;
  justify-content: center; padding: 48px;
}
.mobile-nav.open { clip-path: circle(150% at calc(100% - 36px) 36px); }
.mobile-nav__link {
  font-size: 40px; font-weight: 800;
  color: white; text-decoration: none;
  opacity: 0; transform: translateX(-30px);
  transition: opacity 300ms ease, transform 300ms ease, color 200ms;
  display: block; margin-bottom: 24px;
}
.mobile-nav.open .mobile-nav__link { opacity: 1; transform: translateX(0); }
.mobile-nav.open .mobile-nav__link:nth-child(1) { transition-delay: 200ms; }
.mobile-nav.open .mobile-nav__link:nth-child(2) { transition-delay: 280ms; }
.mobile-nav.open .mobile-nav__link:nth-child(3) { transition-delay: 360ms; }
.mobile-nav__link:hover { color: var(--color-accent); }
```

---

## 8. RESPONSIVENESS

| Breakpoint | Label |
|---|---|
| 0–767px | Mobile |
| 768–1199px | Tablet |
| 1200px+ | Desktop |

### Per-Section Mobile Rules

| Section | Mobile Behaviour |
|---|---|
| Navbar | Logo left, hamburger right, clip-path fullscreen overlay |
| Hero | Text bottom-left, smaller font (clamp handles it), photo still full-bleed |
| Stats | 1-column stack on mobile, 3-col on tablet+ |
| Marquee | Same — works at any width |
| Problem/Solution | Single column — problem then solution per item, stacked |
| Process steps | Remove sticky. Stack — image at top, steps below |
| Case study cards | Single column, image stacks below text |
| Testimonial slider | Show 1 card at a time on mobile |
| Photo grid (Post-Funding) | 2×2 grid on mobile |
| Lab cards | 1-col mobile, 2-col tablet, 4-col desktop |
| Make Decisions CTA | Single column, image below text |
| Footer | Stack brand block, then nav columns 2-col, then bottom bar |

---

## 9. IMAGE ASSET LIST WITH DIRECT URLs

| Location | Description | URL |
|---|---|---|
| Home hero | Two professionals in meeting, warm | `https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800` |
| Process sticky | Person at laptop, analytics | `https://images.unsplash.com/photo-1551434678-e076c223a692?w=800` |
| Case study: Reflect Orbital | Official press image | `https://cdn.prod.website-files.com/68f145fb8c727e1f6df74df0/68f7d40a9232cb4702d6a6b4_press_1.png` |
| Beyond The Raise photo 1 | Team at laptops | `https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500` |
| Beyond The Raise photo 2 | Team reviewing charts | `https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500` |
| Beyond The Raise photo 3 | Two founders at screen | `https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500` |
| Beyond The Raise photo 4 | Professional at laptop | `https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500` |
| Make Better Decisions | Two in business meeting | `https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800` |
| Agencies hero | Team collaboration session | `https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800` |
| Agencies card 1 | Person at laptop | `https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500` |
| Agencies card 2 | Analytics dashboard | `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500` |
| Agencies card 3 | Team handover | `https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=500` |
| Testimonial — E.J | Professional male | `https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400` |
| Testimonial — R.S | Professional male 2 | `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400` |
| Testimonial — T.M | Professional male 3 | `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400` |

---

## 10. IMPROVEMENT CHECKLIST (vs. Current Site)

| Issue | Fix |
|---|---|
| ❌ Personal photo of Jude appears on home and agencies page | ✅ Removed — replaced with contextual human photography throughout |
| ❌ All sections same dark background — no alternation | ✅ Strict dark/light alternating pattern (see Section 4) |
| ❌ Stats are small and buried | ✅ Prominent white cards on light bg — large bold numbers with icons |
| ❌ Hero text is small, doesn't dominate | ✅ clamp(52px, 6.5vw, 80px) + tight line-height |
| ❌ Eyebrow labels are just text — no visual anchor | ✅ Gold ■ dot + uppercase label (exact advisory pattern) |
| ❌ CTA buttons are generic pill shapes | ✅ Gold circle + arrow icon + uppercase text (advisory arrow-button pattern) |
| ❌ Testimonials are small text cards with initials | ✅ Full portrait photo cards with quote overlaid at bottom + slider with gold nav buttons |
| ❌ No photo context — site feels abstract | ✅ Human photography in every section: hero, process, case study, post-funding, CTA |
| ❌ Case studies are basic text boxes | ✅ Advisory-style large cards with dashed dividers, metadata grid, image right |
| ❌ No scroll entrance animations | ✅ data-reveal system with staggered delays (Section 7.1) |
| ❌ No section rhythm — heavy-heavy-heavy | ✅ Dark-light-dark-light alternation creates natural rhythm and breathing room |
| ❌ Process steps have no visual anchor | ✅ Sticky left image + step list with active state opacity changes |
| ❌ Footer lacks hierarchy | ✅ Two-zone footer: subscribe zone + nav columns + social gold circles |
| ❌ Mobile menu is basic | ✅ Full-screen clip-path reveal animation |
| ❌ Lab page cards are flat | ✅ Structured hierarchy: icon → title → mono arch tag → divider → fields → button |

---

## 11. DESIGN PHILOSOPHY (For Antigravity)

The five principles from advisory-agency.webflow.io that must be applied to NirvanaXJude:

1. **Dark/light alternation is the rhythm.** Real agency sites breathe. Two consecutive dark sections = suffocating. Two consecutive light sections = boring. The alternation is the design.

2. **The eyebrow dot is everywhere.** Every section — without exception — has a small coloured square + uppercase label above the headline. This single element unified the entire advisory template.

3. **Photos of people make the offer feel real.** The advisory site has no product screenshots. It has people — in meetings, reviewing work, collaborating. This is what makes founders and agency owners think "these are my people." NirvanaXJude needs this immediately.

4. **Typography is bold and confident.** 800 weight. Tight line-height. Big at the top, smaller as you go down. The hierarchy is unmistakable. Fancy fonts are secondary to strong weight.

5. **Gold is lime green.** Every place the advisory template uses lime green (#C8F04D) — arrow buttons, eyebrow dots, navigation buttons, footer social icons, CTA backgrounds — NirvanaXJude uses gold (#C9A84C). Same function. Different brand.

---

*End of NIRVANAXJUDE_REDESIGN_V2.md*
*Add this file to the Antigravity project alongside the original .md, then send the Chat Prompt (next document) to trigger the redesign.*
