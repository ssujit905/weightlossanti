import { Mail } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata = {
    title: "Contact Us | Weight Loss Percent",
    description: "Get in touch with the team.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background text-foreground py-12 px-6">
            <Header className="mb-12" />

            <main className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-black mb-6">Contact Us</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Have questions about calculations, partnerships, or press inquiries?
                </p>

                <div className="p-8 bg-card border border-border rounded-2xl shadow-sm inline-block">
                    <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="text-xl font-bold mb-2">Email Us</h2>
                    <p className="text-muted-foreground select-all">hello@weightlosspercent.com</p>
                </div>
            </main>
        </div>
    );
}
