# Olympus Studios Website — Engineering Changelog

> Canonical engineering history for the Olympus Experience.
> Repository: `github.com/dennissaunders/olympusstudios-website`

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
