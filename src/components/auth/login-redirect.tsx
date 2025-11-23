'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

interface LoginRedirectProps {
  children: React.ReactNode;
}

export function LoginRedirect({ children }: LoginRedirectProps) {
  const [isChecking, setIsChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('isAuthenticated');
      const isAuth = authStatus === 'true';
      
      if (isAuth) {
        // If already authenticated, redirect to dashboard
        router.push('/dashboard');
      } else {
        // Not authenticated, show login page
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [router]);

  // Show loading while checking authentication
  if (isChecking) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, render the login page
  return <>{children}</>;
}