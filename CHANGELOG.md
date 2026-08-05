# Olympus Studios Website — Engineering Changelog

> Canonical engineering history for the Olympus Experience.
> Repository: `github.com/dennissaunders/olympusstudios-website`

---

## v1.0.2-alpha — 2026-08-04

### Identity & Content — WEB-003
Final identity and content completion of the Public Experience (MVP). After this version the website transitions to normal maintenance.

### Major Changes
- **Department Identity SVGs:** Replaced all 6 generic grey-box placeholder SVGs with branded Olympus identity cards (dark gradient background, gold accent, department icon motif, Cinzel title, Montserrat subtitle, gold underline) — Creative Direction, Research & Intelligence, Production, Audience Intelligence, Studio Operations, Technology & Innovation
- **Department image refs corrected:** Fixed `departments.yaml` image references from `.webp` to `.svg` (6 files), resolving broken-extension mismatch
- **Apple Touch Icon:** Generated 180×180 PNG from the approved favicon SVG crest — now resolves for mobile bookmarks
- **Production Identity Verification:** All 3 active production card copies verified against brand profiles (BR-002 OMW, BR-003 Shadow Files, Woodland Pond). Shadow Files accent color (`#E8A838`) matches BR-003 exactly. OMW accent (`#E94560` red) differs from BR-002 spec (`#4A90D9` blue) — flagged for Founder review.

### Build Milestone
- **Total Pages:** 7 (all HTTP 200 on live)
- **Build Time:** 0.12s (unchanged)
- **Deployment:** 60812187 — all 5 stages succeeded (queued, initialize, clone, build, deploy)

### Asset Inventory
- 15 static asset files served (6 dept SVGs, 3 production SVGs, 3 hero SVGs, 3 brand assets)
- 6 department identity cards created (400×240, branded)
- Apple touch icon created (180×180 PNG, 8.5 KB)

### Remaining Placeholders
- 4 future productions still generic "New Production / In Development" (P4 — post-MVP enhancement)
- Department image SVGs not yet consumed by templates (templates use inline SVG icons) — `item.image` field in `departments.yaml` is correct but unused; ready for future template adoption
- OG image remains SVG (not WebP) — deferred to post-MVP
- Cloudflare Web Analytics token not configured — P2 backlog item
- Custom domain (`olympusstudios.ca`) DNS delegation remains deferred

### Known Issues
- OMW accent color: website uses `#E94560` (red) per approved WEB-002 design; BR-002 profile specifies `#4A90D9` (blue) — Founder decision needed
- GitHub push to `main` still does not auto-trigger Cloudflare Pages build (webhook integration issue)
- Sharp CVEs (2 high) remain deferred

---

## v1.0.1-alpha — 2026-08-04

### Public Experience — WEB-002
Full implementation of the Public Experience phase. Founder-approved WEB-002.

### Major Changes
- **Homepage:** Updated CTA links to public-facing Studio, production descriptions on featured cards, refined ambient hero background
- **Productions:** Complete production identity packages for Woodland Pond, One Minute Wonders, Shadow Files with branded imagery, enhanced hero and detail sections
- **Studio:** Full WEB-STUDIO-V01 implementation — Our Story, Our Mission, Meet Hermes, Production Engine (13 steps), Studio Departments, Philosophy & Engineering Standards
- **OG/Social:** Branded 1200×630 OG preview image with shield logo, Organization schema (JSON-LD) on all pages, OG image alt text, Twitter site handle, theme-color meta, robots meta
- **SEO:** Enhanced meta descriptions for all 7 pages, canonical URLs, structured data foundation
- **Brand Assets:** Production identity SVGs (WP: forest pond + animals, OMW: clock face + particles, SF: evidence/case file markers)
- **CSS:** New studio-page component classes (studio-heading, studio-text, studio-mission-*), prod-card-desc class for production descriptions

### Build Milestone
- **Total Pages:** 7 (all HTTP 200)
- **Build Time:** ~0.11s
- **Deployment:** Manual trigger (bf745282) — auto-deploy from GitHub push not triggering; GitHub webhook integration needs investigation
- **Security:** All headers verified (CSP, HSTS, frame-deny, nosniff, permissions-policy, referrer)

### Remaining Placeholders
- OG default image is SVG (not WebP) — real OG image expected in v1.0.2-alpha
- Apple touch icon referenced but not present
- Department images reference `.webp` paths that don't exist yet
- Future productions still generic placeholders

### Known Issues
- GitHub push to `main` does not auto-trigger Cloudflare Pages build (webhook integration issue)
- All images remain SVG (no WebP production assets)
- Sharp CVEs (2 high) remain deferred

---

## v1.0.0-alpha — 2026-08-03

### Engineering Foundation
Initial engineering foundation — approved via WEB-001B.

### Build Milestone
- **SSG:** Eleventy v3.1.6
- **Template Engine:** Nunjucks
- **CSS:** Single stylesheet with design token system (43.7 KB)
- **Data Layer:** YAML configuration files (site, navigation, productions, departments)
- **Total Pages:** 7 (home, productions, studio, news, careers, contact, privacy)
- **Build Assets:** 18 (CSS, JS, SVG placeholders, security config)
- **Build Time:** ~0.10s

### Major Architecture Decisions
1. **Eleventy v3.x retained** — proven at Woodland Pond (0.16s builds, Nunjucks, YAML, Cloudflare Pages)
2. **Design Token System** — centralized CSS custom properties (colors, typography, spacing, shadows, z-index)
3. **Certified Component Library** — Nunjucks partials (nav, footer, base layout, site JS)
4. **Configuration-Driven Architecture** — all content in YAML data files
5. **Single Domain** — `olympusstudios.ca` (public at `/`, portal at `/founder` in future phases)
6. **Cloudflare Pages** — auto-deploy from `main` branch
7. **Mobile-First** — responsive breakpoints from base (320px) through xl (1280px)

### Security Posture
- CSP with `style-src 'self'` (no `unsafe-inline`)
- HSTS preload: `max-age=31536000; includeSubDomains`
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Permissions-Policy: no camera/microphone/geolocation
- Referrer-Policy: strict-origin-when-cross-origin
- **Known:** 2 high-severity CVEs in `sharp` via `@11ty/eleventy-img` (not used in runtime — deferred)

### Dependencies
- `@11ty/eleventy` v3.1.6
- `js-yaml` v4.1.0
- `rimraf` v6.0.1

### Branch Strategy Established
| Branch | Purpose |
|--------|---------|
| `main` | Production-ready releases |
| `develop` | Active engineering |
| `feature/*` | Individual feature development |
| `hotfix/*` | Production fixes |

---

## Future Versions

| Version | Milestone | Status |
|---------|-----------|--------|
| v1.0.1-alpha | Public Experience (Productions pages, real assets, OG) | Planned |
| v1.1.0-beta | Founder Portal (auth, dashboard, 11 pages) | Planned |
| v1.2.0 | Launch Candidate (certification, polish) | Planned |
