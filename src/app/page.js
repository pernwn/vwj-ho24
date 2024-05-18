
//import Contact from "./components/Contact";
//import Faq from "./components/Faq";
import Footer from "./components/footer";
import Hero from "./components/hero";
//import Benefits from "./components/Benefits"
// import Intro from "./components/Intro";

import React from "react";
import Intro from "./components/intro";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Benefits from "./components/benefits";
import Info from "./components/info";

const page = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <Benefits />
      <Info />
      <Contact />
      <Faq />
      <Footer />
    </main>
  );
};

export default page;
