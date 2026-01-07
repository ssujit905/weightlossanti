import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Quote, TrendingDown, Clock, Target, Dumbbell } from "lucide-react";
import { stories } from "@/data/stories";
import JsonLd from "@/components/JsonLd";

// Generate static params for all stories at build time
export async function generateStaticParams() {
    return stories.map((story) => ({
        slug: story.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const story = stories.find((s) => s.slug === slug);
    if (!story) return {};

    return {
        title: `${story.title} | Real Weight Loss Story`,
        description: `See how ${story.name} lost ${story.percentLost}% of their body weight in ${story.timeframe}. Full breakdown of strategy and struggles.`,
    };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const story = stories.find((s) => s.slug === slug);

    if (!story) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background text-foreground pb-20">
            {/* Hero Header */}
            <div className="relative h-[60vh] w-full bg-slate-900 text-white flex flex-col items-center justify-center text-center px-6">
                <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover opacity-40 mix-blend-overlay"
                    priority
                />
                <div className="relative z-10 max-w-4xl animate-fade-in">
                    <div className="inline-block px-3 py-1 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm font-semibold tracking-wider uppercase">
                        {story.timeframe} Transformation
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-4 leading-tight">
                        {story.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 italic max-w-2xl mx-auto">
                        "{story.quote}"
                    </p>
                </div>

                <Link href="/real-stories" className="absolute top-6 left-6 z-20 flex items-center text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Stories
                </Link>
            </div>

            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": story.title,
                    "image": [story.image],
                    "datePublished": new Date().toISOString(), // In a real app, use story.date
                    "author": [{
                        "@type": "Person",
                        "name": story.name,
                    }],
                    "description": `See how ${story.name} lost ${story.percentLost}% of their body weight in ${story.timeframe}.`,
                }}
            />

            <main className="max-w-4xl mx-auto px-6 -mt-20 relative z-10">

                {/* The Stats Box */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-border mb-12 transform hover:scale-[1.01] transition-transform">
                    <StatBox label="Starting Weight" value={`${story.startWeight} lbs`} icon={<Clock className="w-5 h-5 text-muted-foreground" />} />
                    <StatBox label="Current Weight" value={`${story.endWeight} lbs`} icon={<Target className="w-5 h-5 text-muted-foreground" />} />
                    <StatBox label="Total Lost" value={`-${(story.startWeight - story.endWeight).toFixed(1)} lbs`} icon={<TrendingDown className="w-5 h-5 text-primary" />} highlighted />
                    <StatBox label="Percentage" value={`${story.percentLost}%`} icon={<Dumbbell className="w-5 h-5 text-primary" />} highlighted />
                </div>

                <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                    <div className="flex items-start gap-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl not-prose mb-10 border-l-4 border-blue-500">
                        <div className="text-4xl">💡</div>
                        <div>
                            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-200 mb-1">Visual Context</h3>
                            <p className="text-blue-800 dark:text-blue-300 m-0">
                                Losing <strong>{story.percentLost}%</strong> of body weight is roughly equivalent to carrying around <strong>{story.analogy}</strong> all day, every day. Imagine putting that down!
                            </p>
                        </div>
                    </div>

                    <h2>The Struggle</h2>
                    <p className="lead">{story.struggle}</p>

                    <h2>The Strategy</h2>
                    <p>{story.strategy}</p>

                    <div className="my-10">
                        <Image
                            src={story.image}
                            alt="Lifestyle shot"
                            width={800}
                            height={500}
                            className="rounded-xl w-full object-cover shadow-md"
                        />
                        <p className="text-sm text-center text-muted-foreground mt-2 italic">Representation of {story.name}'s lifestyle during their journey.</p>
                    </div>

                    <h2>The Major Lesson</h2>
                    <div className="bg-card border border-border p-8 rounded-2xl text-center not-prose relative">
                        <Quote className="w-12 h-12 text-primary/20 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-0">"{story.lesson}"</h3>
                        <p className="mt-4 text-muted-foreground">— {story.name}</p>
                    </div>
                </article>

                <div className="mt-20 text-center space-y-6 border-t border-border pt-12">
                    <h3 className="text-3xl font-black">Inspired? Check Your Own Numbers.</h3>
                    <p className="text-xl text-muted-foreground max-w-xl mx-auto">
                        See exactly where you stand and what your 5%, 10%, and 20% milestones look like.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
                    >
                        Calculate My Percentage
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>

            </main>
        </div>
    );
}

function StatBox({ label, value, icon, highlighted = false }: any) {
    return (
        <div className={`p-4 rounded-xl ${highlighted ? 'bg-primary/5 border border-primary/20' : 'bg-muted/50'}`}>
            <div className="flex items-center gap-2 mb-2">
                {icon}
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
            </div>
            <div className={`text-2xl sm:text-3xl font-black ${highlighted ? 'text-primary' : 'text-foreground'}`}>
                {value}
            </div>
        </div>
    )
}
