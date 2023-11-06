'use client';

import { useConvexAuth } from 'convex/react';
import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { ModeToggle } from '@/components/mode-toggle';
import { SignInButton, UserButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div className={cn('z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6', scrolled && 'border-b shadow-md')}>
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && (
          <>
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-6 w-24 rounded" />
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-6 w-24 rounded" />
          </>
        )}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                size="sm">
                Sign in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Nextion free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button
              variant="ghost"
              size="sm"
              asChild>
              <Link href="/documents">Enter Nextion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
