import { Metadata } from "next";
import { HomeContent } from "@/components/home/home-content";

export const metadata: Metadata = {
  title: "Home | Portfolio Dashboard",
  description:
    "A modern portfolio dashboard built with Next.js 14, TypeScript, and Tailwind CSS. Features responsive design, dark mode, and seamless API integration.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Dashboard",
    "Web Development",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "Home | Portfolio Dashboard",
    description:
      "A modern portfolio dashboard built with Next.js 14, TypeScript, and Tailwind CSS. Features responsive design, dark mode, and seamless API integration.",
    siteName: "Portfolio Dashboard",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Portfolio Dashboard",
    description:
      "A modern portfolio dashboard built with Next.js 14, TypeScript, and Tailwind CSS. Features responsive design, dark mode, and seamless API integration.",
  },
};

export default function Home() {
  return <HomeContent />;
}