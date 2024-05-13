import React from "react";
import Nav from "./Nav";
import FilledBtn from "../ui/buttons";

export const Hero = () => {
  return (
      <section
          id="home"
      className="bg-heroimg"
    >
      <section>
        <Nav />
              <h1>Hello</h1>
              <FilledBtn title="KNAP"/>

      </section>
    </section>
  );
};

export default Hero
