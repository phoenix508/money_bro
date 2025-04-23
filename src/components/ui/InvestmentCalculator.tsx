'use client';

import { useState, useEffect } from 'react';
import { InvestmentCalculatorInput, InvestmentCalculatorResult } from '@/types';

const InvestmentCalculator = () => {
  const [inputs, setInputs] = useState<InvestmentCalculatorInput>({
    initialInvestment: 10000,
    monthlyContribution: 500,
    annualReturnRate: 7,
    investmentPeriodYears: 20,
  });

  const [results, setResults] = useState<InvestmentCalculatorResult | null>(null);
  const [showChart, setShowChart] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: parseFloat(value),
    }));
  };

  const calculateInvestment = () => {
    const {
      initialInvestment,
      monthlyContribution,
      annualReturnRate,
      investmentPeriodYears,
    } = inputs;

    const monthlyRate = annualReturnRate / 100 / 12;
    const totalMonths = investmentPeriodYears * 12;
    const yearlyBreakdown = [];

    let currentValue = initialInvestment;
    let totalContributions = initialInvestment;

    for (let month = 1; month <= totalMonths; month++) {
      // Add monthly contribution
      currentValue += monthlyContribution;
      totalContributions += monthlyContribution;

      // Apply interest for the month
      currentValue *= 1 + monthlyRate;

      // Add yearly data point
      if (month % 12 === 0) {
        const year = month / 12;
        const yearlyContribution = year === 1 
          ? initialInvestment + (monthlyContribution * 12)
          : monthlyContribution * 12;
        
        yearlyBreakdown.push({
          year,
          contribution: yearlyContribution,
          interestEarned: currentValue - totalContributions,
          totalValue: currentValue,
        });
      }
    }

    setResults({
      futureValue: currentValue,
      totalContributions,
      totalInterestEarned: currentValue - totalContributions,
      yearlyBreakdown,
    });

    setShowChart(true);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  useEffect(() => {
    calculateInvestment();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold mb-6">Investment Calculator</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Initial Investment
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  name="initialInvestment"
                  value={inputs.initialInvestment}
                  onChange={handleInputChange}
                  min="0"
                  className="pl-8 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Monthly Contribution
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  name="monthlyContribution"
                  value={inputs.monthlyContribution}
                  onChange={handleInputChange}
                  min="0"
                  className="pl-8 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Annual Return Rate (%)
              </label>
              <input
                type="number"
                name="annualReturnRate"
                value={inputs.annualReturnRate}
                onChange={handleInputChange}
                min="0"
                max="50"
                step="0.1"
                className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Investment Period (Years)
              </label>
              <input
                type="number"
                name="investmentPeriodYears"
                value={inputs.investmentPeriodYears}
                onChange={handleInputChange}
                min="1"
                max="50"
                className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            
            <button
              onClick={calculateInvestment}
              className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md font-medium transition-colors"
            >
              Calculate
            </button>
          </div>
        </div>
        
        {/* Results */}
        <div>
          {results && (
            <div>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="text-lg font-semibold mb-4">Projection Results</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Future Value:</span>
                    <span className="font-bold text-dark">{formatCurrency(results.futureValue)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Contributions:</span>
                    <span className="font-semibold">{formatCurrency(results.totalContributions)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Interest Earned:</span>
                    <span className="font-semibold text-green-600">{formatCurrency(results.totalInterestEarned)}</span>
                  </div>
                </div>
              </div>
              
              {showChart && (
                <div>
                  <h4 className="text-lg font-semibold mb-4">Year-by-Year Breakdown</h4>
                  <div className="max-h-[400px] overflow-y-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Year
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total Value
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Interest Earned
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {results.yearlyBreakdown.map((year) => (
                          <tr key={year.year}>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                              {year.year}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 font-medium">
                              {formatCurrency(year.totalValue)}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-green-600">
                              {formatCurrency(year.interestEarned)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestmentCalculator; 