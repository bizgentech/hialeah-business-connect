---
name: Civic Connect
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#44474e'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#465f88'
  primary: '#000a1e'
  on-primary: '#ffffff'
  primary-container: '#002147'
  on-primary-container: '#708ab5'
  inverse-primary: '#aec7f6'
  secondary: '#115cb9'
  on-secondary: '#ffffff'
  secondary-container: '#659dfe'
  on-secondary-container: '#003370'
  tertiary: '#140800'
  on-tertiary: '#ffffff'
  tertiary-container: '#331d00'
  on-tertiary-container: '#bf7a00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f6'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#d7e2ff'
  secondary-fixed-dim: '#acc7ff'
  on-secondary-fixed: '#001a40'
  on-secondary-fixed-variant: '#004491'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is built on the intersection of civic institutional trust and local entrepreneurial energy. It departs from the sterile, cold aesthetics of traditional SaaS to embrace a "Modern Civic-Tech" identity: warm, professional, and deeply rooted in the community. 

The visual style utilizes a refined **Modern Corporate** approach with **High-Contrast** accents. It prioritizes legibility and accessibility to ensure usability for a diverse demographic of business owners and citizens. The emotional goal is to feel authoritative yet welcoming—a digital town square that facilitates growth through clear, premium, and trustworthy interactions.

## Colors

The palette is anchored by **Deep Navy (#002147)** to establish foundational trust and institutional stability. **Civic Blue (#0056b3)** provides a secondary layer for interactive elements and navigation. 

**Warm Gold (#f59e0b)** serves as the primary action color, used sparingly for high-impact CTAs to create a sun-drenched, South Florida feel without sacrificing professionalism. **Cyan (#00bcd4)** is reserved for informational accents, success states, and highlight moments. Surfaces are kept clean using **White (#ffffff)** and a very light **Slate Gray (#f8fafc)** to ensure the interface feels airy and premium.

## Typography

The typography strategy pairs **Outfit** for headlines with **Inter** for body text. Outfit provides a modern, geometric clarity that feels fresh and optimistic, while Inter ensures maximum readability across varying screen densities and age groups.

Headlines should utilize tighter letter spacing to maintain a cohesive, "editorial" look. Body text leverages generous line heights (1.5x minimum) to prevent visual fatigue. Labels and secondary data points use Inter’s medium and semi-bold weights to create a clear information hierarchy within dense business listings.

## Layout & Spacing

This design system employs a **Fixed Grid** model on desktop (12 columns, 1280px max-width) and a **Fluid Grid** on mobile (4 columns). 

The spacing rhythm is built on an 8px base unit. Generous whitespace is a core principle; sections are separated by large vertical stacks (48px+) to maintain a premium, uncluttered feel. Margins are intentionally wide to draw the eye inward toward the content, mimicking the layout of a high-end travel or business journal rather than a cluttered web directory.

## Elevation & Depth

Depth is achieved through **Low-Contrast Outlines** combined with **Ambient Shadows**. Instead of heavy shadows, surfaces use a soft 1px border in `#e2e8f0`. 

When an element requires elevation (such as a hovered business card or a floating search bar), a multi-layered, low-opacity shadow is applied (e.g., `0 4px 6px -1px rgba(0, 33, 71, 0.05), 0 2px 4px -1px rgba(0, 33, 71, 0.03)`). This creates a "lifted" effect that feels integrated into the page rather than floating haphazardly above it.

## Shapes

The shape language is primarily **Rounded**, striking a balance between the precision of a professional platform and the approachability of a community tool. 

A standard radius of **8px** is used for interactive elements like buttons and inputs. Larger structural components, specifically **Cards**, utilize a **12px** radius to soften the overall interface and distinguish them from smaller UI widgets. This hierarchy of roundedness helps users subconsciously categorize information: sharper for actions, softer for content containers.

## Components

### Buttons
- **Primary Action:** Warm Gold (#f59e0b) with White text. Bold weight, 8px radius. Used for "Join," "Register," or "Contact."
- **Secondary Action:** Deep Navy (#002147) with White text. Used for "Learn More" or "View Profile."
- **Ghost:** Civic Blue (#0056b3) text with no fill, used for low-priority actions or navigation.

### Cards
Cards are the primary vehicle for business listings. They feature a White background, 1px border (#e2e8f0), and a 12px border-radius. On hover, the border color shifts to Civic Blue and the ambient shadow slightly deepens to provide clear tactile feedback.

### Badges & Tags
- **Verified:** A "Civic Blue" badge with a small check-mark icon, using a subtle 10% opacity background of the same color for the container.
- **Featured:** A "Warm Gold" badge to denote premium placement, using high-contrast text for visibility.

### Input Fields
Inputs use a white background with a 1px border. On focus, the border transitions to Civic Blue with a soft glow (2px outer ring) to guide user attention.

### Icons
Use clean, 2px stroke-width line icons. Avoid filled icons unless used for active navigation states. The icon color should match the text color of the parent element to maintain visual harmony.