import { Hero } from "@/components/sections/Hero";
import { TextReveal } from "@/components/ui/TextReveal";
import { Scene } from "@/components/canvas/Scene";
import { TechScene } from "@/components/canvas/TechScene";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center border-t border-white/10 relative overflow-hidden bg-black/40 py-20">
        <div className="w-full md:w-1/2 h-[500px]">
          <Scene className="w-full h-full">
            <TechScene />
          </Scene>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left px-6">
          <TextReveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              We Build <span className="text-shunya-cyan">Digital Futures</span>
            </h2>
          </TextReveal>
          <TextReveal>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto md:mx-0">
              From 3D immersive worlds to AI-driven enterprise solutions, SHUNYA bridges the gap between imagination and reality.
            </p>
          </TextReveal>
        </div>
      </section>
    </div>
  );
}
