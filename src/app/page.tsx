import { PageLoader } from "@/components/PageLoader";
import { CafeScene } from "@/components/canvas/CafeScene";
import { Hero } from "@/components/sections/Hero";
import { Menu } from "@/components/sections/Menu";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Reservation } from "@/components/sections/Reservation";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black-matte selection:bg-orange-glow/30">
      <PageLoader />
      
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <CafeScene />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col">
        <Hero />
        
        {/* We add a subtle gradient transition between the 3D hero and the dark sections */}
        <div className="w-full h-32 bg-gradient-to-b from-transparent to-black-matte" />
        
        <div className="bg-black-matte relative z-20">
          <Menu />
          <About />
          <Experience />
          <Reservation />
          <Footer />
        </div>
      </div>
    </main>
  );
}
