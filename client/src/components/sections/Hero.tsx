import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

// You can customize these values
const profile = {
  name: "Your Name",
  title: "Product & Services Delivery Leader",
  description: `Dedicated delivery leader with expertise in managing complex projects 
    and driving successful outcomes. Proven track record in stakeholder management 
    and team leadership.`,
  resumeUrl: "/resume.pdf", // Update this with your resume file path
  imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf" // Update with your profile image
};

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
            {profile.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/90">
            {profile.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {profile.description}
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={profile.resumeUrl} download>
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
              src={profile.imageUrl}
              alt="Professional headshot"
              className="w-full h-full object-cover"
            />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}