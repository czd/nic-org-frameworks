import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Divider } from "@/components/divider";
import { Thesis } from "@/components/thesis";
import { Frameworks } from "@/components/frameworks";
import { Audiences } from "@/components/audiences";
import { ValueFlow } from "@/components/value-flow";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <Hero />
      <Divider />
      <Thesis />
      <Divider />
      <Frameworks />
      <Divider />
      <Audiences />
      <Divider />
      <ValueFlow />
      <SiteFooter />
    </>
  );
}
