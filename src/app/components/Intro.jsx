'use client'

import React from "react";
import USP from "../ui/usp";
import styles from "../style";

import { motion } from "framer-motion";
import { FilledBtn } from "../ui/buttons";
import { Card } from "@material-tailwind/react";
import Image from "next/image";


const CircleCard = () => {
  return (
    <>
      <USP />
      <Card
        className={`${styles.padding} bottom-10 relative flex items-center justify-center min-h-screen bg-transparent shadow-none`}
      >
        <BackgroundCircles />
        <div
          className={`${styles.padding} relative z-10 flex flex-col items-center justify-center w-[38rem] h-[38em] bg-cmwhite/75 shadow-lg rounded-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-75 border-1 border-cmdark/35`}
        >
          <div className="text-center space-x-4">
            <h2 className="text-h2">Hvem er CyberMinds?</h2>
            <h4 className="text-h4">Beskyt din virksomhed mod cybertrusler</h4>
            <p className="text-p p-4">
              CyberMinds er din pålidelige partner i kampen mod digitale angreb.
              Vi tilbyder skræddersyede IT-sikkerhedstjenester, der beskytter
              din virksomhed mod cyberkriminalitet og datasikkerhedsbrud.
            </p>
          </div>
          <FilledBtn title="Kontakt" />
        </div>
      </Card>
    </>
  );
};

const BackgroundCircles = () => {
  const circles = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 2, yoyo: Infinity } },
  };

  return (
    <div className="absolute inset-0 overflow-hidden">

      <motion.div
        className="w-[28em] h-[28em] border-[1.8rem] border-cmaccent rounded-full absolute"
        variants={circles}
        initial="initial"
        animate="animate"
        style={{ top: "2%", left: "8%" }}
      >
        <Image
          src="/roundbuilding.jpg"
                    alt="Decorative Circle 3"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
       /> 
      </motion.div>
      <motion.div
        className="w-[18em] h-[18em] bg-cmaccent rounded-full absolute"
        variants={circles}
        initial="initial"
        animate="animate"
        style={{ top: "50%", left: "22%" }}
      />
      <motion.div
        className="w-[24em] h-[24em] bg-cmprimary rounded-full absolute flex items-center justify-center"
        variants={circles}
        initial="initial"
        animate="animate"
        style={{ top: "34%", right: "8%" }}
      />
    </div>
  );
}

export default CircleCard;

// const Intro = () => {
//   return (
//     <section className="h-screen relative">
//       <USP />
//       <section
//         className={`${styles.padding} ${styles.flexCenter} relative`}
//       >
//         <div
//           className={`bg-cmwhite ${styles.flexCenter} absolute top-0 px-16 py-24 m-36 items-center text-center flex-col shadow-md border border-cmdark/5 rounded-full w-1/2`}
//         >

//             <h2 className="text-h2">Hvem er CyberMinds?</h2>
//             <h4 className="text-h4">Beskyt din virksomhed mod cybertrusler</h4>
//             <div className="flex flex-col items-center text-p">
//               <p>
//                 CyberMinds er din pålidelige partner i kampen mod digitale
//                 angreb.
//               </p>
//               <p>
//                 Vi tilbyder skræddersyede IT-sikkerhedstjenester, der beskytter
//                 din virksomhed mod cyberkriminalitet og datasikkerhedsbrud.
//               </p>
//             </div>
//             <FilledBtn title="Bliv kontaktet" />

//         </div>
//       </section>
//       <CircleCard/>
//     </section>
//   );
// };

// export default Intro;
