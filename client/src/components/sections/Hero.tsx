import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";


// You can customize these values
const profile = {
  name: "Venkateswaran Rama",
  title: "Product & Services Delivery Leader",
  description: `Dedicated delivery leader with expertise in managing complex projects 
    and driving successful outcomes. Proven track record in stakeholder management 
    and team leadership. An Enabler of business growth through technology
    and innovation.`,
  resumeUrl: "https://drive.google.com/file/d/1MQ0tUWXxmYfh9CqwIT86bifKH_ipc_pt/view?usp=sharing",
  imageUrls: ["./../../assets/myphoto0.png",
    "./../../assets/myphoto1.png",
    "./../../assets/myphoto2.png",
    "./../../assets/myphoto3.png",
    "./../../assets/myphoto4.png",
    "./../../assets/myphoto5.png",
    "./../../assets/myphoto6.png",
    "./../../assets/myphoto7.png",
    "./../../assets/myphoto8.png",
    "./../../assets/myphoto9.png",
    "./../../assets/myphoto10.png",
    "./../../assets/myphoto11.png"] // Update this with your resume file path
  //imageUrl: "./../../assets/myphoto.png" // Update with your profile image
};



export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profile.imageUrls.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

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
            src={profile.imageUrls[currentImageIndex]}
            alt="Professional headshot"
            className="w-full h-full object-cover"
          />  
          </Card>
        </motion.div>
      </div>
    </section>
  );
}