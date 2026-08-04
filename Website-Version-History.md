# Olympus Studios Website — Version History

## v1.0.0-alpha — 2026-08-03

### Release Name
"Engineering Foundation" — Phase 1 Foundation & Core Architecture

### Major Features
- Design token system (CSS custom properties for colors, typography, spacing, shadows, z-index)
- Certified component library (base layout, nav, footer, site JS)
- Configuration-driven YAML data (site metadata, navigation, productions, departments)
- Homepage (8 sections: hero, Our Vision, Meet Hermes, Production Engine, Departments, Continuous Improvement, Values, CTA)
- Productions page (3 active, 2 future)
- Studio page, News, Careers, Contact, Privacy pages
- Security headers (CSP, HSTS, XFO, XCTO, Permissions-Policy, Referrer-Policy)
- Cloudflare Pages deployment configuration
- Branch strategy (main, develop, feature/*, hotfix/*)

### Build Output
- **Static Site Generator:** Eleventy v3.1.6
- **Template Engine:** Nunjucks
- **CSS:** Single stylesheet (43.7 KB)
- **Total Pages:** 7 HTML files
- **Build Assets:** 18 files
- **Build Time:** ~0.10 seconds

### Known Limitations
- **Placeholder images:** SVG placeholders used for hero, productions, and department images — real WebP/PNG assets pending
- **No favicon PNG:** SVG favicon at `/assets/images/brand/favicon.svg` — PNG variants needed for full browser support
- **Broken OG image path:** No OG image asset yet — placeholder SVG referenced in base layout
- **No blog/news engine:** News page is a static placeholder — collection infrastructure needed
- **No search:** No client-side or server-side search implemented
- **sharp CVE (deferred):** 2 high-severity CVEs in `sharp` via `@11ty/eleventy-img` — not used at runtime currently; scheduled for dedicated dependency security review

### Future Roadmap
- **v1.0.1-alpha:** Real production images (WebP), OG image, productions detail pages, SEO metadata
- **v1.1.0-beta:** Founder Portal (sidebar nav, MFA login, dashboard, 11 portal pages)
- **v1.2.0:** Launch Candidate — production certification, full QA, performance audit

### Repository
- **Remote:** `github.com/dennissaunders/olympusstudios-website`
- **Branch:** `main`
- **Tag:** `v1.0.0-alpha`
