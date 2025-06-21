// components/ui/terminal.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to Dhiraj's Portfolio Terminal v2.0",
    "🚀 Discover hidden insights and behind-the-scenes details",
    "Type 'help' to see available commands",
    ""
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: () => [
      "Available commands:",
      "  about      - Learn about me",
      "  skills     - View my technical skills", 
      "  projects   - Browse my projects",
      "  stats      - View impressive project statistics",
      "  impact     - See real-world impact of my projects", 
      "  tech       - Deep dive into tech implementations",
      "  learnings  - Key learnings from each project",
      "  challenges - Technical challenges I've overcome",
      "  future     - What I'm working on next",
      "  contact    - Get in touch",
      "  resume     - Open my resume",
      "  clear      - Clear terminal",
      ""
    ],

    about: () => [
      "Computer Engineering Student & Aspiring Developer",
      "Currently in final year at University of Mumbai",
      "Passionate about full-stack development and AI",
      "Building innovative solutions with modern technologies",
      ""
    ],

    skills: () => [
      "💻 Programming Languages:",
      "   Python, JavaScript, Golang",
      "",
      "🌐 Frontend Technologies:",
      "   Next.js, React, Tailwind CSS",
      "",
      "⚙️ Backend Technologies:",
      "   Node.js, Express.js, FastAPI, Flask",
      "",
      "🗄️ Databases:",
      "   MongoDB, PostgreSQL",
      "",
      "☁️ Cloud & Deployment:",
      "   AWS, GCP, Vercel, Render",
      ""
    ],

    projects: () => [
      "🤖 AsthmaCare Bot",
      "   AI-powered prediction system with 92% accuracy",
      "   Tech: Python, scikit-learn, Flask",
      "",
      "💻 CodePulse",
      "   Real-time collaborative coding platform", 
      "   Tech: React, Node.js, WebSockets, WebRTC",
      "",
      "📊 BazaarWise India",
      "   Customer segmentation system for Indian market",
      "   Tech: FastAPI, Streamlit, scikit-learn",
      "",
      "🔗 QRTap",
      "   Advanced QR Code Generator with customization",
      "   Tech: Next.js, React",
      "",
      "⚖️ Online Voting System",
      "   Facial recognition authentication voting platform",
      "   Tech: FastAPI, React.js, PostgreSQL, OpenCV",
      "",
      "⛓️ Land Registry DApp",
      "   Blockchain-based property registration system",
      "   Tech: Solidity, Ethereum, Web3.js, Truffle",
      ""
    ],
    
    stats: () => [
      "📊 PROJECT STATISTICS & METRICS:",
      "",
      "🤖 AsthmaCare Bot:",
      "   • 92% prediction accuracy (8% above industry standard)",
      "   • 30 hours/month saved for healthcare providers",
      "   • 15% reduction in consultation time",
      "",
      "💻 CodePulse:",
      "   • 30+ programming languages supported",
      "   • 99% code execution accuracy via Judge0 API",
      "   • 76% reduction in sync delay vs HTTP polling",
      "   • 40% bandwidth optimization for video calls",
      "",
      "📈 BazaarWise:",
      "   • 50,000+ customer data points processed in <3 seconds",
      "   • 87% customer segmentation accuracy",
      "   • 32% reduction in marketing misallocation",
      "   • 250ms average response time",
      "",
      "🔗 QRTap:",
      "   • Supports PNG & SVG exports",
      "   • Custom logo embedding capability",
      "   • Email & URL validation built-in",
      "",
      "⚖️ Voting System:",
      "   • 75% facial recognition accuracy",
      "   • 76% reduction in voter fraud potential",
      "   • 68% faster voting vs paper ballots",
      "",
      "⛓️ Land Registry:",
      "   • 94% faster property registration",
      "   • 78% cost reduction vs traditional methods",
      ""
    ],

    impact: () => [
      "🌍 REAL-WORLD IMPACT:",
      "",
      "Healthcare Transformation:",
      "   • AsthmaCare Bot: 15% reduction in consultation time",
      "   • Potential to save 1000+ hours annually across clinics",
      "",
      "Education & Collaboration:",
      "   • CodePulse: Published in IJCRT Journal",
      "   • Enabling remote pair programming globally",
      "   • Supporting technical interviews worldwide",
      "",
      "Business Intelligence:",
      "   • BazaarWise: 41% improvement in recommendation relevance",
      "   • 65% faster marketing team decision-making",
      "",
      "Democratic Process:",
      "   • Voting System: 76% reduction in fraud potential",
      "   • 68% faster voting process vs paper ballots",
      "",
      "Blockchain Innovation:",
      "   • Land Registry: 94% faster property registration",
      "   • 78% cost reduction compared to traditional methods",
      ""
    ],

    tech: () => [
      "⚙️ TECHNICAL DEEP DIVE:",
      "",
      "🧠 Machine Learning Implementations:",
      "   • Gradient Boosting for asthma prediction",
      "   • K-Means clustering for customer segmentation",
      "   • OpenCV for facial recognition (75% accuracy)",
      "",
      "🌐 Real-time Technologies:",
      "   • WebSocket implementation for live code sync",
      "   • WebRTC for peer-to-peer video calls",
      "   • Multi-threading for HTTP server (1000+ connections)",
      "",
      "⛓️ Blockchain & Security:",
      "   • Solidity smart contracts for land registry",
      "   • Web3.js integration with MetaMask",
      "   • Gas optimization for 1000+ property records",
      "",
      "🚀 Performance Optimizations:",
      "   • Gzip compression: 65% bandwidth reduction",
      "   • File upload optimization: 20% faster transfers",
      "   • <5ms logging overhead implementation",
      ""
    ],

    learnings: () => [
      "🎓 KEY LEARNINGS & INSIGHTS:",
      "",
      "From AsthmaCare Bot:",
      "   • Healthcare data requires extreme accuracy validation",
      "   • User trust is built through consistent performance",
      "   • Medical AI needs extensive edge case handling",
      "",
      "From CodePulse:",
      "   • Real-time sync is harder than it looks!",
      "   • WebRTC debugging taught me network protocols",
      "   • Collaboration features need intuitive UX design",
      "",
      "From BazaarWise:",
      "   • Indian market data has unique patterns",
      "   • Visualization speed impacts user adoption",
      "   • Cultural context matters in segmentation",
      "",
      "From Blockchain Projects:",
      "   • Gas optimization is an art form",
      "   • Decentralization vs usability tradeoffs",
      "   • Smart contract security is paramount",
      "",
      "General Insights:",
      "   • Documentation saves more time than you think",
      "   • Performance metrics drive better decisions",
      "   • User feedback shapes product direction",
      ""
    ],

    challenges: () => [
      "💪 TECHNICAL CHALLENGES OVERCOME:",
      "",
      "🔥 The Great WebSocket Sync Challenge:",
      "   • Problem: Code sync conflicts in CodePulse",
      "   • Solution: Implemented operational transformation",
      "   • Result: 76% reduction in sync delays",
      "",
      "🧮 The K-Means Clustering Optimization:",
      "   • Problem: 50K+ data points causing timeouts",
      "   • Solution: Vectorized operations + smart batching",
      "   • Result: <3 second processing time",
      "",
      "🔐 Blockchain Gas Optimization Nightmare:",
      "   • Problem: High transaction costs",
      "   • Solution: Batch operations + storage optimization",
      "   • Result: 60% reduction in gas fees",
      "",
      "🎥 WebRTC Connection Stability:",
      "   • Problem: Frequent disconnections",
      "   • Solution: STUN/TURN servers + reconnection logic",
      "   • Result: 95% connection stability",
      "",
      "📊 Real-time Data Visualization:",
      "   • Problem: Chart rendering lag with large datasets",
      "   • Solution: Canvas optimization + data sampling",
      "   • Result: Smooth 60fps rendering",
      "",
      "👤 Facial Recognition Accuracy:",
      "   • Problem: Low recognition rates in poor lighting",
      "   • Solution: Image preprocessing + multiple validation",
      "   • Result: 75% accuracy across conditions",
      ""
    ],

    future: () => [
      "🔮 WHAT'S NEXT IN MY JOURNEY:",
      "",
      "🚀 Current Projects in Development:",
      "   • Microservices architecture for scalable apps",
      "",
      "📚 Learning Roadmap:",
      "   • Kubernetes & Docker orchestration",
      "   • API design patterns",
      "   • Advanced backend craftsmanship",
      "   • Learning Golang and microservices",
      "   • System design for large-scale applications",
      "   • Also learn llm application development",
      "",
      "🎯 Goals for 2025:",
      "   • Secure a full-time developer position",
      "   • Contribute to at least 3 major open-source projects",
      "   • Learn advanced architectural patterns from industry experts",
      "   • Build production-grade applications with real users",
      ""
    ],

    contact: () => [
      "📧 Email: dhirajsharma2060@gmail.com",
      "💼 LinkedIn: linkedin.com/in/dhiraj-sharma-498034273",
      "🐙 GitHub: github.com/Dhirajsharma2060",
      "",
      "💬 Preferred contact method: Email",
      "⏰ Response time: Usually within 24 hours",
      "🌍 Timezone: IST (UTC+5:30)",
      ""
    ],

    resume: () => {
      window.open("https://flowcv.com/resume/vk10aawgs0", "_blank");
      return ["Opening resume in new tab...", ""];
    },

    clear: () => {
      setHistory([
        "Welcome to Dhiraj's Portfolio Terminal v2.0",
        "🚀 Discover hidden insights and behind-the-scenes details",
        "Type 'help' to see available commands",
        ""
      ]);
      return [];
    }
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    const output = commands[command as keyof typeof commands];
    
    if (command === 'clear') {
      setHistory([
        "Welcome to Dhiraj's Portfolio Terminal v2.0",
        "🚀 Discover hidden insights and behind-the-scenes details",
        "Type 'help' to see available commands",
        ""
      ]);
      setInput("");
      return;
    }
    
    setHistory(prev => [
      ...prev,
      ...(output ? output() : [`Command '${cmd}' not found. Type 'help' for available commands.`, ""])
    ]);
    setInput("");
  };

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm max-w-4xl mx-auto h-[500px] flex flex-col"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Header */}
      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        {/* <div className="ml-4 text-gray-300">dhiraj@portfolio:~</div> */}
      </div>
      
      {/* Terminal Content - Scrollable */}
      <div 
        ref={historyRef}
        className="flex-1 overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
      >
        {/* History */}
        {history.map((line, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
            className="leading-relaxed"
          >
            {line}
          </motion.div>
        ))}
        
        {/* Current input line */}
        <div className="flex items-center">
          <span className="text-blue-400 mr-2">dhiraj@portfolio:~$ </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCommand(input);
              } else if (e.key === 'Tab') {
                e.preventDefault();
                const availableCommands = Object.keys(commands);
                const matches = availableCommands.filter(cmd => cmd.startsWith(input.toLowerCase()));
                if (matches.length === 1) {
                  setInput(matches[0]);
                }
              }
            }}
            className="bg-transparent outline-none flex-1 text-green-400 placeholder-gray-500"
            placeholder=""
            autoFocus
            spellCheck={false}
          />
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="text-green-400 ml-1"
          >
            |
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}