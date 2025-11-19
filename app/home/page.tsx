
import AboutSection from "@/components/Aboutsection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/Servicesection";
import Anotherabout from "@/components/Anotherabout";
import ProcessTimeline from "@/components/ProcessTimeline";
import DummyProcessTimeline from "@/components/dummyProcessTimeline";
import ComparisonTable from "@/components/ComparisonTable";
import GlobalPresenceMap from "@/components/GlobalPresenceMap";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PremiumCTASection from "@/components/PremiumCTASection";

export default function Homepage() {
    return (
        <>
            {/* <Navbar /> */}
            <Hero />
            <AboutSection />
            <ServicesSection />
            <Anotherabout />
            <ProcessTimeline />
            <ComparisonTable />
            <GlobalPresenceMap />
            <CaseStudiesSection />
            <TestimonialsSection />
            <PremiumCTASection />
        </>
    );
}