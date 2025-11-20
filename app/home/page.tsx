
import AboutSection from "@/LandingPageComponents/Aboutsection";
import Hero from "@/LandingPageComponents/Hero";
import ServicesSection from "@/LandingPageComponents/Servicesection";
import Anotherabout from "@/LandingPageComponents/Anotherabout";
import ProcessTimeline from "@/LandingPageComponents/ProcessTimeline";
import ComparisonTable from "@/LandingPageComponents/ComparisonTable";
import GlobalPresenceMap from "@/LandingPageComponents/GlobalPresenceMap";
import CaseStudiesSection from "@/LandingPageComponents/CaseStudiesSection";
import TestimonialsSection from "@/LandingPageComponents/TestimonialsSection";
import PremiumCTASection from "@/LandingPageComponents/PremiumCTASection";

export default function Homepage() {
    return (
        <>
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