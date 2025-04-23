import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Investing Guide | The Money Bro',
  description: 'Learn about stock investing, portfolio diversification, and strategies for long-term wealth building.',
};

export default function InvestingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-300 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart Investing Strategies</h1>
              <p className="text-xl mb-8">
                Learn how to build wealth through smart investing, portfolio diversification, and managing risk.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Investment Growth</h3>
                  <p className="text-lg mb-6">$10,000 invested with 7% annual returns</p>
                  <div className="flex justify-between items-end mb-4">
                    <div className="flex flex-col items-center">
                      <div className="h-20 w-12 bg-blue-200 rounded-t-md"></div>
                      <p className="mt-2 text-sm">5 Years</p>
                      <p className="font-bold">$14,026</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-40 w-12 bg-blue-200 rounded-t-md"></div>
                      <p className="mt-2 text-sm">10 Years</p>
                      <p className="font-bold">$19,672</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-60 w-12 bg-blue-200 rounded-t-md"></div>
                      <p className="mt-2 text-sm">15 Years</p>
                      <p className="font-bold">$27,591</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-80 w-12 bg-blue-200 rounded-t-md"></div>
                      <p className="mt-2 text-sm">20 Years</p>
                      <p className="font-bold">$38,697</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Foundations Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Investment Foundations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Stock Market Basics</h3>
              <p className="text-gray-600 mb-4">
                Understand how the stock market works, different types of securities, and how to evaluate investments.
              </p>
              <Link href="/blog/category/investing" className="text-primary hover:underline font-medium inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Portfolio Diversification</h3>
              <p className="text-gray-600 mb-4">
                Learn how to build a balanced portfolio across different asset classes to minimize risk and maximize returns.
              </p>
              <Link href="/blog/determine-stock-exposure" className="text-primary hover:underline font-medium inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Investment Strategies</h3>
              <p className="text-gray-600 mb-4">
                Explore various investment approaches, from passive indexing to value investing and growth strategies.
              </p>
              <Link href="/blog/category/investing" className="text-primary hover:underline font-medium inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Investment Types</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-4">Stocks</h3>
              <p className="text-gray-600 mb-4">
                Stocks represent ownership in a company. When you purchase a share of stock, you're buying a small piece of that company and become a shareholder.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Potential for higher returns compared to other investments</li>
                  <li>Dividends provide passive income</li>
                  <li>High liquidity - easy to buy and sell</li>
                  <li>Higher volatility and risk</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary">
              <h3 className="text-xl font-bold mb-4">Bonds</h3>
              <p className="text-gray-600 mb-4">
                Bonds are loans you make to an entity (government or corporation) that pays you interest over a specified term before returning your principal.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Steady, predictable income through interest payments</li>
                  <li>Lower risk compared to stocks</li>
                  <li>Less volatility in market value</li>
                  <li>Lower long-term returns than stocks</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
              <h3 className="text-xl font-bold mb-4">ETFs & Mutual Funds</h3>
              <p className="text-gray-600 mb-4">
                Investment funds that pool money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Instant diversification with a single purchase</li>
                  <li>Professional management (for active funds)</li>
                  <li>Range of options (index funds, sector funds, etc.)</li>
                  <li>Low cost options available (especially for index ETFs)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-4">Real Estate Investment Trusts (REITs)</h3>
              <p className="text-gray-600 mb-4">
                Companies that own, operate, or finance income-producing real estate, allowing you to invest in real estate without buying property.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>High dividend yields required by law (90% of taxable income)</li>
                  <li>Exposure to real estate without direct property management</li>
                  <li>Liquidity compared to physical real estate</li>
                  <li>Diversification across different property types</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Tips Section */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Smart Investing Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-white">
                <span className="text-xl font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Start Early</h3>
                <p className="text-gray-300">
                  The power of compound interest is strongest over time. Starting early, even with small amounts, can lead to significant wealth accumulation.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-white">
                <span className="text-xl font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Invest Regularly</h3>
                <p className="text-gray-300">
                  Dollar-cost averaging by investing consistently regardless of market conditions helps reduce the impact of market volatility.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-white">
                <span className="text-xl font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Diversify Your Portfolio</h3>
                <p className="text-gray-300">
                  Spread investments across different asset classes, sectors, and geographies to reduce risk and enhance potential returns.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-white">
                <span className="text-xl font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Minimize Fees</h3>
                <p className="text-gray-300">
                  High fees can significantly erode returns over time. Choose low-cost index funds and ETFs when possible.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-white">
                <span className="text-xl font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Keep Emotions in Check</h3>
                <p className="text-gray-300">
                  Emotional decisions often lead to buying high and selling low. Stick to your investment plan during market downturns.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-white">
                <span className="text-xl font-bold">6</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Rebalance Periodically</h3>
                <p className="text-gray-300">
                  Review and adjust your portfolio regularly to maintain your target asset allocation as markets move over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Investing?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Use our investment calculator to see how your money can grow over time and explore our articles for more in-depth knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/calculators#investment" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Try Our Calculator
            </Link>
            <Link 
              href="/blog/determine-stock-exposure" 
              className="bg-white border border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Read Investment Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 