'use client';

import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, User, Tag, Search } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations';
import { useState } from 'react';

const categories = [
  'All',
  'Industry Insights',
  'Technology',
  'Supply Chain',
  'Company News',
  'Tips & Guides',
];

const featuredPost = {
  title: 'The Future of Last-Mile Delivery: Trends Shaping 2026',
  excerpt:
    'Explore how AI-powered route optimization, drone deliveries, and sustainable packaging are transforming the last mile of logistics. Learn what these innovations mean for your business.',
  author: 'Aruna Logistics Team',
  date: 'February 10, 2026',
  readTime: '8 min read',
  category: 'Industry Insights',
  image: '📦',
};

const blogPosts = [
  {
    title: 'How to Reduce Shipping Costs Without Compromising Speed',
    excerpt:
      'Discover proven strategies to optimize your shipping expenses while maintaining fast delivery times for your customers.',
    author: 'Rahul Sharma',
    date: 'February 5, 2026',
    readTime: '6 min read',
    category: 'Tips & Guides',
    image: '💰',
  },
  {
    title: 'Warehouse Automation: A Complete Guide for E-Commerce Brands',
    excerpt:
      'From robotic picking systems to AI inventory management, learn how automation can revolutionize your warehouse operations.',
    author: 'Priya Patel',
    date: 'January 28, 2026',
    readTime: '10 min read',
    category: 'Technology',
    image: '🤖',
  },
  {
    title: 'Building a Resilient Supply Chain in Uncertain Times',
    excerpt:
      'Key strategies for creating supply chain resilience including diversification, real-time visibility, and contingency planning.',
    author: 'Vikram Singh',
    date: 'January 20, 2026',
    readTime: '7 min read',
    category: 'Supply Chain',
    image: '🔗',
  },
  {
    title: 'Aruna Logistics Expands to 50 New Cities Across India',
    excerpt:
      'We are thrilled to announce our expansion into 50 new cities, bringing our total coverage to 250+ cities nationwide.',
    author: 'Aruna Logistics Team',
    date: 'January 15, 2026',
    readTime: '4 min read',
    category: 'Company News',
    image: '🚀',
  },
  {
    title: 'Sustainable Logistics: Reducing Carbon Footprint in Shipping',
    excerpt:
      'Learn about eco-friendly packaging, electric delivery vehicles, and carbon offset programs transforming the logistics industry.',
    author: 'Anita Desai',
    date: 'January 8, 2026',
    readTime: '9 min read',
    category: 'Industry Insights',
    image: '🌱',
  },
  {
    title: 'Real-Time Tracking: Why Visibility Matters for Your Business',
    excerpt:
      'How real-time shipment tracking improves customer satisfaction, reduces support tickets, and builds brand trust.',
    author: 'Rahul Sharma',
    date: 'December 30, 2025',
    readTime: '5 min read',
    category: 'Technology',
    image: '📍',
  },
  {
    title: '5 Common Shipping Mistakes and How to Avoid Them',
    excerpt:
      'From incorrect labeling to poor packaging, learn about the most common shipping mistakes that cost businesses money.',
    author: 'Priya Patel',
    date: 'December 22, 2025',
    readTime: '6 min read',
    category: 'Tips & Guides',
    image: '⚠️',
  },
  {
    title: 'The Rise of Same-Day Delivery: Meeting Customer Expectations',
    excerpt:
      'How logistics companies are adapting to the growing demand for same-day delivery and what it means for the industry.',
    author: 'Vikram Singh',
    date: 'December 15, 2025',
    readTime: '7 min read',
    category: 'Supply Chain',
    image: '⚡',
  },
  {
    title: 'Aruna Logistics Wins "Best Logistics Partner 2025" Award',
    excerpt:
      'We are honored to receive the prestigious award recognizing our commitment to excellence in logistics services.',
    author: 'Aruna Logistics Team',
    date: 'December 8, 2025',
    readTime: '3 min read',
    category: 'Company News',
    image: '🏆',
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-orange-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="blogGrid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blogGrid)" />
          </svg>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl mb-6">
              <BookOpen className="w-10 h-10 text-orange-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
                Blog & Insights
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Expert insights, industry trends, and tips to optimize your
              logistics and supply chain operations
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <Container>
          <ScrollReveal>
            <Card className="overflow-hidden bg-gradient-to-r from-slate-50 to-orange-50 border-2 border-orange-100">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-shrink-0 w-full lg:w-80 h-64 bg-gradient-to-br from-orange-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl">{featuredPost.image}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button variant="primary" size="lg">
                    Read Article
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </Container>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <Container>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                No articles found
              </h3>
              <p className="text-slate-600">
                Try adjusting your search or filter to find what you&apos;re
                looking for.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <ScrollReveal key={post.title} delay={index * 0.08}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mb-6 flex items-center justify-center group-hover:scale-[1.02] transition-transform">
                      <span className="text-6xl">{post.image}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-medium text-orange-600">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date.split(',')[0]}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <ScrollReveal delay={0.3}>
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </ScrollReveal>
          )}
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <BookOpen className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get the latest logistics insights, industry news, and tips delivered
              straight to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Button variant="primary" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
