import Link from "next/link";
import Header from "@/components/Header";
import { ArrowRight, BookOpen, HeartPulse, Brain } from "lucide-react";

export const metadata = {
    title: "Learn | Weight Loss Percent",
    description: "Evidence-based guides on weight loss percentages, metabolic health, and sustainable progress.",
};

export default function LearnPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-12">
                <div className="mb-12 space-y-4">
                    <h1 className="text-4xl font-black tracking-tight">The Science of Percentage.</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Why 5% matters more than 50 pounds. Deep dives into metabolic health, backed by clinical research.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <ArticleCard
                        icon={<HeartPulse className="w-6 h-6 text-red-500" />}
                        category="Clinical Outcomes"
                        title="The Magic Number: Why 5% Weight Loss Changes Everything"
                        description="Losing just 5% of your body weight significantly lowers blood pressure and risk of diabetes. Here's the science."
                        href="/learn/benefits-of-5-percent-weight-loss"
                    />
                    <ArticleCard
                        icon={<Brain className="w-6 h-6 text-purple-500" />}
                        category="Community Voices"
                        title="5 Real Life Wins You Didn't Expect"
                        description="The best parts of weight loss aren't on the scale. Real stories about mood, money, and knee pain."
                        href="/learn/real-stories-5-percent-impact"
                    />
                    <ArticleCard
                        icon={<BookOpen className="w-6 h-6 text-blue-500" />}
                        category="Guide"
                        title="How Fast is Too Fast?"
                        description="The science of safe weight loss rates. Why 1-2 lbs per week is the golden rule."
                        href="/learn/safe-weight-loss-rate"
                    />
                </div>
            </main>
        </div>
    );
}

function ArticleCard({ icon, category, title, description, href, disabled = false }: any) {
    const Wrapper = disabled ? 'div' : Link;
    return (
        <Wrapper href={href} className={`block group p-6 bg-card border border-border rounded-xl shadow-sm transition-all ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-md hover:border-primary/20'}`}>
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-muted rounded-lg">{icon}</div>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{category}</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground mb-4">{description}</p>
            {!disabled && (
                <div className="flex items-center text-sm font-medium text-primary">
                    Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
            )}
            {disabled && <span className="text-xs font-mono bg-muted px-2 py-1 rounded">Coming Soon</span>}
        </Wrapper>
    );
}
