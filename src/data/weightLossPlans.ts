export interface PlanStep {
    icon: string;
    title: string;
    text: string;
}

export interface WeightLossPlan {
    title: string;
    description: string;
    steps: PlanStep[];
}

const PLANS: Record<number, (percent: number) => WeightLossPlan> = {
    5: (percent) => ({
        title: `The ${percent}% Health Reset`,
        description: `Losing ${percent}% is the perfect starting point to boost energy and reduce bloating without drastic changes.`,
        steps: [
            {
                icon: "💧",
                title: "Hydration First",
                text: "Drink 1 glass of water before every meal. This simple habit curbs appetite and improves metabolism instantly."
            },
            {
                icon: "🚶",
                title: "Add 2,000 Steps",
                text: "Don't hit the gym yet. Just add a 20-minute brisk walk to your daily routine, preferably after dinner."
            },
            {
                icon: "🥗",
                title: "The Veggie Swap",
                text: "Replace one side dish (fries, rice, pasta) with green vegetables at dinner. You won't feel hungry, but you'll cut calories."
            }
        ]
    }),
    10: (percent) => ({
        title: `The ${percent}% Metabolic Shift`,
        description: `Hitting -${percent}% requires consistent habit changes to lower insulin levels and burn fat.`,
        steps: [
            {
                icon: "🍳",
                title: "Protein at Breakfast",
                text: "Switch to a high-protein breakfast (eggs, yogurt, shake). This prevents mid-morning crashes and snacking."
            },
            {
                icon: "🏋️",
                title: "Resistance Training",
                text: "Twice a week, do bodyweight exercises (squats, pushups). Muscle burns more calories than cardio at rest."
            },
            {
                icon: "😴",
                title: "Sleep & Recovery",
                text: "Aim for 7+ hours of sleep. Lack of sleep spikes cortisol, which makes your body hold onto belly fat."
            }
        ]
    }),
    15: (percent) => ({
        title: `The ${percent}% Recomposition`,
        description: `Losing ${percent}% is a major transformation that requires tracking and structured discipline.`,
        steps: [
            {
                icon: "📏",
                title: "Track Your Intake",
                text: "Use a simple app to log meals for 2 weeks. You can't change what you don't measure. Awareness is key."
            },
            {
                icon: "🏃",
                title: "Interval Training",
                text: "Incorporate HIIT (High Intensity Interval Training) once a week to spike your heart rate and burn fat for hours after."
            },
            {
                icon: "🧠",
                title: "The 80/20 Rule",
                text: "Eat clean 80% of the time, but allow 20% for fun foods. This prevents burnout and binge eating."
            }
        ]
    }),
    20: (percent) => ({
        title: `The ${percent}% Lifestyle Overhaul`,
        description: `Achieving -${percent}% builds a completely new relationship with food and movement.`,
        steps: [
            {
                icon: "📅",
                title: "Meal Prep Sunday",
                text: "Prepare your lunches for the week on Sunday. Removing decision fatigue is the secret weapon of success."
            },
            {
                icon: "🤝",
                title: "Find Your Squad",
                text: "Join a running club, gym class, or online group. Deeply ingrained habits change faster with community support."
            },
            {
                icon: "🧘",
                title: "Stress Management",
                text: "High stress kills progress. Practice daily mindfulness or meditation to keep emotional eating in check."
            }
        ]
    })
};

export const getSmartPlan = (percent: number): WeightLossPlan => {
    // Return the plan for the closest defined percentage
    const milestones = [5, 10, 15, 20];
    const closest = milestones.reduce((prev, curr) => {
        return (Math.abs(curr - percent) < Math.abs(prev - percent) ? curr : prev);
    });
    // Execute the dynamic plan generator with the actual user percentage
    return PLANS[closest](percent);
};
