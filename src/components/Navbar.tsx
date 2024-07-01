"use client";

import { cn } from "@/lib/cn";
import { useState } from "react";
import AnimatedLink from "./AnimatedLink";
import Image from "next/image";

export default function Navbar() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <>
      <div className="fixed left-[10vw] top-5 z-50">
        <p className="courier-prime-regular text-shadow-cream-sm text-lg text-primary-lavender lg:text-3xl">
          HILLARYOURS
        </p>
      </div>
      <div
        className="fixed right-[10vw] top-4 z-50 flex cursor-pointer flex-row md:gap-x-4"
        onClick={() => setActive(!active)}
      >
        <p
          className={cn(
            "h-8 w-12 text-lg text-primary-cream transition-all duration-300 ease-out lg:text-2xl",
            {
              "text-primary-lavender": active,
            },
          )}
        >
          <span
            className={cn("invisible absolute mt-1 lg:mt-0", {
              visible: active,
            })}
          >
            Close
          </span>
          <span
            className={cn("visible absolute mt-1 lg:mt-0", {
              invisible: active,
            })}
          >
            More
          </span>
        </p>
        <div className="relative w-8">
          <span
            className={cn(
              "absolute bottom-1/2 h-0.5 w-8 rounded bg-primary-cream transition-all duration-300 ease-out",
              { "translate-y-1 rotate-45 bg-primary-lavender": active },
            )}
          ></span>
          <span
            className={cn(
              "absolute bottom-1/2 h-0.5 w-8 translate-y-2 rounded bg-primary-cream transition-all duration-300 ease-out",
              { "translate-y-1 -rotate-45 bg-primary-lavender": active },
            )}
          ></span>
        </div>
      </div>
      <div
        className={cn(
          "fixed -top-full z-40 h-[80vh] w-full rounded-b-[75%] bg-primary-cream px-[10vw] py-20 transition-all duration-500 ease-out-circle",
          {
            "top-0 rounded-none": active,
          },
        )}
      >
        <div className="flex h-1/2 w-full flex-col justify-center lg:h-full">
          <AnimatedLink href="https://www.instagram.com/jkt48.lily_">
            <p
              className={cn(
                "courier-prime-regular flex translate-x-1/4 flex-col text-[5vw] text-primary-lavender opacity-0 transition-all duration-500 ease-out-circle after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary-lavender after:transition-transform after:duration-500 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100",
                {
                  "translate-x-0 opacity-100 delay-[0.1s]": active,
                },
              )}
            >
              <span className="text-xs md:text-lg">Official fanbase of</span>
              HILLARY ABIGAIL
            </p>
          </AnimatedLink>
          <AnimatedLink href="https://jkt48.com">
            <p
              className={cn(
                "courier-prime-regular flex -translate-x-1/4 flex-col text-right text-[5vw] text-primary-lavender opacity-0 transition-all duration-500 ease-out-circle after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary-lavender after:transition-transform after:duration-500 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100",
                {
                  "translate-x-0 opacity-100 delay-[0.15s]": active,
                },
              )}
            >
              <span className="text-xs md:text-lg">From</span>
              JKT48
            </p>
          </AnimatedLink>
          <AnimatedLink href="https://lynk.id/hillaryours">
            <p
              className={cn(
                "courier-prime-regular flex translate-x-1/4 flex-col text-[5vw] text-primary-lavender opacity-0 transition-all duration-500 ease-out-circle after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary-lavender after:transition-transform after:duration-500 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100",
                {
                  "translate-x-0 opacity-100 delay-[0.2s]": active,
                },
              )}
            >
              <span className="text-xs md:text-lg">Want to join?</span>
              ABOUT US
            </p>
          </AnimatedLink>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 flex h-full w-full items-center justify-center overflow-hidden">
          <Image
            src="/assets/flower.png"
            alt="flower"
            width={500}
            height={500}
            className={cn(
              "absolute bottom-0 -translate-x-[15%] translate-y-full opacity-75 transition-all duration-500 ease-out-circle lg:opacity-50",
              { "translate-y-[30%] lg:translate-y-[25%]": active },
            )}
          />
        </div>
      </div>
    </>
  );
}
