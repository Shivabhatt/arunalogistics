'use client';

import { motion } from 'framer-motion';
import { Package, Truck, MapPin, CheckCircle, Upload, Settings, BarChart3, HeadphonesIcon } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Ship Your Order',
    description: 'Create your shipment through our platform, app, or API integration. Upload order details, select service type, and choose your preferred carrier.',
    details: [
      'Multiple integration options',
      'Bulk upload available',
      'Auto-fill with past orders',
      'Real-time rate comparison',
    ],
  },
  {
    number: '02',
    icon: Settings,
    title: 'Automatic Processing',
    description: 'Our AI-powered system automatically processes your order, selects optimal routes, and generates shipping labels instantly.',
    details: [
      'Smart route optimization',
      'Automated label generation',
      'Warehouse allocation',
      'Quality checks',
    ],
  },
  {
    number: '03',
    icon: Package,
    title: 'Pickup & Packaging',
    description: 'Schedule a pickup or drop off at our fulfillment centers. Our team ensures proper packaging and handling of your shipments.',
    details: [
      'Flexible pickup schedules',
      'Professional packaging',
      'Security scanning',
      'Weight verification',
    ],
  },
  {
    number: '04',
    icon: Truck,
    title: 'In-Transit Tracking',
    description: 'Track your shipment in real-time as it moves through our network. Receive automated updates at every checkpoint.',
    details: [
      'Live GPS tracking',
      'Milestone notifications',
      'ETA updates',
      'Exception alerts',
    ],
  },
  {
    number: '05',
    icon: MapPin,
    title: 'Last-Mile Delivery',
    description: 'Our delivery partners ensure your package reaches its destination safely. Multiple delivery attempts and customer notifications.',
    details: [
      'Photo proof of delivery',
      'Digital signature',
      'Customer communication',
      'Safe drop-off options',
    ],
  },
  {
    number: '06',
    icon: CheckCircle,
    title: 'Delivery Confirmation',
    description: 'Receive instant confirmation with proof of delivery. Access detailed analytics and generate reports for your records.',
    details: [
      'Instant confirmation',
      'POD with photo',
      'Customer feedback',
      'Performance analytics',
    ],
  },
];

const features = [
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Monitor your logistics performance with detailed dashboards and reports',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Get assistance anytime with our dedicated customer support team',
  },
  {
    icon: Settings,
    title: 'API Integration',
    description: 'Seamlessly integrate with your existing systems and workflows',
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-900 to-orange-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="processGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#processGrid)" />
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
              How{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">
                How Aruna Logistics Works
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              From order creation to final delivery, our streamlined process ensures your 
              shipments are handled with care and delivered on time, every time.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Simple 6-Step Process
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our efficient workflow ensures smooth operations from start to finish
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 via-purple-200 to-orange-200 -translate-x-1/2" />

            <div className="space-y-24">
              {steps.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 0.1}>
                  <div className={`lg:grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-2'}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`text-6xl font-bold text-orange-100 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                          {step.number}
                        </span>
                        <div className={`flex-shrink-0 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center">
                            <step.icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 mb-6 text-lg">
                        {step.description}
                      </p>
                      <div className="space-y-2">
                        {step.details.map((detail) => (
                          <div key={detail} className={`flex items-center gap-2 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                            <svg className={`w-5 h-5 text-green-500 flex-shrink-0 ${index % 2 === 1 ? 'lg:order-2' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-slate-600">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visual */}
                    <div className={`mt-8 lg:mt-0 ${index % 2 === 1 ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                      <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-orange-200">
                        <div className="h-64 flex items-center justify-center">
                          <step.icon className="w-32 h-32 text-orange-300" />
                        </div>
                      </Card>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Why Choose Our Process?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Technology-driven efficiency meets human expertise
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <Card className="text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-purple-100 mb-6">
                    <feature.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-900 to-purple-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-300">
              Join 500+ businesses that trust Aruna Logistics Solution for their logistics needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => window.location.href = '/quote'}
              >
                Get Started Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Talk to an Expert
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
