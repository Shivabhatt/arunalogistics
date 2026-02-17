'use client';

import { useState } from 'react';
import { Package, ArrowRight, CheckCircle2, Truck, Globe, Clock, Shield } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { ScrollReveal } from '@/components/animations';

const benefits = [
  'Instant rate comparison',
  'No hidden fees',
  'Free pickup available',
  'Insurance included',
  '24/7 tracking',
  'Dedicated support',
];

const serviceTypes = [
  {
    icon: Truck,
    title: 'Express Delivery',
    description: 'Same-day & next-day',
    popular: true,
  },
  {
    icon: Package,
    title: 'Standard Shipping',
    description: '2-5 business days',
    popular: false,
  },
  {
    icon: Globe,
    title: 'International',
    description: 'Worldwide shipping',
    popular: false,
  },
];

const features = [
  {
    icon: Clock,
    title: '99.5% On-Time',
    description: 'Delivery success rate',
  },
  {
    icon: Shield,
    title: 'Insured Shipments',
    description: 'Up to $10,000 coverage',
  },
  {
    icon: Truck,
    title: '50+ Carriers',
    description: 'Best rates guaranteed',
  },
];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: 'express',
    fromZip: '',
    toZip: '',
    weight: '',
    dimensions: '',
    quantity: '1',
    requirements: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Quote request submitted! This is a portfolio demo.');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-orange-500 via-orange-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="quoteGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#quoteGrid)" />
          </svg>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <Package className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get Your Free Shipping Quote
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Compare rates from 50+ carriers instantly. No commitments, no hidden fees.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-xl border-2 border-orange-100">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      Request a Quote
                    </h2>
                    <p className="text-slate-600">
                      Fill in the details below and we'll get back to you within 30 minutes
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step Indicator */}
                    <div className="flex items-center justify-between mb-8">
                      <div className={`flex items-center gap-2 ${step >= 1 ? 'text-orange-500' : 'text-slate-300'}`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-orange-500 bg-orange-50' : 'border-slate-300'}`}>
                          1
                        </div>
                        <span className="font-medium hidden sm:inline">Contact Info</span>
                      </div>
                      <div className="h-0.5 flex-grow mx-4 bg-slate-300" />
                      <div className={`flex items-center gap-2 ${step >= 2 ? 'text-orange-500' : 'text-slate-300'}`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-orange-500 bg-orange-50' : 'border-slate-300'}`}>
                          2
                        </div>
                        <span className="font-medium hidden sm:inline">Shipment Details</span>
                      </div>
                      <div className="h-0.5 flex-grow mx-4 bg-slate-300" />
                      <div className={`flex items-center gap-2 ${step >= 3 ? 'text-orange-500' : 'text-slate-300'}`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-orange-500 bg-orange-50' : 'border-slate-300'}`}>
                          3
                        </div>
                        <span className="font-medium hidden sm:inline">Submit</span>
                      </div>
                    </div>

                    {step === 1 && (
                      <div className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <Input
                            label="Full Name *"
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                          <Input
                            label="Email *"
                            name="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <Input
                            label="Phone Number *"
                            name="phone"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                          <Input
                            label="Company Name"
                            name="company"
                            type="text"
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={handleInputChange}
                          />
                        </div>
                        <Button type="button" variant="primary" size="lg" className="w-full" onClick={() => setStep(2)}>
                          Next Step <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-6">
                        {/* Service Type Selection */}
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-3">
                            Select Service Type *
                          </label>
                          <div className="grid grid-cols-3 gap-4">
                            {serviceTypes.map((service) => (
                              <button
                                type="button"
                                key={service.title}
                                onClick={() => setFormData({ ...formData, serviceType: service.title.toLowerCase().replace(' ', '-') })}
                                className={`p-4 rounded-lg border-2 text-center transition-all ${
                                  formData.serviceType === service.title.toLowerCase().replace(' ', '-')
                                    ? 'border-orange-500 bg-orange-50'
                                    : 'border-slate-200 hover:border-orange-300'
                                }`}
                              >
                                <service.icon className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                                <div className="font-semibold text-slate-900 text-sm mb-1">{service.title}</div>
                                <div className="text-xs text-slate-500">{service.description}</div>
                                {service.popular && (
                                  <span className="inline-block mt-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                                    Popular
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <Input
                            label="From ZIP Code *"
                            name="fromZip"
                            type="text"
                            placeholder="10001"
                            value={formData.fromZip}
                            onChange={handleInputChange}
                            required
                          />
                          <Input
                            label="To ZIP Code *"
                            name="toZip"
                            type="text"
                            placeholder="90001"
                            value={formData.toZip}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <Input
                            label="Weight (lbs) *"
                            name="weight"
                            type="text"
                            placeholder="10"
                            value={formData.weight}
                            onChange={handleInputChange}
                            required
                          />
                          <Input
                            label="Quantity"
                            name="quantity"
                            type="number"
                            placeholder="1"
                            value={formData.quantity}
                            onChange={handleInputChange}
                          />
                        </div>

                        <Input
                          label="Dimensions (L x W x H in inches)"
                          name="dimensions"
                          type="text"
                          placeholder="12 x 8 x 6"
                          value={formData.dimensions}
                          onChange={handleInputChange}
                        />

                        <div className="flex gap-4">
                          <Button type="button" variant="outline" size="lg" onClick={() => setStep(1)}>
                            Back
                          </Button>
                          <Button type="button" variant="primary" size="lg" className="flex-grow" onClick={() => setStep(3)}>
                            Review Quote <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-6">
                        <div className="bg-slate-50 rounded-lg p-6 space-y-4">
                          <h3 className="font-bold text-slate-900 text-lg mb-4">Quote Summary</h3>
                          <div className="grid sm:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-slate-500">Name:</span>
                              <span className="ml-2 font-medium text-slate-900">{formData.name}</span>
                            </div>
                            <div>
                              <span className="text-slate-500">Email:</span>
                              <span className="ml-2 font-medium text-slate-900">{formData.email}</span>
                            </div>
                            <div>
                              <span className="text-slate-500">Service:</span>
                              <span className="ml-2 font-medium text-slate-900 capitalize">{formData.serviceType.replace('-', ' ')}</span>
                            </div>
                            <div>
                              <span className="text-slate-500">Route:</span>
                              <span className="ml-2 font-medium text-slate-900">{formData.fromZip} → {formData.toZip}</span>
                            </div>
                            <div>
                              <span className="text-slate-500">Weight:</span>
                              <span className="ml-2 font-medium text-slate-900">{formData.weight} lbs</span>
                            </div>
                            <div>
                              <span className="text-slate-500">Quantity:</span>
                              <span className="ml-2 font-medium text-slate-900">{formData.quantity}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Button type="button" variant="outline" size="lg" onClick={() => setStep(2)}>
                            Back
                          </Button>
                          <Button type="submit" variant="primary" size="lg" className="flex-grow">
                            Submit Quote Request
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <ScrollReveal>
                  <Card className="bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                    <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                    <div className="space-y-4">
                      {features.map((feature) => (
                        <div key={feature.title} className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-5 h-5 text-orange-400" />
                          </div>
                          <div>
                            <div className="font-semibold mb-1">{feature.title}</div>
                            <div className="text-sm text-slate-300">{feature.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <Card>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Need Help?</h3>
                    <p className="text-slate-600 mb-4 text-sm">
                      Our logistics experts are available to answer your questions and help you find the best shipping solution.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" onClick={() => window.location.href = '/contact'}>
                      Contact Support
                    </Button>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
