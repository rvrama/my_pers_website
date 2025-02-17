import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/90">
            Product & Services Delivery Leader
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Experienced leader with a proven track record in delivering successful
            products and services. Passionate about driving innovation and team
            excellence.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <Card className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/20">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
              alt="Professional headshot"
              className="w-full h-full object-cover"
            />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
