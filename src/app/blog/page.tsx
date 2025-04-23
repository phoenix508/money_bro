import Link from 'next/link';
import { samplePosts } from '@/lib/data/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | The Money Bro',
  description: 'Explore articles on personal finance, investing, real estate, passive income and more.',
};

export default function BlogPage() {
  // Group posts by category
  const categories = [...new Set(samplePosts.map(post => post.category))];
  const postsByCategory = categories.reduce((acc, category) => {
    acc[category] = samplePosts.filter(post => post.category === category);
    return acc;
  }, {} as Record<string, typeof samplePosts>);

  return (
    <div className="bg-light min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">The Money Bro Blog</h1>
          <p className="text-xl text-gray-700">
            Discover actionable insights on personal finance, investing, real estate, and building wealth.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/blog" 
              className="bg-primary text-white hover:bg-primary/90 py-2 px-4 rounded-md transition-colors"
            >
              All Articles
            </Link>
            {categories.map((category) => (
              <Link 
                key={category}
                href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white text-dark hover:bg-gray-100 py-2 px-4 rounded-md transition-colors border border-gray-200"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* All posts listed by category */}
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{category}</h2>
                <Link 
                  href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-primary hover:underline"
                >
                  View All
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {postsByCategory[category].map((post) => (
                  <div 
                    key={post.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] border border-gray-100"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        <Link href={`/blog/${post.slug}`} className="text-dark hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{post.publishedDate}</span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-primary hover:underline text-sm font-medium"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Sign Up */}
        <div className="mt-20 bg-dark text-white p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Financial Insights</h3>
            <p className="mb-6">
              Subscribe to our newsletter to receive the latest articles and tips on personal finance, investing, and building wealth.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 px-6 py-2 rounded-md font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 