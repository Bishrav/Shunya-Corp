import { Hero } from "@/components/sections/Hero";
import { RobotShowcase } from "@/components/sections/RobotShowcase";
import { SpotlightSection } from "@/components/sections/SpotlightSection";
import { TextReveal } from "@/components/ui/TextReveal";
import { Scene } from "@/components/canvas/Scene";
import { TechScene } from "@/components/canvas/TechScene";
import { EnergyWave } from "@/components/canvas/EnergyWave";
import { FloatingTech } from "@/components/canvas/FloatingTech";
import { InteractiveSphere } from "@/components/canvas/InteractiveSphere";
import { CustomModels } from "@/components/canvas/CustomModels";
import { Zap, Shield, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />

      {/* Introduction */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center border-t border-white/10 relative overflow-hidden bg-black/40 py-20">
        <div className="w-full md:w-1/2 h-[500px]">
          <Scene className="w-full h-full">
            <TechScene />
            {/* Robot removed from here, moved to dedicated showcase */}
            <CustomModels />
          </Scene>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left px-6">
          <TextReveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Leading <span className="text-shunya-cyan">IT Related Company</span>
            </h2>
          </TextReveal>
          <TextReveal>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto md:mx-0">
              Recognized as the <strong>best IT company in Nepal</strong>, <strong>Shunya Development IT Company</strong> bridges the gap between imagination and reality with cutting-edge <strong>website building</strong>, app development, and immersive 3D experiences.
            </p>
          </TextReveal>
        </div>
      </section >

      {/* Spotlight Feature */}
      < SpotlightSection />

      {/* Robot Showcase Section */}
      < RobotShowcase />

      {/* 3D Flow Divider */}
      < div className="w-full h-[300px] relative overflow-hidden bg-black" >
        <Scene className="w-full h-full absolute inset-0">
          <EnergyWave />
        </Scene>
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <h3 className="text-9xl font-bold text-white/5 uppercase tracking-widest">Flow</h3>
        </div>
      </div >

      {/* Floating Technologies */}
      < div className="w-full h-[400px] relative overflow-hidden bg-gradient-to-b from-black to-shunya-bg" >
        <Scene className="w-full h-full">
          <FloatingTech />
        </Scene>
      </div >

      {/* Our Process */}
      < section className="py-32 px-6 container mx-auto" >
        <TextReveal>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-20 text-center">Best <span className="text-shunya-purple">IT Company</span> Solutions</h2>
        </TextReveal>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discovery", desc: "Understanding your vision and defining the digital roadmap." },
            { step: "02", title: "Design", desc: "Crafting immersive UI/UX that captivates and engages." },
            { step: "03", title: "Develop", desc: "Engineering robust, scalable code using next-gen tech stacks." },
            { step: "04", title: "Deploy", desc: "Seamless launch and continuous optimization for growth." }
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-xl border-t border-shunya-cyan/30 relative group hover:bg-white/5 transition-colors">
              <span className="text-6xl font-bold text-white/10 absolute top-4 right-4">{item.step}</span>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-shunya-cyan transition-colors">{item.title}</h3>
              <p className="text-gray-400 relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section >

      {/* Why Choose Us */}
      < section className="py-32 px-6 container mx-auto relative" >
        <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-shunya-purple/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <TextReveal>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Top <span className="text-shunya-cyan">IT Company</span> in Nepal</h2>
            </TextReveal>
            <div className="space-y-8">
              {[
                { icon: <Zap className="w-6 h-6 text-shunya-cyan" />, title: "Lightning Fast", desc: "Optimized website development search results with superior speed." },
                { icon: <Shield className="w-6 h-6 text-shunya-purple" />, title: "Enterprise Secure", desc: "Bank-grade security for your app development search in Nepal." },
                { icon: <Rocket className="w-6 h-6 text-shunya-cyan" />, title: "Future Ready", desc: "Leading the Three.js search with next-gen scalable tech." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="p-3 glass rounded-lg">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] glass rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center text-center">
            <div className="absolute inset-0 z-0">
              <Scene className="w-full h-full">
                <InteractiveSphere />
              </Scene>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-shunya-cyan/10 to-shunya-purple/10 pointer-events-none" />
            <div className="relative z-10 pointer-events-none">
              <h3 className="text-5xl font-bold font-display text-white mb-2">100%</h3>
              <p className="text-gray-400 uppercase tracking-widest">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section >

    </div >
  );
}
