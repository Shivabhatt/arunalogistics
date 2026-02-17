'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from '../ui/Container';
import { ScrollReveal } from '../animations';
import { testimonials } from '@/data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what businesses 
              across industries have to say about Aruna Logistics Solution.
            </p>
          </div>
        </ScrollReveal>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 md:p-12">
            <Quote className="w-12 h-12 text-orange-200 mb-6" />
            
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-slate-500">
                  {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-orange-500 w-8'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
