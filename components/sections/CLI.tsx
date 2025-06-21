// components/sections/CLI.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Terminal } from "@/components/ui/terminal";

export default function CLI() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="cli" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">Interactive Terminal</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore my portfolio through a command-line interface. Type commands to navigate and learn more about my work.
          </p>
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}