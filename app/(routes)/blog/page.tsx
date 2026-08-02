'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Search, X } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/constants'
import { staggerContainer, staggerItem } from '@/lib/animations'
import PageTransition from '@/components/shared/page-transition'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(BLOG_POSTS.map((post) => post.category)))]
  const filteredPosts = BLOG_POSTS.filter((post) =>
    (activeCategory === 'All' || post.category === activeCategory) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const featuredPost = filteredPosts[0]
  const otherPosts = filteredPosts.slice(1)

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-card via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and expert advice on dental health and smile aesthetics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative mx-auto max-w-md">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-card text-muted-foreground hover:bg-accent/10 hover:text-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${featuredPost.slug}`}>
                <motion.div
                  className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card border border-border rounded-2xl overflow-hidden hover:border-accent transition-colors"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-96 lg:h-auto min-h-96 overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/35 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
                      Featured
                    </p>
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>

                    <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span>{featuredPost.readTime}</span>
                    </div>

                    <motion.div
                      className="flex items-center gap-2 text-accent font-semibold"
                      whileHover={{ x: 4 }}
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Other Posts */}
      {otherPosts.length > 0 && (
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-12">More Articles</h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {otherPosts.map((post) => (
                <motion.div key={post.id} variants={staggerItem}>
                  <Link href={`/blog/${post.slug}`}>
                    <motion.div
                      className="group bg-background border border-border rounded-xl overflow-hidden hover:border-accent transition-colors h-full flex flex-col"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/45 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                            {post.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        </div>

                        <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 flex-grow">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground mb-4">No articles found matching your search.</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setActiveCategory('All')
              }}
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              <X className="h-4 w-4" />
              Clear search
            </button>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Questions About Your Dental Health?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact our team of experts to discuss your specific concerns.
            </p>
            <a
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
