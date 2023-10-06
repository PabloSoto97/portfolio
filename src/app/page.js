import Image from "next/image";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import ProjectsSection from "./Components/ProjectsSection";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar></NavBar>
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <ProjectsSection></ProjectsSection>
        <EmailSection></EmailSection>
      </div>
      <Footer></Footer>
    </main>
  );
}
