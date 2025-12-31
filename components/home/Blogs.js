'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionTitle from '@/components/common/SectionTitle'

export default function Blogs() {
  const blogs = [
    {
      title: '10 Ways AI is Transforming Enterprise Software Development',
      description: 'Discover how artificial intelligence is revolutionizing the way enterprises build and deploy software solutions.',
      category: 'Technology',
      date: 'March 15, 2024',
      readTime: '5 min read',
      slug: 'ai-transforming-enterprise-software',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    },
    {
      title: 'Cloud Migration Best Practices: A Complete Guide for 2024',
      description: 'Learn the essential strategies and best practices for successful cloud migration in the modern business landscape.',
      category: 'Cloud Solutions',
      date: 'March 10, 2024',
      readTime: '7 min read',
      slug: 'cloud-migration-best-practices',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
    },
    {
      title: 'Digital Transformation: How to Future-Proof Your Business',
      description: 'Explore key strategies for digital transformation that help businesses stay competitive and innovative.',
      category: 'Business Strategy',
      date: 'March 5, 2024',
      readTime: '6 min read',
      slug: 'digital-transformation-future-proof',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    },
    {
      title: 'Cybersecurity Trends Every Business Should Know in 2024',
      description: 'Stay ahead of cyber threats with the latest security trends and best practices for protecting your business.',
      category: 'Security',
      date: 'February 28, 2024',
      readTime: '8 min read',
      slug: 'cybersecurity-trends-2024',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Latest Insights & Updates"
          subtitle="Our Blog"
          center
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link
                href={`/blog/${blog.slug}/`}
                className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-300 h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-xs font-semibold text-primary-700">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {blog.description}
                  </p>
                  <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:text-accent-600 transition-colors">
                    Read More
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/blog/"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-accent-600 transition-colors group"
          >
            View All Blog Posts
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

