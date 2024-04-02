import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import About from "../components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-24 pb-20 w-full">
      <Hero />
      <Testimonial />
      <About />
    </main>
  );
}
