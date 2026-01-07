import type { Metadata } from "next";
import WeightLossCalculator from "@/components/Calculator";
import JsonLd from "@/components/JsonLd";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Weight Loss Percentage Calculator | Track Your Health Progress",
  description:
    "Calculate your weight loss percentage instantly. Shift focus from pounds to percentage and track critical health milestones like the 5% reduction benefit.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Weight Loss Percentage Calculator",
          "url": "https://weightlosspercent.com",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": "Calculate weight loss percentage, AI weight loss plans, 5% weight loss benefits",
          "screenshot": "https://weightlosspercent.com/opengraph-image.png"
        }}
      />
      <Header />

      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center">
        <div className="text-center space-y-6 max-w-2xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent pb-2">
            Measure What Matters.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Shift your focus from absolute numbers to proportional progress.
            Losing just <span className="font-bold text-primary">5-10%</span> of your body weight can significantly improve specific health markers.
          </p>
        </div>

        <WeightLossCalculator />

        {/* SEO Content / Clinical Context Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 text-center md:text-left">
          <Feature
            title="Scientific Context"
            description="Understand why percentage loss correlates better with metabolic health improvements than raw pounds."
          />
          <Feature
            title="Goal Planning"
            description="Reverse calculate your target weight based on realistic percentage milestones (5%, 10%)."
          />
          <Feature
            title="Privacy First"
            description="Your data stays locally on your device. No sign-up required for basics."
          />
        </div>

        {/* FAQ Section for SEO */}
        <div className="mt-24 w-full max-w-3xl animate-fade-in">
          <h2 className="text-3xl font-black text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              question="How do I calculate weight loss percentage?"
              answer="The formula is simple: (Lost Weight ÷ Starting Weight) × 100. For example, if you started at 200 lbs and lost 10 lbs, that's (10 ÷ 200) × 100 = 5%."
            />
            <FAQItem
              question="Is 5% weight loss significant?"
              answer="Yes. Clinical studies show that losing just 5% of body weight can significantly reduce blood pressure, improve cholesterol, and lower blood sugar levels."
            />
            <FAQItem
              question="What is a safe rate of weight loss?"
              answer="Doctors generally recommend losing 1-2 lbs (0.5-1 kg) per week. This ensures you lose fat rather than muscle and prevents metabolic slowdown."
            />
            <FAQItem
              question="Does this calculator work for Kg and Lbs?"
              answer="Yes. Our calculator works with any unit (lb, kg, stone) as long as you use the same unit for start and current weight. The percentage math remains the same."
            />
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border mt-12 bg-muted/30">
        <p>&copy; {new Date().getFullYear()} WeightLossPercent.com. Prioritize health over numbers.</p>
      </footer>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border border-border rounded-xl p-5 bg-card/50 hover:bg-card transition-colors">
      <h3 className="font-bold text-lg mb-2">{question}</h3>
      <p className="text-muted-foreground leading-relaxed">{answer}</p>
    </div>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
