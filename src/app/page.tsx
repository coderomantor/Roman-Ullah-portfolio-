import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import {
  About,
  Capabilities,
  Contact,
  LearningInPublic,
} from "@/components/sections/portfolio-details";
import { SelectedWork } from "@/components/sections/selected-work";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <Capabilities />
        <LearningInPublic />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
