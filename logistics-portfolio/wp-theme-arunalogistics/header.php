<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <?php wp_head(); ?>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'] },
        }
      }
    }
  </script>
  <style>
    #mobile-menu-bottom {
      transform: translateY(100%);
      transition: transform 0.3s ease-out;
    }
    #mobile-menu-bottom.show {
      transform: translateY(0);
    }
    .menu-overlay {
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease-out, visibility 0.3s;
    }
    .menu-overlay.show {
      opacity: 1;
      visibility: visible;
    }
  </style>
</head>
<body class="font-sans antialiased bg-white">

<?php
$nav_links = array(
  array('url' => '/',         'label' => 'Home',     'slug' => '/'),
  array('url' => '/about/',   'label' => 'About',    'slug' => '/about/'),
  array('url' => '/services/','label' => 'Services', 'slug' => '/services/'),
  array('url' => '/pricing/', 'label' => 'Pricing',  'slug' => '/pricing/'),
  array('url' => '/contact/', 'label' => 'Contact',  'slug' => '/contact/'),
);

$mobile_icons = array(
  '/' => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>',
  '/about/' => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
  '/services/' => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>',
  '/pricing/' => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
  '/contact/' => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
);
?>

<!-- Header -->
<header id="site-header" class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center space-x-2">
        <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
          <span class="text-white font-bold text-xl">A</span>
        </div>
        <div class="flex flex-col">
          <span class="text-lg font-bold text-slate-900 leading-tight">Aruna</span>
          <span class="text-xs text-slate-500 -mt-0.5 tracking-wider uppercase">Logistics</span>
        </div>
      </a>

      <nav class="hidden lg:flex items-center space-x-8">
        <?php foreach ($nav_links as $link): ?>
          <a href="<?php echo esc_url(home_url($link['url'])); ?>" class="text-sm font-medium <?php echo arunalogistics_is_page($link['slug']) ? 'text-orange-600' : 'text-slate-600 hover:text-slate-900'; ?>"><?php echo esc_html($link['label']); ?></a>
        <?php endforeach; ?>
      </nav>

      <div class="hidden lg:flex items-center space-x-4">
        <a href="<?php echo esc_url(home_url('/quote/')); ?>" class="px-5 py-2.5 text-sm font-semibold rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors">Get a Quote</a>
      </div>

      <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100" aria-expanded="false" aria-label="Toggle menu">
        <svg id="menu-icon-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        <svg id="menu-icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
  </div>
</header>

<!-- Menu Overlay -->
<div id="menu-overlay" class="menu-overlay fixed inset-0 bg-black/50 z-40 lg:hidden"></div>

<!-- Bottom Slide-Up Mobile Menu -->
<div id="mobile-menu-bottom" class="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl lg:hidden">
  <div class="flex justify-center pt-3 pb-2">
    <div class="w-10 h-1 bg-slate-300 rounded-full"></div>
  </div>
  <div class="px-6 pb-8 pt-2 space-y-2">
    <?php foreach ($nav_links as $link):
      $is_active = arunalogistics_is_page($link['slug']);
      $icon_path = isset($mobile_icons[$link['slug']]) ? $mobile_icons[$link['slug']] : '';
    ?>
    <a href="<?php echo esc_url(home_url($link['url'])); ?>" class="flex items-center gap-3 px-4 py-3 text-sm font-medium <?php echo $is_active ? 'text-orange-600 bg-orange-50' : 'text-slate-600 hover:bg-slate-50'; ?> rounded-xl">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><?php echo $icon_path; ?></svg>
      <?php echo esc_html($link['label']); ?>
    </a>
    <?php endforeach; ?>
    <div class="pt-3">
      <a href="<?php echo esc_url(home_url('/quote/')); ?>" class="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold rounded-xl bg-orange-500 text-white">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
        Get a Quote
      </a>
    </div>
  </div>
</div>
