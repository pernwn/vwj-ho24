import React from "react";
import USP from "../ui/usp";
import styles from "../style";


const Intro = () => {
  return (
    <>
      <USP />
      <section
        className={`${styles.paddingY} ${styles.padding} ${styles.flexCenter} relative`}
      >
        <div>{/* Text field */}</div>
        {/* TODO: Cirkler - pos rel og abso? søg best practices */}
        <div
          className={`bg-cmwhite ${styles.flexCenter} rounded-full p-12 w-fit shadow-md border border-cmdark/5 absolute`}
        >
          <h2 className="text-h2">Hvem er CyberMinds?</h2>
        </div>
      </section>
    </>
  );
};

export default Intro;
