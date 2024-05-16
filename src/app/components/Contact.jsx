import React from "react";
import { FormComp } from "../ui/Form";
import styles from "../style";

const Contact = () => {
  return (
    <section className={`${styles.padding} flex flex-row gap-16`}>
      <div>
        <h2 className="text-h2">Heading</h2>
        <h3 className="text-h3">Subtitle</h3>
        <p className="text-p">
          Find svar på oftede stillede spørgsmål for hjælp og klarhed.
        </p>
      </div>
      <FormComp />
    </section>
  );
};

export default Contact;
