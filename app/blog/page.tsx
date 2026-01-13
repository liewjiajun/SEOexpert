import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FloatingBlob } from '@/components/ui/FloatingElements';
import { BLOG_POSTS } from '@/data/blog-posts';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, guides, and updates from the SEOExpert team on digital marketing, SEO, PPC, and remote work.',
};

export default function BlogPage() {
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <FloatingBlob color="violet" size="xl" className="-top-32 -right-32 opacity-20" animationDelay="0s" />
        <FloatingBlob color="fuchsia" size="lg" className="bottom-0 -left-20 opacity-15" animationDelay="3s" />

        <Container className="relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="eyebrow">Blog</p>
            <h1 className="mb-6">
              Insights & <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-xl text-ink-secondary">
              Practical guides and honest takes on digital marketing from our remote-first team.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <Container>
          <Link href={`/blog/${featuredPost.slug}`} className="block animate-fade-in-up">
            <Card variant="glass" hover className="overflow-hidden p-0">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 p-[2px] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-coral">
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={featuredPost.featuredImage}
                        alt={featuredPost.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <Badge variant="gradient" className="w-fit mb-4">{featuredPost.category}</Badge>
                  <h2 className="text-2xl md:text-3xl font-display mb-4 group-hover:text-gradient transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-ink-secondary mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden p-[2px] bg-gradient-to-br from-violet-500 to-fuchsia-500">
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{featuredPost.author.name}</p>
                      <p className="text-xs text-muted">
                        {formatDate(featuredPost.publishedAt)} · {featuredPost.readTime} min read
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </Container>
      </section>

      {/* Other Posts */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card variant="glass" hover className="h-full overflow-hidden p-0 group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <Badge variant="outline" className="mb-3">{post.category}</Badge>
                    <h3 className="text-lg font-medium mb-2 group-hover:text-violet-600 transition-colors">{post.title}</h3>
                    <p className="text-sm text-ink-secondary mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-xs text-muted">
                        {formatDate(post.publishedAt)} · {post.readTime} min read
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
