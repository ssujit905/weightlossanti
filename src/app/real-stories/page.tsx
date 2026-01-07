import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { stories } from "@/data/stories";

export const metadata = {
    title: "Real Weight Loss Stories | 5% to 50% Transformations",
    description: "Real people, real data. See how others achieved their 5%, 10%, and 20% weight loss milestones.",
};

export default function RealStoriesIndex() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header className="max-w-6xl mx-auto md:max-w-none" />

            <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        Case Studies
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                        Real People. <br className="hidden md:block" />
                        <span className="text-primary">Real Data.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Motivation fades. Proof lasts forever. Explore detailed breakdowns of how these individuals hit their percentage goals.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story) => (
                        <Link key={story.slug} href={`/real-stories/${story.slug}`} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={story.image}
                                    alt={story.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-4xl font-black mb-0 leading-none">
                                        -{story.percentLost.toFixed(1)}<span className="text-2xl">%</span>
                                    </div>
                                    <div className="text-sm font-medium text-white/80">Body Weight Lost</div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{story.title}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">"{story.quote}"</p>

                                <div className="flex items-center justify-between pt-4 border-t border-border">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{story.timeframe}</span>
                                    <span className="flex items-center text-sm font-bold text-primary">
                                        Read Story <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
