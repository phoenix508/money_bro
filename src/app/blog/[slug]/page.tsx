import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getPostsByCategory } from '@/lib/data/posts';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.',
    };
  }

  return {
    title: `${post.title} | The Money Bro`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  // Get related posts by category
  const relatedPosts = getPostsByCategory(post.category)
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  const formattedDate = new Date(post.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-light min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Post Header */}
          <div className="mb-10">
            <div className="mb-4">
              <Link href="/blog" className="text-primary hover:underline flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap gap-4 items-center text-gray-600 mb-6">
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {post.author}
              </span>
            </div>

            <p className="text-lg text-gray-700">{post.description}</p>
          </div>

          {/* Post Content */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-10">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
            </div>
          </div>

          {/* Tags */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-3">Topics:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Link 
                  key={index} 
                  href={`/blog/tag/${tag}`}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm py-1 px-3 rounded-full transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                    <div className="p-6">
                      <h4 className="text-lg font-bold mb-2">
                        <Link href={`/blog/${relatedPost.slug}`} className="text-dark hover:text-primary transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h4>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedPost.description}</p>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 