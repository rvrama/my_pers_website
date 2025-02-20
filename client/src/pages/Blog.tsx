import { motion } from "framer-motion";
import BlogCard from "@/components/blog/BlogCard";
import { sampleBlogPosts } from "@/types/blog";

export default function Blog() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Professional Insights</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleBlogPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
