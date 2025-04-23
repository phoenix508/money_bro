'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">The Money Bro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/blog" className="text-dark hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/investing" className="text-dark hover:text-primary transition-colors">
              Investing
            </Link>
            <Link href="/real-estate" className="text-dark hover:text-primary transition-colors">
              Real Estate
            </Link>
            <Link href="/passive-income" className="text-dark hover:text-primary transition-colors">
              Passive Income
            </Link>
            <Link href="/expense-management" className="text-dark hover:text-primary transition-colors">
              Expense Management
            </Link>
            <Link href="/about" className="text-dark hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-dark focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-3">
            <Link
              href="/blog"
              className="block text-dark hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/investing"
              className="block text-dark hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Investing
            </Link>
            <Link
              href="/real-estate"
              className="block text-dark hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Real Estate
            </Link>
            <Link
              href="/passive-income"
              className="block text-dark hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Passive Income
            </Link>
            <Link
              href="/expense-management"
              className="block text-dark hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Expense Management
            </Link>
            <Link
              href="/about"
              className="block text-dark hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 