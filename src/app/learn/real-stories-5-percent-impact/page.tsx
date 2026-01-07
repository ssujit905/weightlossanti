import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Quote, Heart, DollarSign, Zap, Smile } from "lucide-react";

export const metadata = {
    title: "5 Unexpected Wins from 5% Weight Loss | Real Stories",
    description: "Beyond the scale: decreased knee pain, saving money, and the 'irritatingly good mood'. Real experiences from the community.",
};

export default function RealStoriesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="border-b border-border bg-white/50 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
                <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
                    <Link href="/learn" className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Guides
                    </Link>
                </div>
            </header>

            <article className="max-w-3xl mx-auto px-6 py-12">
                <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 shadow-lg">
                    <Image
                        src="/images/stories-hero.png"
                        alt="Healthy lifestyle flatlay with running shoes and fruit"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <header className="mb-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-bold px-2 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-full uppercase tracking-wide">
                            Community Voices
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                        5 Real Life Wins You Didn't Expect from <span className="text-primary">5%</span> Weight Loss
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We scour the internet for real stories. It turns out, the best parts of losing weight have nothing to do with the number on the scale.
                    </p>
                </header>

                <div className="prose prose-slate dark:prose-invert max-w-none prose-lg">
                    <p>
                        When we talk about weight loss, we usually talk about jeans sizes or jawlines. But for thousands of people sharing their journey online, the most meaningful changes are the ones they didn't see coming.
                    </p>
                    <p>
                        We analyzed hundreds of testimonials from real people who hit that magical <strong>5-10% weight loss</strong> milestone. Here are the 5 most common "non-scale victories" (NSVs) that changed their daily lives.
                    </p>

                    <StoryCard
                        icon={<Zap className="w-6 h-6 text-yellow-500" />}
                        title="1. The 'Irritatingly Good' Mood"
                        quote="I found myself less stressed. Things that used to annoy me just rolled off my back. My partner joked that I was in an 'irritatingly good mood'."
                        context="Many people report a lifting of 'brain fog' and anxiety. Stable blood sugar levels often lead to stable emotions."
                    />

                    <StoryCard
                        icon={<Heart className="w-6 h-6 text-red-500" />}
                        title="2. The 'Knee Miracle'"
                        quote="I can walk down stairs without wincing. I didn't verify how much my knees hurt until they didn't."
                        context="Physics is real: losing 10lbs takes 40lbs of pressure off your knees with every step. For many, this 5% loss is the difference between chronic pain and freedom."
                    />

                    <StoryCard
                        icon={<DollarSign className="w-6 h-6 text-green-500" />}
                        title="3. The Financial Bonus"
                        quote="I started cooking at home to control calories. Six months later, I looked at my bank account and realized I'd saved over $2,000 on takeout."
                        context="Weight loss often triggers a 'keystone habit'—cooking. This spills over into financial health, creating a double-win."
                    />

                    <StoryCard
                        icon={<Smile className="w-6 h-6 text-blue-500" />}
                        title="4. Fitting in the World"
                        quote="I sat in a restaurant booth and didn't have to squeeze. I fit. It sounds small, but I almost cried."
                        context="Physical comfort in public spaces is a massive psychological relief. Losing just a few inches can make travel, dining, and theater seats accessible again."
                    />

                    <div className="my-12 p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">What's Your Non-Scale Victory?</h3>
                        <p className="text-muted-foreground mb-6">
                            Track your percentage, but celebrate your life.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors"
                        >
                            Check Your 5% Milestone
                        </Link>
                    </div>

                </div>
            </article>
        </div>
    );
}

function StoryCard({ icon, title, quote, context }: { icon: any, title: string, quote: string, context: string }) {
    return (
        <div className="my-8 bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-muted rounded-full">{icon}</div>
                <h3 className="text-xl font-bold m-0">{title}</h3>
            </div>
            <div className="relative pl-6 border-l-4 border-primary/20 mb-4">
                <Quote className="absolute -left-3 -top-2 w-6 h-6 text-primary fill-primary/10 bg-card" />
                <p className="italic text-lg text-slate-700 dark:text-slate-300 m-0">"{quote}"</p>
            </div>
            <p className="text-sm text-muted-foreground m-0 leading-relaxed">
                <strong>Why it happens:</strong> {context}
            </p>
        </div>
    );
}
