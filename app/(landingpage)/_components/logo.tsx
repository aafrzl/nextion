import Image from 'next/image';
import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';
import Link from 'next/link';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export const Logo = () => {
  return (
    <Link href={'/'} className="hidden md:flex items-center gap-x-1">
      <Image
        src="/logo.svg"
        width={40}
        height={40}
        alt="Nextion Logo"
        className="object-contain dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        width={40}
        height={40}
        alt="Nextion Logo"
        className="hidden dark:block object-contain"
      />
      <p className={cn('font-semibold', font.className)}>Nextion</p>
    </Link>
  );
};
