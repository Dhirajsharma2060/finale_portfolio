"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { certifications, virtualExperiences } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Experience & Certifications</h2>
          
          <div className="grid gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 hover-card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center gap-4">
                    <Badge variant="secondary">{cert.date}</Badge>
                    {cert.url && (
                      <Button variant="outline" size="sm" className="hover-social" asChild>
                        <a href={cert.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                {cert.badgeUrl && (
                  <div className="mt-4">
                    <img src={cert.badgeUrl} alt={`${cert.name} Badge`} className="h-16 w-auto" />
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Virtual Experience Programs</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {virtualExperiences.map((exp, index) => (
                exp.url ? (
                  <a
                    key={index}
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300"
                  >
                    <Badge
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-all duration-300"
                    >
                      {exp.name}
                    </Badge>
                  </a>
                ) : (
                  <Badge
                    key={index}
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground cursor-default transition-all duration-300"
                  >
                    {exp.name}
                  </Badge>
                )
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}