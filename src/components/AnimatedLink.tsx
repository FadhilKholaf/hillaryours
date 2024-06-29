import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AnimatedLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setClicked(!clicked);
    setTimeout(() => {
      window.location.href = href;
    }, 1000);
  };

  return (
    <>
      <section
        className={cn(
          "fixed -top-full left-0 z-50 flex h-screen w-screen items-center justify-center gap-4 bg-primary-cream text-lg text-primary-lavender transition-all duration-[0.75s] ease-out sm:text-3xl",
          { "top-0": clicked },
        )}
      >
        Redirecting
        <span>
          <Image
            src="/assets/star.svg"
            alt="loader"
            width={500}
            height={500}
            className="h-8 w-8 animate-spin"
          />
        </span>
      </section>
      <Link href={href} onClick={handleClick}>
        {children}
      </Link>
    </>
  );
}
