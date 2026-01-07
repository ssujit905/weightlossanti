import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, FileText } from "lucide-react";

export const metadata = {
    title: "Benefits of 5% Weight Loss | Clinical Outcomes",
    description: "Research shows that losing just 5% of body weight improves blood pressure, cholesterol, and insulin sensitivity. Learn the medical facts.",
};

export default function ArticlePage() {
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
                        src="/images/science-hero.png"
                        alt="Medical illustration of DNA and heart rhythm"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <header className="mb-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full uppercase tracking-wide">
                            Clinical Evidence
                        </span>
                        <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 rounded-full flex items-center gap-1">
                            <FileText className="w-3 h-3" />
                            5 min read
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                        The Magic Number: Why <span className="text-primary">5%</span> Weight Loss Changes Everything
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        You don't need to reach your "ideal" BMI to see drastic health improvements. Clinical research confirms that the first 5% of weight loss delivers the highest return on investment for your metabolic health.
                    </p>
                </header>

                <div className="prose prose-slate dark:prose-invert max-w-none prose-lg">
                    <p>
                        When we set out to lose weight, we often fixate on a specific number—usually one that is 20, 30, or even 50 pounds away. But biologically, your body begins to heal long before you hit that final goal.
                    </p>
                    <p>
                        According to the <strong>Centers for Disease Control and Prevention (CDC)</strong>, losing just 5% to 10% of your total body weight is likely to produce significant health benefits [1].
                    </p>

                    <div className="my-8 p-6 bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-2 mt-0">The 5% Calculation</h3>
                        <p className="mb-0 text-base">
                            If you weigh <strong>200 lbs</strong>, 5% is just <strong>10 lbs</strong>.<br />
                            If you weigh <strong>100 kg</strong>, 5% is just <strong>5 kg</strong>.
                        </p>
                    </div>

                    <h2>Key Clinical Benefits</h2>

                    <div className="grid gap-4 not-prose mb-8">
                        <BenefitCard
                            title="Improved Insulin Sensitivity"
                            description="Adipose tissue (body fat) releases signals that can interfere with insulin. Reducing fat mass by 5% helps your body regulate blood sugar more effectively, a critical factor for Type 2 Diabetes management."
                        />
                        <BenefitCard
                            title="Lower Blood Pressure"
                            description="Carrying excess weight strains the heart. Modest weight loss reduces vascular resistance, often leading to lower systolic and diastolic pressure readings."
                        />
                        <BenefitCard
                            title="Reduced Joint Pain"
                            description="For every pound of weight lost, there is a 4-pound reduction in knee joint load. Losing 10 lbs (5% of 200) relieves 40 lbs of pressure from your knees with every step [2]."
                        />
                    </div>

                    <h2>Why Percentage Matters More Than Pounds</h2>
                    <p>
                        Focusing on percentage normalizes progress across different body types. Losing 10 pounds is harder for someone who weighs 130 lbs (7.6%) than for someone who weighs 250 lbs (4%). By tracking percentage, you honor the <em>relative effort</em> and physiological impact of your journey.
                    </p>

                    <hr className="my-12 border-border" />

                    <section className="bg-muted/50 p-6 rounded-xl text-sm text-muted-foreground">
                        <h4 className="text-foreground font-bold mb-2 uppercase tracking-wider text-xs">References</h4>
                        <ol className="list-decimal list-inside space-y-1">
                            <li>CDC. "Losing Weight". Centers for Disease Control and Prevention.</li>
                            <li>Messier SP, et al. "Weight loss reduces knee-joint loads in overweight and obese adults with knee osteoarthritis." Arthritis Rheum. 2005.</li>
                        </ol>
                    </section>
                </div>
            </article>
        </div>
    );
}

function BenefitCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="flex gap-4 p-4 border border-border rounded-lg bg-card hover:border-primary/30 transition-colors">
            <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
            <div>
                <h4 className="font-bold text-foreground">{title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
