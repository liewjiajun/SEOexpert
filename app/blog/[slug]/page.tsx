import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BLOG_POSTS } from '@/data/blog-posts';
import { formatDate } from '@/lib/utils';
import { CTA } from '@/lib/constants';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Article Header */}
      <section className="section pb-8">
        <Container>
          <div className="max-w-3xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-muted mb-6">
              <Link href="/blog" className="hover:text-ink transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-ink truncate">{post.title}</span>
            </nav>
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">{post.title}</h1>
            <div className="flex items-center gap-4 mb-8">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-muted">
                  {formatDate(post.publishedAt)} · {post.readTime} min read
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Image */}
      <section className="pb-8">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-card overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <Container>
          <article className="max-w-3xl mx-auto prose prose-lg prose-gray">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
          </article>
        </Container>
      </section>

      {/* Author Bio */}
      <section className="pb-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Card className="flex flex-col sm:flex-row gap-6 items-start">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={80}
                height={80}
                className="rounded-full flex-shrink-0"
              />
              <div>
                <p className="text-sm text-muted mb-1">Written by</p>
                <p className="font-medium text-lg mb-2">{post.author.name}</p>
                <p className="text-ink-secondary">{post.author.bio}</p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      <section className="section bg-surface">
        <Container>
          <h2 className="text-2xl font-display mb-8 text-center">More from the blog</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                <Card hover className="h-full">
                  <Badge variant="outline" className="mb-3">{relatedPost.category}</Badge>
                  <h3 className="text-lg font-medium mb-2">{relatedPost.title}</h3>
                  <p className="text-sm text-ink-secondary">{relatedPost.excerpt}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section">
        <Container>
          <div className="bg-ink rounded-card p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-4">Ready to grow your business?</h2>
            <p className="text-gray-400 mb-8">
              Let&apos;s discuss how we can help you achieve your marketing goals.
            </p>
            <Button href={CTA.primary.href} size="lg" className="bg-white text-ink hover:bg-gray-100">
              {CTA.primary.text}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
