'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Package } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Process', href: '/process' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${scrolled ? 'bg-orange-500' : 'bg-white'}`}>
              <Package className={`w-6 h-6 ${scrolled ? 'text-white' : 'text-orange-500'}`} />
            </div>
            <span className={`text-2xl font-bold ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              Aruna Logistics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className={`font-medium transition-colors duration-200 hover:text-orange-500 ${
                  scrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/quote">
              <Button
                variant="primary"
                size="sm"
              >
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-slate-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-slate-900' : 'text-white'}`} />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                    }
                    handleNavClick(link.href);
                  }}
                  className="px-6 py-3 text-slate-700 font-medium hover:bg-slate-50 hover:text-orange-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-6 py-3">
                <Link href="/quote" className="block">
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
