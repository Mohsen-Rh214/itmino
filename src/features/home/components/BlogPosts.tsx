import React from 'react';
import { blogPosts } from '../../../store/blog';

const BlogPostCard: React.FC<{ post: typeof blogPosts[0] }> = ({ post }) => (
  <a href="#" className="flex-shrink-0 w-72 group">
    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden">
        <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <span className="absolute top-3 right-3 bg-primary/70 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
    </div>
    <h3 className="font-bold text-neutral-800 mt-3 group-hover:text-primary transition-colors">{post.title}</h3>
  </a>
);


const BlogPosts: React.FC = () => {
  return (
    <section aria-labelledby="blog-title">
        <div className="flex items-center justify-between mb-6">
            <h2 id="blog-title" className="text-3xl font-extrabold text-neutral-900">
                آخرین مقالات
            </h2>
            <a href="#" className="text-sm font-bold text-primary hover:text-secondary transition-colors">
              مشاهده همه
            </a>
        </div>
        <div className="flex space-x-6 rtl:space-x-reverse overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            {blogPosts.map(post => <BlogPostCard key={post.id} post={post} />)}
        </div>
    </section>
  );
};

export default BlogPosts;