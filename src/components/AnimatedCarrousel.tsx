import Carrousel from "./Carrousel";

export default function AnimatedCarrousel() {
  return (
    <section className="absolute left-0 flex h-[300px] sm:h-[500px] w-full justify-center overflow-hidden">
      <Carrousel />
    </section>
  );
}
