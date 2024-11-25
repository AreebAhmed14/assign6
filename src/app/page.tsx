import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroHeader from "@/components/Intro-Header";
import Logo from "@/components/Logo";
import CBL from "@/components/Course-list";
import Same from "@/components/Same";
import Courses from "@/components/Courses";
import Team from "@/components/Team";
import Customer from "@/components/Customer";
import Footer from "@/components/Footer";

export default function Home() {
  return(
    <>
    <IntroHeader />
    <Header />
    <Hero />
     <Logo />
     <CBL />
    <Same />
    <Courses />
    <Team />
    <Customer />
    <Footer />  
    </>
  )
}
