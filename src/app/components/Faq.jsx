import React from "react";

import styles from "../style";
import Accordion from "../ui/Accordion";

const Faq = () => {
  return (
    <section className={`${styles.padding} flex flex-row gap-16`}>
      <div>
        <h2 className="text-h2">Heading</h2>
        <h3 className="text-h3">Subtitle</h3>
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
