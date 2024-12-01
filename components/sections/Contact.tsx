"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { CloudIcon } from "@/components/icons/cloud-icon";
import { contactInfo, socialLinks } from "@/lib/data";
import { Loader } from "@/components/ui/loader";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-primary">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-primary">
                    {contactInfo.phone}
                  </a>
                </div>
                {contactInfo.location && (
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <span>{contactInfo.location}</span>
                  </div>
                )}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Social Links</h3>
              <div className="flex flex-col gap-4">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start hover-social"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.customIcon ? (
                        link.icon === 'cloud' && <CloudIcon className="w-5 h-5 mr-3" />
                      ) : (
                        link.icon === 'linkedin' ? (
                          <Linkedin className="w-5 h-5 mr-3" />
                        ) : (
                          <Github className="w-5 h-5 mr-3" />
                        )
                      )}
                      {link.platform}
                    </a>
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}