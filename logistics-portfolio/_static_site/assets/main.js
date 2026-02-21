/**
 * Aruna Logistics – main theme JS
 * Mobile menu toggle + header scroll effect
 */
(function () {
  'use strict';

  /* ── Mobile Menu Toggle ─────────────────────────────────── */
  const menuBtn   = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen  = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('hidden');
      if (iconOpen && iconClose) {
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
      }
    });
  }

  /* ── Header Scroll Effect ───────────────────────────────── */
  const header = document.getElementById('site-header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', function () {
      const scroll = window.pageYOffset;
      if (scroll > 50) {
        header.classList.add('shadow-lg');
        header.classList.remove('shadow-sm');
      } else {
        header.classList.remove('shadow-lg');
        header.classList.add('shadow-sm');
      }
      lastScroll = scroll;
    }, { passive: true });
  }

  /* ── Smooth scroll for anchor links ─────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
