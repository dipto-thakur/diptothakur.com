import type { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'exactly-once-delivery-is-a-myth',
    title: 'Exactly-Once Delivery Is a Myth — Here\'s What to Do Instead',
    excerpt:
      'The phrase "exactly-once delivery" appears in countless system design interviews and distributed systems docs. In practice, it\'s more of a design goal than an implementable guarantee. Here\'s what that means for systems you actually ship.',
    content: `# Exactly-Once Delivery Is a Myth — Here's What to Do Instead

The phrase "exactly-once delivery" appears in countless distributed systems docs. In practice, it's a spectrum, not a binary guarantee.

## The Core Problem

Any distributed system can fail at the moment of acknowledgement. The message is processed, but the ack is lost. On retry, the message is processed again.

## What You Can Actually Build

**At-least-once + idempotent handlers** is the pragmatic answer most production systems choose. Your handler is designed to be safe to call multiple times with the same input.

## Idempotency Key Patterns

The most robust pattern: generate a stable key from the message content or a provided client ID, and use an \`INSERT ... ON CONFLICT DO NOTHING\` at the start of your handler.

\`\`\`sql
INSERT INTO processed_events (event_id, processed_at)
VALUES ($1, NOW())
ON CONFLICT (event_id) DO NOTHING
RETURNING id;
\`\`\`

If the RETURNING clause returns no rows, skip processing — you've already done it.

## When This Isn't Enough

Some operations are inherently non-idempotent: charging a payment card, sending an email. For these, the idempotency key needs to live closer to the external system, not just in your database.

## Conclusion

Design for at-least-once delivery. Make your handlers idempotent. Test your deduplication logic explicitly. This gets you 99% of the safety of "exactly-once" with 10% of the complexity.`,
    author: 'Dipto Thakur',
    publishedAt: '2024-03-15',
    updatedAt: '2024-04-01',
    tags: ['distributed-systems', 'reliability', 'messaging'],
    readingTime: 7,
    featured: true,
  },
  {
    id: 'post-2',
    slug: 'the-case-for-boring-technology',
    title: 'The Case for Boring Technology',
    excerpt:
      'Every new project presents the temptation to reach for whatever is interesting right now. This is usually the wrong call. Here\'s how I think about technology selection in a way that leads to fewer regrets.',
    content: `# The Case for Boring Technology

Dan McKinley's essay "Choose Boring Technology" has shaped how I approach technical decisions more than almost anything else I've read.

## Innovation Tokens

The idea: you have a limited number of "innovation tokens" per project. Spend them on the parts of the system where novelty provides genuine business advantage. Spend everything else on boring, well-understood tools.

## What Makes Technology Boring (in the Good Sense)

- The failure modes are well-documented.
- The community has produced years of operational knowledge.
- Hiring for it is tractable.
- The debugging tools are mature.

## Postgres as a Case Study

For most applications, Postgres can serve as your primary store, full-text search engine, job queue, and time-series store. Before reaching for five specialized services, ask whether Postgres can do it well enough. It usually can.

## The Regret Calculus

Ask yourself: in three years, will I regret that we used this technology? Regret from boring choices is rare. Regret from exciting choices that added operational burden is common.

## When to Spend Innovation Tokens

Spend them on the part of your system that is genuinely differentiated — the thing your product does that nothing else does as well. That's the place where novel technology might provide real leverage.`,
    author: 'Dipto Thakur',
    publishedAt: '2024-01-22',
    tags: ['engineering', 'decision-making', 'technology'],
    readingTime: 5,
    featured: true,
  },
  {
    id: 'post-3',
    slug: 'writing-runbooks-that-get-used',
    title: 'Writing Runbooks That Actually Get Used',
    excerpt:
      'Most runbooks are written once and never read again. The problem isn\'t that engineers don\'t want documentation — it\'s that most runbooks aren\'t useful at the moment they\'re needed most.',
    content: `# Writing Runbooks That Actually Get Used

The 3am incident is not the time to read dense prose. Runbooks need to be designed for the degraded cognitive state of someone under pressure.

## The Test

Would a competent engineer who has never touched this system be able to execute this runbook and resolve the incident within 20 minutes? If not, the runbook needs work.

## Structure That Works

Every runbook should answer these questions in order:

1. **What is broken?** (Symptoms)
2. **What is the impact?** (User-facing consequence)
3. **How do I confirm this is the right runbook?** (Diagnostic check)
4. **What are the steps?** (Numbered, imperative, copy-pasteable)
5. **How do I know it worked?** (Verification)
6. **What if it didn't work?** (Escalation path)

## Making Steps Executable

Commands should be copy-pasteable. Variables should be clearly marked. Side effects should be called out explicitly.

## The Maintenance Problem

Runbooks rot. The only reliable solution I've found: link runbooks to the monitoring alerts that trigger them, and require runbook review as part of the post-incident process.`,
    author: 'Dipto Thakur',
    publishedAt: '2023-11-08',
    tags: ['operations', 'documentation', 'reliability'],
    readingTime: 6,
    featured: false,
  },
];

export const featuredPosts = blogPosts.filter((p) => p.featured);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
