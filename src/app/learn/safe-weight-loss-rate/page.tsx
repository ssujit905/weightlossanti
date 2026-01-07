import Link from "next/link";
import { ArrowLeft, CheckCircle, AlertTriangle, ShieldCheck } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata = {
    title: "Safe Weight Loss Rate Per Week | Medical Guidelines",
    description: "doctors recommend losing 1-2 lbs per week. faster weight loss often leads to muscle loss and metabolic slowdown. calculate your safe rate.",
};

export default function ArticlePage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "How Much Weight Can You Safely Lose Per Week?",
                    "datePublished": new Date().toISOString(),
                    "author": [{ "@type": "Organization", "name": "WeightLossPercent Medical Board" }],
                    "description": "Doctors recommend losing 1-2 lbs per week. Faster weight loss often leads to muscle loss and metabolic slowdown."
                }}
            />
            <header className="border-b border-border bg-white/50 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
                <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
                    <Link href="/learn" className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Guides
                    </Link>
                </div>
            </header>

            <article className="max-w-3xl mx-auto px-6 py-12">
                {/* Gradient Hero Placeholder */}
                <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-10 shadow-lg bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center">
                    <ShieldCheck className="w-24 h-24 text-white/20" />
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                        <span className="text-white/90 font-medium text-sm uppercase tracking-wider">Medical Guidelines</span>
                    </div>
                </div>

                <header className="mb-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-bold px-2 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 rounded-full uppercase tracking-wide">
                            Safety First
                        </span>
                        <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 rounded-full flex items-center gap-1">
                            4 min read
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                        How Fast Is <span className="text-emerald-600 dark:text-emerald-400">Too Fast?</span> The Science of Safe Weight Loss
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        In a world of "30-day shreds", patience is a hard sell. But biologically, speed comes at a steep price. Here is the medical consensus on safe rates.
                    </p>
                </header>

                <div className="prose prose-slate dark:prose-invert max-w-none prose-lg">
                    <p>
                        The universal recommendation from major health organizations, including the <strong>CDC</strong> and the <strong>Mayo Clinic</strong>, is consistent:
                    </p>

                    <div className="my-8 p-6 bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 rounded-r-xl">
                        <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-2 mt-0">The Golden Rule</h3>
                        <p className="mb-0 text-lg font-medium">
                            Aim to lose 1 to 2 pounds (0.5 to 1 kg) per week.
                        </p>
                    </div>

                    <h2>Why Not Faster?</h2>
                    <p>
                        When you drop weight more quickly than this, your body enters a "starvation" state. It doesn't just burn fat; it begins to break down muscle tissue for energy and drastically lowers your metabolic rate to conserve fuel.
                    </p>

                    <div className="grid gap-4 not-prose mb-8">
                        <BenefitCard
                            title="Muscle Preservation"
                            description="Slower weight loss (combined with protein) ensures that what you lose is fat, not the muscle that gives you shape and strength."
                            icon={<CheckCircle className="w-6 h-6 text-emerald-500" />}
                        />
                        <BenefitCard
                            title="Gallstone Prevention"
                            description="Rapid weight loss significantly increases the risk of gallstones, which often require surgery to remove."
                            icon={<ShieldCheck className="w-6 h-6 text-emerald-500" />}
                        />
                        <BenefitCard
                            title="Skin Elasticity"
                            description="Losing weight slowly gives your skin time to shrink and adapt, reducing the risk of loose skin."
                            icon={<CheckCircle className="w-6 h-6 text-emerald-500" />}
                        />
                    </div>

                    <h2>The "Percentage" Exception</h2>
                    <p>
                        Heavier individuals can often safely lose more than 2 lbs per week initially. A better metric is often <strong>1% of your body weight per week</strong>.
                    </p>
                    <ul>
                        <li>If you weigh <strong>300 lbs</strong>, losing <strong>3 lbs/week</strong> is likely safe.</li>
                        <li>If you weigh <strong>150 lbs</strong>, losing <strong>3 lbs/week</strong> is aggressive and risky.</li>
                    </ul>

                    <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-xl border border-amber-200 dark:border-amber-800 my-8 not-prose">
                        <div className="flex gap-3">
                            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-amber-800 dark:text-amber-500 mb-1">Red Flags</h4>
                                <p className="text-sm text-amber-700 dark:text-amber-400 mb-0">
                                    Stop immediately and see a doctor if you experience dizziness, hair loss, or extreme fatigue. These are signs of malnutrition.
                                </p>
                            </div>
                        </div>
                    </div>

                    <p>
                        Calculators like ours focus on <strong>percentage milestones</strong> (5%, 10%) because they are biologically significant targets that improve health regardless of how long they take to reach.
                    </p>

                </div>

                <div className="mt-12 pt-8 border-t border-border">
                    <Link
                        href="/"
                        className="flex items-center justify-center p-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg"
                    >
                        Check Your Safe 5% Goal Now
                    </Link>
                </div>
            </article>
        </div>
    );
}

function BenefitCard({ title, description, icon }: any) {
    return (
        <div className="flex gap-4 p-4 border border-border rounded-lg bg-card hover:border-emerald-500/30 transition-colors">
            {icon}
            <div>
                <h4 className="font-bold text-foreground">{title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
