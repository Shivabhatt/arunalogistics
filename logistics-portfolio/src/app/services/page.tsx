'use client';

import { motion } from 'framer-motion';
import { Truck, Container as ContainerIcon, Warehouse, Globe, MapPin, RefreshCw, Shield, Clock, DollarSign, BarChart3, Headphones, Zap } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations';

const mainServices = [
  {
    icon: Truck,
    title: 'Express Parcel Delivery',
    description: 'Lightning-fast same-day and next-day delivery services nationwide.',
    features: [
      'Same-day delivery in major cities',
      'Next-day nationwide coverage',
      'Real-time tracking',
      'Proof of delivery',
      'Flexible pickup options',
    ],
    benefits: '40% faster than standard shipping'
  },
  {
    icon: ContainerIcon,
    title: 'Freight & Cargo Services',
    description: 'Comprehensive freight solutions for businesses of all sizes.',
    features: [
      'Part Truckload (PTL) solutions',
      'Full Truckload (FTL) services',
      'Containerized shipping',
      'Hazmat handling',
      'Temperature-controlled transport',
    ],
    benefits: 'Save up to 35% on bulk shipments'
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Fulfillment',
    description: 'State-of-the-art storage and order fulfillment solutions.',
    features: [
      'Multi-location warehouses',
      'Inventory management',
      'Order processing & packing',
      'Returns handling',
      'Same-day fulfillment',
    ],
    benefits: '99.8% order accuracy'
  },
  {
    icon: Globe,
    title: 'International Shipping',
    description: 'Ship globally with confidence to 220+ countries.',
    features: [
      'Air freight services',
      'Ocean freight',
      'Customs clearance',
      'Import/export documentation',
      'Door-to-door delivery',
    ],
    benefits: 'Ship to 220+ countries'
  },
  {
    icon: MapPin,
    title: 'Last-Mile Delivery',
    description: 'Efficient final-mile solutions for urban and rural areas.',
    features: [
      'Same-day last-mile',
      'Scheduled deliveries',
      'Contactless delivery',
      'Signature on delivery',
      'Failed delivery management',
    ],
    benefits: '96% first-attempt success'
  },
  {
    icon: RefreshCw,
    title: 'Returns Management',
    description: 'Streamlined reverse logistics for hassle-free returns.',
    features: [
      'Easy return pickup',
      'Quality inspection',
      'Refund processing',
      'Inventory restocking',
      'Analytics & reporting',
    ],
    benefits: 'Reduce RTO by 40%'
  },
];

const additionalServices = [
  {
    icon: Shield,
    title: 'Cargo Insurance',
    description: 'Comprehensive protection for your shipments',
  },
  {
    icon: Clock,
    title: 'Time-Definite Services',
    description: 'Guaranteed delivery within specified timeframes',
  },
  {
    icon: DollarSign,
    title: 'COD Services',
    description: 'Cash on delivery with quick remittance',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time insights into your logistics operations',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer service',
  },
  {
    icon: Zap,
    title: 'API Integration',
    description: 'Seamless integration with your systems',
  },
];

export default function ServicesPage() {
  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="servicesGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#servicesGrid)" />
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
              Comprehensive{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
                Logistics Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              From express parcels to international freight, we offer end-to-end logistics services 
              tailored to your business needs. Reliable, fast, and cost-effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" onClick={handleContactClick}>
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = '/quote'}>
                Request a Quote
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive logistics solutions designed to streamline your operations 
                and accelerate your business growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <Card className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-orange-500" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 mb-4">{service.description}</p>
                        <div className="inline-flex px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          {service.benefits}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-slate-900">Key Features:</h4>
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant="outline" 
                      className="mt-auto"
                      onClick={handleContactClick}
                    >
                      Learn More
                    </Button>
                  </div>
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
                Additional Services
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Enhance your logistics operations with our value-added services
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <Card className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 mb-4">
                    <service.icon className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">
                    {service.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
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
              Ready to Optimize Your Logistics?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Partner with us and experience the difference that professional logistics management can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={handleContactClick}
              >
                Contact Our Team
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/quote'}
              >
                Get a Free Quote
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
