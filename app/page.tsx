import { Fragment } from "react/jsx-runtime"
import SmoothScroll from "../components/SmoothScroll"
import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroSection from "../components/Section/HeroSection"
import AboutSection from "../components/Section/AboutSection"
import TechSection from "../components/Section/TechSection"

export default function Home() {
  return (
    <SmoothScroll>
      <Fragment>
        <Header/>
        <HeroSection/>
        <AboutSection/>
        <TechSection/>
        <Footer/>
      </Fragment>
    </SmoothScroll>
  )
}
