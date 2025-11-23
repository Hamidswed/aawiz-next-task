import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navigation } from "@/components/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio Dashboard | Modern Next.js App",
  description: "A modern portfolio dashboard built with Next.js 14, TypeScript, and Tailwind CSS featuring dark mode, responsive design, and API integration.",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Portfolio", "Dashboard"],
  authors: [{ name: "Portfolio Developer" }],
  creator: "Portfolio Developer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "Portfolio Dashboard | Modern Next.js App",
    description: "A modern portfolio dashboard built with Next.js 14, TypeScript, and Tailwind CSS featuring dark mode, responsive design, and API integration.",
    siteName: "Portfolio Dashboard",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Dashboard | Modern Next.js App",
    description: "A modern portfolio dashboard built with Next.js 14, TypeScript, and Tailwind CSS featuring dark mode, responsive design, and API integration.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
