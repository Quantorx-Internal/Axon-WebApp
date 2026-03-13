import Hero from "./HomeViews/Hero";
import PlatformUsers from "./HomeViews/PlatformUsers";
import TrustedWorldwide from "./HomeViews/TrustedWorldwide";
import PlatformShowcase from "./HomeViews/PlatformShowcase";
import Enterprise from "./HomeViews/Enterprise";
import CloudEcosystem from "./HomeViews/CloudEcosystem";
import Industry from "./HomeViews/Marwan/Industry";
import SpatialData from "./HomeViews/Marwan/SpatialData";
import Plans from "./HomeViews/Marwan/Plans";
import RequestDemo from "./HomeViews/Marwan/RequestDemo";
import Footer from "./HomeViews/Marwan/Footer";
import { ScrollReveal } from "../components/ScrollReveal";

export default function Home(props) {
    return (
        <div className="flex flex-col bg-white w-full">
            <section id="hero">
                <Hero />
            </section>
            <ScrollReveal>
                <section id="platform">
                    <PlatformUsers />
                </section>
            </ScrollReveal>
            <ScrollReveal>
                <section id="customers">
                    <TrustedWorldwide />
                </section>
            </ScrollReveal>
            <ScrollReveal>
                <section id="showcase">
                    <PlatformShowcase />
                </section>
            </ScrollReveal>
            <ScrollReveal>
                <section id="enterprise">
                    <Enterprise />
                </section>
            </ScrollReveal>
            <ScrollReveal>
                <section id="solution">
                    <CloudEcosystem />
                </section>
            </ScrollReveal>
            <ScrollReveal>
                <section id="industry">
                    <Industry />
                </section>
            </ScrollReveal>
            <ScrollReveal>
                <section id="contact">
                    <SpatialData />
                </section>
            </ScrollReveal>
            <ScrollReveal>
                <section id="plans">
                    <Plans />
                </section>
            </ScrollReveal>
            <ScrollReveal>
                <section id="request-demo">
                    <RequestDemo />
                </section>
            </ScrollReveal>
            <Footer />
        </div>
    );
}