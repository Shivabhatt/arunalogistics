<?php get_header(); ?>
<main class="pt-16">
  <div class="max-w-4xl mx-auto px-4 py-20 text-center">
    <h1 class="text-3xl font-bold text-slate-900 mb-4"><?php the_title(); ?></h1>
    <div class="text-slate-600"><?php the_content(); ?></div>
  </div>
</main>
<?php get_footer(); ?>
