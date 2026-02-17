'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Building, Rocket, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations';

const pricingPlans = [
  {
    name: 'Starter',
    icon: Zap,
    price: '$49',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 100 shipments/month',
      'Standard shipping rates',
      'Basic tracking',
      'Email support',
      'Dashboard access',
      '5% platform fee',
    ],
    popular: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Business',
    icon: Building,
    price: '$149',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 1,000 shipments/month',
      'Discounted shipping rates',
      'Advanced tracking & analytics',
      'Priority support',
      'API access',
      'Multi-user accounts',
      '3% platform fee',
      'Free branded tracking page',
    ],
    popular: true,
    cta: 'Get Started',
  },
  {
    name: 'Enterprise',
    icon: Rocket,
    price: 'Custom',
    period: '',
    description: 'For large-scale operations',
    features: [
      'Unlimited shipments',
      'Lowest shipping rates',
      'Custom integrations',
      'Dedicated account manager',
      'White-label solutions',
      'Advanced analytics',
      'SLA guarantee',
      'Priority processing',
      'Custom workflows',
    ],
    popular: false,
    cta: 'Contact Sales',
  },
];

const additionalServices = [
  { name: 'Cargo Insurance', price: 'From $5/shipment' },
  { name: 'Expedited Processing', price: '$10/shipment' },
  { name: 'Weekend Pickup', price: '$15/pickup' },
  { name: 'COD Services', price: '2% of order value' },
  { name: 'Returns Management', price: '$2/return' },
  { name: 'Additional Packaging', price: 'From $3/box' },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pricingGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricingGrid)" />
          </svg>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simple,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Choose the plan that fits your business. All plans include our core features with no hidden fees.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <ScrollReveal key={plan.name} delay={index * 0.1}>
                <Card 
                  className={`h-full relative ${
                    plan.popular 
                      ? 'border-2 border-orange-500 shadow-2xl scale-105' 
                      : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                      plan.popular 
                        ? 'bg-gradient-to-br from-orange-500 to-purple-600' 
                        : 'bg-gradient-to-br from-slate-100 to-slate-200'
                    }`}>
                      <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-slate-600'}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                      <span className="text-slate-600">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant={plan.popular ? 'primary' : 'outline'} 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.location.href = '/quote'}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Add-On Services
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Enhance your shipping experience with our optional value-added services
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <ScrollReveal key={service.name} delay={index * 0.1}>
                <Card className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">{service.name}</span>
                  <span className="text-orange-600 font-bold">{service.price}</span>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Can I change plans at any time?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate your billing accordingly.',
              },
              {
                q: 'Is there a contract or commitment?',
                a: 'No, all our plans are month-to-month with no long-term contracts. You can cancel anytime with no penalties.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, debit cards, and ACH bank transfers for enterprise customers.',
              },
              {
                q: 'Do you offer volume discounts?',
                a: 'Yes, we offer custom pricing for high-volume shippers. Contact our sales team for a personalized quote.',
              },
            ].map((faq, index) => (
              <ScrollReveal key={faq.q} delay={index * 0.1}>
                <Card>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-purple-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Our team is here to help you find the perfect plan for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Sales
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/quote'}
              >
                Get a Quote
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
