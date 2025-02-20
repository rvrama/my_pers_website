import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// You can customize these values
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechVision Inc",
    content: "An exceptional leader who transformed our delivery process. The impact on our team's efficiency was remarkable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateSoft",
    content: "Outstanding strategic thinking and execution. Helped us achieve our ambitious digital transformation goals.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    initials: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "VP Engineering, CloudScale",
    content: "A true professional who brings both technical expertise and leadership skills to the table.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    initials: "ER"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">
          Client Testimonials
        </h2>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-none bg-transparent">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      
                      <blockquote className="text-lg text-muted-foreground italic mb-4">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </motion.div>
    </section>
  );
}
