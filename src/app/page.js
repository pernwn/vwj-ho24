
//import Contact from "./components/Contact";
//import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
//import Benefits from "./components/Benefits"
// import Intro from "./components/Intro";

import React from 'react'
import Intro from "./components/Intro";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Benefits from "./components/Benefits";
import Info from "./components/Info";

const page = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <Benefits/>
      <Info/>
      <Contact />
      <Faq />
      <Footer />
    </main>
  );
}

export default page


