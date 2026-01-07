import Link from "next/link";
import Header from "@/components/Header";
import { ShieldCheck, Stethoscope, FileSearch } from "lucide-react";

export const metadata = {
    title: "Medical Review Board | Weight Loss Percent",
    description: "Our content is reviewed by qualified healthcare professionals to ensure accuracy and clinical relevance.",
};

export default function MedicalBoardPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main className="max-w-3xl mx-auto px-6 py-12">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full mb-4">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight">Medical Review Board</h1>
                    <p className="text-xl text-muted-foreground">
                        Accuracy is our priority. We are committed to providing evidence-based tools and information.
                    </p>
                </div>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Stethoscope className="w-6 h-6 text-primary" />
                            Our Mission
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            In the age of misinformation, <strong>WeightLossPercent.com</strong> stands for scientific integrity.
                            Our Medical Review Board consists of board-certified physicians, registered dietitians, and certified personal trainers who review our content to ensure it aligns with the latest clinical guidelines.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <FileSearch className="w-6 h-6 text-primary" />
                            Editorial Process
                        </h2>
                        <div className="grid gap-6 md:grid-cols-3">
                            <ProcessStep
                                number="01"
                                title="Evidence Based"
                                desc="All content starts with primary sources: peer-reviewed journals and government health organizations."
                            />
                            <ProcessStep
                                number="02"
                                title="Expert Review"
                                desc="Clinical topics are reviewed by a qualified professional for accuracy and safety nuances."
                            />
                            <ProcessStep
                                number="03"
                                title="Regular Updates"
                                desc="We re-evaluate our content annually to reflect new research and medical consensus."
                            />
                        </div>
                    </section>

                    <section className="bg-muted/30 p-8 rounded-2xl border border-border">
                        <h3 className="font-bold text-xl mb-4">Interested in joining our board?</h3>
                        <p className="text-muted-foreground mb-6">
                            We are actively recruiting Registered Dietitians (RD/RDN) and CPTs to join our review network. Help us build the most trusted percentage-based weight loss resource.
                        </p>
                        <button className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                            Contact Editorial Team
                        </button>
                    </section>
                </div>
            </main>

            <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border mt-12">
                <p>&copy; {new Date().getFullYear()} WeightLossPercent.com. Prioritize health over numbers.</p>
            </footer>
        </div>
    );
}

function ProcessStep({ number, title, desc }: { number: string; title: string; desc: string }) {
    return (
        <div className="space-y-2">
            <span className="text-4xl font-black text-slate-200 dark:text-slate-800">{number}</span>
            <h4 className="font-bold text-lg">{title}</h4>
            <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
    );
}
