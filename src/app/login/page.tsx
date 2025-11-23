import { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";
import { LoginRedirect } from "@/components/auth/login-redirect";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Login | Portfolio Dashboard",
  description: "Sign in to access your dashboard",
};

export default function LoginPage() {
  return (
    <LoginRedirect>
      <div className="container mx-auto px-4 py-8">
        <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome Back</CardTitle>
              <CardDescription>
                Sign in to access your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </LoginRedirect>
  );
}