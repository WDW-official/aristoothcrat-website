'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Share2, User } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/constants'
import PageTransition from '@/components/shared/page-transition'
import { AppointmentButton } from '@/components/layout/appointment-drawer'

interface BlogArticleContentProps {
  slug: string
}

export default function BlogArticleContent({ slug }: BlogArticleContentProps) {
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return null
  }

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.id !== post.id
  ).slice(0, 3)

  return (
    <PageTransition>
      <section className="pt-24 pb-8 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-card via-background to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-lg text-sm font-medium">
              {post.category}
            </div>

            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                By {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="py-12 bg-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 overflow-hidden rounded-xl border border-border bg-card">
            <img
              src={post.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>
        </div>
      </motion.section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-xl text-muted-foreground leading-relaxed italic">
              {post.excerpt}
            </div>

            <div className="prose prose-invert max-w-none space-y-6">
              {post.content.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Key Takeaways
                </h2>
                <ul className="space-y-3">
                  {post.keyTakeaways.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-accent mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                For more information or to discuss your specific dental needs, please contact our team. We&apos;re here to help you achieve and maintain optimal oral health.
              </p>
            </div>

            <div className="border-t border-border pt-8 flex items-center justify-between">
              <p className="text-muted-foreground">Share this article</p>
              <div className="flex gap-3">
                {['twitter', 'facebook', 'linkedin'].map((social) => (
                  <motion.button
                    key={social}
                    type="button"
                    aria-label={`Share on ${social}`}
                    className="w-10 h-10 rounded-lg bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Share2 className="w-4 h-4 text-accent" />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-12">Related Articles</h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <motion.div
                    className="group bg-background border border-border rounded-xl overflow-hidden hover:border-accent transition-colors"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/45 to-transparent" />
                    </div>
                    <div className="p-6">
                      <p className="text-xs bg-accent/10 text-accent px-2 py-1 rounded inline-block mb-3">
                        {relatedPost.category}
                      </p>
                      <h3 className="font-serif font-bold text-foreground mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule your consultation today and discover how we can help.
            </p>
            <AppointmentButton
              className="inline-flex px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Book Your Appointment
            </AppointmentButton>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
