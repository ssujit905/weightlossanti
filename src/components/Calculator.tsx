"use client";

import { useState, useEffect } from "react";
import { Calculator, Target, TrendingDown, ArrowRight, RefreshCcw, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { getSmartPlan } from "@/data/weightLossPlans";

type Mode = "calculate-loss" | "calculate-target";
type Unit = "lbs" | "kg";

export default function WeightLossCalculator() {
    const [mode, setMode] = useState<Mode>("calculate-loss");
    const [unit, setUnit] = useState<Unit>("lbs");
    const [startWeight, setStartWeight] = useState<string>("");
    const [currentWeight, setCurrentWeight] = useState<string>("");
    const [targetPercent, setTargetPercent] = useState<string>("5");
    const [result, setResult] = useState<number | null>(null);
    const [targetResult, setTargetResult] = useState<number | null>(null);

    // Calculate Loss %
    useEffect(() => {
        if (mode === "calculate-loss" && startWeight && currentWeight) {
            const start = parseFloat(startWeight);
            const current = parseFloat(currentWeight);
            if (start > 0 && current > 0) {
                const loss = ((start - current) / start) * 100;
                setResult(loss);
            }
        } else {
            setResult(null);
        }
    }, [mode, startWeight, currentWeight]);

    // Calculate Target Weight from %
    useEffect(() => {
        if (mode === "calculate-target" && startWeight && targetPercent) {
            const start = parseFloat(startWeight);
            const percent = parseFloat(targetPercent);
            if (start > 0 && percent > 0) {
                // Target = Start * (1 - percent/100)
                const target = start * (1 - percent / 100);
                setTargetResult(target);
            }
        } else {
            setTargetResult(null);
        }
    }, [mode, startWeight, targetPercent]);

    // Visual Analogies
    const getAnalogy = (weight: number) => {
        const ANALOGIES = [
            { w: 1, label: "a Guinea Pig 🐹" },
            { w: 5, label: "a Sack of Flour 🍞" },
            { w: 8, label: "a Gallon of Water 💧" },
            { w: 10, label: "a Medium Bowling Ball 🎳" },
            { w: 15, label: "a Car Tire 🚗" },
            { w: 20, label: "a Car Tire (and a bit more) 🚗" }, // Simple approximation
            { w: 25, label: "a Toddler 👶" },
            { w: 30, label: "a Gold Bar 🪙" },
            { w: 40, label: "a Human Leg 🦵" },
            { w: 50, label: "a Large Bag of Dog Food 🐕" },
            { w: 100, label: "a Toilet 🚽" },
        ];
        // Find closest lower bound
        const match = [...ANALOGIES].reverse().find(a => weight >= a.w);
        return match ? match.label : null;
    };

    const lossAmount = result !== null && startWeight && currentWeight
        ? parseFloat(startWeight) - parseFloat(currentWeight)
        : 0;

    const [isThinking, setIsThinking] = useState(false);
    const [smartPlan, setSmartPlan] = useState<any>(null);

    const generateSmartPlan = () => {
        if (!targetResult || !startWeight) return;

        setIsThinking(true);
        // Simulate a brief "thinking" moment for better UX
        setTimeout(() => {
            const percent = parseFloat(targetPercent);
            const plan = getSmartPlan(percent);
            setSmartPlan(plan);
            setIsThinking(false);
        }, 600);
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-6 animate-fade-in space-y-8">
            {/* Unit Toggle & Header */}
            <div className="flex justify-end">
                <div className="bg-muted p-1 rounded-lg flex text-xs font-semibold">
                    <button
                        onClick={() => setUnit("lbs")}
                        className={cn("px-3 py-1 rounded-md transition-all", unit === "lbs" ? "bg-white dark:bg-slate-700 shadow-sm text-foreground" : "text-muted-foreground")}
                    >
                        LBS
                    </button>
                    <button
                        onClick={() => setUnit("kg")}
                        className={cn("px-3 py-1 rounded-md transition-all", unit === "kg" ? "bg-white dark:bg-slate-700 shadow-sm text-foreground" : "text-muted-foreground")}
                    >
                        KG
                    </button>
                </div>
            </div>

            {/* Mode Switcher */}
            <div className="flex bg-muted p-1 rounded-xl shadow-inner">
                <button
                    onClick={() => setMode("calculate-loss")}
                    className={cn(
                        "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200",
                        mode === "calculate-loss"
                            ? "bg-white dark:bg-slate-800 shadow-sm text-primary"
                            : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    <Calculator className="w-4 h-4" />
                    Check My Progress
                </button>
                <button
                    onClick={() => setMode("calculate-target")}
                    className={cn(
                        "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200",
                        mode === "calculate-target"
                            ? "bg-white dark:bg-slate-800 shadow-sm text-primary"
                            : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    <Target className="w-4 h-4" />
                    Plan My Goal
                </button>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {/* Input Section */}
                <div className="space-y-6 bg-card border border-border p-6 rounded-2xl shadow-sm">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-2">
                                Starting Weight
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={startWeight}
                                    onChange={(e) => setStartWeight(e.target.value)}
                                    placeholder="e.g. 200"
                                    className="w-full p-4 bg-muted/50 border border-input rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg font-semibold outline-none"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium">
                                    {unit}
                                </span>
                            </div>
                        </div>

                        {mode === "calculate-loss" ? (
                            <div className="animate-fade-in">
                                <label className="block text-sm font-medium text-muted-foreground mb-2">
                                    Current Weight
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={currentWeight}
                                        onChange={(e) => setCurrentWeight(e.target.value)}
                                        placeholder="e.g. 190"
                                        className="w-full p-4 bg-muted/50 border border-input rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg font-semibold outline-none"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium">
                                        {unit}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="animate-fade-in">
                                <label className="block text-sm font-medium text-muted-foreground mb-2">
                                    Target Loss Percentage %
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={targetPercent}
                                        onChange={(e) => setTargetPercent(e.target.value)}
                                        placeholder="e.g. 5"
                                        className="w-full p-4 bg-muted/50 border border-input rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg font-semibold outline-none"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium">
                                        %
                                    </span>
                                </div>
                                <div className="flex gap-2 mt-2">
                                    {[5, 10, 15, 20].map((p) => (
                                        <button
                                            key={p}
                                            onClick={() => setTargetPercent(p.toString())}
                                            className="px-3 py-1 bg-muted hover:bg-muted/80 text-xs rounded-full font-medium transition-colors"
                                        >
                                            {p}%
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Result Section */}
                <div className="flex flex-col justify-center bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 p-6 rounded-2xl relative overflow-hidden min-h-[300px]">
                    <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                        <TrendingDown className="w-32 h-32 text-primary" />
                    </div>

                    {mode === "calculate-loss" ? (
                        result !== null ? (
                            <div className="text-center space-y-2 animate-fade-in">
                                <p className="text-sm font-medium text-primary uppercase tracking-wider">
                                    You have lost
                                </p>
                                <div className="text-6xl font-black text-foreground tracking-tighter">
                                    {result.toFixed(2)}
                                    <span className="text-3xl text-muted-foreground ml-1">%</span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    of your body weight
                                </p>

                                {/* Amount Lost Context */}
                                <div className="mt-4 pt-4 border-t border-primary/10">
                                    <p className="text-sm text-muted-foreground">That's <span className="font-bold text-foreground">{lossAmount.toFixed(1)}</span> {unit} gone!</p>
                                    {lossAmount > 0 && getAnalogy(lossAmount) && (
                                        <div className="mt-2 text-sm font-medium text-primary bg-background/50 p-2 rounded-lg inline-block border border-primary/10">
                                            Equivalent to {getAnalogy(lossAmount)}
                                        </div>
                                    )}
                                </div>

                                {result >= 5 && (
                                    <div className="mt-4 p-3 bg-green-500/10 text-green-700 dark:text-green-400 rounded-lg text-sm font-medium">
                                        🎉 Awesome! You hit the 5% health milestone.
                                    </div>
                                )}

                                {/* Social Share Button */}
                                <div className="mt-6 flex justify-center">
                                    <button
                                        onClick={() => {
                                            const analogy = lossAmount > 0 ? getAnalogy(lossAmount) : null;
                                            const params = new URLSearchParams({
                                                lost: result.toFixed(2),
                                                ...(analogy ? { analogy } : {})
                                            });
                                            window.open(`/api/og?${params.toString()}`, '_blank');
                                        }}
                                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-medium transition-colors shadow-md"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                        Share Verification Card
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <EmptyState
                                icon={<ArrowRight />}
                                text="Enter your weights to see your progress"
                            />
                        )
                    ) : (
                        targetResult !== null ? (
                            <div className="text-center space-y-2 animate-fade-in">
                                <p className="text-sm font-medium text-primary uppercase tracking-wider">
                                    To reach -{targetPercent}%
                                </p>
                                <p className="text-muted-foreground">Your goal weight is</p>
                                <div className="text-6xl font-black text-foreground tracking-tighter">
                                    {targetResult.toFixed(1)}
                                    <span className="text-2xl text-muted-foreground ml-1">{unit}</span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">
                                    That's a loss of{" "}
                                    <span className="font-bold text-foreground">
                                        {(parseFloat(startWeight) - targetResult).toFixed(1)}
                                    </span>{" "}
                                    {unit}
                                </p>

                                <div className="mt-8 pt-6 border-t border-primary/10">
                                    <button
                                        onClick={generateSmartPlan}
                                        disabled={isThinking}
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isThinking ? (
                                            <><RefreshCcw className="w-5 h-5 animate-spin" /> Designing Plan...</>
                                        ) : (
                                            <><span className="text-xl">✨</span> Create AI Action Plan</>
                                        )}
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <EmptyState
                                icon={<Target />}
                                text="Enter a target % to see your goal weight"
                            />
                        )
                    )}
                </div>
            </div>

            {/* AI Smart Plan Result */}
            {smartPlan && mode === "calculate-target" && (
                <div className="mt-8 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-3xl p-8 animate-fade-in relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500" />

                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                            <span className="animate-pulse">✨</span> AI Smart Strategy
                        </div>
                        <h3 className="text-3xl font-black mb-4">{smartPlan.title}</h3>
                        <p className="text-lg text-muted-foreground">{smartPlan.description}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {smartPlan.steps?.map((step: any, i: number) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">{step.icon}</div>
                                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function EmptyState({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="text-center text-muted-foreground flex flex-col items-center gap-3">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                {icon}
            </div>
            <p className="text-sm font-medium">{text}</p>
        </div>
    );
}
