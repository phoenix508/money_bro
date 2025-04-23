import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Passive Income Guide | The Money Bro',
  description: 'Learn about building multiple streams of passive income through dividends, real estate, digital products, and more.',
};

export default function PassiveIncomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-300 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Passive Income Streams</h1>
              <p className="text-xl mb-8">
                Discover strategies to generate income that works for you 24/7, creating financial freedom and flexibility.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Passive Income Benefits</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 p-4 rounded-lg text-center">
                    <h4 className="font-bold mb-1">Financial Freedom</h4>
                    <p className="text-sm">Break free from the paycheck cycle</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg text-center">
                    <h4 className="font-bold mb-1">Time Leverage</h4>
                    <p className="text-sm">Income without trading hours for dollars</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg text-center">
                    <h4 className="font-bold mb-1">Wealth Building</h4>
                    <p className="text-sm">Compound your earnings over time</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg text-center">
                    <h4 className="font-bold mb-1">Risk Mitigation</h4>
                    <p className="text-sm">Diversify your income sources</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passive Income Fundamentals */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Passive Income Fundamentals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-full mb-4 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">What Is Passive Income?</h3>
              <p className="text-gray-600 mb-4">
                Income that requires minimal ongoing effort to generate and maintain, allowing you to earn money while you sleep.
              </p>
              <Link href="/blog/passive-income-basics" className="text-accent hover:underline font-medium inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-full mb-4 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Upfront Investment</h3>
              <p className="text-gray-600 mb-4">
                Understanding the time, money, or skill investment required before a stream becomes truly passive.
              </p>
              <Link href="/blog/passive-income-myths" className="text-accent hover:underline font-medium inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-full mb-4 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Income Diversity</h3>
              <p className="text-gray-600 mb-4">
                Creating multiple passive income streams to build resilience and maximize earning potential.
              </p>
              <Link href="/blog/multiple-income-streams" className="text-accent hover:underline font-medium inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Passive Income Streams */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Passive Income Streams</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
              <h3 className="text-xl font-bold mb-4">Dividend Investing</h3>
              <p className="text-gray-600 mb-4">
                Investing in dividend-paying stocks, ETFs, or mutual funds that distribute regular income to shareholders.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Points:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Quarterly or monthly income from established companies</li>
                  <li>Dividend growth strategies for increasing income over time</li>
                  <li>Reinvestment opportunities for compounding returns</li>
                  <li>Tax considerations for dividend income</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
              <h3 className="text-xl font-bold mb-4">Rental Real Estate</h3>
              <p className="text-gray-600 mb-4">
                Generating monthly income from residential or commercial property rentals, with potential for property appreciation.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Points:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Long-term wealth building through mortgage paydown</li>
                  <li>Tax advantages through depreciation and write-offs</li>
                  <li>Property management options to minimize time commitment</li>
                  <li>Short-term rental strategies (Airbnb, VRBO)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
              <h3 className="text-xl font-bold mb-4">Digital Products</h3>
              <p className="text-gray-600 mb-4">
                Creating and selling ebooks, courses, templates, or software that can be sold repeatedly without additional work.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Points:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Minimal distribution costs with high profit margins</li>
                  <li>Leveraging existing knowledge or skills</li>
                  <li>Automating sales and delivery processes</li>
                  <li>Scaling through marketing and partnerships</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
              <h3 className="text-xl font-bold mb-4">Content Creation</h3>
              <p className="text-gray-600 mb-4">
                Building blogs, YouTube channels, or podcasts that generate advertising, affiliate, or sponsorship revenue.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Points:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Building valuable content once that pays for years</li>
                  <li>Multiple monetization strategies (ads, affiliates, products)</li>
                  <li>Growing audience and engagement over time</li>
                  <li>SEO and platform algorithms for sustained traffic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Passive Income Strategies */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">More Passive Income Opportunities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Peer-to-Peer Lending</h3>
              <p className="text-gray-600 mb-4">
                Lending money to individuals or small businesses through platforms that match lenders with borrowers.
              </p>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                  6-12% Potential Returns
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Royalties</h3>
              <p className="text-gray-600 mb-4">
                Earning ongoing income from creative works, patents, or intellectual property you've created or acquired.
              </p>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded text-sm">
                  Creative Income
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">REITs</h3>
              <p className="text-gray-600 mb-4">
                Investing in Real Estate Investment Trusts that own and manage income-producing properties.
              </p>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded text-sm">
                  5-10% Dividend Yields
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Automated Businesses</h3>
              <p className="text-gray-600 mb-4">
                Building systems and teams that allow businesses to run with minimal owner involvement.
              </p>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded text-sm">
                  Scalable Income
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">High-Yield Savings</h3>
              <p className="text-gray-600 mb-4">
                Placing money in high-yield savings accounts, CDs, or money market funds for safe, passive interest.
              </p>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">
                  Low Risk
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Affiliate Marketing</h3>
              <p className="text-gray-600 mb-4">
                Earning commissions by promoting other companies' products through your platform or website.
              </p>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded text-sm">
                  Marketing-Based
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Getting Started with Passive Income</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-white">
                <span className="text-xl font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Assess Your Resources</h3>
                <p className="text-gray-300">
                  Evaluate your available capital, time, skills, and interests to determine which passive income streams are most viable for you.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-white">
                <span className="text-xl font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Start Small and Learn</h3>
                <p className="text-gray-300">
                  Begin with one passive income stream that requires minimal investment and use it to learn the process before scaling.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-white">
                <span className="text-xl font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Build Systems</h3>
                <p className="text-gray-300">
                  Create or leverage systems that automate as much of the work as possible to minimize ongoing time investment.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-white">
                <span className="text-xl font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Reinvest Earnings</h3>
                <p className="text-gray-300">
                  Use early passive income to fund additional streams, creating a compounding effect on your passive income growth.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-white">
                <span className="text-xl font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Monitor and Optimize</h3>
                <p className="text-gray-300">
                  Regularly review performance of your passive income streams and optimize or eliminate those that aren't meeting expectations.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-white">
                <span className="text-xl font-bold">6</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Diversify Streams</h3>
                <p className="text-gray-300">
                  Once you've mastered one passive income stream, begin building others to create resilience and maximize total income.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Overcoming Passive Income Challenges</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Initial Time Investment</h3>
                <p className="text-gray-600">
                  Many passive income streams require significant upfront work. Set realistic expectations and dedicate consistent time to building your asset.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Capital Requirements</h3>
                <p className="text-gray-600">
                  Some income streams need significant starting capital. Start with accessible options or save specifically for passive income investments.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Market Fluctuations</h3>
                <p className="text-gray-600">
                  Income may vary with economic conditions. Build diversified streams across different sectors and asset classes to minimize impact.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Maintenance Requirements</h3>
                <p className="text-gray-600">
                  Few income streams are completely passive. Plan for periodic maintenance and updates to keep your income sources productive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Building Your Passive Income Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Use our calculators to project potential passive income growth and explore our detailed guides to various income streams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/calculators#passive-income" 
              className="bg-white text-accent hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Try Our Calculators
            </Link>
            <Link 
              href="/blog/category/passive-income" 
              className="bg-accent-dark hover:bg-accent-dark/90 text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Explore Passive Income Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 