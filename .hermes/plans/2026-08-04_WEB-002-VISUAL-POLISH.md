# WEB-002 — Visual Polish & Creative Director Review Plan

> **Goal:** Polish the Olympus Studios website visuals to faithfully match the approved Creative Masters design intent. Deliver screenshots for Creative Director review after each major page milestone.

**Foundation:** v1.0.1-alpha code is deployed and verified. Content is solid. Now: visual fidelity, polish, and brand consistency.

**Architecture:** No new pages. Enhance existing CSS, SVGs, and template layout. Configuration-driven data layer unchanged. Preserve all existing work.

**Tech Stack:** Eleventy v3.1.6, Nunjucks, CSS custom properties, SVG inline/background, single stylesheet (CSP-compliant).

---

## Milestone 1: Homepage Hero & Visual Polish

**Objective:** Make the homepage hero feel cinematic and premium. Enhance the ambient hero background, refine the logo overlay, add subtle micro-interactions.

### Task 1: Enhance Hero Background SVG

**File:** `src/assets/images/hero/hero-home.svg`

**Current:** Dark gradient with faint gold glow, architectural lines, small decorative dots, shield watermark.

**Enhancements:**
- Add a subtle radial gradient burst from center (gold pulse)
- Add golden diagonal rays (very subtle, 0.03-0.05 opacity)
- Add a second layer of architectural lines creating depth
- Add a subtle Olympus crest watermark (larger, 0.03 opacity)
- Enhance the bottom fade with layered gradients

### Task 2: Add Hero Entry Animations (CSS)

**File:** `src/assets/styles.css` (add after line 1660)

Add:
- `@keyframes heroGlow` — slow gold pulse animation
- `.hero-content` gets `animate-in` class with staggered children
- `.hero-logo-svg` gets a slow rotate pulse
- `.hero-label` has slide-up with fade
- `.hero-title` has letter-spacing reveal
- `.hero-subtitle` has fade-in delay
- `.hero-actions` staggered button entrance

### Task 3: Hero Content Hierarchy Refinement

**File:** `src/index.njk` (lines 10-34)

- Add `aria-hidden="true"` wrapper around decorative elements
- Add `.animate-in` classes to hero content elements
- Ensure the shield SVG in hero-logo-overlay is more prominent
- Add a subtle gold line under the hero subtitle

### Task 4: Production Card Visual Polish

**File:** `src/assets/styles.css`

- Add card hover glow effect (gold border glow on hover)
- Add subtle inner shadow on card overlay
- Improve card description text readability
- Add card image zoom with parallax-style effect
- Add `.prod-card` entrance animation (staggered fade-in-up)

### Task 5: Section Transition Polish

**File:** `src/assets/styles.css`

- Add subtle gold border-top accent between sections
- Improve section spacing consistency
- Add smooth scroll-triggered animations via CSS (use Intersection Observer in JS or rely on CSS `@keyframes` with `animation-fill-mode: forwards`)
- Add `.fade-in-section` class that triggers on scroll

> **Review Gate:** After Milestone 1, provide desktop + mobile screenshots of homepage.

---

## Milestone 2: Studio Page Visual Polish

**Objective:** Make the Studio page feel like a premium "about" experience. Enhanced narrative layout, visual hierarchy, production engine visual upgrade.

### Task 6: Studio Hero Enhancement

**File:** `src/content/studio.njk` (lines 7-66)

- Add a section hero similar to productions page (with background SVG)
- Create a `studio-hero.svg` background with architectural theme
- Improve the "Our Story" / "Our Mission" two-column layout
- Add icon decorations for each section heading

### Task 7: Production Engine Visual Redesign

**File:** `src/assets/styles.css` (engine section lines 912-1015)

- Connect engine steps with animated gold connecting line
- Add step number badges (01, 02, 03...) to each engine step
- Improve icon circle with gold gradient border
- Add hover state that reveals step description tooltip
- Make the engine flow scrollable on mobile with visual indicator

### Task 8: Department Cards Visual Polish

**File:** `src/assets/styles.css` (lines 1021-1082)

- Add image placeholder backgrounds for department cards (SVG patterns)
- Improve card hover state with gold accent border
- Add subtle gold icon background on hover
- Improve typography hierarchy

### Task 9: "Meet Hermes" Section Redesign

**File:** `src/content/studio.njk` (lines 71-109)

- Add a visual representation of Hermes (abstract SVG or icon grid)
- Improve the vision list with branded icons
- Add a subtle gold accent bar to the section
- Improve the two-column layout spacing

> **Review Gate:** After Milestone 2, provide desktop + mobile screenshots of Studio page.

---

## Milestone 3: Productions Page Visual Polish

**Objective:** Make the Productions page feel like a portfolio showcase. Enhanced hero, better card presentation, production identity visibility.

### Task 10: Productions Hero Enhancement

**File:** `src/assets/images/hero/productions-hero.svg`

- Add gold film strip sprocket animation
- Add subtle glow behind the film strip
- Add production brand color accents (WP green, OMW blue, SF amber)
- Enhance the page header with brand-identity color hints

### Task 11: Production Card Identity Enhancement

**File:** `src/assets/styles.css` (prod-card section)

- Add per-production brand color accents to cards (via CSS custom properties on each card)
  - Woodland Pond: green accent `#2D6A4F`
  - One Minute Wonders: gold accent `#D4AF37`
  - Shadow Files: amber accent `#E8A838`
- Add brand-identity gradient borders
- Improve card overlay gradient for better text readability
- Add card hover state with identity color glow

### Task 12: Future Productions Section Polish

