import React from "react";
import USP from "../ui/usp";
import styles from "../style";
import { FilledBtn } from "../ui/buttons";




const Intro = () => {
  return (
    <section className="h-screen relative">
      <USP />
      <section
        className={`${styles.padding} ${styles.flexCenter} relative`}
      >
        <div
          className={`bg-cmwhite ${styles.flexCenter} absolute top-0 px-16 py-24 m-36 items-center text-center flex-col shadow-md border border-cmdark/5 rounded-full w-1/2`}
        >

            <h2 className="text-h2">Hvem er CyberMinds?</h2>
            <h4 className="text-h4">Beskyt din virksomhed mod cybertrusler</h4>
            <div className="flex flex-col items-center text-p">
              <p>
                CyberMinds er din pålidelige partner i kampen mod digitale
                angreb.
              </p>
              <p>
                Vi tilbyder skræddersyede IT-sikkerhedstjenester, der beskytter
                din virksomhed mod cyberkriminalitet og datasikkerhedsbrud.
              </p>
            </div>
            <FilledBtn title="Bliv kontaktet" />

        </div>
      </section>
    </section>
  );
};

export default Intro;
