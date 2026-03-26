# BRAND.md — Ildhu Visual Identity & Design System
## For use by AI assistants and developers working on this codebase

---

## Brand Name

**Ildhu** (Norwegian: passionate zeal, fire in the mind — from *ild* (fire) + *hu* (mind/spirit))

Do NOT display the meaning next to the name in the UI. The name stands alone. The meaning is for conversation, not interface chrome.

---

## Brand Positioning

Ildhu is a thought leadership and consulting brand helping leaders make their organizations ready for exponential growth. The core message is:

> "The technology revolution is here. The human one is just beginning."

Communication is **human-first**. AI is the implicit context, never the headline. The protagonist is always the leader, the team, the organization — not the technology. Avoid putting "AI" front and center in headlines, CTAs, or section labels.

---

## Core Aesthetic

**Premium dark-mode editorial.** Serious, forward-looking, high-trust. This is not a SaaS dashboard — it's a strategic thesis. Think ngrok.com, not Notion.

### Key Principles
1. **Dark background = authority.** Let the darkness do the work.
2. **Color = signal, not decoration.** Each section earns one color.
3. **Serif headlines = gravitas.** This is ideas worth reading.
4. **Restraint is premium.** The less color you use, the more each accent matters.
5. **Diagrams > bullet points.** Show the architecture, don't list it.

---

## Color System

### Backgrounds
| Token | Hex | Usage |
|---|---|---|
| `--bg-deep` | `#080808` | Page background. Always dark, regardless of OS color scheme. |
| `--bg-card` | `#121212` | Cards, input fields, elevated surfaces. |
| `--bg-card-hover` | `#181818` | Card hover state. |

### Borders
| Token | Value | Usage |
|---|---|---|
| `--border-subtle` | `rgba(255,255,255,0.06)` | Dividers, card borders, section separators. |
| `--border-hover` | `rgba(255,255,255,0.12)` | Border on hover. |

### Text
| Token | Hex | Usage |
|---|---|---|
| `--text-primary` | `#FFFFFF` | Headlines, bold body text. |
| `--text-secondary` | `#999999` | Body text, descriptions. |
| `--text-muted` | `#555555` | Labels, captions, inactive states. |

### Brand Accent — Ember
| Token | Hex | Usage |
|---|---|---|
| `--ember` | `#FF6B35` | Primary brand color. Logo pulse, CTA highlights, hero gradient start. |
| `--ember-soft` | `#FF8F5E` | Lighter ember for gradients. |

### Section Accent Palette
Each section or concept area gets ONE accent color. Never mix accents within a section.

| Token | Hex | Concept Mapping |
|---|---|---|
| `--accent-emerald` | `#34D399` | Strike Teams, execution, precision, safe states |
| `--accent-gold` | `#FACC15` | Scouts, exploration, speed, warning states |
| `--accent-magenta` | `#FF4D6A` | The Constitution, Taste Layer, intent |
| `--accent-violet` | `#A855F7` | Correctness shift, specification, depth |
| `--accent-cyan` | `#00C8FF` | Dark Factory, autonomy, coming soon |
| `--accent-coral` | `#FF6B6B` | Coordination crisis, danger states, math warnings |

### Gradient (Hero Only)
The multi-color gradient is used ONLY on the hero headline accent line. Nowhere else.

```css
background: linear-gradient(90deg,
  var(--ember) 0%,
  var(--ember-soft) 30%,
  var(--accent-gold) 55%,
  var(--accent-emerald) 80%,
  var(--accent-cyan) 100%
);
```

---

## Typography

### Fonts
| Role | Font | Google Fonts Import |
|---|---|---|
| Headlines, brand name, display text | **Libre Baskerville** | `family=Libre+Baskerville:ital,wght@0,400;0,700;1,400` |
| Body, UI, labels, buttons | **Inter** | `family=Inter:wght@300;400;500;600` |

### CSS Variables
```css
--serif: 'Libre Baskerville', Georgia, serif;
--sans: 'Inter', -apple-system, sans-serif;
```

### Hierarchy Rules
- **Headlines:** Libre Baskerville, 400 weight, large sizes. `letter-spacing: -0.015em`. Never bold — the serif does the work.
- **Section labels:** Inter, 600 weight, `0.18em` letter-spacing, uppercase, small (`0.65rem`). Colored with the section's accent.
- **Body text:** Inter, 300 weight, `--text-secondary` color, `line-height: 1.85`.
- **Bold within body:** Use `500` weight and `--text-primary` color for key phrases. Sparingly.
- **Buttons:** Inter, 600 weight, uppercase, `0.06em` letter-spacing, `0.8rem`.

