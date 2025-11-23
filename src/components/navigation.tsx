'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { LogOut, User } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard', requiresAuth: true },
  { name: 'Contact', href: '/contact' },
]

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('isAuthenticated')
      const email = localStorage.getItem('userEmail')
      setIsAuthenticated(authStatus === 'true')
      setUserEmail(email)
    }

    checkAuth()
    
    // Listen for storage changes (for logout from other tabs)
    window.addEventListener('storage', checkAuth)
    
    // Listen for custom auth events
    const handleAuthChange = () => checkAuth()
    window.addEventListener('authChange', handleAuthChange)
    
    return () => {
      window.removeEventListener('storage', checkAuth)
      window.removeEventListener('authChange', handleAuthChange)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('userEmail')
    setIsAuthenticated(false)
    setUserEmail(null)
    router.push('/')
  }

  const filteredNavigation = navigation.filter(item => 
    !item.requiresAuth || isAuthenticated
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">
              Portfolio
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {filteredNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === item.href ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <nav className="flex md:hidden">
              {filteredNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80',
                    pathname === item.href ? 'text-foreground' : 'text-foreground/60'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-2">
            {isAuthenticated ? (
              <>
                <div className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>{userEmail}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Logout</span>
                </Button>
              </>
            ) : (
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Link>
              </Button>
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}