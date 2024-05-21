

import Footer from "./components/footer";
import Hero from "./components/hero";
import React from "react";
import Intro from "./components/intro";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Benefits from "./components/benefits";
import Explainer from "./components/info";



const page = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <Benefits />
      <Explainer />
      <Contact />
      <Faq />
      <Footer />
    </main>
  );
};

export default page;
