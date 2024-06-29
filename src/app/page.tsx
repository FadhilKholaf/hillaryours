"use client";

import { useEffect, useState } from "react";
import Gallery from "./parts/Gallery";
import Home from "./parts/Home";
import { cn } from "@/lib/cn";
import Image from "next/image";

export default function page() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <main
        className={cn(
          "fixed top-0 z-[60] flex h-screen w-screen items-center justify-center gap-4 bg-primary-cream text-lg text-primary-lavender transition-all duration-500 ease-out-circle sm:text-3xl",
          {
            "-top-full": !loading,
          },
        )}
      >
        Loading
        <span>
          <Image
            src="/assets/star.svg"
            alt="loader"
            width={500}
            height={500}
            className="h-8 w-8 animate-spin"
          />
        </span>
      </main>
      <main className="px-[10vw]">
        <Home />
        <Gallery />
      </main>
    </>
  );
}
