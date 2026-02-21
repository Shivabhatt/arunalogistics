<?php
/**
 * Aruna Logistics Theme Functions
 */

// Theme setup
function arunalogistics_setup() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('html5', array('search-form','comment-form','comment-list','gallery','caption'));
}
add_action('after_setup_theme', 'arunalogistics_setup');

// Enqueue Tailwind CDN
function arunalogistics_enqueue_scripts() {
  wp_enqueue_style('google-fonts-inter', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap', array(), null);
  wp_enqueue_script('tailwindcss', 'https://cdn.tailwindcss.com', array(), null, false);
}
add_action('wp_enqueue_scripts', 'arunalogistics_enqueue_scripts');

// Auto-create pages on theme activation
function arunalogistics_create_pages() {
  $pages = array(
    'Home'     => array('slug' => 'home',     'template' => ''),
    'About'    => array('slug' => 'about',    'template' => 'page-about.php'),
    'Services' => array('slug' => 'services', 'template' => 'page-services.php'),
    'Process'  => array('slug' => 'process',  'template' => 'page-process.php'),
    'Pricing'  => array('slug' => 'pricing',  'template' => 'page-pricing.php'),
    'Contact'  => array('slug' => 'contact',  'template' => 'page-contact.php'),
    'Quote'    => array('slug' => 'quote',    'template' => 'page-quote.php'),
  );

  $home_id = 0;
  foreach ($pages as $title => $info) {
    $existing = get_page_by_path($info['slug']);
    if (!$existing) {
      $page_id = wp_insert_post(array(
        'post_title'  => $title,
        'post_name'   => $info['slug'],
        'post_status' => 'publish',
        'post_type'   => 'page',
      ));
      if ($info['template'] && $page_id) {
        update_post_meta($page_id, '_wp_page_template', $info['template']);
      }
      if ($title === 'Home') $home_id = $page_id;
    } else {
      if ($title === 'Home') $home_id = $existing->ID;
      if ($info['template']) {
        update_post_meta($existing->ID, '_wp_page_template', $info['template']);
      }
    }
  }

  // Set static front page
  if ($home_id) {
    update_option('show_on_front', 'page');
    update_option('page_on_front', $home_id);
  }

  // Set permalinks to Post name
  update_option('permalink_structure', '/%postname%/');
  flush_rewrite_rules();
}
add_action('after_switch_theme', 'arunalogistics_create_pages');

// Helper to detect current page
function arunalogistics_is_page($slug) {
  if (is_front_page() && $slug === '/') return true;
  if (is_page()) {
    global $post;
    return '/' . $post->post_name . '/' === $slug || '/' . $post->post_name === $slug;
  }
  return false;
}
