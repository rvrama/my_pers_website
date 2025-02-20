import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { sampleBlogPosts } from "@/types/blog";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const post = sampleBlogPosts.find((p) => p.id === params?.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="pt-6">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 mb-6 text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString()}
                </div>
                <span>by {post.author}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="prose prose-lg max-w-none">
                {post.content}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
