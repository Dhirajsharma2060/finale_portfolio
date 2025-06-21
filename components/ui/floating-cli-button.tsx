// components/ui/floating-cli-button.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Terminal } from "@/components/ui/terminal";

export function FloatingCLIButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Much Smaller Floating CLI Button */}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            onClick={() => setIsOpen(true)}
            size="sm"
            className="relative group h-7 w-7 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-600 p-0"
          >
            {/* Subtle animated background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 animate-pulse" />
            
            {/* Much smaller Classic Shell Script Icon */}
            <svg 
              className="h-3 w-3 text-green-400 relative z-10" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm2 2h2v2H6V7zm0 3h2v2H6v-2zm0 3h2v2H6v-2zm3-6h9v2H9V7zm0 3h9v2H9v-2zm0 3h5v2H9v-2z"/>
            </svg>
            
            {/* Compact Tooltip */}
            <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-800 border border-gray-600 rounded px-1.5 py-0.5 text-xs text-green-400 shadow-md whitespace-nowrap font-mono">
                CLI
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-2 border-transparent border-l-gray-800"></div>
              </div>
            </div>
          </Button>
        </motion.div>
      </motion.div>

      {/* Compact Terminal Modal - Manually controlled size */}
      <AnimatePresence>
        {isOpen && (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-w-4xl h-[500px] p-0 bg-gray-900 border-gray-700 gap-0 top-[15%] translate-y-0">
              {/* Ultra-compact header bar */}
              <div className="flex items-center px-2 py-[2px] bg-gray-800 border-b border-gray-700">
                <div className="flex items-center gap-[4px]">
                  <div className="flex space-x-[2px]">
                    <div className="w-[3px] h-[3px] bg-red-500 rounded-full"></div>
                    <div className="w-[3px] h-[3px] bg-yellow-500 rounded-full"></div>
                    <div className="w-[3px] h-[3px] bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-green-400 font-mono text-[10px] ml-[4px]">
                    Terminal
                  </span>
                </div>
              </div>
              
              {/* Terminal content with fixed height */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="h-[460px] overflow-hidden"
              >
                <Terminal />
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}