import { Fragment } from "react/jsx-runtime"
import SmoothScroll from "../components/SmoothScroll"
import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroSection from "../components/Section/HeroSection"
import AboutSection from "../components/Section/AboutSection"
import TechSection from "../components/Section/TechSection"
import ProjectsSection from "../components/Section/ProjectsSection"
import ContactSection from "../components/Section/ContactSection"

export default function Home() {
  return (
    <SmoothScroll>
      <Fragment>
        <Header/>
        <main>
          <HeroSection/>
          <AboutSection/>
          <TechSection/>
          <ProjectsSection/>
          <ContactSection/>
        </main>
        <Footer/>
      </Fragment>
    </SmoothScroll>
  )
}
