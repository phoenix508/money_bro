import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Real Estate Guide | The Money Bro',
  description: 'Learn about real estate investing, property valuation, financing options, and building wealth through property.',
};

export default function RealEstatePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-300 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Building Wealth Through Real Estate</h1>
              <p className="text-xl mb-8">
                Discover how to evaluate properties, secure financing, and build a successful real estate portfolio.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 p-4 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Home Appreciation</h3>
                    <p className="font-bold text-3xl mb-1">5.4%</p>
                    <p className="text-sm">Average annual increase</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Rental Yield</h3>
                    <p className="font-bold text-3xl mb-1">8-12%</p>
                    <p className="text-sm">Typical annual returns</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Leverage Power</h3>
                    <p className="font-bold text-3xl mb-1">5x</p>
                    <p className="text-sm">Typical investment multiplier</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Tax Benefits</h3>
                    <p className="font-bold text-3xl mb-1">$$$</p>
                    <p className="text-sm">Deductions & write-offs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Fundamentals */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Real Estate Fundamentals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center rounded-full mb-4 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Property Valuation</h3>
              <p className="text-gray-600 mb-4">
                Learn how to accurately value properties using comparative market analysis, income approach, and other methods.
              </p>
              <Link href="/blog/category/real-estate" className="text-secondary hover:underline font-medium inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center rounded-full mb-4 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Financing Strategies</h3>
              <p className="text-gray-600 mb-4">
                Discover various ways to finance real estate investments, from conventional mortgages to creative financing solutions.
              </p>
              <Link href="/blog/category/real-estate" className="text-secondary hover:underline font-medium inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center rounded-full mb-4 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Market Analysis</h3>
              <p className="text-gray-600 mb-4">
                Learn how to analyze real estate markets, identify growth areas, and spot emerging opportunities.
              </p>
              <Link href="/blog/category/real-estate" className="text-secondary hover:underline font-medium inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Real Estate Investment Strategies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary">
              <h3 className="text-xl font-bold mb-4">Buy and Hold</h3>
              <p className="text-gray-600 mb-4">
                Purchase properties and hold them long-term, benefiting from rental income and appreciation over time.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Benefits:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Steady cash flow from rental income</li>
                  <li>Property value appreciation over time</li>
                  <li>Tax advantages through depreciation</li>
                  <li>Mortgage paydown by tenants</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary">
              <h3 className="text-xl font-bold mb-4">Fix and Flip</h3>
              <p className="text-gray-600 mb-4">
                Purchase undervalued properties, renovate them, and sell for a profit in a relatively short timeframe.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Benefits:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Potential for substantial short-term profits</li>
                  <li>Quick capital turnover</li>
                  <li>Ability to leverage expertise in renovations</li>
                  <li>No long-term management responsibilities</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary">
              <h3 className="text-xl font-bold mb-4">BRRRR Method</h3>
              <p className="text-gray-600 mb-4">
                Buy, Rehab, Rent, Refinance, Repeat - a strategy to recycle capital and build a portfolio more quickly.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Benefits:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Ability to recover initial investment</li>
                  <li>Faster portfolio growth</li>
                  <li>Rental income from improved properties</li>
                  <li>Value creation through renovation</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary">
              <h3 className="text-xl font-bold mb-4">Real Estate Investment Trusts (REITs)</h3>
              <p className="text-gray-600 mb-4">
                Invest in companies that own, operate, or finance income-producing real estate without buying physical property.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Benefits:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Lower barrier to entry</li>
                  <li>Higher liquidity than physical real estate</li>
                  <li>Professional management</li>
                  <li>Dividend income opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Property Types for Investment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-secondary-dark"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Single-Family Homes</h3>
                <p className="text-gray-600 mb-3">
                  Residential properties designed for one family, typically easier to buy, finance, and manage.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Beginner Friendly</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">Lower Entry</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-secondary-dark"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Multi-Family Properties</h3>
                <p className="text-gray-600 mb-3">
                  Buildings with multiple rental units, offering economies of scale and reduced vacancy risk.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Cash Flow</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded">Scale Opportunity</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-secondary-dark"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Commercial Real Estate</h3>
                <p className="text-gray-600 mb-3">
                  Properties used for business purposes, including retail, office space, and industrial facilities.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded">Higher Returns</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded">More Complex</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-secondary-dark"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Vacation Rentals</h3>
                <p className="text-gray-600 mb-3">
                  Properties in desirable locations rented to travelers for short-term stays.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded">High ROI</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded">Seasonal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Calculators */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Real Estate Investment Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Mortgage Calculator</h3>
              <p className="text-gray-300 mb-6">
                Determine your monthly mortgage payments based on loan amount, interest rate, and term.
              </p>
              <Link 
                href="/calculators#mortgage" 
                className="inline-block px-6 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-md transition-colors"
              >
                Try Calculator
              </Link>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Cash Flow Analyzer</h3>
              <p className="text-gray-300 mb-6">
                Calculate potential rental property returns considering income, expenses, and financing costs.
              </p>
              <Link 
                href="/calculators#cash-flow" 
                className="inline-block px-6 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-md transition-colors"
              >
                Try Calculator
              </Link>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">ROI Calculator</h3>
              <p className="text-gray-300 mb-6">
                Analyze potential return on investment for various real estate opportunities.
              </p>
              <Link 
                href="/calculators#roi" 
                className="inline-block px-6 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-md transition-colors"
              >
                Try Calculator
              </Link>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Fix and Flip Estimator</h3>
              <p className="text-gray-300 mb-6">
                Project potential profits from property flipping, considering purchase price, renovation costs, and selling expenses.
              </p>
              <Link 
                href="/calculators#flip" 
                className="inline-block px-6 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-md transition-colors"
              >
                Try Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Common Real Estate Investing Mistakes to Avoid</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Inadequate Research</h3>
                <p className="text-gray-600">
                  Failing to thoroughly research property values, neighborhood trends, and local market conditions before investing.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Underestimating Expenses</h3>
                <p className="text-gray-600">
                  Not accounting for maintenance, repairs, vacancies, property management, and other ongoing costs.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Poor Financing Decisions</h3>
                <p className="text-gray-600">
                  Choosing the wrong mortgage product, over-leveraging, or failing to shop around for the best rates and terms.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Neglecting Due Diligence</h3>
                <p className="text-gray-600">
                  Skipping professional inspections, title searches, or other critical due diligence steps.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Emotional Decision Making</h3>
                <p className="text-gray-600">
                  Letting personal preferences or emotions override objective analysis and financial considerations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Real Estate Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Use our calculators to analyze potential investments and explore our comprehensive guides to real estate investing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/calculators" 
              className="bg-white text-secondary hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Try Our Calculators
            </Link>
            <Link 
              href="/blog/category/real-estate" 
              className="bg-secondary-dark hover:bg-secondary-dark/90 text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Read Real Estate Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 