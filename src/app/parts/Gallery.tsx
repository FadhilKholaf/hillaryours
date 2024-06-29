import AnimatedCarrousel from "@/components/AnimatedCarrousel";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center overflow-hidden py-[10vh]">
      <div className="relative flex h-1/2 w-full justify-end">
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center lg:w-1/2">
          <Image
            src="/assets/flower2.png"
            alt="flower"
            width={500}
            height={500}
            className="-z-10 w-[300px] translate-y-1/4 opacity-75 lg:translate-y-[10%]"
          />
        </div>
        <div className="h-full w-full lg:w-1/2">
          <div className="text-shadow-cream grid h-full w-full grid-cols-4 text-7xl font-bold text-primary-lavender sm:text-9xl">
            <h1>G</h1>
            <h1>A</h1>
            <h1>L</h1>
            <h1>L</h1>
            <h1>E</h1>
            <h1>R</h1>
            <h1>Y</h1>
          </div>
        </div>
      </div>
      <div className="flex h-1/2 w-full items-center justify-center">
        <AnimatedCarrousel />
      </div>
    </section>
  );
}
