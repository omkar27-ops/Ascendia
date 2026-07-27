# Ascendia Design System

This document serves as the single source of truth for the Ascendia Visual Design System. It dictates the foundational rules for the "Atmospheric Ascension" theme before any UI implementation begins. All CSS, Tailwind configurations, and component logic must inherit strictly from these documented tokens and principles.

---

## 1. Brand Language

Before defining tokens, we must define the emotional filter through which all design decisions are evaluated. The Ascendia brand language is:

- **Calm**: Never loud, never cluttered, never desperate for attention.
- **Confident**: Relying on space, restraint, and typography rather than gimmicky illustrations.
- **Purposeful**: Every pixel, animation, and line of copy has a strategic reason to exist.
- **Spacious**: Using massive whitespace to create a feeling of luxury and deep thought.
- **Editorial**: Treating layouts like a high-end magazine rather than a SaaS dashboard.
- **Intelligent**: Exhibiting deep strategy.
- **Cinematic**: Motion should support storytelling rather than merely attract attention. 

*If a design decision conflicts with these principles, it is rejected.*

---

## 2. CSS Variable Naming Convention

To ensure scalability and consistency across the codebase, we enforce a strict naming convention for all CSS variables.

**Format:** `var(--[category]-[property]-[variant])`

**Examples:**
- Colors: `var(--color-bg-primary)`, `var(--color-text-secondary)`, `var(--color-brand-azure)`
- Spacing: `var(--spacing-md)`, `var(--spacing-3xl)`
- Typography: `var(--font-family-heading)`, `var(--font-size-h1)`
- Radius: `var(--radius-md)`, `var(--radius-full)`

---

## 3. Colors & Surfaces

The "Atmospheric Void" theme relies on extreme restraint. Dark mode is enforced by default. The depth of the background makes the brand gradients feel highly deliberate and premium.

### Backgrounds (The Void)
| Token | Variable | Value | Purpose |
| :--- | :--- | :--- | :--- |
| **Primary Base** | `--color-bg-primary` | `#030303` | The absolute infinite background. |
| **Surface** | `--color-bg-surface` | `rgba(255, 255, 255, 0.03)` | Base for glassmorphic cards and panels. |

### Typography
| Token | Variable | Value | Purpose |
| :--- | :--- | :--- | :--- |
| **Text Primary** | `--color-text-primary` | `#F4F4F5` | Main headings, paragraph text. High contrast but off-white to prevent eye strain. |
| **Text Secondary** | `--color-text-secondary`| `#A1A1AA` | Supporting copy, metadata, captions. |
| **Text Muted** | `--color-text-muted` | `#52525B` | Placeholder text, disabled states. |

### Brand Accent Review & Selection
Before locking the final accent colors, we explored three restrained, premium directions:
1. **Emerald & Teal**: Represents growth and wealth, but leans too heavily into generic B2B fintech territory.
2. **Gold & Bronze**: Signifies luxury, but can feel dated, traditional, and lacks technological edge.
3. **Azure & Ultraviolet (Selected)**: Bridges the gap between deep technological intelligence (Azure) and high-end creativity (Ultraviolet). It feels modern, celestial (tying perfectly into the "Atmospheric Ascension" and rocket motifs), and is highly original without relying on fleeting trends. It ages beautifully against pure black.

### Brand Accents (The Ascension Glow)
Used exclusively for hover states, primary CTAs, and subtle volumetric lighting.
| Token | Variable | Value | Purpose |
| :--- | :--- | :--- | :--- |
| **Azure (Start)** | `--color-brand-azure` | `#60A5FA` | The cool start of the gradient glow. |
| **Ultraviolet (End)**| `--color-brand-ultra` | `#C084FC` | The vibrant end of the gradient glow. |

### Borders
| Token | Variable | Value | Purpose |
| :--- | :--- | :--- | :--- |
| **Subtle** | `--color-border-subtle` | `rgba(255, 255, 255, 0.08)` | Dividers, static card borders. |
| **Interactive**| `--color-border-hover` | `rgba(255, 255, 255, 0.2)` | Hover states for ghost buttons or panels. |

### Opacity Scale
Reusable opacity tokens for overlays, states, and subtle visual hierarchy.
| Token | Variable | Value | Purpose |
| :--- | :--- | :--- | :--- |
| **5%** | `--opacity-5` | `0.05` | Barely visible; used for subtle row hovers or minimal panel backgrounds. |
| **10%** | `--opacity-10` | `0.10` | Active states for buttons or list items. |
| **20%** | `--opacity-20` | `0.20` | Soft dividers or disabled button backgrounds. |
| **40%** | `--opacity-40` | `0.40` | Disabled text or icon states. |
| **60%** | `--opacity-60` | `0.60` | Secondary text overlays on complex backgrounds. |
| **80%** | `--opacity-80` | `0.80` | High emphasis overlays or reading pane backgrounds. |

