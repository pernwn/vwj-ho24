
import ClientRender from "./components/clientrender";
import Footer from "./components/footer";
import Hero from "./components/hero";
import React from "react";
import Intro from "./components/intro";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Benefits from "./components/benefits";
import Explainer from "./components/info";


export default function Page() {
  return (
    <ClientRender>
      <main className="flex-grow">
        <Hero />
        <Intro />
        <Benefits />
        <Explainer />
        <Contact />
        <Faq />
        <Footer />
      </main>
</ClientRender>
  );
};

