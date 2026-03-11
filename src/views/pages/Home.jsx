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
import Footer from "./HomeViews/Marwan/Footer"
import { ScrollReveal } from "../components/ScrollReveal";

export default function Home(props) {
    return (
        <div className="flex flex-col bg-white w-full">
            <Hero />
            <ScrollReveal>
                <PlatformUsers />
            </ScrollReveal>
            <ScrollReveal>
                <TrustedWorldwide />
            </ScrollReveal>
            <ScrollReveal>
                <PlatformShowcase />
            </ScrollReveal>
            <ScrollReveal>
                <Enterprise />
            </ScrollReveal>
            <ScrollReveal>
                <CloudEcosystem />
            </ScrollReveal>
            <ScrollReveal>
                <Industry />
            </ScrollReveal>
            <ScrollReveal>
                <SpatialData />
            </ScrollReveal>
            <ScrollReveal>
                <Plans />
            </ScrollReveal>
            <ScrollReveal>
                <RequestDemo />
            </ScrollReveal>
            <Footer />
        </div>
    );
}