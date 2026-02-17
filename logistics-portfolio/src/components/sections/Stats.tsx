'use client';

import Container from '../ui/Container';
import { Counter } from '../animations';
import { ScrollReveal } from '../animations';
import { stats } from '@/data';

export default function Stats() {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.id} delay={index * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 mb-4">
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                  {stat.id === 4 ? (
                    <span>{stat.value}%</span>
                  ) : stat.id === 1 ? (
                    <Counter end={1} suffix="M+" className="" />
                  ) : (
                    <Counter end={stat.value} suffix={stat.suffix} className="" />
                  )}
                </div>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
