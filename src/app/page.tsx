import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
      </main>
    </>
  );
}
