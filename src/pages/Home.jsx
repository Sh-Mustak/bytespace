import CoursesSection from "../components/courseSection/CoursesSection.jsx";
import GrowthSection from "../components/growthSection/GrowthSection.jsx";
import Hero from "../components/hero/Hero.jsx";
import LogosStrip from "../components/logoStrip/LogosStrip.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <LogosStrip />
      <CoursesSection />
      <GrowthSection />
    </>
  );
}
