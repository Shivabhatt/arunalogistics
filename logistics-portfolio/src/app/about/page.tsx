'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Rocket, TrendingUp, Building } from 'lucide-react';
import Container from '@/components/ui/Container';
import { ScrollReveal } from '@/components/animations';

const values = [
  {
    icon: Target,
    title: 'Customer First',
    description: 'Every decision we make starts with our customers\' needs in mind.',
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'We constantly push boundaries to deliver cutting-edge solutions.',
  },
  {
    icon: Heart,
    title: 'Reliability',
    description: 'Trust is earned through consistent, dependable performance.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of partnerships and teamwork.',
  },
];

const team = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Co-Founder',
    image: '/team/alex.jpg',
  },
  {
    name: 'Sarah Chen',
    role: 'COO',
    image: '/team/sarah.jpg',
  },
  {
    name: 'Michael Williams',
    role: 'CTO',
    image: '/team/michael.jpg',
  },
  {
    name: 'Priya Patel',
    role: 'VP of Operations',
    image: '/team/priya.jpg',
  },
  {
    name: 'David Kim',
    role: 'VP of Sales',
    image: '/team/david.jpg',
  },
  {
    name: 'Emily Brown',
    role: 'VP of Marketing',
    image: '/team/emily.jpg',
  },
];

const milestones = [
  {
    year: '2018',
    icon: Building,
    title: 'Company Founded',
    description: 'Aruna Logistics Solution was born with a vision to transform logistics.',
  },
  {
    year: '2019',
    icon: Rocket,
    title: 'First 100 Clients',
    description: 'Reached our first major milestone of 100 active clients.',
  },
  {
    year: '2021',
    icon: TrendingUp,
    title: '1 Million Shipments',
    description: 'Crossed 1 million successful deliveries milestone.',
  },
  {
    year: '2023',
    icon: Award,
    title: 'Industry Recognition',
    description: 'Named "Best Logistics Platform" by Industry Awards.',
  },
  {
    year: '2025',
    icon: Users,
    title: '500+ Brand Partners',
    description: 'Growing family of over 500 trusted brand partners.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-900 to-purple-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="aboutGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#aboutGrid)" />
          </svg>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-[128px] opacity-30" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full filter blur-[128px] opacity-20" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
                Aruna Logistics Solution
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300">
              We&apos;re on a mission to make logistics simple, affordable, and 
              accessible for businesses of all sizes.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                    Aruna Logistics Solution was founded in 2018 with a simple belief: every business 
                    deserves access to world-class logistics solutions, regardless of size.
                  </p>
                  <p>
                    What started as a small team with big dreams has grown into a 
                    comprehensive logistics platform serving over 500 brands across 
                    200+ cities.
                  </p>
                  <p>
                    Today, we process millions of shipments annually, helping businesses 
                    save time, reduce costs, and delight their customers with exceptional 
                    delivery experiences.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-100 to-purple-100 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                      <p className="text-4xl font-bold text-orange-500 mb-2">500+</p>
                      <p className="text-slate-600">Brand Partners</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                      <p className="text-4xl font-bold text-purple-500 mb-2">1M+</p>
                      <p className="text-slate-600">Shipments</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                      <p className="text-4xl font-bold text-blue-500 mb-2">200+</p>
                      <p className="text-slate-600">Cities</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                      <p className="text-4xl font-bold text-green-500 mb-2">50+</p>
                      <p className="text-slate-600">Carriers</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm h-full">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To empower businesses with seamless, technology-driven logistics 
                  solutions that reduce costs, save time, and create exceptional 
                  customer experiences.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm h-full">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To become the most trusted logistics partner for businesses worldwide, 
                  setting new standards for reliability, innovation, and customer 
                  satisfaction in the industry.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                These core principles guide everything we do at Aruna Logistics Solution.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-purple-100 mb-6">
                    <value.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                The passionate people behind Aruna Logistics Solution&apos;s success.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-purple-500 mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-slate-500">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Key milestones that shaped Aruna Logistics Solution into what it is today.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 hidden md:block" />

            {milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year} delay={index * 0.1}>
                <div className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 items-center justify-center z-10">
                    <milestone.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
