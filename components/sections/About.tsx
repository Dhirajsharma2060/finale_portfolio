"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { education } from "@/lib/data";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground">
              Eager and driven Computer Engineering student at the University of Mumbai, 
              currently advancing through the final year. Passionate about bridging 
              theoretical concepts with real-world applications, with a strong understanding 
              of computer science fundamentals and programming languages.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Education</h3>
            <div className="grid gap-6 max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover-card">
                  <h4 className="font-semibold text-xl mb-2">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>{edu.duration}</span>
                    <span>{edu.location}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}