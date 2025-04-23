import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CounterSection from '@/components/sections/CounterSection';
import TestimonialCard from '@/components/ui/TestimonialCard';

export const metadata: Metadata = {
  title: 'About | The Money Bro',
  description: 'Learn about our mission to empower individuals with financial education and tools for building wealth and achieving financial independence.',
};

export default function AboutPage() {
  const testimonials = [
    {
      content: "The investment strategies I learned from The Money Bro helped me increase my portfolio returns by 15%. The clear explanations made complex topics accessible.",
      author: "Michael Chen",
      rating: 5
    },
    {
      content: "The budgeting templates and expense tracking methods completely transformed how I manage my finances. I'm saving an extra $500 monthly now!",
      author: "Sarah Johnson",
      rating: 5
    },
    {
      content: "The real estate investment guide gave me the confidence to purchase my first rental property. The step-by-step approach was exactly what I needed.",
      author: "David Thompson",
      rating: 5
    },
    {
      content: "I never understood passive income until I found The Money Bro. Now I have three income streams beyond my 9-5 job and financial stress is a thing of the past.",
      author: "Emma Rodriguez",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About The Money Bro</h1>
            <p className="text-xl mb-4">
              Empowering Financial Freedom Through Education
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Journey</h2>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-6">
                For the past decade, I've been on a mission to demystify personal finance, investing, and wealth building strategies for everyday people. With a background in finance and a passion for education, I created The Money Bro to share practical, actionable financial knowledge that works in the real world.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                What started as a personal blog has grown into a comprehensive resource for thousands of readers looking to take control of their financial future. From basic budgeting to advanced investment strategies, The Money Bro offers guidance for every stage of your financial journey.
              </p>
              <p className="text-lg text-gray-700">
                My approach is straightforward: explain complex financial concepts in simple terms, provide practical strategies you can implement today, and focus on sustainable wealth building rather than get-rich-quick schemes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <CounterSection 
        stats={[
          { label: "Readers Served", value: 50000 },
          { label: "Articles Published", value: 325 },
          { label: "Success Stories", value: 1240 }
        ]}
      />

      {/* Our Philosophy */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Financial Philosophy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Financial Education First</h3>
              <p className="text-gray-600">
                We believe financial literacy is the foundation of wealth. Our content aims to educate and empower, making complex topics accessible to everyone.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Long-Term Perspective</h3>
              <p className="text-gray-600">
                We focus on sustainable wealth building strategies that compound over time, not risky get-rich-quick schemes that rarely deliver.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Actionable Advice</h3>
              <p className="text-gray-600">
                Every piece of content we create includes practical steps you can take immediately to improve your financial situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics We Cover */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Topics We Cover</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-primary-dark"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Investing Fundamentals</h3>
                <p className="text-gray-600 mb-3">
                  Learn how to build and manage a diversified investment portfolio that aligns with your risk tolerance and financial goals.
                </p>
                <Link href="/investing" className="text-primary hover:underline font-medium inline-flex items-center">
                  Explore Investing
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-secondary-dark"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Real Estate Investing</h3>
                <p className="text-gray-600 mb-3">
                  Discover strategies for building wealth through property investments, from rental properties to REITs and everything in between.
                </p>
                <Link href="/real-estate" className="text-primary hover:underline font-medium inline-flex items-center">
                  Explore Real Estate
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-accent-dark"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Passive Income</h3>
                <p className="text-gray-600 mb-3">
                  Learn how to create multiple streams of income that work for you 24/7, building financial resilience and freedom.
                </p>
                <Link href="/passive-income" className="text-primary hover:underline font-medium inline-flex items-center">
                  Explore Passive Income
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Budgeting & Expense Management</h3>
                <p className="text-gray-600 mb-3">
                  Master your finances with effective budgeting techniques and smart expense optimization strategies.
                </p>
                <Link href="/expense-management" className="text-primary hover:underline font-medium inline-flex items-center">
                  Explore Expense Management
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-green-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Financial Independence</h3>
                <p className="text-gray-600 mb-3">
                  Chart your path to financial freedom with strategies for building wealth and creating a life on your own terms.
                </p>
                <Link href="/blog/category/financial-independence" className="text-primary hover:underline font-medium inline-flex items-center">
                  Explore Financial Independence
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-yellow-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Retirement Planning</h3>
                <p className="text-gray-600 mb-3">
                  Prepare for a secure retirement with strategies for saving, investing, and creating sustainable income streams.
                </p>
                <Link href="/blog/category/retirement" className="text-primary hover:underline font-medium inline-flex items-center">
                  Explore Retirement Planning
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Readers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl mb-8">
              Join our community of financial enthusiasts and get exclusive tips, guides, and inspiration delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-900 w-full sm:w-auto"
                required
              />
              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold transition-colors w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 