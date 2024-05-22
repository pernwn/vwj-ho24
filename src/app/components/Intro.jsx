"use client";

import React from "react";
import USP from "../ui/usp";
import styles from "../style";

import { motion } from "framer-motion";
import { FilledBtn } from "../ui/buttons";
import { Card, CardHeader } from "@material-tailwind/react";
import Image from "next/legacy/image";

  const circles = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 2, yoyo: Infinity } },
  };
const CircleCard = () => {
  return (
    <section className="pb-28">
      <USP />
      <Card
        className={`${styles.padding} bottom-5 relative flex items-center justify-center min-h-screen bg-transparent shadow-none`}
      >
        <BackgroundCircles />
        <div
          className={`${styles.padding} relative z-10 flex flex-col items-center justify-center w-[38rem] h-[38em] bg-cmwhite/75 shadow-lg rounded-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-cmdark/5`}
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
      <motion.div
        variants={circles}
        initial="initial"
        animate="animate"
        className="flex justify-center"
      >
        <Card className="relative shadow-lg w-1/2 h-auto grid grid-cols-2 gap-8 py-4 px-2 bg-clip-padding backdrop-filter backdrop-blur-lg bg-cmwhite/75 bg-opacity-75 border border-cmdark/5">
          <CardHeader floated={false} className="w-full">
            <Image
              src="/bjarke-profil.jpg"
              alt="Bjarke Petersen"
              className="rounded-lg shadow-md"
              layout="fill"
              objectFit="cover"
            />
          </CardHeader>
          <div className="p-4">
            <h3 className="text-h3">Bjarke Petersen</h3>
            <h6 className="text-h6">IT Security Entrepreneur</h6>
            <p className="text-p leading-tight pt-4">
              CyberMinds er hjemstedet for Danmarks bedste cybersec freelancere,
              samt industriens go-to for cybersec ydelser.
            </p>

            <p className="text-p leading-tight pt-2">
              Vi taler cybersec'sk, vi tager branchens laveste cut og vi kan
              bedre end de fleste, hjælpe med at italesætte forretningsbehovet
              og omsætte det til løsninger.
            </p>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

const BackgroundCircles = () => {
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
};

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
