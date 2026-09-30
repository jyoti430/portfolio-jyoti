import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navigation/Navbar";
import { siteConfig } from "@/data/siteConfig";

export default function HomePage() {
  return (
    <>
      <Navbar brand={siteConfig.brand} items={siteConfig.navigation} />
      <main>
        <Hero />
      </main>
    </>
  );
}
