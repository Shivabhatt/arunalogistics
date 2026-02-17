'use client';

import { Check, Truck, Globe, Headphones, Code, TrendingDown } from 'lucide-react';
import Container from '../ui/Container';
import { ScrollReveal } from '../animations';

const features = [
  {
    icon: Truck,
    title: '50+ Courier Partners',
    description: 'Access the best rates across multiple carriers for optimal delivery.',
  },
  {
    icon: Globe,
    title: 'AI-Powered Route Optimization',
    description: 'Smart algorithms find the fastest and most cost-effective routes.',
  },
  {
    icon: Headphones,
    title: '24/7 Dedicated Support',
    description: 'Round-the-clock assistance for all your shipping queries.',
  },
  {
    icon: Code,
    title: 'Simple API Integration',
    description: 'Connect your systems in minutes with our developer-friendly APIs.',
  },
  {
    icon: TrendingDown,
    title: 'Reduce RTO by 40%',
    description: 'Advanced analytics to minimize return-to-origin shipments.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Why Choose{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
                  Aruna Logistics?
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                We combine cutting-edge technology with extensive logistics expertise 
                to deliver exceptional shipping experiences for your business.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Global Network</h3>
                    <p className="text-slate-500">Connected worldwide</p>
                  </div>
                </div>

                {/* Network Visualization */}
                <div className="relative h-64 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden">
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250">
                    <defs>
                      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#f97316" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 50 125 Q 200 50 350 125"
                      fill="none"
                      stroke="url(#lineGrad)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <path
                      d="M 50 125 Q 200 200 350 125"
                      fill="none"
                      stroke="url(#lineGrad)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <path
                      d="M 100 50 Q 200 125 300 50"
                      fill="none"
                      stroke="url(#lineGrad)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <path
                      d="M 100 200 Q 200 125 300 200"
                      fill="none"
                      stroke="url(#lineGrad)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  </svg>

                  {/* Location Points */}
                  {[
                    { x: 50, y: 125 },
                    { x: 350, y: 125 },
                    { x: 100, y: 50 },
                    { x: 300, y: 50 },
                    { x: 100, y: 200 },
                    { x: 300, y: 200 },
                    { x: 200, y: 125 },
                  ].map((point, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 rounded-full bg-orange-500 animate-pulse"
                      style={{
                        left: `${(point.x / 400) * 100}%`,
                        top: `${(point.y / 250) * 100}%`,
                        transform: 'translate(-50%, -50%)',
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}

                  {/* Center Hub */}
                  <div
                    className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 shadow-lg"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {[
                    { value: '220+', label: 'Countries' },
                    { value: '50+', label: 'Carriers' },
                    { value: '99.5%', label: 'Uptime' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                      <p className="text-sm text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">Enterprise Ready</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
