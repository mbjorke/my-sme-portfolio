import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Marcus Björke',
  description: 'Thoughts and insights on AI, development, and technology',
};

export default function BlogPage() {
  const posts = [
    {
      title: 'Live Demo: AI-Powered Development with Windsurf.ai',
      date: '2024-06-25',
      excerpt: 'Recap of our live demo showcasing AI-assisted development workflows',
      slug: '/blog/posts/windsurf-ai-demo-2024-06-25',
    },
    // Add more posts here as they're created
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8 mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={post.slug} className="hover:text-blue-500 transition-colors">
                {post.title}
              </Link>
            </h2>
            <time dateTime={post.date} className="text-gray-500 text-sm">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <p className="mt-2 text-gray-600">{post.excerpt}</p>
            <Link href={post.slug} className="inline-block mt-2 text-blue-500 hover:underline">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
