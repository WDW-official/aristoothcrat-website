import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/lib/constants'
import BlogArticleContent from '@/components/sections/blog-article-content'

interface BlogArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((item) => item.slug === slug)

  if (!post) {
    return {
      title: 'Article Not Found | Aristoothcrat Dental Clinic',
    }
  }

  return {
    title: `${post.title} | Aristoothcrat Dental Clinic`,
    description: post.excerpt,
  }
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find((item) => item.slug === slug)

  if (!post) {
    notFound()
  }

  return <BlogArticleContent slug={slug} />
}
