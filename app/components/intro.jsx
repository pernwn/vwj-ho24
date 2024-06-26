"use client";

import React from "react";

import styles from "../style";
import { motion } from "framer-motion";

import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import USP from "../ui/usp";
import { FilledBtn } from "../ui/buttons";




const circles = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 2, yoyo: Infinity } },
};
const CircleCard = () => {
  return (
    <section className="pb-28 xl:pb-12">
      <USP />
      <Card
        className={`${styles.padding} bottom-4 xl:-bottom-4 relative flex items-center justify-center min-h-screen bg-transparent shadow-none`}
      >
        <BackgroundCircles />
        <div
          className={`${styles.padding} relative z-10 flex flex-col items-center justify-center w-[38em] h-[38em] xl:w-[56em] xl:h-[56em] bg-cmwhite/75 shadow-lg rounded-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-cmdark/5`}
        >
          <div className="text-center">
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
        <Card
          className={` ${styles.paddingX} py-4 pb-8 relative shadow-lg w-2/3 h-full xl:h-[30em] xl:w-1/4 xl:bottom-8 bottom-0 grid grid-cols-2 gap-8 bg-clip-padding backdrop-filter backdrop-blur-lg bg-cmwhite/75 bg-opacity-75 border border-cmdark/5`}
        >
          <CardHeader floated={false}>
            <img
              src="/bjarke-profil.jpg"
              alt="Bjarke Petersen"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody className="flex flex-col gap-2 py-8">
            <h3 className="text-h3">Bjarke Petersen</h3>
            <h6 className="text-h6">IT Security Entrepreneur</h6>
            <p className="text-p leading-tight">
              CyberMinds er hjemstedet for Danmarks bedste cybersec freelancere,
              samt industriens go-to for cybersec ydelser.
            </p>

            <p className="text-p leading-tight">
              Vi taler cybersec'sk, vi tager branchens laveste cut og vi kan
              bedre end de fleste, hjælpe med at italesætte forretningsbehovet
              og omsætte det til løsninger.
            </p>
            <Link href="https://www.linkedin.com/in/bjarke-n-petersen/">
              <Button
                size="sm"
                className="rounded-full w-full flex justify-center gap-2 mt-4 bg-clip-padding  text-cmwhite items-center bg-cmaccent/75 ring-cmaccent/75 ring-2 hover:bg-cmaccent hover:ring-[#ffad99] hover:cursor-pointer transition-color ease-linear  "
              >
                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                <p className="text-md text-current normal-case">
                  Skab forbindelse
                </p>
              </Button>
            </Link>
          </CardBody>
        </Card>
      </motion.div>
    </section>
  );
};

const BackgroundCircles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="w-[28em] h-[28em] xl:w-[44em] xl:h-[44em] border-[1.8rem] border-cmaccent rounded-full absolute top-[2%] left-[8%] xl:left-[20%]"
        variants={circles}
        initial="initial"
        animate="animate"
      >
        <img
          src="/roundbuilding.jpg"
          alt="Decorative Circle 3"
          className="rounded-full object-cover w-full h-full"
        />
      </motion.div>
      <motion.div
        className="w-[18em] h-[18em] xl:w-[22em] xl:h-[22em] bg-cmaccent rounded-full absolute top-[50%] left-[22%] xl:left-[30%]"
        variants={circles}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="w-[24em] h-[24em] xl:w-[34em] xl:h-[34em] bg-cmprimary rounded-full absolute top-[34%] right-[8%] xl:right-[26%]"
        variants={circles}
        initial="initial"
        animate="animate"
      />
    </div>
  );
};

export default CircleCard;
