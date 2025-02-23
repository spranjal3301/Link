import { ModalBodyContent } from "@/components/global/Landing/loginBtn";
import { CTA } from "@/components/sections/cta";
import Feature from "@/components/sections/feature";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero-section";
import PricingSection from "@/components/sections/prizing";
import { SphereMask } from "@/components/sections/seperator";
import TechStack from "@/components/sections/tech-stack";


export default function Page() {
  return (
    <div>
      <Header />
      {/* <ModalBodyContent /> */}

      <main className="flex flex-col w-full justify-center items-center ">
        <Hero />
        <TechStack />
        <SphereMask />
        <Feature />
        <SphereMask reverse />
        <PricingSection />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
