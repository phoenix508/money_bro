// Blog post type
export interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  publishedDate: string;
  lastUpdated?: string;
  featuredImage?: string;
  isPopular?: boolean;
}

// Category type
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

// Author type
export interface Author {
  id: string;
  name: string;
  bio: string;
  avatarUrl?: string;
}

// Comment type
export interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  createdAt: string;
  replies?: Comment[];
}

// User type for potential auth implementation
export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  isAdmin?: boolean;
}

// Financial calculator input/result types
export interface MortgageCalculatorInput {
  loanAmount: number;
  interestRate: number;
  loanTermYears: number;
  downPayment?: number;
}

export interface MortgageCalculatorResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  amortizationSchedule: {
    period: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
  }[];
}

export interface InvestmentCalculatorInput {
  initialInvestment: number;
  monthlyContribution: number;
  annualReturnRate: number;
  investmentPeriodYears: number;
}

export interface InvestmentCalculatorResult {
  futureValue: number;
  totalContributions: number;
  totalInterestEarned: number;
  yearlyBreakdown: {
    year: number;
    contribution: number;
    interestEarned: number;
    totalValue: number;
  }[];
} 