import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { auth } from '@clerk/nextjs';
import Image from 'next/image';

export default function Home() {
  const { userId } = auth();

  return (
    <main className="flex justify-center items-center h-min-screen mx-auto flex-col bg-gradient-to-b from-zinc-200 px-8 pt-32">
      <Image
        src="/home.svg"
        width={450}
        height={450}
        alt="Home Image"
        objectFit="contain"
      />
      <h1 className="text-center text-7xl font-bold mb-5 hover:text-zinc-500 cursor-pointer">Nextion</h1>
      <p className="bg-zinc-200 px-3 py-3 rounded-xl text-center text-lg">
        Selamat datang di <span className="font-bold">Nextion</span> Clone Notion WYSIWYG editor yang dibuat dengan <span className="font-bold">Next.js</span> dan menggunakan <span className="font-bold">ORM Prisma</span>
      </p>
      <div className="mt-8 flex justify-center gap-4">
        {!userId ? (
          <>
            <Link
              className={buttonVariants({ variant: 'outline', size: 'lg', className: 'rounded-full' })}
              href="/sign-in">
              Login
            </Link>
          </>
        ) : (
          <Link
            className={buttonVariants({ variant: 'outline', size: 'lg', className: 'rounded-full' })}
            href="/home">
            Mulai
          </Link>
        )}
      </div>
    </main>
  );
}