### Font Sizes (Desktop → Mobile)
| Element | Desktop | Mobile |
|---|---|---|
| Hero headline | `clamp(2.8rem, 6.5vw, 5.2rem)` | Clamp handles it; floors at `2.2rem` |
| Section headline | `clamp(1.9rem, 3.8vw, 3rem)` | Floors at `1.7rem` in media query |
| Body text | `1rem` | `0.92rem` |
| Section label | `0.65rem` | `0.65rem` (unchanged) |

---

## Component Patterns

### Cards
- Background: `--bg-card`
- Border: `1px solid var(--border-subtle)`
- Border radius: `14px`
- Padding: `44px 36px` (desktop), `32px 24px` (mobile)
- Hover: `border-color: var(--border-hover)`, `translateY(-3px)`
- Glow effect: Absolute-positioned circle, `filter: blur(90px)`, `opacity: 0.12` → `0.2` on hover. Uses the section accent color.

### Buttons
- **Primary:** White background, dark text. Hover: `translateY(-2px)` + subtle box-shadow.
- **Ghost:** Transparent background, `--border-subtle` border, `--text-secondary` text. Hover: brighter border and text.

### Dividers
- Full-width `1px` line using `--border-subtle`.
- Max-width matches content area (`1120px`).

### Section Layout
- Max-width: `1120px`, centered.
- Padding: `128px 24px` (desktop), `80px 20px` (mobile).
- Each section has a label (colored, uppercase), headline (serif), body (sans, secondary), and a visual element.

### Intent Layer List
- Stacked rows separated by `1px` gaps.
- `--bg-card` background per row.
- Hover: `--bg-card-hover`.
- Active/highlighted row: Left border accent + tinted background.

### Math Grid
- CSS grid, `repeat(3, 1fr)` desktop → `1fr` mobile.
- `1px` gap with `--border-subtle` background showing through.
- Each cell has a large serif number colored by severity (emerald/gold/coral).

---

## Dark Mode Enforcement

This brand is ALWAYS dark. Never allow light mode to override.

```html
<meta name="color-scheme" content="dark">
```

```css
html, body, :root {
  background: #080808 !important;
  background-color: #080808 !important;
  color-scheme: dark !important;
}

@media (prefers-color-scheme: light) {
  html, body, :root {
    background: #080808 !important;
    background-color: #080808 !important;
    color: #ffffff !important;
  }
}
```

All sections, the hero, CTA, nav, and footer must have explicit `background-color: #080808`. Do not rely on inheritance alone — some mobile browsers and embedded webviews override transparent backgrounds.

---

## Animation Patterns

### Scroll Reveal
Elements with `.reveal` class start at `opacity: 0; transform: translateY(28px)` and transition to visible when entering viewport via IntersectionObserver (`threshold: 0.12`).

### Hero Stagger
Hero elements use `animation: fadeUp` with increasing delays (0.2s, 0.4s, 0.6s, 0.8s) for a cascading entrance.

### Micro-interactions
- Cards: `translateY(-3px)` on hover with `0.4s` ease.
- Buttons: `translateY(-2px)` on hover.
- Intent layer arrows: `translateX(4px)` + color change on hover.
- Nav dot: Pulsing ember glow (`box-shadow` animation).

---

## Responsive Breakpoints

Single breakpoint: `max-width: 768px`.

Key mobile overrides:
- All grids collapse to single column.
- Hero font size drops to `2.2rem`.
- Section padding reduces to `80px 20px`.
- Cards reduce padding to `32px 24px`.
- Buttons stack vertically at full width (`max-width: 280px`).
- Thesis orbital visual is hidden.
- Footer stacks vertically.
- `overflow: hidden` on hero, sections, and CTA to clip glow effects.

---

## Voice & Tone for UI Copy

- **Human-first.** The protagonist is always the leader or the organization, not the technology.
- **AI is implicit.** Don't put "AI" in headlines or CTAs. The technology is the weather; the human response is the story.
- **Confident but warm.** This isn't cold consulting speak. It's a practitioner who cares.
- **Short sentences.** Punchy. Let the serif font carry the weight.
- **Ambition over efficiency.** Never frame the value as "do more with less." Frame it as "pursue what was previously impossible."

---

*Last updated: March 2026*