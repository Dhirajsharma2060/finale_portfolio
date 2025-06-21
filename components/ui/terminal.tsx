// components/ui/terminal.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to Dhiraj's Portfolio Terminal v1.0",
    "Type 'help' to see available commands",
    ""
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: () => [
      "Available commands:",
      "  about     - Learn about me",
      "  skills    - View my technical skills", 
      "  projects  - Browse my projects",
      "  contact   - Get in touch",
      "  resume    - Open my resume",
      "  clear     - Clear terminal",
      ""
    ],
    about: () => [
      "Computer Engineering Student & Aspiring Developer",
      "Currently in final year at University of Mumbai",
      "Passionate about full-stack development and AI",
      ""
    ],
    skills: () => [
      "Programming: Python, JavaScript, Golang",
      "Frontend: Next.js, React, Tailwind CSS",
      "Backend: Node.js, Express.js, FastAPI",
      "Database: MongoDB, PostgreSQL",
      "Cloud: AWS, GCP, Vercel",
      ""
    ],
    projects: () => [
      "🤖 AsthmaCare Bot - AI-powered prediction system (92% accuracy)",
      "💻 CodePulse - Real-time collaborative coding platform", 
      "📊 BazaarWise India - Customer segmentation system",
      "🔗 QRTap - Advanced QR Code Generator",
      ""
    ],
    contact: () => [
      "📧 Email: dhirajsharma2060@gmail.com",
      "💼 LinkedIn: linkedin.com/in/dhirajsharma2060",
      "🐙 GitHub: github.com/Dhirajsharma2060",
      ""
    ],
    resume: () => {
      window.open("https://flowcv.com/resume/vk10aawgs0", "_blank");
      return ["Opening resume in new tab...", ""];
    },
    clear: () => {
      setHistory([]);
      return [];
    }
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    const output = commands[command as keyof typeof commands];
    
    setHistory(prev => [
      ...prev,
      `$ ${cmd}`,
      ...(output ? output() : [`Command '${cmd}' not found. Type 'help' for available commands.`, ""])
    ]);
    setInput("");
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm max-w-3xl mx-auto"
    >
      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 text-gray-300">dhiraj@portfolio:~</div>
      </div>
      
      <div className="space-y-1 mb-4 max-h-80 overflow-y-auto">
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('$') ? 'text-blue-400' : ''}>
            {line}
          </div>
        ))}
      </div>
      
      <div className="flex items-center">
        <span className="text-blue-400">$ </span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleCommand(input);
            }
          }}
          className="bg-transparent outline-none flex-1 ml-2 text-green-400"
          placeholder="Type a command..."
          autoFocus
        />
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="text-green-400"
        >
          |
        </motion.span>
      </div>
    </motion.div>
  );
}