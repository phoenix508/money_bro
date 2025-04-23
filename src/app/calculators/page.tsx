import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Dynamically import the calculator component to avoid hydration errors
const InvestmentCalculator = dynamic(
  () => import('@/components/ui/InvestmentCalculator'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'Financial Calculators | The Money Bro',
  description: 'Interactive financial calculators to help plan your investments, mortgage, and retirement.',
};

export default function CalculatorsPage() {
  return (
    <div className="bg-light min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Financial Calculators</h1>
            <p className="text-xl text-gray-700">
              Use our interactive calculators to make informed financial decisions.
            </p>
          </div>

          {/* Calculators Navigation */}
          <div className="flex overflow-x-auto gap-2 pb-4 mb-8 whitespace-nowrap">
            <a href="#investment" className="bg-white hover:bg-gray-100 text-dark py-2 px-4 rounded-md shadow-sm border border-gray-200 transition-colors">
              Investment Calculator
            </a>
            <a href="#mortgage" className="bg-white hover:bg-gray-100 text-dark py-2 px-4 rounded-md shadow-sm border border-gray-200 transition-colors">
              Mortgage Calculator
            </a>
            <a href="#retirement" className="bg-white hover:bg-gray-100 text-dark py-2 px-4 rounded-md shadow-sm border border-gray-200 transition-colors">
              Retirement Calculator
            </a>
            <a href="#savings" className="bg-white hover:bg-gray-100 text-dark py-2 px-4 rounded-md shadow-sm border border-gray-200 transition-colors">
              Savings Goal Calculator
            </a>
          </div>

          {/* Investment Calculator */}
          <section id="investment" className="mb-12">
            <InvestmentCalculator />
          </section>

          {/* Placeholder for Future Calculators */}
          <section id="mortgage" className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold mb-6">Mortgage Calculator</h3>
              <p className="text-gray-600 mb-4">
                Our mortgage calculator is coming soon. This tool will help you calculate monthly payments, 
                total interest, and provide an amortization schedule.
              </p>
              <div className="bg-gray-50 p-4 rounded-md inline-block">
                <p className="text-primary font-medium">Coming Soon</p>
              </div>
            </div>
          </section>

          <section id="retirement" className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold mb-6">Retirement Calculator</h3>
              <p className="text-gray-600 mb-4">
                Our retirement calculator is coming soon. This tool will help you estimate how much you 
                need to save for retirement and if you're on track.
              </p>
              <div className="bg-gray-50 p-4 rounded-md inline-block">
                <p className="text-primary font-medium">Coming Soon</p>
              </div>
            </div>
          </section>

          <section id="savings" className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold mb-6">Savings Goal Calculator</h3>
              <p className="text-gray-600 mb-4">
                Our savings goal calculator is coming soon. This tool will help you determine how much 
                you need to save regularly to reach a specific financial goal.
              </p>
              <div className="bg-gray-50 p-4 rounded-md inline-block">
                <p className="text-primary font-medium">Coming Soon</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 