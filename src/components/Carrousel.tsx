import Image from "next/image";

export default function Carrousel() {
  return (
    <section className="flex items-center justify-start">
      <div className="flex w-full animate-carrousel flex-row flex-nowrap gap-8 opacity-80">
        <Image
          src="/assets/lily/lily.png"
          alt="lily"
          width={500}
          height={500}
          className="aspect-square w-[200px] translate-y-4 rotate-[10deg] object-cover transition-all duration-300 hover:rotate-0 md:w-[300px]"
        />
        <Image
          src="/assets/lily/lily2.png"
          alt="lily"
          width={500}
          height={500}
          className="aspect-square w-[200px] -translate-y-6 -rotate-[74deg] object-cover transition-all duration-300 hover:-rotate-90 md:w-[300px]"
        />
        <Image
          src="/assets/lily/lily4.png"
          alt="lily"
          width={500}
          height={500}
          className="aspect-square w-[200px] translate-y-4 -rotate-[78deg] object-cover transition-all duration-300 hover:-rotate-90 md:w-[300px]"
        />
        <Image
          src="/assets/lily/lily3.png"
          alt="lily"
          width={500}
          height={500}
          className="aspect-square w-[200px] -translate-y-6 -rotate-[70deg] object-cover transition-all duration-300 hover:-rotate-90 md:w-[300px]"
        />

        <Image
          src="/assets/lily/lily5.png"
          alt="lily"
          width={500}
          height={500}
          className="aspect-square w-[200px] translate-y-4 rotate-[18deg] object-cover transition-all duration-300 hover:rotate-0 md:w-[300px]"
        />
        <Image
          src="/assets/lily/lily6.png"
          alt="lily"
          width={500}
          height={500}
          className="aspect-square w-[200px] -translate-y-6 rotate-[12deg] object-cover transition-all duration-300 hover:rotate-0 md:w-[300px]"
        />
        <Image
          src="/assets/lily/lily.png"
          alt="lily"
          width={500}
          height={500}
          className="aspect-square w-[200px] translate-y-4 rotate-[10deg] object-cover transition-all duration-300 hover:rotate-0 md:w-[300px]"
        />
        <Image
          src="/assets/lily/lily2.png"
          alt="lily"
          width={500}
          height={500}
          className="aspect-square w-[200px] -translate-y-6 -rotate-[74deg] object-cover transition-all duration-300 hover:-rotate-90 md:w-[300px]"
        />
        <Image
          src="/assets/lily/lily4.png"
          alt="lily"
          width={500}
          height={500}
          className="aspect-square w-[200px] translate-y-4 -rotate-[78deg] object-cover transition-all duration-300 hover:-rotate-90 md:w-[300px]"
        />
        <Image
          src="/assets/lily/lily3.png"
          alt="lily"
          width={500}
          height={500}
          className="aspect-square w-[200px] -translate-y-6 -rotate-[70deg] object-cover transition-all duration-300 hover:-rotate-90 md:w-[300px]"
        />

        <Image
          src="/assets/lily/lily5.png"
          alt="lily"
          width={500}
          height={500}
          className="aspect-square w-[200px] translate-y-4 rotate-[18deg] object-cover transition-all duration-300 hover:rotate-0 md:w-[300px]"
        />
        <Image
          src="/assets/lily/lily6.png"
          alt="lily"
          width={500}
          height={500}
          className="aspect-square w-[200px] -translate-y-6 rotate-[12deg] object-cover transition-all duration-300 hover:rotate-0 md:w-[300px]"
        />
      </div>
    </section>
  );
}
