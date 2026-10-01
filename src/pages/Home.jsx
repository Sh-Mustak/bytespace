import CoursesSection from "../components/courseSection/CoursesSection.jsx";
import CTASection from "../components/ctaSection/CTASection.jsx";
import GrowthSection from "../components/growthSection/GrowthSection.jsx";
import Hero from "../components/hero/Hero.jsx";
import LogosStrip from "../components/logoStrip/LogosStrip.jsx";
import TestimonialsSection from "../components/TestimonialSection/TestimonialsSection.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <LogosStrip />
      <CoursesSection />
      <GrowthSection />
      <CTASection />
      <TestimonialsSection />
    </>
  );
}
