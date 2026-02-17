'use client';

import Container from '../ui/Container';

const partners = [
  'TechStyle',
  'GreenBox',
  'FreshMart',
  'StyleHub',
  'ElectroMart',
  'HomeGoods',
  'FashionFirst',
  'BeautyBox',
  'SportZone',
  'BookWorld',
];

export default function Partners() {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <Container>
        <p className="text-center text-slate-500 mb-8 text-sm font-medium uppercase tracking-wider">
          Trusted by Leading Brands
        </p>
        
        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="w-32 h-12 bg-slate-100 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 group-hover:bg-slate-200">
                  <span className="text-slate-600 font-semibold">{partner}</span>
                </div>
              </div>
            ))}
            {/* Duplicate for infinite scroll */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="w-32 h-12 bg-slate-100 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 group-hover:bg-slate-200">
                  <span className="text-slate-600 font-semibold">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
