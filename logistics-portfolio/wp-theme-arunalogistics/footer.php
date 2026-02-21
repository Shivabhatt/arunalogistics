<!-- Footer -->
<footer class="bg-slate-900 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <!-- Company Info -->
      <div class="lg:col-span-1">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center space-x-2 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
            <span class="text-white font-bold text-xl">A</span>
          </div>
          <div class="flex flex-col">
            <span class="text-lg font-bold text-white leading-tight">Aruna</span>
            <span class="text-xs text-slate-400 -mt-0.5 tracking-wider uppercase">Logistics</span>
          </div>
        </a>
        <p class="text-slate-400 text-sm leading-relaxed">
          India's trusted logistics partner for businesses of all sizes. Fast, reliable, and technology-driven delivery solutions.
        </p>
      </div>

      <!-- Services -->
      <div>
        <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
        <ul class="space-y-3">
          <li><a href="<?php echo esc_url(home_url('/services/')); ?>" class="text-sm text-slate-400 hover:text-white transition-colors">Express Parcel</a></li>
          <li><a href="<?php echo esc_url(home_url('/services/')); ?>" class="text-sm text-slate-400 hover:text-white transition-colors">Part Truckload</a></li>
          <li><a href="<?php echo esc_url(home_url('/services/')); ?>" class="text-sm text-slate-400 hover:text-white transition-colors">Warehousing</a></li>
          <li><a href="<?php echo esc_url(home_url('/services/')); ?>" class="text-sm text-slate-400 hover:text-white transition-colors">International</a></li>
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
        <ul class="space-y-3">
          <li><a href="<?php echo esc_url(home_url('/about/')); ?>" class="text-sm text-slate-400 hover:text-white transition-colors">About Us</a></li>
          <li><a href="<?php echo esc_url(home_url('/process/')); ?>" class="text-sm text-slate-400 hover:text-white transition-colors">Our Process</a></li>
          <li><a href="<?php echo esc_url(home_url('/pricing/')); ?>" class="text-sm text-slate-400 hover:text-white transition-colors">Pricing</a></li>
          <li><a href="<?php echo esc_url(home_url('/contact/')); ?>" class="text-sm text-slate-400 hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
        <ul class="space-y-3">
          <li class="flex items-start gap-2">
            <svg class="w-4 h-4 text-orange-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <span class="text-sm text-slate-400">contact@arunalogistics.com</span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-4 h-4 text-orange-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span class="text-sm text-slate-400">1800-123-ARUNA</span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-4 h-4 text-orange-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            <span class="text-sm text-slate-400">Mumbai, Maharashtra, India</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-sm text-slate-500">&copy; <?php echo date('Y'); ?> Aruna Logistics. All rights reserved.</p>
      <div class="flex space-x-6">
        <a href="#" class="text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" class="text-sm text-slate-500 hover:text-white transition-colors">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>

<!-- Mobile Menu JavaScript -->
<script>
(function() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu-bottom');
  const overlay = document.getElementById('menu-overlay');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  let isOpen = false;

  function openMenu() {
    isOpen = true;
    mobileMenu.classList.add('show');
    overlay.classList.add('show');
    iconOpen.classList.add('hidden');
    iconClose.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    isOpen = false;
    mobileMenu.classList.remove('show');
    overlay.classList.remove('show');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
    document.body.style.overflow = '';
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  menuBtn.addEventListener('click', function() {
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  let startY = 0;
  mobileMenu.addEventListener('touchstart', function(e) {
    startY = e.touches[0].clientY;
  });
  mobileMenu.addEventListener('touchmove', function(e) {
    const diff = e.touches[0].clientY - startY;
    if (diff > 60) closeMenu();
  });

  // Close on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (Math.abs(currentScroll - lastScroll) > 50 && isOpen) {
      closeMenu();
    }
    lastScroll = currentScroll;
  });
})();
</script>

<?php wp_footer(); ?>
</body>
</html>
