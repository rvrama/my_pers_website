import { z } from "zod";

export const blogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  excerpt: z.string(),
  content: z.string(),
  publishedAt: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
});

export type BlogPost = z.infer<typeof blogPostSchema>;

// Sample blog posts data
export const sampleBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Effective Project Delivery in Agile Teams",
    excerpt: "Key strategies for successfully delivering projects in an agile environment",
    content: `
      In today's fast-paced technology landscape, effective project delivery is crucial...
      [Your full blog post content here]
    `,
    publishedAt: "2025-02-15",
    author: "Your Name",
    tags: ["Project Management", "Agile", "Leadership"],
  },
  {
    id: "2",
    title: "Building High-Performing Development Teams",
    excerpt: "Essential practices for creating and maintaining successful development teams",
    content: `
      The success of any technology project heavily depends on the strength of its team...
      [Your full blog post content here]
    `,
    publishedAt: "2025-02-10",
    author: "Your Name",
    tags: ["Team Management", "Leadership", "Culture"],
  },
];
