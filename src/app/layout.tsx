import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://weightlosspercent.com"),
  title: {
    default: "Weight Loss Percentage Calculator | WeightLossPercent.com",
    template: "%s | WeightLossPercent.com",
  },
  description: "Calculate weight loss percentage, track 5% health milestones, and generate AI-powered weight loss plans. Free, privacy-focused, and science-backed.",
  keywords: ["weight loss percentage", "weight loss calculator", "5 percent weight loss", "health milestones", "BMI calculator alternative"],
  authors: [{ name: "WeightLossPercent Medical Board" }],
  creator: "WeightLossPercent.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://weightlosspercent.com",
    title: "Weight Loss Percentage Calculator",
    description: "Shift focus from pounds to percentage. Track critical health milestones.",
    siteName: "WeightLossPercent.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weight Loss Percentage Calculator",
    description: "Shift focus from pounds to percentage. Track critical health milestones.",
    creator: "@weightlosspercent",
  },
  icons: {
    icon: "/icon",
  },
  verification: {
    google: "QMmaZolg8HGhvvGWzxlxKNt7-nEpplb8xtWNvCj8V1g",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NGE8233VFP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NGE8233VFP');
          `}
        </Script>
      </body>
    </html>
  );
}
