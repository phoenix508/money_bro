import { Post } from '@/types';
import { samplePosts } from '@/lib/data/posts';

// In a production environment, this would be set via environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

// Check if we should use the live API or sample data
const USE_SAMPLE_DATA = !API_URL || process.env.NODE_ENV === 'development';

/**
 * Fetch a single post by slug
 */
export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  if (USE_SAMPLE_DATA) {
    // Use sample data in development
    const post = samplePosts.find(post => post.slug === slug);
    return post || null;
  }

  try {
    const response = await fetch(`${API_URL}/posts?slug=${slug}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Error fetching post: ${response.statusText}`);
    }
    
    const post = await response.json();
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

/**
 * Fetch posts with optional filtering
 */
export async function fetchPosts({
  category,
  tag,
  limit = 10,
  lastEvaluatedKey,
}: {
  category?: string;
  tag?: string;
  limit?: number;
  lastEvaluatedKey?: string;
} = {}): Promise<{ posts: Post[]; lastEvaluatedKey: string | null }> {
  if (USE_SAMPLE_DATA) {
    // Use sample data in development
    let filteredPosts = [...samplePosts];
    
    if (category) {
      filteredPosts = filteredPosts.filter(post => post.category === category);
    }
    
    if (tag) {
      filteredPosts = filteredPosts.filter(post => post.tags.includes(tag));
    }
    
    // Sort by date (newest first)
    filteredPosts.sort((a, b) => 
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
    
    // Simulate pagination
    const startIndex = lastEvaluatedKey ? parseInt(lastEvaluatedKey) : 0;
    const endIndex = startIndex + limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
    
    const newLastEvaluatedKey = endIndex < filteredPosts.length 
      ? endIndex.toString() 
      : null;
    
    return {
      posts: paginatedPosts,
      lastEvaluatedKey: newLastEvaluatedKey,
    };
  }

  try {
    let url = `${API_URL}/posts?limit=${limit}`;
    
    if (category) {
      url += `&category=${encodeURIComponent(category)}`;
    }
    
    if (tag) {
      url += `&tag=${encodeURIComponent(tag)}`;
    }
    
    if (lastEvaluatedKey) {
      url += `&lastEvaluatedKey=${lastEvaluatedKey}`;
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { posts: [], lastEvaluatedKey: null };
  }
}

/**
 * Fetch popular posts
 */
export async function fetchPopularPosts(limit: number = 5): Promise<Post[]> {
  if (USE_SAMPLE_DATA) {
    // Use sample data in development
    return samplePosts
      .filter(post => post.isPopular)
      .slice(0, limit);
  }

  try {
    const response = await fetch(`${API_URL}/posts?popular=true&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching popular posts: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error('Error fetching popular posts:', error);
    return [];
  }
}

/**
 * Fetch latest posts
 */
export async function fetchLatestPosts(limit: number = 5): Promise<Post[]> {
  if (USE_SAMPLE_DATA) {
    // Use sample data in development
    return [...samplePosts]
      .sort((a, b) => 
        new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
      )
      .slice(0, limit);
  }

  try {
    const response = await fetch(`${API_URL}/posts?sort=date&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching latest posts: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    return [];
  }
} 