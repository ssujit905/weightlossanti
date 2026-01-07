export interface Story {
    slug: string;
    name: string;
    title: string;
    image: string;
    startWeight: number; // in lbs
    endWeight: number; // in lbs
    timeframe: string;
    percentLost: number;
    analogy: string;
    quote: string;
    struggle: string;
    strategy: string;
    lesson: string;
}

export const stories: Story[] = [
    {
        slug: "josh-runner-transformation",
        name: "Josh L.",
        title: "From 420lbs to Ultra Runner",
        image: "/images/story-runner.png",
        startWeight: 420,
        endWeight: 190,
        timeframe: "18 Months",
        percentLost: 54.7,
        analogy: "a Giant Panda 🐼",
        quote: "I didn't run to lose weight. I lost weight so I could run.",
        struggle: "Could barely walk a mile without winding. The sheer size of the task felt impossible.",
        strategy: "Started with walking. Replaced 'emotional eating' with 'emotional moving'. Eventually signed up for a 5K, then a 10K.",
        lesson: "Find a performance goal. Scale numbers are boring; finish lines are addictive."
    },
    {
        slug: "kara-busy-mom",
        name: "Kara H.",
        title: "30lbs in 4 Months (No Calorie Counting)",
        image: "/images/story-gym.png",
        startWeight: 180,
        endWeight: 150,
        timeframe: "4 Months",
        percentLost: 16.6,
        analogy: "a Microwave 📻",
        quote: "I have two kids. I don't have time to log every almond. I needed sustainable.",
        struggle: "Post-partum exhaustion and 'mom guilt' whenever I took time for myself.",
        strategy: "Home workouts (20 mins) while kids napped. Prioritized protein at every meal. Stopped drinking calories (soda/wine).",
        lesson: "Consistency beat intensity. 20 minutes every day > 2 hours once a week."
    },
    {
        slug: "marcus-meal-prep",
        name: "Marcus B.",
        title: "Mr. Meal Prep: 106lbs Gone",
        image: "/images/story-hiking.png", // Using hiking usage as 'active lifestyle' result
        startWeight: 320,
        endWeight: 214,
        timeframe: "3.5 Years",
        percentLost: 33.1,
        analogy: "a Toilet 🚽",
        quote: "I treated my diet like a bill that had to be paid. Non-negotiable.",
        struggle: "Office culture—pizza parties, happy hours, and constant temptation.",
        strategy: "Sunday Ritual: Cook 100% of lunch/dinners for the week. If I didn't make it, I didn't eat it. Also started hiking weekends.",
        lesson: "Preparation eliminates willpower. If the healthy choice is ready, you'll eat it."
    },
    {
        slug: "sylvia-college-reset",
        name: "Sylvia K.",
        title: "Reversing the Freshman 30",
        image: "/images/stories-hero.png", // Using the fruit/shoes flatlay
        startWeight: 165,
        endWeight: 135,
        timeframe: "6 Months",
        percentLost: 18.2,
        analogy: "a Car Tire 🚗",
        quote: "I realized I was eating stress, not food.",
        struggle: "Late night study snacks (pizza, chips) and social pressure to drink.",
        strategy: "Swapped study snacks for crunch veggies. Set a rule: No food after 9PM. Joined a morning jogging club for accountability.",
        lesson: "Your environment dictates your success. Change your snacks, change your results."
    },
    {
        slug: "matthew-health-scare",
        name: "Matthew R.",
        title: "113lbs After a Doctor's Warning",
        image: "/images/story-meal-prep.png",
        startWeight: 310,
        endWeight: 197,
        timeframe: "16 Months",
        percentLost: 36.4,
        analogy: "a Newborn Giraffe 🦒",
        quote: "My doctor said 'Change or die'. I chose change.",
        struggle: "Sleep apnea and joint pain made exercise painful initially.",
        strategy: "Strict 1200-1500 calorie diet of whole foods initially. Started with pool walking (low impact) before hitting the weights.",
        lesson: "Health isn't about looking good; it's about being alive to see your kids grow up."
    }
];
