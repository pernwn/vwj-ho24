"use client";

import React from "react";
import styles from "../style";

import { motion } from "framer-motion";
import Image from "next/legacy/image";
import { VidCard } from "../ui/cards";
import { Card, CardContent } from "@mui/material";

const ExplainerCard = () => {
  return (
    <section
      className={`w-screen h-screen relative ${styles.flexCenter} my-28`}
    >
      <BackgroundCircles />
      <Card
        className={`${styles.flexCenter} mx-44 w-full relative h-full overflow-hidden shadow-lg bg-clip-padding bg-cmwhite rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-75 border border-cmdark/5`}
      >
        <CardContent
          className={`absolute z-10 flex flex-row items-center justify-center w-fit h-fit bg-transparent shadow-none`}
        >
          <div className="text-center w-4/5 flex flex-col items-center justify-center">
            <h2 className="text-h2">Din sikkerhed, vores ansvar</h2>
            <p className="text-p mx-12">
              Få et indblik i, hvordan vi prioriterer <b>kvalitet</b>,
              <b> pålidelighed</b> og <b>effektivitet</b> i alle vores
              handlinger. Se her, hvordan vores dedikation til disse værdier
              former hver interaktion og beslutning, vi træffer.
            </p>

            <div className="flex flex-col w-full lg:flex-row justify-center ">
              <VidCard
                title="Beskyttelsestiltag"
                content="CyberMinds beskytter din virksomhed mod cybertrusler. Vores eksperter overvåger og reagerer på sikkerhedsrisici døgnet rundt for at sikre dine data og forretningskontinuitet. Se hvordan vi gør det i denne video."
                vid="https://videos.pexels.com/video-files/7579657/7579657-uhd_4096_2160_25fps.mp4"
              />
              <VidCard
                title="Avanceret Cybersecurity"
                content="CyberMinds tilbyder skræddersyede løsninger til at beskytte dine digitale aktiver. Med avanceret teknologi og dybdegående analyser, sikrer vi, at din virksomhed er rustet til at modstå de mest sofistikerede cyberangreb."
                vid="https://videos.pexels.com/video-files/7255101/7255101-uhd_4096_2160_30fps.mp4"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

const BackgroundCircles = () => {
  const circles = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 2, yoyo: Infinity } },
  };

  return (
    <div className="absolute inset-0 ">
      <motion.div
        className="w-[48em] h-[48em] border-[1.8rem] border-cmaccent rounded-full absolute"
        variants={circles}
        initial="initial"
        animate="animate"
        style={{ top: "4%", left: "-18%" }}
      >
        <Image
          src="/developer.png"
          alt="Developer"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        className="w-[12em] h-[12em] bg-cmaccent rounded-full absolute"
        variants={circles}
        initial="initial"
        animate="animate"
        style={{ top: "12%", right: "4%" }}
      />
      <motion.div
        className="w-[24em] h-[24em] bg-cmprimary rounded-full absolute flex items-center justify-center"
        variants={circles}
        initial="initial"
        animate="animate"
        style={{ top: "14%", right: "4%" }}
      />
    </div>
  );
};

export default ExplainerCard;
