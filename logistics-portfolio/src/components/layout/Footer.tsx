import Link from 'next/link';
import { Package, Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Container from '../ui/Container';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Process', href: '/process' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'All Services', href: '/services' },
    { name: 'Express Parcel', href: '/services' },
    { name: 'Freight Services', href: '/services' },
    { name: 'International Shipping', href: '/services' },
  ],
  resources: [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Get Quote', href: '/quote' },
    { name: 'Track Shipment', href: '#' },
    { name: 'Help Center', href: '/contact' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-orange-500">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Aruna Logistics</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              Aruna Logistics Solution - Your trusted partner for end-to-end logistics excellence. 
              We deliver more than packages, we deliver promises.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-slate-800 rounded-lg hover:bg-orange-500 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-orange-500" />
                <span>hello@arunalogistics.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>123 Logistics Way, Shipping City, SC 12345</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 Aruna Logistics Solution. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
