import { BlogPost } from '@/types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'seo-trends-2024',
    title: 'SEO Trends That Actually Matter in 2024',
    excerpt: 'Skip the hype and focus on what really moves the needle for your organic traffic this year.',
    content: `
# SEO Trends That Actually Matter in 2024

Every year, the SEO industry buzzes with predictions about what's "hot" and what's "dead." Most of it is noise. Here's what actually matters for your organic traffic this year.

## 1. Content Quality Over Content Quantity

The days of churning out mediocre content are over. Google's helpful content update has made it clear: if your content doesn't provide genuine value, it won't rank.

**What to do:** Focus on creating fewer, better pieces. One comprehensive guide beats ten thin articles every time.

## 2. User Experience is a Ranking Factor

Core Web Vitals are here to stay. If your site is slow or clunky on mobile, you're leaving rankings on the table.

**What to do:** Run your site through PageSpeed Insights and fix the obvious issues first.

## 3. E-E-A-T Matters More Than Ever

Experience, Expertise, Authoritativeness, and Trustworthiness. Google wants to know that real humans with real expertise created your content.

**What to do:** Add author bios, cite your sources, and showcase your credentials.

## The Bottom Line

SEO hasn't fundamentally changed. Create valuable content, make your site fast and easy to use, and build your reputation. The fundamentals always win.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    category: 'SEO',
    author: {
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      bio: 'Founder of SEOExpert. Digital marketing veteran with 10+ years of experience.',
    },
    publishedAt: '2024-01-15',
    readTime: 5,
  },
  {
    id: '2',
    slug: 'remote-work-productivity',
    title: 'How We Stay Productive as a Fully Remote Team',
    excerpt: 'The systems and tools we use to deliver great work from anywhere in the world.',
    content: `
# How We Stay Productive as a Fully Remote Team

When I started SEOExpert, I knew we'd be 100% remote. Here's what we've learned about making it work.

## Communication is Async by Default

We don't expect instant responses. Most communication happens through written updates, and that's intentional.

**Why it works:** People can do deep work without constant interruptions. Messages get thoughtful responses instead of reactive ones.

## We Over-Document Everything

Every process, every client strategy, every decision—it's documented. New team members can get up to speed without endless onboarding meetings.

## Results Over Hours

We don't track hours. We track deliverables. If the work is done well and on time, we don't care if it took 2 hours or 20.

## Weekly Sync, That's It

One 30-minute team call per week. That's our only required synchronous meeting. Everything else is optional.

## The Tools We Use

- **Notion:** For documentation and project management
- **Slack:** For quick questions and updates
- **Loom:** For async video updates
- **Figma:** For design collaboration

## The Bottom Line

Remote work isn't for everyone. But for the right people with the right systems, it's not just viable—it's better.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    category: 'Culture',
    author: {
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      bio: 'Founder of SEOExpert. Digital marketing veteran with 10+ years of experience.',
    },
    publishedAt: '2024-01-08',
    readTime: 4,
  },
  {
    id: '3',
    slug: 'ppc-budget-allocation',
    title: 'How to Allocate Your PPC Budget for Maximum ROI',
    excerpt: 'A data-driven framework for deciding where to spend your advertising dollars.',
    content: `
# How to Allocate Your PPC Budget for Maximum ROI

Most businesses waste money on paid ads because they don't have a systematic approach to budget allocation. Here's our framework.

## Start With Your Goals

Before allocating a single dollar, be crystal clear on what you're trying to achieve:
- Brand awareness?
- Lead generation?
- Direct sales?

Each goal requires a different strategy.

## The 70/20/10 Rule

**70% Proven Performers:** Campaigns and keywords that consistently deliver results.

**20% Optimization:** Testing variations of what works to find improvements.

**10% Experimentation:** New platforms, audiences, or creative approaches.

## Track Everything

If you can't measure it, don't spend on it. Proper conversion tracking is non-negotiable.

## Review Weekly, Adjust Monthly

Check your numbers weekly, but don't make major changes too quickly. Give campaigns time to optimize.

## The Bottom Line

Smart budget allocation isn't about spending more—it's about spending better. Start with data, test systematically, and double down on what works.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    category: 'PPC',
    author: {
      name: 'Sarah Kim',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      bio: 'Head of Paid Media at SEOExpert. Google Ads certified with 8 years of experience.',
    },
    publishedAt: '2024-01-01',
    readTime: 6,
  },
];
