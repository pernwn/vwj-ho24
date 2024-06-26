import React from "react";
import styles from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import FormComp from "../ui/form";



const Contact = () => {
  return (
    <section
      className={`${styles.padding} xl:px-44 flex-row gap-16 bg-gradient-tr ${styles.flexStart} rounded-bl-[12em] rounded-tr-[12em]`}
    >
      <div className={`flex-col w-1/2 space-y-6 px-8 py-12 xl:w-1/4`}>
        <h2 className="text-h2 text-cmwhite">
          Klar til at styrke din virksomheds IT-sikkerhed?
        </h2>
        <h4 className="text-h4 text-cmwhite">
          Tag det første skridt mod bedre cybersikkerhed
        </h4>
        <p className="text-p text-cmwhite">
          Kontakt os i dag for en gratis konsultation, hvor vi sammen kan
          identificere dine behov og udvikle en skræddersyet løsning til at
          beskytte din virksomhed mod digitale trusler.
          <br />
          Lad os være din partner i kampen mod cyberkriminalitet.
        </p>
        <div>
          <h5 className="text-h5 text-cmaccent">
            Fang os nemt på
            {
              <FontAwesomeIcon
                icon={faLinkedin}
                size="xl"
                className="hover:text-cmsecondary hover:cursor-pointer ml-2 "
              />
            }
          </h5>
        </div>
      </div>
      <div className="pt-12">
        <FormComp />
      </div>
    </section>
  );
};

export default Contact;
