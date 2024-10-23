import Navbar from "@/components/custom/navbar/Navbar";
import HeroSection from "@/components/custom/heroSection/HeroSection";
import About from "@/components/custom/about/About";
import Technologies from "@/components/custom/technologies/Technologies";
import Contact from "@/components/custom/contact/Contact";
import PortfolioProject from "@/components/custom/portfolioProject/PortfolioProject";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className=" fixed top-0 -z-10 h-full w-full">
        {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        {/* <Spline scene="https://prod.spline.design/FQO2cXreOye89IFg/scene.splinecode" /> */}
        {/*background*/}
        <Spline scene="https://prod.spline.design/1ob4uzoCslG7Nsx3/scene.splinecode" />
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <HeroSection />
        <About />
        <Technologies />
        {/* <Experience /> */}
        {/* <Projects /> */}
        <PortfolioProject />
        <Contact />
      </div>
    </div>
  );
}