### Blur Scale
Defined blur tokens for the glassmorphism layering system.
| Token | Variable | Value | Purpose |
| :--- | :--- | :--- | :--- |
| **XS** | `--blur-xs` | `4px` | Subtle softening behind small badges or tags. |
| **SM** | `--blur-sm` | `8px` | Tooltips, dropdown menus, and small floating elements. |
| **MD** | `--blur-md` | `12px` | Standard cards and sticky navigation bars. |
| **LG** | `--blur-lg` | `24px` | Large structural panels (primary Glassmorphism base). |
| **XL** | `--blur-xl` | `40px` | Hero background volumetric glows or heavy modal backdrops. |

---

## 4. Typography

Typography does the heavy lifting in establishing the premium agency aesthetic.

### Typefaces
1. **Heading Typeface**: **Outfit**
   - *Variable*: `--font-family-heading`
   - *Characteristics*: Geometric, confident, highly structural. Used for H1, H2, H3.
   - *Tracking*: `-0.02em` (Tight).
2. **Body Typeface**: **Inter**
   - *Variable*: `--font-family-sans`
   - *Characteristics*: Neo-grotesque, hyper-legible. Used for paragraphs and UI components.
   - *Line Height*: `1.6` (Loose, breathable).

### Font Size Scale
- **xs**: `0.75rem` (12px)
- **sm**: `0.875rem` (14px)
- **base**: `1rem` (16px)
- **lg**: `1.125rem` (18px)
- **xl**: `1.25rem` (20px)
- **2xl**: `1.5rem` (24px) - H3
- **3xl**: `1.875rem` (30px)
- **4xl**: `2.25rem` (36px) - H2
- **5xl**: `3rem` (48px)
- **6xl**: `3.75rem` (60px) - H1 (Desktop)

---

## 5. Layout Foundations

### Responsive Breakpoints
The layout adapts gracefully, prioritizing a fluid experience over rigid snapping.
- **Mobile** (`sm`): `>= 640px` - Base mobile view. Stacked content.
- **Tablet** (`md`): `>= 768px` - Introduction of multi-column layouts (e.g., 2-col grids).
- **Laptop** (`lg`): `>= 1024px` - Primary desktop layout begins. Hover interactions enabled.
- **Desktop** (`xl`): `>= 1280px` - Expanded spacing, optimal for wide editorial layouts.
- **Large Desktop** (`2xl`): `>= 1536px` - Cinematic scale, maximum container widths applied.

### Container Widths
| Token | Variable | Value | Purpose |
| :--- | :--- | :--- | :--- |
| **Reading Width** | `--container-reading` | `65ch` | Optimal line length for long-form text (articles, case study body). |
| **Content Width** | `--container-content` | `800px` | Focused, single-column sections (forms, centered callouts). |
| **Standard** | `--container-standard` | `1200px` | Standard grid for Services, Process, and general layouts. |
| **Wide** | `--container-wide` | `1440px` | Expansive layouts, asymmetric Featured Work grids. |
| **Full Width** | `--container-full` | `100%` | Hero sections, edge-to-edge cinematic bands, massive background imagery. |

### Spacing Scale
We utilize a strict **8pt** linear scale for component-level spacing, extending to an exponential scale for macro-level architectural spacing (section gaps) to support the "cinematic rhythm."

| Token | Variable | Value (px/rem) | Purpose |
| :--- | :--- | :--- | :--- |
| **2xs** | `--spacing-2xs` | `4px / 0.25rem` | Inner-component nudges. |
| **xs** | `--spacing-xs` | `8px / 0.5rem` | Icon to text spacing. |
| **sm** | `--spacing-sm` | `16px / 1rem` | Standard padding (buttons, inputs). |
| **md** | `--spacing-md` | `24px / 1.5rem` | Container inner padding. |
| **lg** | `--spacing-lg` | `32px / 2rem` | Component to component spacing. |
| **xl** | `--spacing-xl` | `64px / 4rem` | Minor section spacing. |
| **2xl** | `--spacing-2xl` | `128px / 8rem` | Standard vertical section gap. |
| **3xl** | `--spacing-3xl` | `240px / 15rem` | "Cinematic Pause" gaps (e.g., around Growth Mindset). |

---

## 6. Radius Scale

Corners define the "softness" of the brand. Given the strict, confident geometry of Outfit, the radii should be slightly tighter than standard SaaS defaults, avoiding excessive bubble-like roundness.

| Token | Variable | Value | Purpose |
| :--- | :--- | :--- | :--- |
| **Sm** | `--radius-sm` | `4px` | Small UI elements (checkboxes, tags). |
| **Md** | `--radius-md` | `8px` | Standard UI components (buttons, small cards). |
| **Lg** | `--radius-lg` | `16px` | Large structural panels (Featured Work blocks). |
| **Full** | `--radius-full` | `9999px` | Badges, avatars, pill buttons. |

---

## 7. Shadows & Layering

### Shadows & Elevation
In a dark mode "Atmospheric" design system, traditional drop shadows appear muddy. Elevation is primarily handled through **Borders**, **Background Blurs**, and **Z-Index**. Drop shadows are used exclusively as glowing accents, not structural depth.

