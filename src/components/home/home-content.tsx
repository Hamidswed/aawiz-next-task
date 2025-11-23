"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Database, Palette } from "lucide-react";

export function HomeContent() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem("isAuthenticated");
      setIsAuthenticated(authStatus === "true");
    };

    checkAuth();

    // Listen for auth changes
    const handleAuthChange = () => checkAuth();
    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Modern Portfolio Dashboard
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A showcase of modern web development with Next.js 14, TypeScript, and Tailwind CSS.
          Features responsive design, dark mode, and seamless API integration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link
              href={isAuthenticated ? "/dashboard" : "/login"}
              className="inline-flex items-center"
            >
              {isAuthenticated ? "Go to Dashboard" : "Login to Dashboard"}
              <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Modern Stack</CardTitle>
              <CardDescription>
                Built with Next.js 14, TypeScript, and Tailwind CSS for optimal performance
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>API Integration</CardTitle>
              <CardDescription>
                Seamless data fetching from public APIs with proper error handling
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Dark Mode</CardTitle>
              <CardDescription>
                Beautiful dark and light themes with smooth transitions
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Explore?</CardTitle>
            <CardDescription>
              Check out the dashboard to see data visualization and form validation in action
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link
                href={isAuthenticated ? "/dashboard" : "/login"}
                className="inline-flex items-center"
              >
                {isAuthenticated ? "Explore Dashboard" : "Login to Explore"}
                <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

