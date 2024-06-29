"use client";

import "@/app/globals.css";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-wrap justify-between gap-x-16 gap-y-16 text-5xl sm:text-[8vw]">
        <h1 className="text-shadow-cream courier-prime-regular text-decoration-thickness -translate-x-6 text-primary-lavender underline underline-offset-[16px] lg:-translate-x-12">
          <div
            className={cn("transition-all duration-500 ease-in-out", {
              "translate-y-1/2 opacity-0": loading,
            })}
          >
            HILLARY
          </div>
        </h1>
        <h1 className="text-shadow-cream courier-prime-regular text-decoration-thickness text-primary-lavender underline underline-offset-[16px]">
          <div
            className={cn(
              "transition-all delay-[0.1s] duration-500 ease-in-out",
              {
                "translate-y-1/2 opacity-0": loading,
              },
            )}
          >
            ABIGAIL
          </div>
        </h1>
        <span className="h-1 w-[20vw] self-center overflow-hidden rounded-full">
          <div
            className={cn(
              "h-full w-full bg-primary-cream transition-all delay-[0.2s] duration-1000 ease-in-out",
              { "w-0": loading },
            )}
          ></div>
        </span>
        <h1 className="playfair-display-regular text-primary-cream">
          <div
            className={cn(
              "transition-all delay-[0.3s] duration-500 ease-in-out",
              {
                "translate-y-1/2 opacity-0": loading,
              },
            )}
          >
            New
          </div>
        </h1>
        <h1 className="playfair-display-regular text-primary-cream">
          <div
            className={cn(
              "transition-all delay-[0.4s] duration-500 ease-in-out",
              {
                "translate-y-1/2 opacity-0": loading,
              },
            )}
          >
            Spirit
          </div>
        </h1>
        <h1 className="playfair-display-regular text-primary-cream">
          <div
            className={cn(
              "transition-all delay-[0.5s] duration-500 ease-in-out",
              {
                "translate-y-1/2 opacity-0": loading,
              },
            )}
          >
            Of
          </div>
        </h1>
        <h1 className="playfair-display-regular translate-x-12 text-primary-cream">
          <div
            className={cn(
              "transition-all delay-[0.6s] duration-500 ease-in-out",
              {
                "translate-y-1/2 opacity-0": loading,
              },
            )}
          >
            Blume
          </div>
        </h1>
        <Image
          src="/assets/stars.svg"
          alt="star"
          width={500}
          height={500}
          className={cn(
            "w-[8vw] translate-x-6 scale-100 transition-all delay-[0.4s] duration-1000 ease-in-out lg:translate-x-12",
            {
              "scale-0": loading,
            },
          )}
        />
      </div>
    </section>
  );
}
