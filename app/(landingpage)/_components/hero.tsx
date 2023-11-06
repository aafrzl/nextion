import Image from 'next/image';

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="relative h-[400px] w-[800px] hidden md:block">
        <Image
          src="/hero-light.png"
          width={800}
          height={400}
          className="object-contain dark:hidden rounded-md"
          alt="Hero Image Nextion"
        />
        <Image
          src="/hero-dark.png"
          width={800}
          height={400}
          className="object-contain hidden dark:block rounded-md"
          alt="Hero Image Nextion"
        />
      </div>
    </div>
  );
};
