import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/navbar"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import WorkFlow from "./components/WorkFlow"

const App = () => {
  return (
    <>
      <ScrollToHashElement behavior="smooth" inline="center" block="center" />
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App