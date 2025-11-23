import { useState, useEffect } from 'react';

export function useUserEmail(): string | null {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    // Only runs on client side
    if (typeof window !== 'undefined') {
      const email = localStorage.getItem('userEmail');
      setUserEmail(email);
    }
  }, []);

  return userEmail;
}


