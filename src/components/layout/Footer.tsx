'use client';

import { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Site Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">The Money Bro</h3>
            <p className="text-gray-300 mb-4">
              Empowering you with personal finance skills for financial independence
              and wealth building.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/investing" className="text-gray-300 hover:text-white transition-colors">
                  Investing
                </Link>
              </li>
              <li>
                <Link href="/real-estate" className="text-gray-300 hover:text-white transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/calculators" className="text-gray-300 hover:text-white transition-colors">
                  Financial Calculators
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-300 hover:text-white transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="text-gray-300 hover:text-white transition-colors">
                  Financial Glossary
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            {subscribed ? (
              <p className="text-green-400">Thank you for subscribing!</p>
            ) : (
              <>
                <p className="text-gray-300 mb-3">
                  Subscribe to our newsletter for financial tips and insights.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Money Bro. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 