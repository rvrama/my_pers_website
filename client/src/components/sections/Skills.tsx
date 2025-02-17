import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = [
  {
    category: "Leadership",
    items: [
      { name: "Team Management", level: 95 },
      { name: "Strategic Planning", level: 90 },
      { name: "Stakeholder Management", level: 85 },
    ],
  },
  {
    category: "Technical",
    items: [
      { name: "Agile Methodologies", level: 90 },
      { name: "Project Management", level: 85 },
      { name: "Risk Management", level: 80 },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Communication", level: 95 },
      { name: "Problem Solving", level: 90 },
      { name: "Decision Making", level: 85 },
    ],
  },
];

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
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
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
