"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogs } from "@/lib/blogs";

export default function Blogs() {
  return (
    <section id="blogs" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Blogs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block p-4 bg-card rounded-lg shadow hover:shadow-lg transition-transform"
              >
                <Link href={`/blogs/${index}`} className="block">
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <p className="text-sm text-muted-foreground">{blog.date}</p>
                  <p className="mt-2 text-muted-foreground">{blog.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
