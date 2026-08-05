# WEB-003 — Identity & Content: Public Experience Completion (MVP)

> **For Hermes:** Implement this plan task-by-task. WEB-003 is the FINAL website-work mission; after completion the site transitions to normal maintenance and the studio returns to content production.

**Goal:** Complete the Olympus Studios public-facing MVP by replacing engineering placeholders with the official production identity, completing the Production and Studio experiences, certifying the MVP, and handing the site over to maintenance mode.

**Architecture:** Configuration-driven Eleventy static site (Nunjucks + YAML + design-token CSS). Identity is driven by `src/data/*.yaml`. All brand accent logic already uses slug-matching classes. NO new page architecture — scope is limit-break/correct, not grow.

**Standards:** Existing Capability First · Research Before Build · Configure Before Code · Improve Before Replace · Verified Rollback · Continuous Improvement.

**Hard boundary (from mission):** Avoid unnecessary scope expansion. Preserve previous work. This is NOT a new-feature sprint. After WEB-003 the site transitions to maintenance and backlog.

---

## Current State (Audit Complete)

| File | Role | Status |
|------|------|--------|
| `src/data/site.yaml` | Site metadata | ✅ Complete |
| `src/data/navigation.yaml` | Nav (6 main, 7 footer + 4 social) | ✅ Complete |
| `src/data/productions.yaml` | 3 active + 4 future | ✅ Complete, data-driven |
| `src/data/departments.yaml` | 13-engine + 6 departments | ✅ Complete |
| `src/content/productions.njk` | Public productions page | ✅ Branded cards render |
| `src/content/studio.njk` | Studio identity page | ✅ Complete (Vision/Hermes/Engine/Depts) |
| `src/content/{news,careers,contact,privacy}.njk` | Placeholder pages | ⚠️ Real MVP content slots |
| `src/index.njk` | Homepage | ✅ Complete |
| 6 production dept SVG assets | **Generic placeholder** (`dept-*.svg`: `400x240` grey box + "Department" text) | ❌ NEEDS IDENTITY |
| 3 production card SVGs | ✅ Branded (WP forest, OMW clock, SF case-file) | ✅ good |
| `og-default.svg` | ✅ Branded OG social image | ✅ good |
| `favicon.svg` | ✅ Brand crest | ✅ good |
| Apple touch icon | Referenced (`apple-touch-icon.png`) | ❌ **MISSING** |
| Department images | `departments.yaml` references `.webp` paths | ❌ **BROKEN REFS** (files are `.svg`, YAML says `.webp`) |
| `site.yaml` analytics token | `analytics.token` not set | ⚠️ Cloudflare Analytics inactive |
| `_headers` | CSP/HSTS/etc. | ✅ Complete, no `unsafe-inline` |
| Performance | No WebP/JPEG; all SVG | ⚠️ Fast but thin visual fidelity |

---

## Workstreams

### W1 — Production Identity (priority 2 of mission)
Each production must clearly communicate its own identity while remaining unmistakably Olympus.

**W1.1 — Production card identity detail**
- Verify card copy (name/tagline/description) matches each brand profile's voice:
  - Woodland Pond (warm/friendly/family/nature) ✓ present
  - One Minute Wonders (fast/educational/discovery/high-energy) — accent currently red `#E94560`; BR-002 specifies blue `#4A90D9`. **DECISION POINT** — flag to Founder for review (do not silently change approved WEB-002 design).
  - Shadow Files (historic/investigative/documentary/atmospheric) ✓ present (amber `#E8A838` matches BR-003 exactly)

**W1.2 — Department SVG identity replacement** *(the core "replace placeholder artwork" task)*
- Replace 6 generic grey-box department SVGs with **branded Olympus department identity cards** (each ~400×240, same design language as production card SVGs, gold-accented, matching the design token system).

### W2 — Studio Identity (priority 3)
- Verify Studio page already communicates: Vision ✓, Hermes COO ✓, Production Engine ✓, Departments ✓, Continuous Improvement ✓, Technology & Innovation ✓, Philosophy ✓. **Already complete per WEB-002.** Minor polish only; no redesign of approved Creative Master.

