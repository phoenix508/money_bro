# The Money Bro - Project Structure Overview

## Frontend Architecture

### Pages
- Home Page (`src/app/page.tsx`): Landing page with featured content and sections
- Blog Index (`src/app/blog/page.tsx`): Lists all articles grouped by category
- Blog Post Page (`src/app/blog/[slug]/page.tsx`): Dynamic page for individual articles
- Financial Calculators (`src/app/calculators/page.tsx`): Interactive financial tools

### Components
- Layout Components:
  - Header (`src/components/layout/Header.tsx`): Navigation bar
  - Footer (`src/components/layout/Footer.tsx`): Site footer with newsletter signup
- UI Components:
  - Investment Calculator (`src/components/ui/InvestmentCalculator.tsx`): Interactive tool
  - (Future) Additional calculator components

### Data Handling
- Types (`src/types/index.ts`): TypeScript definitions for blog posts, users, calculators
- Sample Data (`src/lib/data/posts.ts`): Development data for articles
- API Client (`src/lib/api/posts.ts`): Functions to fetch data from backend API

## Backend Architecture

### AWS Infrastructure
- CloudFormation Template (`aws/cloudformation.yaml`): Infrastructure as code
- DynamoDB Tables: For storing blog posts and user data
- Lambda Functions: Serverless backend API handlers
- API Gateway: RESTful API endpoints
- S3: Static asset storage

### API Handlers
- Post Handler (`src/lib/api/lambda/getPostsHandler.ts`): Lambda function for fetching posts

## Deployment Strategy

### Development
- Local development with Next.js and sample data
- Environment variables for configuration

### Staging/Production
- AWS deployment using CloudFormation
- Serverless architecture with Lambda and API Gateway
- S3 for static assets and CloudFront for CDN

## Project Scripts
- `npm run dev`: Start local development server
- `npm run build`: Build Next.js application
- `npm run deploy:dev`: Deploy AWS resources to dev environment
- `npm run deploy:staging`: Deploy AWS resources to staging environment
- `npm run deploy:prod`: Deploy AWS resources to production environment
- `npm run deploy:frontend:dev`: Deploy frontend assets to dev environment
- `npm run deploy:frontend:staging`: Deploy frontend assets to staging environment
- `npm run deploy:frontend:prod`: Deploy frontend assets to production environment

## Next Steps and Future Enhancements
1. Complete additional calculator components (mortgage, retirement, etc.)
2. Implement user authentication for personalized experiences
3. Add SEO optimization and metadata handling
4. Create a content management system for articles
5. Implement social sharing and comments
6. Add analytics tracking
7. Create additional financial education sections and interactive tools