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
            Backend & Software Developer | Passionate about Go, Python, and scalable backend systems
          </motion.p>
          
          <motion.div 
            className="flex gap-4 justify-center flex-wrap"
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
            
            {/* Resume Download Button - Enhanced with multiple effects */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="secondary" asChild className="relative overflow-hidden group">
                <a 
                  href="https://flowcv.com/resume/vk10aawgs0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden"
                >
                  {/* Animated gradient background */}
                  <span className="absolute inset-0 bg-secondary/20"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/30 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  
                  {/* Rotating border effect */}
                  <span className="absolute inset-0">
                    <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                    <span className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-primary/50 to-transparent transform -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out delay-200"></span>
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000 ease-in-out delay-400"></span>
                    <span className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-primary/50 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 ease-in-out delay-600"></span>
                  </span>
                  
                  {/* Center content with animated icon */}
                  <span className="relative z-10 flex items-center">
                    <motion.div 
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="rounded-full p-1 mr-2 bg-secondary/30 group-hover:bg-primary/30 transition-colors duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </motion.div>
                    
                    {/* Text with letter animation */}
                    <span className="font-medium relative">
                      <span className="group-hover:text-transparent group-hover:animate-pulse transition-colors duration-300">Resume</span>
                      <span className="absolute left-0 overflow-hidden whitespace-nowrap w-0 group-hover:w-full transition-all duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-primary">
                        Resume
                      </span>
                    </span>
                  </span>
                  
                  {/* Bottom shine effect */}
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></span>
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