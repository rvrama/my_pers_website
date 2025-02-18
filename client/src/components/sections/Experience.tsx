import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// You can customize these values
const experiences = [
  {
    title: "Title of Your Current Role",
    company: "Current Company Name",
    period: "2020 - Present",
    description: "Describe your key responsibilities and major achievements in this role. Include specific metrics and results where possible.",
    achievements: [
      "Key Achievement 1",
      "Key Achievement 2",
      "Key Achievement 3"
    ],
  },
  {
    title: "Title of Your Previous Role",
    company: "Previous Company Name",
    period: "2017 - 2020",
    description: "Describe your responsibilities and achievements in this previous role. Focus on relevant experience for your target position.",
    achievements: [
      "Key Achievement 1",
      "Key Achievement 2",
      "Key Achievement 3"
    ],
  },
  // Add more experiences as needed
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