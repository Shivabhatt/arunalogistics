'use client';

import { Mail, Phone, MapPin, Send, Clock, Headphones, MessageSquare } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { ScrollReveal } from '@/components/animations';
import Card from '@/components/ui/Card';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    detail: ['hello@arunalogistics.com', 'support@arunalogistics.com'],
    subtext: 'We reply within 2 hours',
    action: 'mailto:hello@arunalogistics.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    detail: ['+1 (555) 123-4567', '+1 (555) 765-4321'],
    subtext: 'Mon-Fri, 9am-6pm EST',
    action: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: ['123 Logistics Way', 'Shipping City, SC 12345'],
    subtext: 'Main Office',
    action: '#',
  },
];

const supportOptions = [
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    description: 'Get immediate assistance from our dedicated support team',
    availability: 'Available 24/7',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with our representatives in real-time',
    availability: 'Response in 2-5 minutes',
  },
  {
    icon: Clock,
    title: 'Scheduled Consultation',
    description: 'Book a meeting with our logistics experts',
    availability: 'Book your slot',
  },
];

const offices = [
  {
    name: 'Los Angeles Hub',
    address: '456 Harbor Blvd, Los Angeles, CA 90012',
    phone: '+1 (555) 111-2222',
    hours: '24/7 Operations',
  },
  {
    name: 'New York Office',
    address: '789 Trade Center, New York, NY 10001',
    phone: '+1 (555) 333-4444',
    hours: 'Mon-Fri: 8am-8pm EST',
  },
  {
    name: 'Chicago Facility',
    address: '321 Freight Ave, Chicago, IL 60601',
    phone: '+1 (555) 555-6666',
    hours: '24/7 Operations',
  },
];

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a portfolio demo.');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-900 to-orange-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contactGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactGrid)" />
          </svg>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">
                Touch
              </span>
            </h1>
            <p className="text-xl text-slate-300">
              Have questions about our services? Need logistics support? 
              Our team is here to help you 24/7.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <ScrollReveal key={method.title} delay={index * 0.1}>
                <a 
                  href={method.action}
                  className="block"
                >
                  <Card className="text-center h-full hover:shadow-xl transition-all duration-300 group">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 mb-6 group-hover:from-orange-500 group-hover:to-purple-600 transition-all duration-300">
                      <method.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {method.title}
                    </h3>
                    {method.detail.map((line) => (
                      <p key={line} className="text-slate-700 font-medium mb-1">
                        {line}
                      </p>
                    ))}
                    <p className="text-sm text-slate-500 mt-3">
                      {method.subtext}
                    </p>
                  </Card>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Form and Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      type="text"
                      placeholder="John Doe"
                      required
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label="Company"
                      type="text"
                      placeholder="Your Company"
                    />
                    <Input
                      label="Phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <Input
                    label="Subject"
                    type="text"
                    placeholder="How can we help you?"
                    required
                  />
                  <Textarea
                    label="Message"
                    placeholder="Tell us about your logistics needs..."
                    rows={6}
                    required
                  />
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Support Options */}
            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Support Options
                </h2>
                <div className="space-y-6">
                  {supportOptions.map((option) => (
                    <Card key={option.title} className="hover:shadow-lg transition-all duration-300">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                            <option.icon className="w-6 h-6 text-purple-500" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-bold text-slate-900 mb-1">
                            {option.title}
                          </h3>
                          <p className="text-slate-600 mb-2">
                            {option.description}
                          </p>
                          <span className="text-sm text-green-600 font-medium">
                            {option.availability}
                          </span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Our Locations
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Visit our offices and logistics facilities across the country
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <ScrollReveal key={office.name} delay={index * 0.1}>
                <Card>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {office.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-slate-600">
                      <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <Container>
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <div className="h-96 bg-slate-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-400 text-lg">Interactive Map Integration Available</p>
                  <p className="text-slate-500 text-sm mt-2">Google Maps / Mapbox Ready</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
