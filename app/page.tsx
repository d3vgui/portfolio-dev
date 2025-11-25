import { Fragment } from "react/jsx-runtime"
import SmoothScroll from "../components/SmoothScroll"
import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroSection from "../components/Section/HeroSection"
import AboutSection from "../components/Section/AboutSection"

export default function Home() {
  return (
    <SmoothScroll>
      <Fragment>
        <Header/>
        <HeroSection/>
        <AboutSection/>
        <Footer/>
      </Fragment>
    </SmoothScroll>
  )
}
