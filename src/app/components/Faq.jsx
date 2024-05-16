import React from "react";

import styles from "../style";
import Accordion from "../ui/Accordion";

const Faq = () => {
  return (
    <section
      className={`${styles.padding} ${styles.paddingY} flex flex-row gap-16`}
    >
      <div className="space-y-2">
        <h2 className="text-h2">Fortsat i tvivl?</h2>
        <h4 className="text-h4">Få svar i vores FAQ</h4>
        <p className="text-p">
          Find svar på oftede stillede spørgsmål for hjælp og klarhed.
        </p>
      </div>
      <div className="w-1/2">
        <Accordion header="Header" sub="SubTitle" body="Body Text" />
        <Accordion header="Header" sub="SubTitle" body="Body Text" />
        <Accordion header="Header" sub="SubTitle" body="Body Text" />
        <Accordion header="Header" sub="SubTitle" body="Body Text" />
      </div>
    </section>
  );
};

export default Faq;
