<?php
/**
 * Template Name: Pricing
 */
get_header(); ?>

<main class="pt-16">

  <!-- Hero -->
  <section class="relative pt-16 pb-20 bg-gradient-to-br from-slate-900 via-slate-900 to-purple-900 overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="pGrid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#pGrid)"/>
      </svg>
    </div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Simple, <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">Transparent Pricing</span></h1>
      <p class="text-xl text-slate-300 mb-8">Choose the plan that fits your business. All plans include our core features with no hidden fees.</p>
    </div>
  </section>

  <!-- Pricing Cards -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Starter -->
        <div class="relative bg-white rounded-2xl border border-slate-200 shadow-sm p-8 hover:shadow-lg transition-all duration-300">
          <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 text-3xl bg-gradient-to-br from-slate-100 to-slate-200">⚡</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
            <p class="text-slate-600 mb-4">Perfect for small businesses</p>
            <div class="mb-6"><span class="text-5xl font-bold text-slate-900">₹2,999</span><span class="text-slate-600">/month</span></div>
          </div>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-slate-600">Up to 100 shipments/month</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-slate-600">Standard shipping rates</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-slate-600">Basic tracking</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-slate-600">Email support</span></div>
          </div>
          <a href="<?php echo esc_url(home_url('/quote/')); ?>" class="block w-full text-center px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-orange-500 hover:text-orange-600 transition-colors">Get Started</a>
        </div>

        <!-- Professional -->
        <div class="relative bg-gradient-to-b from-orange-50 to-white rounded-2xl border-2 border-orange-500 shadow-xl p-8 scale-105">
          <div class="absolute -top-4 left-1/2 -translate-x-1/2"><span class="px-4 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">Most Popular</span></div>
          <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 text-3xl bg-gradient-to-br from-orange-100 to-orange-200">🚀</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Professional</h3>
            <p class="text-slate-600 mb-4">For growing businesses</p>
            <div class="mb-6"><span class="text-5xl font-bold text-slate-900">₹7,999</span><span class="text-slate-600">/month</span></div>
          </div>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-slate-600">Up to 500 shipments/month</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-slate-600">Discounted shipping rates</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-slate-600">Real-time tracking + notifications</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-slate-600">Priority phone & chat support</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-slate-600">API access</span></div>
          </div>
          <a href="<?php echo esc_url(home_url('/quote/')); ?>" class="block w-full text-center px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-lg">Get Started</a>
        </div>

        <!-- Enterprise -->
        <div class="relative bg-white rounded-2xl border border-slate-200 shadow-sm p-8 hover:shadow-lg transition-all duration-300">
          <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 text-3xl bg-gradient-to-br from-purple-100 to-purple-200">🏢</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
            <p class="text-slate-600 mb-4">Custom solutions</p>
            <div class="mb-6"><span class="text-5xl font-bold text-slate-900">Custom</span></div>
          </div>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-slate-600">Unlimited shipments</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-slate-600">Custom pricing & SLA</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-slate-600">Dedicated account manager</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-slate-600">24/7 premium support</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-slate-600">White-label options</span></div>
          </div>
          <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="block w-full text-center px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-orange-500 hover:text-orange-600 transition-colors">Contact Sales</a>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="py-16 bg-slate-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
      <div class="space-y-6">
        <div class="bg-white rounded-xl p-6 shadow-sm">
          <h3 class="font-semibold text-slate-900 mb-2">Can I switch plans anytime?</h3>
          <p class="text-slate-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect from the next billing cycle.</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-sm">
          <h3 class="font-semibold text-slate-900 mb-2">Is there a free trial?</h3>
          <p class="text-slate-600">Yes, all plans come with a 14-day free trial. No credit card required to start.</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-sm">
          <h3 class="font-semibold text-slate-900 mb-2">What payment methods do you accept?</h3>
          <p class="text-slate-600">We accept all major credit cards, UPI, net banking, and bank transfers for enterprise clients.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-12 bg-orange-500">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <h2 class="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to get started?</h2>
      <p class="text-orange-100 mb-6">Start shipping smarter with Aruna Logistics today.</p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="<?php echo esc_url(home_url('/quote/')); ?>" class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg bg-white text-orange-600 hover:bg-orange-50 transition-colors">Get Free Quote</a>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg border border-white text-white hover:bg-orange-600 transition-colors">Talk to Sales</a>
      </div>
    </div>
  </section>

</main>

<?php get_footer(); ?>
