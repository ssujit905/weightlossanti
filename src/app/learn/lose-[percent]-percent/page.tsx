import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { ArrowRight, CheckCircle, TrendingUp, Activity, Heart } from "lucide-react";

// Generate pages for 5% to 50%
export async function generateStaticParams() {
    return Array.from({ length: 46 }, (_, i) => i + 5).map((percent) => ({
        percent: percent.toString(),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ percent: string }> }) {
    const { percent } = await params;
    return {
        title: `Lose ${percent}% of Body Weight | Health Benefits & Timeline`,
        description: `What happens to your body when you lose ${percent}% of your weight? See the medical benefits, calculate your timeline, and understand the impact on blood pressure and diabetes.`,
    };
}

export default async function PercentagePage({ params }: { params: Promise<{ percent: string }> }) {
    const { percent } = await params;
    const p = parseInt(percent);

    if (isNaN(p) || p < 1 || p > 100) {
        notFound();
    }

    // Determine benefits based on range
    const benefits = getBenefitsForRange(p);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": `The Health Impact of Losing ${p}% Body Weight`,
                    "description": `Medical breakdown of the benefits of losing ${p}% of your starting weight.`,
                    "author": { "@type": "Organization", "name": "WeightLossPercent Medical Board" },
                    "datePublished": new Date().toISOString(),
                }}
            />
            <Header />

            <main className="max-w-3xl mx-auto px-6 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-wider text-sm">
                        <TrendingUp className="w-4 h-4" />
                        Milestone Analysis
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                        What Happens When You Lose <span className="text-primary">{p}%</span>?
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        It's not just a number on a scale. Losing <strong>{p}%</strong> of your body weight triggers a cascade of biological repairs. Here is the breakdown.
                    </p>
                </div>

                {/* The Math Section */}
                <div className="bg-card border border-border rounded-2xl p-8 mb-12 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6 text-center">Do The Math: What is {p}% for you?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <MathBox start={150} percent={p} />
                        <MathBox start={200} percent={p} />
                        <MathBox start={250} percent={p} />
                        <MathBox start={300} percent={p} />
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-6">
                        *Calculated as: Starting Weight × ({p} ÷ 100)
                    </p>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none prose-lg">
                    <h2>Medical Benefits at {p}%</h2>
                    <p>
                        Clinical research shows that health improvements don't wait for your "ideal weight." They start early. At the <strong>{p}%</strong> mark, here is what is happening inside your body:
                    </p>

                    <div className="grid gap-6 not-prose my-8">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex gap-4 p-5 bg-muted/30 rounded-xl border border-border/50">
                                <div className="mt-1 bg-white dark:bg-slate-800 p-2 rounded-lg h-fit shadow-sm">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2>The "Paper Towel" Effect</h2>
                    <p>
                        Losing {p}% might not visually transform you overnight, but visualize a paper towel roll. The first few sheets (pounds) don't change the size of the roll much. But as you get closer to the center, every single sheet removed makes the roll look significantly smaller. Your {p}% loss is peeling away those critical outer layers.
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-6 rounded-r-xl my-8 not-prose">
                        <h3 className="font-bold text-blue-800 dark:text-blue-300 text-lg mb-2">Sustainable Pace</h3>
                        <p className="text-blue-700 dark:text-blue-400 mb-0">
                            To reach this {p}% goal safely, aim for a rate of <strong>0.5% to 1% per week</strong>. Rushing faster than that puts you at risk of muscle loss and metabolic slowdown.
                        </p>
                    </div>

                </div>

                <div className="mt-16 text-center space-y-8 pt-12 border-t border-border">
                    <h3 className="text-3xl font-black">Ready to hit {p}%?</h3>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
                        >
                            Start Tracking Now
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </div>

            </main>
        </div>
    );
}

function MathBox({ start, percent }: { start: number, percent: number }) {
    const lost = (start * percent) / 100;
    return (
        <div className="p-4 bg-muted/50 rounded-xl">
            <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">If you weigh</div>
            <div className="font-bold text-lg mb-2">{start} lbs</div>
            <div className="text-primary font-black text-2xl">-{lost} lbs</div>
        </div>
    );
}

function getBenefitsForRange(percent: number) {
    const common = [
        {
            title: "Joint Relief",
            description: `For every pound lost, you remove 4 pounds of pressure from your knees. Losing ${percent}% relieves massive mechanical stress from your joints.`,
            icon: <Activity className="w-6 h-6 text-green-500" />
        }
    ];

    if (percent < 10) {
        return [
            {
                title: "Blood Pressure Reduction",
                description: "Even a 5% loss is clinically proven to lower both systolic and diastolic blood pressure, reducing strain on your arteries.",
                icon: <Heart className="w-6 h-6 text-red-500" />
            },
            {
                title: "Insulin Sensitivity",
                description: "Your cells become more responsive to insulin, helping to regulate blood sugar levels more effectively.",
                icon: <Activity className="w-6 h-6 text-blue-500" />
            },
            ...common
        ];
    } else if (percent < 15) {
        return [
            {
                title: "Sleep Apnea Improvement",
                description: "Research indicates that a 10% weight loss can significantly reduce the severity of obstructive sleep apnea symptoms.",
                icon: <Activity className="w-6 h-6 text-purple-500" />
            },
            {
                title: "Fatty Liver Reduction",
                description: "Losing 10% of body weight is the strongest recommendation for reducing liver fat and inflammation.",
                icon: <Activity className="w-6 h-6 text-yellow-500" />
            },
            {
                title: "Heart Health",
                description: "Significant improvements in triglyceride levels and LDL cholesterol are typically observed at this stage.",
                icon: <Heart className="w-6 h-6 text-red-500" />
            },
            ...common
        ];
    } else {
        return [
            {
                title: "Type 2 Diabetes Remission",
                description: "Studies like the DiRECT trial have shown that losing 15%+ body weight can put Type 2 diabetes into remission for many patients.",
                icon: <CheckCircle className="w-6 h-6 text-emerald-500" />
            },
            {
                title: "Mortality Risk Reduction",
                description: "Long-term studies link this level of weight loss with a significant reduction in all-cause mortality risk.",
                icon: <Heart className="w-6 h-6 text-red-500" />
            },
            ...common
        ];
    }
}
