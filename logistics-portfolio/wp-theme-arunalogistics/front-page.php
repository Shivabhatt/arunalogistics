<?php
/**
 * Template Name: Home
 */
get_header(); ?>

<main class="pt-16">

  <!-- Hero Section -->
  <section class="relative bg-slate-900 overflow-hidden">
    <div class="absolute inset-0 lg:hidden">
      <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=800&fit=crop&q=80" alt="Logistics warehouse" class="w-full h-full object-cover opacity-20" />
    </div>
    <div class="max-w-7xl mx-auto relative">
      <div class="grid lg:grid-cols-2 min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]">
        <div class="flex flex-col justify-center px-5 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-24">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            India's Largest<br><span class="text-orange-500">Logistics Network</span>
          </h1>
          <p class="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 max-w-lg">
            End-to-end logistics solutions for businesses of all sizes. Express delivery, warehousing, and freight services across 200+ cities.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="<?php echo esc_url(home_url('/quote/')); ?>" class="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors">Ship Now</a>
            <a href="<?php echo esc_url(home_url('/services/')); ?>" class="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold rounded-lg border border-slate-600 text-white hover:bg-slate-800 transition-colors">View Services</a>
          </div>
        </div>
        <div class="relative hidden lg:block">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80" alt="Logistics warehouse with packages" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats -->
  <section class="py-10 sm:py-14 lg:py-16 bg-white">
    <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
      <!-- Mobile: Vertical Stack -->
      <div class="lg:hidden space-y-4">
        <div class="bg-white rounded-xl p-4 shadow-sm border-b-4 border-orange-500 flex items-center gap-4">
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
          </div>
          <div>
            <p class="text-2xl font-bold text-slate-900">10M+</p>
            <p class="text-slate-500 text-sm">Shipments Delivered</p>
          </div>
        </div>
        <div class="bg-white rounded-xl p-4 shadow-sm border-b-4 border-orange-500 flex items-center gap-4">
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </div>
          <div>
            <p class="text-2xl font-bold text-slate-900">200+</p>
            <p class="text-slate-500 text-sm">Cities Covered</p>
          </div>
        </div>
        <div class="bg-white rounded-xl p-4 shadow-sm border-b-4 border-orange-500 flex items-center gap-4">
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          </div>
          <div>
            <p class="text-2xl font-bold text-slate-900">99.5%</p>
            <p class="text-slate-500 text-sm">On-Time Rate</p>
          </div>
        </div>
        <div class="bg-white rounded-xl p-4 shadow-sm border-b-4 border-orange-500 flex items-center gap-4">
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
          </div>
          <div>
            <p class="text-2xl font-bold text-slate-900">500+</p>
            <p class="text-slate-500 text-sm">Business Partners</p>
          </div>
        </div>
      </div>

      <!-- Desktop: Horizontal Cards -->
      <div class="hidden lg:grid lg:grid-cols-4 gap-6">
        <div class="bg-white rounded-xl p-6 shadow-sm border-b-4 border-orange-500">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
            </div>
          </div>
          <p class="text-3xl font-bold text-slate-900">10M+</p>
          <p class="text-slate-500 text-sm mt-1">Shipments Delivered</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-sm border-b-4 border-orange-500">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </div>
          </div>
          <p class="text-3xl font-bold text-slate-900">200+</p>
          <p class="text-slate-500 text-sm mt-1">Cities Covered</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-sm border-b-4 border-orange-500">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            </div>
          </div>
          <p class="text-3xl font-bold text-slate-900">99.5%</p>
          <p class="text-slate-500 text-sm mt-1">On-Time Rate</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-sm border-b-4 border-orange-500">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
            </div>
          </div>
          <p class="text-3xl font-bold text-slate-900">500+</p>
          <p class="text-slate-500 text-sm mt-1">Business Partners</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section id="services" class="py-12 sm:py-16 lg:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
      <div class="text-center mb-10 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Our Services</h2>
        <p class="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">Comprehensive logistics solutions for every business need.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        <div class="group rounded-xl sm:rounded-2xl border border-slate-200 hover:border-orange-200 hover:shadow-xl transition-all overflow-hidden bg-white">
          <img src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=400&h=200&fit=crop&q=80" alt="Express delivery" class="w-full h-24 sm:h-28 lg:h-40 object-cover group-hover:scale-105 transition-transform duration-300">
          <div class="p-4 sm:p-5 lg:p-6">
            <h3 class="text-base sm:text-lg lg:text-xl font-semibold text-slate-900 mb-1 sm:mb-2">Express Parcel</h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">Same-day and next-day delivery across India. Fast, reliable shipping for urgent needs.</p>
          </div>
        </div>
        <div class="group rounded-xl sm:rounded-2xl border border-slate-200 hover:border-orange-200 hover:shadow-xl transition-all overflow-hidden bg-white">
          <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=200&fit=crop&q=80" alt="Truck freight" class="w-full h-24 sm:h-28 lg:h-40 object-cover group-hover:scale-105 transition-transform duration-300">
          <div class="p-4 sm:p-5 lg:p-6">
            <h3 class="text-base sm:text-lg lg:text-xl font-semibold text-slate-900 mb-1 sm:mb-2">Part Truckload</h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">Cost-effective PTL solutions for bulk shipments with optimized routes.</p>
          </div>
        </div>
        <div class="group rounded-xl sm:rounded-2xl border border-slate-200 hover:border-orange-200 hover:shadow-xl transition-all overflow-hidden bg-white">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop&q=80" alt="Warehouse" class="w-full h-24 sm:h-28 lg:h-40 object-cover group-hover:scale-105 transition-transform duration-300">
          <div class="p-4 sm:p-5 lg:p-6">
            <h3 class="text-base sm:text-lg lg:text-xl font-semibold text-slate-900 mb-1 sm:mb-2">Warehousing</h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">Strategic fulfillment centers with inventory management and order processing.</p>
          </div>
        </div>
        <div class="group rounded-xl sm:rounded-2xl border border-slate-200 hover:border-orange-200 hover:shadow-xl transition-all overflow-hidden bg-white">
          <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&h=200&fit=crop&q=80" alt="International shipping" class="w-full h-24 sm:h-28 lg:h-40 object-cover group-hover:scale-105 transition-transform duration-300">
          <div class="p-4 sm:p-5 lg:p-6">
            <h3 class="text-base sm:text-lg lg:text-xl font-semibold text-slate-900 mb-1 sm:mb-2">International</h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">Door-to-door international shipping to 220+ countries with customs clearance.</p>
          </div>
        </div>
        <div class="group rounded-xl sm:rounded-2xl border border-slate-200 hover:border-orange-200 hover:shadow-xl transition-all overflow-hidden bg-white">
          <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=200&fit=crop&q=80" alt="Secure packages" class="w-full h-24 sm:h-28 lg:h-40 object-cover group-hover:scale-105 transition-transform duration-300">
          <div class="p-4 sm:p-5 lg:p-6">
            <h3 class="text-base sm:text-lg lg:text-xl font-semibold text-slate-900 mb-1 sm:mb-2">Secure Shipping</h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">End-to-end insurance coverage with real-time tracking and proof of delivery.</p>
          </div>
        </div>
        <div class="group rounded-xl sm:rounded-2xl border border-slate-200 hover:border-orange-200 hover:shadow-xl transition-all overflow-hidden bg-white">
          <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400&h=200&fit=crop&q=80" alt="Returns processing" class="w-full h-24 sm:h-28 lg:h-40 object-cover group-hover:scale-105 transition-transform duration-300">
          <div class="p-4 sm:p-5 lg:p-6">
            <h3 class="text-base sm:text-lg lg:text-xl font-semibold text-slate-900 mb-1 sm:mb-2">Returns Management</h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">Hassle-free reverse logistics with easy pickups and quick refund processing.</p>
          </div>
        </div>
      </div>
      <div class="text-center mt-8 sm:mt-12">
        <a href="<?php echo esc_url(home_url('/services/')); ?>" class="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-sm font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">View All Services</a>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="py-12 sm:py-16 lg:py-20 bg-slate-900">
    <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Why businesses choose Aruna Logistics</h2>
          <p class="text-slate-400 text-sm sm:text-base mb-6 sm:mb-10">We combine technology with logistics expertise to deliver exceptional results.</p>
          <div class="space-y-4 sm:space-y-6">
            <div class="flex gap-3 sm:gap-4">
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <div>
                <h3 class="text-white font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">50+ Courier Partners</h3>
                <p class="text-slate-400 text-xs sm:text-sm">Access best rates across multiple carriers with smart routing.</p>
              </div>
            </div>
            <div class="flex gap-3 sm:gap-4">
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <div>
                <h3 class="text-white font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">Real-Time Tracking</h3>
                <p class="text-slate-400 text-xs sm:text-sm">End-to-end visibility with live updates and notifications.</p>
              </div>
            </div>
            <div class="flex gap-3 sm:gap-4">
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <div>
                <h3 class="text-white font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">24/7 Support</h3>
                <p class="text-slate-400 text-xs sm:text-sm">Dedicated support team available round the clock.</p>
              </div>
            </div>
            <div class="flex gap-3 sm:gap-4">
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <div>
                <h3 class="text-white font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">Easy Integration</h3>
                <p class="text-slate-400 text-xs sm:text-sm">Connect your e-commerce platform in minutes with our API.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative hidden sm:block">
          <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=500&fit=crop&q=80" alt="Delivery truck on road" class="rounded-xl sm:rounded-2xl shadow-2xl w-full" />
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="py-12 sm:py-16 lg:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
      <div class="text-center mb-8 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Trusted by 500+ Businesses</h2>
      </div>
      <div class="grid sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
        <div class="p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-slate-50">
          <p class="text-slate-700 text-sm sm:text-base mb-4 sm:mb-6">"Aruna Logistics has transformed our delivery operations. We've seen a 40% reduction in shipping costs and significantly improved customer satisfaction."</p>
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold text-sm sm:text-base">S</div>
            <div>
              <p class="font-semibold text-slate-900 text-sm sm:text-base">Sarah Johnson</p>
              <p class="text-xs sm:text-sm text-slate-500">Operations Director, TechStyle</p>
            </div>
          </div>
        </div>
        <div class="p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-slate-50">
          <p class="text-slate-700 text-sm sm:text-base mb-4 sm:mb-6">"The integration was seamless. Our delivery success rate improved from 85% to 98% within just 3 months of switching to Aruna."</p>
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold text-sm sm:text-base">M</div>
            <div>
              <p class="font-semibold text-slate-900 text-sm sm:text-base">Michael Chen</p>
              <p class="text-xs sm:text-sm text-slate-500">CEO, GreenBox Electronics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-12 sm:py-16 lg:py-20 bg-orange-500">
    <div class="max-w-4xl mx-auto px-5 sm:px-6 text-center">
      <h2 class="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to optimize your logistics?</h2>
      <p class="text-orange-100 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">Get started with Aruna Logistics today. No setup fees, pay only for what you ship.</p>
      <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <a href="<?php echo esc_url(home_url('/quote/')); ?>" class="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg bg-white text-orange-600 hover:bg-orange-50 transition-colors">Get a Free Quote</a>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg border-2 border-white text-white hover:bg-orange-600 transition-colors">Contact Sales</a>
      </div>
    </div>
  </section>

</main>

<?php get_footer(); ?>