- **Elevation 1 (Cards)**: `backdrop-filter: blur(var(--blur-lg))` + `1px solid var(--color-border-subtle)`.
- **Elevation 2 (Hover/Active)**: The border transitions to `var(--color-border-hover)`, the element translates upward slightly (Y-axis), but *no drop shadow is added*.
- **The Glow (Primary Action)**: Buttons or critical focal points emit a subtle radial shadow using the Brand Accent colors (`box-shadow: 0 0 24px rgba(96, 165, 250, 0.2)`).

### Layering System (Z-Index Scale)
To prevent collision and maintain predictable stacking contexts, strict Z-Index tokens are enforced.
| Layer | Variable | Value | Purpose |
| :--- | :--- | :--- | :--- |
| **Base** | `--z-base` | `0` | Standard page content. |
| **Sticky Elements**| `--z-sticky` | `10` | Sticky section headers, sidebars. |
| **Navigation** | `--z-nav` | `40` | Main global navigation bar. |
| **Dropdown** | `--z-dropdown` | `50` | Select menus, popovers. |
| **Overlay** | `--z-overlay` | `90` | Darkened backdrops for modals. |
| **Modal** | `--z-modal` | `100` | Modal dialogs (centered or drawers). |
| **Toast** | `--z-toast` | `110` | Snackbars, temporary notifications. |
| **Tooltip** | `--z-tooltip` | `120` | Tooltips (must always be on top). |

---

## 8. Motion Principles

Motion must feel **cinematic, deliberate, and vertical (Ascension)**.

### Motion Philosophy
1. **Tension & Release**: Avoid snappy, aggressive physics (no heavy springs). Easing should be smooth and dramatic.
   - *Default Easing*: `cubic-bezier(0.2, 0.8, 0.2, 1)` (Swift out, slow deliberate settle).
2. **Verticality**: Entrances (scroll reveals, hovers) should predominantly move upward (`translateY`) to subconsciously reinforce the "Ascendia" growth motif.
3. **Subtlety**: Glows and light trails should pulse or shift infinitely, but at an extremely slow, imperceptible pace.

### Transition Duration Scale
| Speed | Variable | Value | Purpose |
| :--- | :--- | :--- | :--- |
| **Instant** | `--duration-instant` | `75ms` | Micro-interactions (checkbox toggles, fast color swaps). |
| **Fast** | `--duration-fast` | `150ms` | Standard hover states on buttons and links. |
| **Standard** | `--duration-standard`| `300ms` | State changes (dropdown opens, accordion expands). |
| **Slow** | `--duration-slow` | `500ms` | Complex component reveals (staggered card entrances). |
| **Cinematic** | `--duration-cinematic`| `1000ms`| Hero animations, page transitions, dramatic storytelling reveals. |

---

## 9. Iconography

- **Style**: Minimalist, geometric, thin-line (1.5px stroke).
- **Weight**: Uniform line weights. No fills.
- **Library Reference**: Lucide React or Phosphor Icons (Light weight).
- **Usage**: Icons should never overpower the typography. They act as quiet navigational aids.

---

## 10. Component Philosophy

1. **Tokens Over Arbitrary Values**: UI components must strictly consume CSS variables via Tailwind configurations (e.g., `text-primary`, `bg-surface`, `border-subtle`). Hardcoded arbitrary values (`w-[321px]`) are strictly forbidden unless absolutely necessary for a one-off graphical positioning.
2. **Composition over Monoliths**: Complex UI (like a Service Card) should be built via composition (`<Card>`, `<CardHeader>`, `<CardContent>`) rather than a single monolithic component with a massive props API.
3. **Encapsulated Complexity**: Tailwind classes that create specific aesthetic combinations (e.g., Glassmorphism) must be encapsulated into reusable React components rather than repeated endlessly.

---

## 11. Accessibility Principles

Premium design does not sacrifice accessibility.

1. **Contrast Ratios**: The use of `#F4F4F5` on `#030303` ensures passing WCAG AAA contrast for text.
2. **Focus States**: All interactive elements must receive a visible focus ring. Instead of browser defaults, use a 2px solid ring of `--color-brand-azure` with a 2px offset.
3. **Reduced Motion**: All cinematic motion must be disabled if the user's OS has `prefers-reduced-motion` enabled. Tailwind's `motion-reduce:` utilities must wrap all animation definitions.

---

## 12. Component Roadmap

The following components will be built in strict sequential order. Every component must consume the Design Tokens defined in this document. **No component may introduce new colors, spacing, or typography outside this Design System.**

### Foundation
- Button
- Container
- Typography
- Section
- Divider

### Navigation
- Navbar
- Mobile Menu
- Footer

### Content
- Section Heading
- Featured Work Card
- Service Item
- Process Step
- Philosophy Block
- Testimonial
- CTA

### Forms
- Input
- Textarea
- Select
- Checkbox
- Radio

### Feedback
- Badge
- Toast
- Modal
- Tooltip
