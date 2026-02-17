'use client';

import Container from '../ui/Container';
import Card from '../ui/Card';
import { ScrollReveal } from '../animations';
import { services } from '@/data';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs. 
              From express delivery to international shipping, we&apos;ve got you covered.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <Card className="h-full">
                <div className="flex flex-col h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 text-orange-500 mb-6">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center mt-4 text-orange-500 font-medium hover:text-orange-600 transition-colors"
                  >
                    Learn more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
