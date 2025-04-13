import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import FeatureCard from "./sections/FeatureCard";
import Hero from "./sections/Hero";
import ShowCaseSection from "./sections/ShowCaseSection";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonalis from "./sections/Testimonalis";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      {/* <LogoSection /> */}
      <FeatureCard />
      <ExperienceSection />
      <TechStack />
      <Testimonalis />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
