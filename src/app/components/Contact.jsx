import React from "react";
import FormComp from "../ui/form";
import styles from "../style";
import { OutlinedBtn } from "../ui/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";



const Contact = () => {
  return (
    <section
      className={`${styles.padding} ${styles.paddingY} flex flex-row gap-16 bg-cmprimary ${styles.flexStart}`}
    >
      <div className={`flex-col w-1/2 space-y-6`}>
        <h2 className="text-h2 text-cmwhite">
          Klar til at styrke din virksomheds IT-sikkerhed?
        </h2>
        <h4 className="text-h4 text-cmwhite">Tag det første skridt mod bedre IT-sikkerhed</h4>
        <p className="text-p text-cmwhite">
          Kontakt os i dag for en gratis konsultation, hvor vi sammen kan
          identificere dine behov og udvikle en skræddersyet løsning til at
          beskytte din virksomhed mod digitale trusler.
          <br />
          Lad os være din partner i kampen mod cyberkriminalitet.
        </p>
        <div>
          <h5 className="text-h5 text-cmaccent">Fang os nemt på <FontAwesomeIcon icon={faLinkedin} size="xl" className="hover:text-cmsecondary hover:cursor-pointer ml-2"/></h5>
        </div>
      </div>
      <FormComp />


    </section>
  );
};

export default Contact;
