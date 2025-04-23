import Link from 'next/link';
import Image from 'next/image';
import { getLatestPosts, getPopularPosts } from '@/lib/data/posts';

export default function Home() {
  const latestPosts = getLatestPosts(3);
  const popularPosts = getPopularPosts().slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Take Control of Your Financial Future</h1>
              <p className="text-xl mb-8">
                Learn practical strategies for building wealth, investing wisely, and achieving financial independence with The Money Bro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/blog" 
                  className="bg-white text-primary hover:bg-gray-100 py-3 px-6 rounded-md font-semibold text-center transition-colors"
                >
                  Explore Articles
                </Link>
                <Link 
                  href="/calculators" 
                  className="bg-transparent border-2 border-white hover:bg-white/10 py-3 px-6 rounded-md font-semibold text-center transition-colors"
                >
                  Financial Calculators
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative h-72 md:h-96 w-full">
                <Image 
                  src="/financial-growth.svg"
                  alt="Financial Growth Illustration"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-4"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <Link href="/blog" className="text-primary hover:underline font-semibold">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] border border-gray-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    <Link href={`/blog/${post.slug}`} className="text-dark hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.publishedDate}</span>
                    <span className="bg-blue-100 text-primary text-xs py-1 px-2 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Topics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Building Your Financial Knowledge</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Investing</h3>
              <p className="text-gray-600 mb-4">
                Learn how to build a diversified portfolio and grow your wealth through smart investing strategies.
              </p>
              <Link href="/investing" className="text-primary hover:underline font-medium">
                Learn More
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Estate</h3>
              <p className="text-gray-600 mb-4">
                Discover strategies for building wealth through real estate investing and property ownership.
              </p>
              <Link href="/real-estate" className="text-primary hover:underline font-medium">
                Learn More
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Passive Income</h3>
              <p className="text-gray-600 mb-4">
                Explore ways to create income streams that work for you even while you sleep.
              </p>
              <Link href="/passive-income" className="text-primary hover:underline font-medium">
                Learn More
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expense Management</h3>
              <p className="text-gray-600 mb-4">
                Learn proven techniques to reduce expenses and maximize your savings rate.
              </p>
              <Link href="/expense-management" className="text-primary hover:underline font-medium">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Most Popular Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularPosts.map((post) => (
              <div key={post.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="p-6 flex-1">
                  <span className="bg-blue-100 text-primary text-xs py-1 px-2 rounded-full mb-3 inline-block">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3">
                    <Link href={`/blog/${post.slug}`} className="text-dark hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                  <div className="mt-auto">
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="text-primary hover:underline font-medium"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Financial Future?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of others who are taking control of their finances and building wealth for the future.
          </p>
          <Link 
            href="/blog" 
            className="bg-primary hover:bg-primary/90 py-3 px-8 rounded-md font-semibold inline-block transition-colors"
          >
            Start Learning Today
          </Link>
        </div>
      </section>
    </div>
  );
}
