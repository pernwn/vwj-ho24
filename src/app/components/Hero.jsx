import React from "react";
import Nav from "./Nav";
import { FilledBtn, OutlinedBtn } from "../ui/Buttons";

export const Hero = () => {
  return (
      <section
          id="home"
      className="bg-heroimg"
    >
      <section>
        <Nav />
              <h1 className="font-header">Hello</h1>
        <FilledBtn title="KNAP" />
        <OutlinedBtn title="KNAP 2"/>

      </section>
    </section>
  );
};

export default Hero
