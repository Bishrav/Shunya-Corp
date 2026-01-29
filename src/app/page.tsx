import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      {/* 
        Future Sections:
        <ServicesPreview />
        <WorkPreview />
        <Testimonials />
        <ContactPreview />
      */}
      <section className="h-screen flex items-center justify-center border-t border-white/10">
        <h2 className="text-3xl text-gray-500 font-display">More Content Coming Soon...</h2>
      </section>
    </div>
  );
}
