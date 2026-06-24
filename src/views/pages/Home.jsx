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
import { WhyAxon } from "./HomeViews/WhyAxon";
import { ValuesMarquee } from "../components/ValuesMarquee";

export default function Home() {
  return (
    <div className="flex flex-col bg-white w-full overflow-x-clip">
      <section id="hero">
        <Hero />
      </section>
      <section id="customers">
        <TrustedWorldwide />
      </section>
      <ValuesMarquee />
      <WhyAxon />
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
      <section id="contact">
        <SpatialData />
      </section>
      <section id="plans">
        <Plans />
      </section>
      <section id="request-demo">
        <RequestDemo />
      </section>
      <Footer />
    </div>
  );
}
