'use client';

import { ArrowUpRight } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import { ScrollReveal } from '../animations';
import { caseStudies } from '@/data';

export default function CaseStudies() {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how businesses transformed their logistics operations 
              and achieved remarkable results with Aruna Logistics Solution.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.id} delay={index * 0.1}>
              <Card className="h-full group cursor-pointer">
                <div className="flex flex-col h-full">
                  {/* Company Logo Placeholder */}
                  <div className="h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors">
                    <span className="text-xl font-bold text-slate-400 group-hover:text-orange-500 transition-colors">
                      {study.company}
                    </span>
                  </div>

                  {/* Result Badge */}
                  <div className="inline-flex self-start px-4 py-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-4">
                    {study.result}
                  </div>

                  {/* Challenge */}
                  <p className="text-slate-600 mb-4 flex-grow">
                    {study.challenge}
                  </p>

                  {/* Result Detail */}
                  <p className="text-sm text-slate-500 mb-4">
                    {study.resultDetail}
                  </p>

                  {/* Read More Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors group/link"
                  >
                    Read Case Study
                    <ArrowUpRight className="ml-1 w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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
