<?php
/**
 * Template Name: Contact
 */
get_header(); ?>

<main class="pt-16">

  <!-- Hero Section -->
  <section class="relative bg-slate-900 py-16 sm:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Get in Touch</h1>
      <p class="text-lg text-slate-300 max-w-2xl mx-auto">Have questions about our services? Our team is here to help you 24/7.</p>
    </div>
  </section>

  <!-- Contact Info Cards -->
  <section class="py-12 sm:py-16 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid sm:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          <h3 class="font-semibold text-slate-900 mb-2">Email Us</h3>
          <p class="text-slate-600 text-sm mb-1">support@arunalogistics.com</p>
          <p class="text-slate-500 text-xs">We reply within 2 hours</p>
        </div>
        <div class="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          </div>
          <h3 class="font-semibold text-slate-900 mb-2">Call Us</h3>
          <p class="text-slate-600 text-sm mb-1">1800-XXX-XXXX</p>
          <p class="text-slate-500 text-xs">Mon-Sat, 9am-8pm IST</p>
        </div>
        <div class="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <h3 class="font-semibold text-slate-900 mb-2">Visit Us</h3>
          <p class="text-slate-600 text-sm mb-1">Mumbai, Maharashtra</p>
          <p class="text-slate-500 text-xs">Head Office</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="py-16 sm:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Form -->
        <div>
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Send us a Message</h2>
          <p class="text-slate-600 mb-8">Fill out the form and we'll get back to you within 24 hours.</p>
          <form class="space-y-6">
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input type="text" placeholder="Your name" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm">
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" placeholder="you@company.com" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm">
              </div>
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm">
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Company</label>
                <input type="text" placeholder="Your company" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm">
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">Subject</label>
              <select class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm bg-white">
                <option value="">Select a topic</option>
                <option value="shipping">Shipping Inquiry</option>
                <option value="pricing">Pricing & Plans</option>
                <option value="partnership">Partnership</option>
                <option value="support">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea placeholder="How can we help you?" rows="5" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm resize-none"></textarea>
            </div>
            <button type="submit" class="w-full sm:w-auto px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">Send Message</button>
          </form>
        </div>

        <!-- Support Options -->
        <div>
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Need Immediate Help?</h2>
          <p class="text-slate-600 mb-8">Choose from our support options below.</p>
          <div class="space-y-4">
            <div class="bg-slate-50 rounded-xl p-5 hover:bg-slate-100 transition-colors">
              <div class="flex gap-4">
                <div class="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                </div>
                <div>
                  <h3 class="font-semibold text-slate-900 mb-1">24/7 Support</h3>
                  <p class="text-slate-600 text-sm">Get immediate assistance anytime</p>
                  <span class="text-xs text-green-600 font-medium">Available round the clock</span>
                </div>
              </div>
            </div>
            <div class="bg-slate-50 rounded-xl p-5 hover:bg-slate-100 transition-colors">
              <div class="flex gap-4">
                <div class="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                </div>
                <div>
                  <h3 class="font-semibold text-slate-900 mb-1">Live Chat</h3>
                  <p class="text-slate-600 text-sm">Chat with our team in real-time</p>
                  <span class="text-xs text-green-600 font-medium">Response in 2-5 minutes</span>
                </div>
              </div>
            </div>
            <div class="bg-slate-50 rounded-xl p-5 hover:bg-slate-100 transition-colors">
              <div class="flex gap-4">
                <div class="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h3 class="font-semibold text-slate-900 mb-1">Schedule a Call</h3>
                  <p class="text-slate-600 text-sm">Book a meeting with our experts</p>
                  <span class="text-xs text-green-600 font-medium">Free consultation</span>
                </div>
              </div>
            </div>
            <div class="bg-slate-50 rounded-xl p-5 hover:bg-slate-100 transition-colors">
              <div class="flex gap-4">
                <div class="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                </div>
                <div>
                  <h3 class="font-semibold text-slate-900 mb-1">Help Center</h3>
                  <p class="text-slate-600 text-sm">Browse FAQs and guides</p>
                  <span class="text-xs text-green-600 font-medium">Self-service resources</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Office Image Section -->
  <section class="py-16 sm:py-20 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Our Office</h2>
        <p class="text-slate-600">Visit us at our headquarters in Mumbai</p>
      </div>
      <div class="rounded-2xl overflow-hidden shadow-lg">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop&q=80" alt="Modern office space" class="w-full h-48 sm:h-64 lg:h-80 object-cover" />
      </div>
    </div>
  </section>

</main>

<?php get_footer(); ?>
