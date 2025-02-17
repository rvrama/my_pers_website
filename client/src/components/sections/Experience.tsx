import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Senior Delivery Manager",
    company: "Tech Solutions Inc",
    period: "2020 - Present",
    description:
      "Led cross-functional teams in delivering enterprise software solutions. Improved delivery efficiency by 40%.",
    achievements: ["Agile Transformation", "Team Growth", "Process Optimization"],
  },
  {
    title: "Product Manager",
    company: "Digital Innovations Co",
    period: "2017 - 2020",
    description:
      "Managed product lifecycle and coordinated with stakeholders to ensure successful product launches.",
    achievements: ["Revenue Growth", "Customer Satisfaction", "Market Expansion"],
  },
  {
    title: "Project Lead",
    company: "Global Systems Ltd",
    period: "2015 - 2017",
    description:
      "Supervised technical projects and mentored junior team members.",
    achievements: ["On-time Delivery", "Budget Management", "Team Leadership"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Professional Experience
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <Badge key={i} variant="secondary">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
