import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Expense Management Guide | The Money Bro',
  description: 'Learn effective budgeting techniques, expense tracking methods, and cost-cutting strategies to optimize your personal finances.',
};

export default function ExpenseManagementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-300 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Master Your Expenses</h1>
              <p className="text-xl mb-8">
                Discover strategies to track, optimize, and reduce expenses while maintaining your quality of life.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white/20">
                          50% - Needs
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block">
                          Housing, Food, Utilities, Transportation
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white/20">
                      <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-white/50"></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white/20">
                          30% - Wants
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block">
                          Entertainment, Dining, Shopping, Travel
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white/20">
                      <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-white/50"></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white/20">
                          20% - Savings
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block">
                          Emergency Fund, Investing, Debt Repayment
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white/20">
                      <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-white/50"></div>
                    </div>
                  </div>
                  <div className="text-center text-sm">
                    <p>50/30/20 Budgeting Rule - A Simple Framework to Get Started</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budgeting Fundamentals */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Budgeting Fundamentals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Budget Creation</h3>
              <p className="text-gray-600 mb-4">
                Learn how to create a realistic budget that aligns with your financial goals and lifestyle needs.
              </p>
              <Link href="/blog/create-effective-budget" className="text-primary hover:underline font-medium inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expense Tracking</h3>
              <p className="text-gray-600 mb-4">
                Discover tools and techniques to monitor where your money goes and identify spending patterns.
              </p>
              <Link href="/blog/tracking-expenses" className="text-primary hover:underline font-medium inline-flex items-center">
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
              <h3 className="text-xl font-bold mb-3">Goal Setting</h3>
              <p className="text-gray-600 mb-4">
                Learn to set and prioritize financial goals that motivate you to stick to your expense management plan.
              </p>
              <Link href="/blog/financial-goal-setting" className="text-primary hover:underline font-medium inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Budgeting Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Budgeting Methods</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-4">50/30/20 Budget</h3>
              <p className="text-gray-600 mb-4">
                A simple percentage-based approach allocating 50% of income to needs, 30% to wants, and 20% to savings and debt repayment.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Best For:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Beginners who need a simple framework</li>
                  <li>Those with predictable monthly income</li>
                  <li>People who want minimal time maintaining their budget</li>
                  <li>Those seeking balance between enjoying today and saving for tomorrow</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-4">Zero-Based Budget</h3>
              <p className="text-gray-600 mb-4">
                A method where every dollar of income is assigned a specific purpose, resulting in income minus expenses equaling zero.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Best For:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Detail-oriented individuals who want full control</li>
                  <li>Those trying to find where money is "leaking"</li>
                  <li>People working toward aggressive savings goals</li>
                  <li>Households with variable income who need to plan carefully</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-4">Envelope System</h3>
              <p className="text-gray-600 mb-4">
                A cash-based method where money is physically divided into envelopes for different spending categories.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Best For:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Visual learners who benefit from seeing physical money</li>
                  <li>Those who struggle with overspending on credit/debit cards</li>
                  <li>People trying to break poor spending habits</li>
                  <li>Individuals wanting a tangible spending limit</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-4">Pay Yourself First</h3>
              <p className="text-gray-600 mb-4">
                A strategy where savings are automatically deducted before any other expenses, ensuring financial goals take priority.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Best For:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Those who struggle to save consistently</li>
                  <li>People who want to automate their finances</li>
                  <li>Individuals with specific savings goals</li>
                  <li>Those who can live comfortably on the remainder of their income</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expense Reduction Strategies */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Smart Expense Reduction Strategies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Housing Optimization</h3>
              <p className="text-gray-600 mb-4">
                Explore ways to reduce your largest expense through refinancing, downsizing, house hacking, or negotiating rent.
              </p>
              <div className="flex items-center text-sm">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded mr-2">High Impact</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Medium Effort</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Food & Grocery Savings</h3>
              <p className="text-gray-600 mb-4">
                Implement meal planning, strategic shopping, bulk buying, and cooking at home to reduce food expenses without sacrificing quality.
              </p>
              <div className="flex items-center text-sm">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded mr-2">Medium Impact</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Low Effort</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Transportation Costs</h3>
              <p className="text-gray-600 mb-4">
                Reduce commuting expenses through carpooling, public transit, vehicle maintenance, or evaluating if you need multiple vehicles.
              </p>
              <div className="flex items-center text-sm">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded mr-2">High Impact</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Medium Effort</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Subscription Audit</h3>
              <p className="text-gray-600 mb-4">
                Review and eliminate unused subscriptions and memberships that silently drain your finances every month.
              </p>
              <div className="flex items-center text-sm">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded mr-2">Medium Impact</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Low Effort</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Utility Bill Reduction</h3>
              <p className="text-gray-600 mb-4">
                Lower your energy, water, and internet bills through conservation, negotiation, and smart home improvements.
              </p>
              <div className="flex items-center text-sm">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded mr-2">Medium Impact</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Medium Effort</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Insurance Optimization</h3>
              <p className="text-gray-600 mb-4">
                Review and compare insurance policies to ensure you're not overpaying while maintaining necessary coverage.
              </p>
              <div className="flex items-center text-sm">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded mr-2">Medium Impact</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Medium Effort</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expense Tracking Tools */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Expense Tracking Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Budgeting Apps</h3>
              <p className="text-gray-300 mb-6">
                Mobile applications that connect to your accounts, categorize transactions, and provide insights on your spending habits.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Popular Options:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>Mint - Free comprehensive budgeting</li>
                  <li>YNAB - Zero-based budgeting focused</li>
                  <li>Personal Capital - Investment tracking + budgeting</li>
                  <li>EveryDollar - Simple, intuitive interface</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Spreadsheet Templates</h3>
              <p className="text-gray-300 mb-6">
                Customizable Excel or Google Sheets templates that give you complete control over your budget tracking system.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Benefits:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>Full customization to your specific needs</li>
                  <li>No subscription fees or privacy concerns</li>
                  <li>Ability to create complex calculations and projections</li>
                  <li>Easily shareable with financial partners</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Banking Tools</h3>
              <p className="text-gray-300 mb-6">
                Features built into your bank's online platform or app that help categorize spending and set budget limits.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Features to Look For:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>Spending categorization and analysis</li>
                  <li>Budget alerts when approaching limits</li>
                  <li>Goal tracking for savings targets</li>
                  <li>Bill payment reminders and scheduling</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Receipt Management</h3>
              <p className="text-gray-300 mb-6">
                Tools to digitize, organize, and analyze paper receipts to track expenses and prepare for tax time.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Popular Options:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>Expensify - Business and personal expense tracking</li>
                  <li>Shoeboxed - Receipt digitization and organization</li>
                  <li>Wave - Free accounting software with receipt scanning</li>
                  <li>Smart Receipts - Simple mobile receipt tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behavioral Psychology */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">The Psychology of Spending</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Emotional Spending</h3>
                <p className="text-gray-600">
                  Learn to identify triggers that lead to emotional purchases and develop strategies to make more rational spending decisions.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Social Comparison</h3>
                <p className="text-gray-600">
                  Understand how social influences and "keeping up with the Joneses" affects spending and develop immunity to these pressures.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Hedonic Adaptation</h3>
                <p className="text-gray-600">
                  Recognize how we quickly adapt to new purchases and lifestyle upgrades, and how this affects long-term financial satisfaction.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Values-Based Spending</h3>
                <p className="text-gray-600">
                  Align your spending with your core values to increase financial satisfaction while potentially reducing unnecessary expenses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Take Control of Your Finances Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Use our budgeting tools to create a personalized expense management plan and explore our guides for money-saving strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/calculators#budget" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Try Our Budget Calculator
            </Link>
            <Link 
              href="/blog/category/budgeting" 
              className="bg-primary-dark hover:bg-primary-dark/90 text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Read Budgeting Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 