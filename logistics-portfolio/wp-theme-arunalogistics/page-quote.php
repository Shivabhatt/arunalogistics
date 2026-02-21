<?php
/**
 * Template Name: Quote
 */
get_header(); ?>

<main class="pt-16">

  <!-- Hero Section with Gradient -->
  <section class="relative overflow-hidden">
    <div class="absolute inset-0">
      <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop&q=80" alt="Logistics warehouse" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-br from-orange-500/90 via-orange-600/85 to-purple-600/90"></div>
    </div>
    <div class="absolute inset-0 opacity-10">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="qGrid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" stroke-width="1"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#qGrid)"/>
      </svg>
    </div>
    <div class="relative z-10 px-5 py-10 sm:py-16 lg:py-20 text-center text-white max-w-3xl mx-auto">
      <div class="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
      </div>
      <h1 class="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Get Your Free<br class="sm:hidden"> Shipping Quote</h1>
      <p class="text-sm sm:text-lg opacity-90 mb-6 sm:mb-8 px-2">Compare rates from 50+ carriers instantly. No commitments, no hidden fees.</p>
      <div class="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm px-2">
        <div class="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <svg class="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Instant rates</span>
        </div>
        <div class="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <svg class="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>No hidden fees</span>
        </div>
        <div class="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <svg class="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Free pickup</span>
        </div>
        <div class="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <svg class="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Insurance included</span>
        </div>
        <div class="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <svg class="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>24/7 tracking</span>
        </div>
        <div class="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <svg class="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Dedicated support</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Quote Form Section -->
  <section class="py-8 sm:py-12 lg:py-16 bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-3 gap-6 lg:gap-10">
        <!-- Form Card -->
        <div class="lg:col-span-2 order-2 lg:order-1">
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-8">
            <div class="mb-6">
              <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-1">Request a Quote</h2>
              <p class="text-slate-500 text-sm">Fill in the details below and we'll respond within 30 minutes.</p>
            </div>
            <form class="space-y-5" method="post">
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                  <input type="text" name="name" placeholder="John Doe" required class="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                  <input type="email" name="email" placeholder="john@company.com" required class="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                </div>
              </div>
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1.5">Phone *</label>
                  <input type="tel" name="phone" placeholder="+91 98765 43210" required class="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                  <input type="text" name="company" placeholder="Your Company" class="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                </div>
              </div>
              <!-- Service Type -->
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Service Type *</label>
                <div class="grid grid-cols-3 gap-2 sm:gap-3">
                  <label class="relative p-3 sm:p-4 rounded-xl border-2 border-slate-200 text-center cursor-pointer hover:border-orange-300 transition-all has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50">
                    <input type="radio" name="service_type" value="express" class="sr-only" checked>
                    <div class="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1.5 bg-orange-100 rounded-lg flex items-center justify-center">
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <div class="font-semibold text-slate-900 text-xs sm:text-sm">Express</div>
                    <div class="text-[10px] sm:text-xs text-slate-500 mt-0.5">Same-day</div>
                  </label>
                  <label class="relative p-3 sm:p-4 rounded-xl border-2 border-slate-200 text-center cursor-pointer hover:border-orange-300 transition-all has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50">
                    <input type="radio" name="service_type" value="standard" class="sr-only">
                    <div class="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1.5 bg-slate-100 rounded-lg flex items-center justify-center">
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                    </div>
                    <div class="font-semibold text-slate-900 text-xs sm:text-sm">Standard</div>
                    <div class="text-[10px] sm:text-xs text-slate-500 mt-0.5">2-5 days</div>
                  </label>
                  <label class="relative p-3 sm:p-4 rounded-xl border-2 border-slate-200 text-center cursor-pointer hover:border-orange-300 transition-all has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50">
                    <input type="radio" name="service_type" value="international" class="sr-only">
                    <div class="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1.5 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div class="font-semibold text-slate-900 text-xs sm:text-sm">Intl.</div>
                    <div class="text-[10px] sm:text-xs text-slate-500 mt-0.5">Worldwide</div>
                  </label>
                </div>
              </div>
              <!-- Shipping Details -->
              <div class="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1.5">From PIN *</label>
                  <input type="text" name="from_zip" placeholder="400001" required class="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1.5">To PIN *</label>
                  <input type="text" name="to_zip" placeholder="110001" required class="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1.5">Weight (kg) *</label>
                  <input type="text" name="weight" placeholder="5" required class="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1.5">Quantity</label>
                  <input type="number" name="quantity" placeholder="1" value="1" class="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1.5">Dimensions (L x W x H in cm)</label>
                <input type="text" name="dimensions" placeholder="30 x 20 x 15" class="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              </div>
              <button type="submit" class="w-full flex items-center justify-center gap-2 font-semibold rounded-xl bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20 px-6 py-3.5 text-sm sm:text-base transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
        <!-- Sidebar -->
        <div class="space-y-4 order-1 lg:order-2">
          <div class="hidden sm:block bg-white rounded-2xl border border-slate-200 p-5">
            <h3 class="font-bold text-slate-900 mb-2">Need Help?</h3>
            <p class="text-slate-500 text-sm mb-4">Our logistics experts are available to help you find the best solution.</p>
            <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="w-full inline-flex items-center justify-center gap-2 font-medium rounded-lg border-2 border-slate-200 text-slate-700 hover:bg-slate-50 px-4 py-2.5 text-sm transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

</main>

<?php get_footer(); ?>
