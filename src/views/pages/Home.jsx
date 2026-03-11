import Hero from "./HomeViews/Hero";
import TestCases from "./HomeViews/TestCases";
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

export default function Home(props) {
    return (
        <div className="flex flex-col bg-white w-full">
            <Hero />
            <TestCases />
            <PlatformUsers />
            <TrustedWorldwide />
            <PlatformShowcase />
            <Enterprise />
            <CloudEcosystem />
            <Industry />
            <SpatialData />
            <Plans />
            <RequestDemo />
            <Footer />
        </div>
    );
}