"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
	{ name: "About", href: "/#about" }, // Link to the About section on the landing page
	{ name: "Skills", href: "/#skills" }, // Link to the Skills section
	{ name: "Projects", href: "/#projects" }, // Link to the Projects section
	{ name: "Experience", href: "/#experience" }, // Link to the Experience section
	{ name: "Blogs", href: "/#blogs" }, // Link to the Blogs section
	{ name: "Contact", href: "/#contact" }, // Link to the Contact section
];

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.nav
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
			className={`fixed w-full z-50 transition-all duration-500 ${
				scrolled || isOpen
					? "bg-background/98 backdrop-blur-md shadow-sm border-b border-muted/20"
					: "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<motion.a
						href="/"
						className="text-xl font-bold transition-colors"
						whileHover={{
							scale: 1.05,
							color: "var(--primary)",
							transition: { type: "spring", stiffness: 400, damping: 10 },
						}}
					>
						DS
					</motion.a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8">
						{navItems.map((item, index) => (
							<motion.a
								key={item.name}
								href={item.href}
								className="text-muted-foreground hover-link"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									delay: 0.1 * index,
									duration: 0.5,
								}}
								whileHover={{ y: -2 }}
							>
								{item.name}
							</motion.a>
						))}
					</div>

					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden hover:bg-primary hover:text-primary-foreground"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X /> : <Menu />}
					</Button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="md:hidden"
					>
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors rounded-md"
									onClick={() => setIsOpen(false)}
								>
									{item.name}
								</a>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	);
}