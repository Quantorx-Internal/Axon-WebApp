import Hero from "./HomeViews/Hero";
import PlatformUsers from "./HomeViews/PlatformUsers";
import TrustedWorldwide from "./HomeViews/TrustedWorldwide";
import PlatformShowcase from "./HomeViews/PlatformShowcase";
import Enterprise from "./HomeViews/Enterprise";
import CloudEcosystem from "./HomeViews/CloudEcosystem";
import Industry from "./HomeViews/Industry";
import SpatialData from "./HomeViews/SpatialData";
import Plans from "./HomeViews/Plans";
import RequestDemo from "./HomeViews/RequestDemo";
import Footer from "./HomeViews/Footer";
import HowItWorks from "./HomeViews/HowItWorks";
import Comparison from "./HomeViews/Comparison";
import FAQ from "./HomeViews/FAQ";
import { WhyAxon } from "./HomeViews/WhyAxon";
import { ValuesMarquee } from "../components/ValuesMarquee";
import { ScrollProgress } from "../components/ScrollProgress";

export default function Home() {
  return (
    <div className="flex flex-col bg-white w-full overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[400] focus:rounded-lg focus:bg-ink focus:text-white focus:px-4 focus:py-2.5 focus:font-mono focus:text-xs focus:uppercase focus:tracking-wider focus:shadow-lift"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <section id="hero">
        <Hero />
      </section>
      <section id="customers">
        <TrustedWorldwide />
      </section>
      <ValuesMarquee />
      <WhyAxon />
      <section id="how">
        <HowItWorks />
      </section>
      <section id="platform">
        <PlatformUsers />
      </section>
      <section id="showcase">
        <PlatformShowcase />
      </section>
      <section id="enterprise">
        <Enterprise />
      </section>
      <section id="solution">
        <CloudEcosystem />
      </section>
      <section id="industry">
        <Industry />
      </section>
      <section id="compare">
        <Comparison />
      </section>
      <section id="contact">
        <SpatialData />
      </section>
      <section id="plans">
        <Plans />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="request-demo">
        <RequestDemo />
      </section>
      <Footer />
    </div>
  );
}
