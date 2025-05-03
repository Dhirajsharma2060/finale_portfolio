"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background to-background/95">
      <div className="container px-4 py-32 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-bold mb-6 relative inline-block"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 } 
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/90 hover:from-primary/90 hover:to-foreground/90 transition-all duration-300">
              Dhiraj R. Sharma
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            whileHover={{ 
              color: 'var(--foreground)',
              transition: { duration: 0.3 } 
            }}
          >
            Computer Engineering Student & Aspiring Developer
          </motion.p>
          
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" asChild>
                <a href="#contact" className="relative overflow-hidden group">
                  <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <span className="relative z-10">Get in Touch</span>
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" asChild>
                <a href="#projects" className="relative overflow-hidden group">
                  <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <span className="relative z-10">View Projects</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator with enhanced animation */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
          onClick={scrollToAbout}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
        </motion.div>
      </div>
    </section>
  );
}