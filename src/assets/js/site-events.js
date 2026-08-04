/**
 * ═══════════════════════════════════════════════════════════════
 * Olympus Studios — Site-wide Event Handlers
 * ═══════════════════════════════════════════════════════════════
 * CSP-compliant externalisation. All event delegation lives here.
 * No inline event handlers in templates.
 * ═══════════════════════════════════════════════════════════════
 */

(function () {
  'use strict';

  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  // ── Mobile nav toggle ────────────────────────────────────
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close nav on link click (mobile)
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── Scroll shadow on nav ─────────────────────────────────
  let lastScrollY = 0;
  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    if (scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScrollY = scrollY;
  }, { passive: true });

  // ── Smooth scroll for anchor links ───────────────────────
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // ── Keyboard: Escape closes mobile nav ───────────────────
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });

})();