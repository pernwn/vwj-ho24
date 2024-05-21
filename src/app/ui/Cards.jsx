'use client'
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";
import styles from "../style";
import { Rating } from "./reviews";
import Image from "next/image";

import { motion } from "framer-motion";
import { FilledBtn } from "./buttons";
export const ReviewCard = ({ name, occupation, review, stars, avatarImg }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        y: -10,
        zIndex: 1,
        transition: { duration: 0.4 },
      }}
      className="p-4 min-w-[8 rem] mx-4 min-h-[25rem] space-x-4 rounded-lg shadow-xl bg-cmsecondary bg-blend-soft-light bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25 border-4 border-cmsecondary"
    >
      <CardContent>
        <div className="flex flex-row pb-4 items-center h-full ">
          <div className="w-1/3 rounded-full">
            <Image
              src={avatarImg}
              alt="Customer Img"
              width={70}
              height={70}
              className="rounded-full"
            />
          </div>
          <div className="w-2/3 space-y-2">
            <h5 className="text-h5 mt-3 font-semibold text-cmwhite">{name}</h5>
            <h6 className="text-h6 font-light text-cmwhite">{occupation}</h6>
            <Rating rating={stars} />
          </div>
        </div>
        <Divider className="bg-cmsecondary" />
        <div className="py-4 overflow-y-auto">
          {" "}
          <p className="text-p text-pretty text-cmwhite font-300">{review}</p>
        </div>
      </CardContent>
    </motion.div>
  );
};

export const SimpleCard = ({ content, action }) => {
  return (
    <Card
      className={`w-[275px] ${styles.flexCenter} flex-col rounded-lg p-8 mb-4 bg-cmsecondary/50`}
    >
      <h4 className="text-h5 text-cmwhite">{content}</h4>
    </Card>
  );
};

export const VidCard = ({title, content, btn}) => {
  return (
    <Card
      className={`w-[275px] ${styles.flexCenter} flex-col rounded-lg p-8 mb-4 bg-cmsecondary/50`}
    >
      <h4 className="text-h5 text-cmwhite">{title}</h4>
      <p className="text-p">{content}</p>
      <FilledBtn title={btn}/>
    </Card>
  );
}