**File:** `src/assets/styles.css` (lines 1463-1522)

- Add subtle grid pattern background to locked cards
- Improve lock icon with gold accent
- Add "Coming Soon" animation (pulse)
- Improve card hover state

### Task 13: Productions Data Enhancement

**File:** `src/data/productions.yaml`

- Add brand colors to each production entry
- Add brand-specific metadata for future use
- Ensure all production data is ready for detail pages (v1.0.2-alpha)

> **Review Gate:** After Milestone 3, provide desktop + mobile screenshots of Productions page.

---

## Milestone 4: Global Polish & Brand Consistency

**Objective:** Ensure every page feels cohesive. Consistent spacing, typography, color application, and brand presence.

### Task 14: Navigation & Footer Polish

**File:** `src/assets/styles.css`

- Add current page indicator enhancement (gold dot beside active nav link)
- Improve nav CTA with subtle gold glow on hover
- Add footer social icons (SVG) instead of text links
- Add footer brand crest watermark
- Improve mobile nav transition

### Task 15: Typography & Spacing Audit

**File:** `src/assets/styles.css` (global review)

- Ensure consistent heading spacing across all pages
- Verify fluid typography works at all breakpoints
- Add missing `letter-spacing` to headings
- Audit gold line placement consistency

### Task 16: Brand Identity SVGs Enhancement

**Files:**
- `src/assets/images/productions/woodland-pond.svg`
- `src/assets/images/productions/one-minute-wonders.svg`
- `src/assets/images/productions/shadow-files.svg`
- `src/assets/images/brand/og-default.svg`

- Add brand-consistent styling to all production SVGs
- Ensure all SVGs have proper `viewBox`, `aria-hidden`, and `role`
- Add subtle animations to production SVGs (CSS keyframes)
- Enhance OG image with production brand marks

### Task 17: Responsive Verification

**File:** Verify all pages at:
- 320px (small mobile)
- 768px (tablet)
- 1024px (laptop)
- 1440px+ (desktop)

- Ensure no horizontal scroll
- Verify all text is readable
- Verify all buttons are tappable (min 44px)
- Verify nav works at all breakpoints

### Task 18: Accessibility & Performance

- Add `prefers-reduced-motion` media query for animations
- Ensure all decorative SVGs have proper `aria-hidden`
- Add `loading="lazy"` to all below-fold images
- Verify keyboard navigation works on all interactive elements
- Add focus indicators for all interactive elements

> **Review Gate:** After Milestone 4, provide full-page screenshots of all 7 pages (desktop + mobile).

---

## Milestone 5: Build, Deploy & Founder Review Package

**Objective:** Build the site, verify, deploy manually, and deliver the complete Founder Review package.

### Task 19: Build & Verify

```bash
cd /c/Hermes/Studios/Olympus-Studios/Website
npm run build
# Verify all 7 pages render
# Check for build errors
```

### Task 20: Manual Deployment

Use Cloudflare API to deploy `main` branch. Verify all 7 pages return HTTP 200 with new content.

### Task 21: Screenshot Capture

Use Playwright to capture full-page screenshots of all 7 pages at desktop (1280px) and mobile (390px).

### Task 22: Founder Review Package

Create an Executive Summary document with:
- Screenshots (desktop + mobile) for each major page
- Changes made since v1.0.1-alpha
- Visual polish summary
- Accessibility summary
- Performance summary
- Recommendations for WEB-003 (v1.0.2-alpha)

---

## Files to Modify

| File | Change Type | Milestone |
|------|-------------|-----------|
| `src/assets/styles.css` | MODIFY | M1-M4 |
| `src/assets/images/hero/hero-home.svg` | MODIFY | M1 |
| `src/index.njk` | MODIFY | M1 |
| `src/assets/images/hero/productions-hero.svg` | MODIFY | M3 |
| `src/content/studio.njk` | MODIFY | M2 |
| `src/content/productions.njk` | MODIFY | M3 |
| `src/assets/images/productions/woodland-pond.svg` | MODIFY | M4 |
| `src/assets/images/productions/one-minute-wonders.svg` | MODIFY | M4 |
| `src/assets/images/productions/shadow-files.svg` | MODIFY | M4 |
| `src/assets/images/brand/og-default.svg` | MODIFY | M4 |
| `src/assets/js/site-events.js` | MODIFY | M1, M4 |
| `src/data/productions.yaml` | MODIFY | M3 |
| `src/data/site.yaml` | MODIFY | M4 |
| `src/includes/components/nav.njk` | NO CHANGE | — |
| `src/includes/components/footer.njk` | MODIFY | M4 |
| `src/includes/layouts/base.njk` | NO CHANGE | — |
| `CHANGELOG.md` | MODIFY | M5 |
| New: `src/assets/images/hero/studio-hero.svg` | CREATE | M2 |

## Verification Steps

After each milestone:
1. `npm run build` — clean build
2. Manual check of `_site/` for generated pages
3. Playwright screenshot (desktop + mobile)
4. Vision analysis of screenshots
5. Commit with descriptive message
6. Present screenshots for Creative Director review

After Milestone 5:
- Full build verification
- Manual Cloudflare API deployment
- All 7 routes HTTP 200
- Full screenshot suite
- Founder Review Package delivered

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| CSP blocks inline styles | All CSS stays in `styles.css`; no `style` attributes |
| Animation performance | Use `will-change` sparingly, prefer `transform`/`opacity` |
| SVG complexity | Keep SVGs under 50 lines where possible; use CSS for effects |
| Breaking existing content | Always build + verify after each change |
| Mobile layout issues | Test at all breakpoints before review gate |