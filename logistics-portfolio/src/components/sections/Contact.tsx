'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Input, Textarea } from '../ui/Input';
import { ScrollReveal } from '../animations';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'hello@arunalogistics.com',
    subtext: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    title: 'Call Us',
    detail: '+1 (555) 123-4567',
    subtext: 'Mon-Fri, 9am-6pm EST',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: '123 Logistics Way',
    subtext: 'Shipping City, SC 12345',
  },
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission is UI-only for portfolio
    alert('Thank you for your message! This is a portfolio demo.');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Have questions about our services? Ready to start shipping? 
              Reach out and our team will get back to you shortly.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Send us a Message
              </h3>
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
                <Textarea
                  label="Message"
                  placeholder="Tell us about your shipping needs..."
                  rows={5}
                  required
                />
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right">
            <div className="flex flex-col justify-center h-full">
              <div className="space-y-8">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex gap-5 p-6 bg-slate-50 rounded-xl hover:bg-orange-50 transition-colors group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <info.icon className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-slate-700 font-medium">{info.detail}</p>
                      <p className="text-sm text-slate-500">{info.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden border border-slate-200">
                <div className="h-48 bg-slate-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                    <p className="text-slate-400">Map Integration Available</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
