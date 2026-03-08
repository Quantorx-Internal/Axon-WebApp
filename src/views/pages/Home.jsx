import Hero from "./HomeViews/Hero";
import TestCases from "./HomeViews/TestCases";
import PlatformUsers from "./HomeViews/PlatformUsers";
import TrustedWorldwide from "./HomeViews/TrustedWorldwide";
import PlatformShowcase from "./HomeViews/PlatformShowcase";
import Enterprise from "./HomeViews/Enterprise";
import CloudEcosystem from "./HomeViews/CloudEcosystem";
import IndustryPage from "./HomeViews/Marwan/IndustryPage";
import PlansPage from "./HomeViews/Marwan/PlansPage";
import SpatialDataPage from "./HomeViews/Marwan/SpaitalDataPage";

export default function Home(props) {
    return (
        <div className="flex flex-col bg-white w-full overflow-x-hidden">
            <Hero />
            <TestCases />
            <PlatformUsers />
            <TrustedWorldwide />
            <PlatformShowcase />
            <Enterprise />
            <CloudEcosystem />
            <IndustryPage />
            <SpatialDataPage />
            <PlansPage />
        </div>
    );
}