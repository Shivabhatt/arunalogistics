'use client';

import { motion } from 'framer-motion';
import { Users, MapPin, Star, ArrowRight, Truck, Package, Globe, Shield, Clock, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const trustBadges = [
  { icon: Users, label: '500+ Brand Partners' },
  { icon: MapPin, label: '200+ Cities Covered' },
  { icon: Star, label: '4.9★ Customer Rating' },
];

const valuePropositions = [
  '99.5% On-Time Delivery',
  'Pan-India Coverage',
  '24/7 Customer Support',
  'Best-in-Class Pricing',
];

const services = [
  { icon: Truck, label: 'Express Delivery', desc: 'Same & next-day delivery' },
  { icon: Package, label: 'Warehousing', desc: 'Smart storage solutions' },
  { icon: Globe, label: 'International', desc: 'Global shipping network' },
  { icon: Shield, label: 'Secure Handling', desc: 'Insured & safe transit' },
];

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-900 to-purple-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-[128px] opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full filter blur-[128px] opacity-20 animate-pulse" />

      <Container className="relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<div className="mb-4">
              <span className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-semibold mb-6">
                🚀 India's Most Trusted Logistics Partner
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Smart Logistics.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Seamless Delivery.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-6 max-w-xl">
              Transform your supply chain with <span className="font-semibold text-white">Aruna Logistics Solution</span>. 
              Delivering excellence across 200+ cities with cutting-edge technology and unmatched reliability.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {valuePropositions.map((prop) => (
                <div key={prop} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-sm text-slate-200">{prop}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScroll('#services')}
                className="group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScroll('#contact')}
              >
                Contact Us
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-slate-300"
                >
                  <badge.icon className="w-5 h-5 text-orange-400" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual - Service Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Services Grid */}
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">{service.label}</h3>
                  <p className="text-slate-400 text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl p-5"
            >
              <div className="grid grid-cols-3 gap-4 text-center text-white">
                <div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-2xl font-bold">10M+</span>
                  </div>
                  <p className="text-xs opacity-90">Shipments Delivered</p>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-2xl font-bold">99.5%</span>
                  </div>
                  <p className="text-xs opacity-90">On-Time Rate</p>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Globe className="w-4 h-4" />
                    <span className="text-2xl font-bold">200+</span>
                  </div>
                  <p className="text-xs opacity-90">Cities Covered</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-green-500 text-white rounded-xl px-4 py-3 shadow-lg shadow-green-500/25"
            >
              <p className="text-sm font-bold">✓ ISO Certified</p>
              <p className="text-xs opacity-80">Quality Assured</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
