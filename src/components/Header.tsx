"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ className }: { className?: string }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={cn("border-b border-border bg-white/50 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-10", className)}>
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>
                        <Logo />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link href="/real-stories" className="text-muted-foreground hover:text-foreground hover:text-primary transition-colors">Stories</Link>
                    <Link href="/learn" className="text-muted-foreground hover:text-foreground transition-colors">Articles</Link>
                    <Link href="/about/medical-board" className="text-muted-foreground hover:text-foreground transition-colors">Medical Board</Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl absolute w-full left-0 animate-in slide-in-from-top-5 fade-in-20">
                    <nav className="flex flex-col p-6 gap-6 text-lg font-medium">
                        <Link
                            href="/real-stories"
                            className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-between border-b border-border/50 pb-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Real Stories
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full uppercase tracking-wider">Inspiration</span>
                        </Link>
                        <Link
                            href="/learn"
                            className="text-muted-foreground hover:text-primary transition-colors border-b border-border/50 pb-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Articles & Guides
                        </Link>
                        <Link
                            href="/about/medical-board"
                            className="text-muted-foreground hover:text-primary transition-colors pb-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Medical Board
                        </Link>
                        <Link
                            href="/"
                            className="mt-4 bg-primary text-white text-center py-3 rounded-xl font-bold shadow-lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Open Calculator
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
