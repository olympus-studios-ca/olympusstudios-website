# Olympus Studios Website — Engineering Journal

> Concise engineering record. One entry per milestone.
> Repository: `github.com/dennissaunders/olympusstudios-website`

## Entry 001 — v1.0.0-alpha Engineering Foundation

**Date:** 2026-08-03
**Version:** v1.0.0-alpha
**Build Status:** ✅ PASS (7 pages, 0.10s, exit 0)
**Authorization:** WEB-001B

### Major Decisions
- Retained Eleventy v3.x (proven on Woodland Pond — correct call)
- Design token system in CSS custom properties (single source of truth for all visual values)
- YAML data files over hardcoded content (future multi-tenant and brand expansion)
- SVG placeholders for images (allows build verification without real assets; swap at v1.0.1-alpha)
- Cloudflare Pages auto-deploy from `main` (zero-friction CD; same pattern as Woodland Pond)

### Lessons Learned
- Eleventy `layouts` dir config is relative to `src/input`, not `includes` — template layout references must use `base.njk` (not `layouts/base.njk`) when layouts dir is set to `includes/layouts`
- `.gitignore` must exclude `_site/` and `node_modules/` before first commit — forgot initially, caught by git status
- SVG favicon works in modern browsers but PNG variants needed for full compatibility

### Risks
| Risk | Impact | Mitigation |
|------|--------|------------|
| `sharp` CVEs (deferred) | 2 high-severity via `eleventy-img` | Not used at runtime; scheduled for dependency review |
| No real production images | Placeholder SVGs in output | Tracked for v1.0.1-alpha |
| No OG image | Social previews broken | Tracked as blocker — v1.0.1-alpha |
| Solo operator dependency | All development on one person | N/A — architecture designed for eventual team expansion |

### Recommendations
1. Prioritize v1.0.1-alpha (real assets, OG image, SEO) before portal development
2. Schedule the dependency security review early in Phase 2
3. Set up Cloudflare Pages preview deployments for PR/branch-based review
4. Add Playwright smoke tests before Phase 2 expansion