### W3 — Asset Integrity & Technical Completion
- **W3.1** Fix broken department image refs in `departments.yaml` (`.webp` → `.svg`) — root-cause the mismatch.
- **W3.2** Add missing `apple-touch-icon.png` (and/or correct the reference; PNG recommended for mobile bookmarks).
- **W3.3** Configure Cloudflare Analytics token in `site.yaml` if available (verify existing token first).
- **W3.4** Add `prefers-reduced-motion` media query (accessibility).
- **W3.5** Add custom keyboard focus indicator (accessibility).

### W4 — MVP Completion Review (deliverable)
- Executive Summary
- Desktop + Mobile screenshots (7 public pages × 2 viewports)
- Accessibility review
- Performance review
- Placeholder inventory (documented for future replacement per mission)
- Website backlog (P0–P4)
- Transition plan back to studio operations

---

## Task List

### Task 1: Root-cause + fix department image reference mismatch
**Files**
- Modify: `src/data/departments.yaml` (lines 41–70: `image:` `.webp` → `.svg`)

**Step 1:** Confirm the 6 department SVGs exist in `src/assets/images/departments/*.svg` (verified — yes).
**Step 2:** Patch each `image:` value from `creative-direction.webp` → `creative-direction.svg` (and all 6).
**Step 3:** Rebuild `npm run build`, verify no broken refs.

### Task 2: Replace the 6 generic department SVGs with branded Olympus identity cards
**Files**
- Modify: `src/assets/images/departments/{creative-direction,research-intelligence,production,audience-intelligence,studio-operations,technology-innovation}.svg`

Each becomes a branded Olympus department card (400×240): dark `#0D0D0F`/`#1A1E2E` gradient background, gold `#D4AF37` accent stroke/glow, the department's icon motif, subtle department label. Same design language as the production card SVGs. Proven pattern from `woodland-pond.svg` (gradient bg + motif + title).

### Task 3: Production identity copy verification (W1.1)
**Files**
- Read: `src/data/productions.yaml` — verify taglines/descriptions match brand voices.
- Note the OMW accent discrepancy (red vs BR-002 blue) as a **Founder decision**, not a silent change.

### Task 4: Apple touch icon + analytics + accessibility polish
**Files**
- Modify: `src/includes/layouts/base.njk` (apple-touch-icon ref if path stays)
- Create: `src/assets/images/brand/apple-touch-icon.png` (if PNG available) OR verify SVG ref
- Modify: `src/data/site.yaml` (analytics.token if a Cloudflare token exists)
- Modify: `src/assets/styles.css` (add `@media (prefers-reduced-motion: reduce)` block disabling animations; add focus-visible ring)

### Task 5: Rebuild, clean, verify
**Commands**
```bash
rm -rf _site && npm run build
git status --short
```

### Task 6: Build + deploy + verify live (manual wrangler path — proven)
**Commands**
```bash
# Build, capture screenshots with Playwright, deploy via wrangler with API token + account ID
# Verify all 7 routes HTTP 200 on live deployment URL
```

### Task 7: Capture MVP-completion screenshots
- Desktop 1280 + Mobile 390 for all 7 pages.

### Task 8: Deliver Founder Review Package (W4)
Executive Summary · Desktop/Mobile screenshots · Accessibility · Performance · Placeholder inventory · P0–P4 backlog · Transition plan.

---

## Verification / Success Criteria
- `npm run build` exits 0, 7 pages, no broken asset refs
- All 6 department SVGs branded (no grey-box placeholders)
- `departments.yaml` image refs resolve to existing files
- Apple touch icon resolves (or ref corrected/documented)
- All 7 routes HTTP 200 on live deployment
- Desktop + Mobile screenshots captured for all public pages
- Founder Review Package delivered with P0–P4 backlog + transition plan

## Risks / Tradeoffs
- **OMW accent color (red vs BR-002 blue):** Do not silently change the approved WEB-002 design. Flag as Founder decision.
- **Scope discipline:** Do NOT add production detail pages, portal, search, or new sections — these go to backlog. Mission explicitly says avoid scope expansion.
- **Custom domain `olympusstudios.ca`:** Not in scope for this mission; stays on the deployment/backlog.
- **Cloudflare Analytics token:** Only activate if a verifiable token exists; otherwise document as backlog P2.

## Open Questions
1. OMW card accent: keep approved WEB-002 red, or match BR-002 blue `#4A90D9`? (Founder decision)
2. Apple touch icon: PNG asset available, or keep SVG favicon only? (recommend documenting if no PNG)
3. Cloudflare Web Analytics token available to activate? (recommend yes if token exists)
