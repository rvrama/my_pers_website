import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useRef, useState, useEffect } from "react";

// You can customize these values
const skills = [
  {
    category: "Leadership",
    items: [
      { name: "Strategic Planning", level: 90 },
      { name: "Team Management", level: 95 },
      { name: "Stakeholder Management", level: 85 },
      { name: "Change Management", level: 80 }
    ],
  },
  {
    category: "Delivery & Operations",
    items: [
      { name: "Project Management", level: 90 },
      { name: "Agile Methodologies", level: 85 },
      { name: "Risk Management", level: 80 },
      { name: "Process Optimization", level: 85 }
    ],
  },
  {
    category: "Technical Skills",
    items: [
      { name: "Digital Transformation", level: 85 },
      { name: "Data Analysis", level: 80 },
      { name: "Business Intelligence", level: 75 },
      { name: "Technology Strategy", level: 85 }
    ],
  },
];

const ProgressBar = ({ value }: { value: number }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setProgress(value);
    }
  }, [isInView, value]);

  return (
    <Progress 
      ref={ref}
      value={progress} 
      className="h-2 transition-all duration-1000 ease-out"
    />
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-4">
                    {skillGroup.items.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1 + groupIndex * 0.2 
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <ProgressBar value={skill.level} />
                      </motion.div>
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