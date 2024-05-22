"use client";

import React from "react";
import USP from "../ui/usp";
import styles from "../style";

import { motion } from "framer-motion";
import { Card } from "@material-tailwind/react";
import Image from "next/image";

const ExplainerCard = () => {
  return (
    <>
      <Card
        className={`${styles.padding} bottom-24 relative flex items-center justify-center min-h-screen bg-transparent shadow-none`}
      >
        <BackgroundCircles />
        <div
          className={`${styles.padding} relative z-10 flex flex-col items-center justify-center w-fit h-auto bg-cmwhite/75 shadow-lg rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-75 border border-cmdark/5`}
        >
          <div className="text-center space-x-4">
            <h2 className="text-h2">Din sikkerhed, vores ansvar</h2>
          </div>
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
    <div className="absolute inset-0 ">
      <motion.div
        className="w-[48em] h-[48em] border-[1.8rem] border-cmaccent rounded-full absolute"
        variants={circles}
        initial="initial"
        animate="animate"
        style={{ top: "2%", left: "-18%" }}
      >
        <Image
          src="/developer.png"
          alt="Developer"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </motion.div>
      
    </div>
  );
};

export default ExplainerCard;
