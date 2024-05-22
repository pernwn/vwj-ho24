"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia, Divider } from "@mui/material";
import styles from "../style";
import { Rating } from "./reviews";
import Image from "next/legacy/image";

import { motion } from "framer-motion";
import { FilledBtn } from "./buttons";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

export const ReviewCard = ({ name, occupation, review, stars, avatarImg }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        y: -10,
        zIndex: 1,
        transition: { duration: 0.4 },
      }}
      className="p-2 min-w-[2rem] mx-4 min-h-[25rem] space-x-4 rounded-lg shadow-xl bg-cmsecondary bg-blend-soft-light bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25 border-4 border-cmsecondary"
    >
      <CardContent>
        <div className="flex flex-row pb-4 items-end w-full h-full ">
          <div className="w-[50%] rounded-full">
            <Image
              src={avatarImg}
              alt="Customer Img"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="w-[100%] space-y-2">
            <h5 className="text-h5 mt-3 font-semibold text-cmwhite">{name}</h5>
            <h6 className="text-h6 font-light text-cmwhite">{occupation}</h6>
            <Rating rating={stars} />
          </div>
        </div>
        <Divider className="bg-cmsecondary" />
        <div className="py-4 overflow-y-auto">
          <p className="text-p text-pretty text-cmwhite font-300">{review}</p>
        </div>
      </CardContent>
    </motion.div>
  );
};

export const SimpleCard = ({ content, action }) => {
  return (
    <Popover
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}

      
    >
      <PopoverHandler>
        <Card
            className={`${styles.flexCenter} hover:cursor-pointer hover:bg-cmdark/25 transition ease flex-col rounded-lg p-8 mb-4 bg-blend-overlay bg-cmsecondary/55`}
        >
          <p className="text-h5 text-cmwhite text-xl">{action}</p>
        </Card>
      </PopoverHandler>
      <PopoverContent className="bg-clip-padding bg-cmwhite/25 w-1/4 px-4 my-18 rounded-xl backdrop-filter backdrop-blur-lg border border-cmdark/5">
        <p className="text-p w-1/2 text-cmwhite">{content}</p>
      </PopoverContent>
    </Popover>
  );
};

export const VidCard = ({ title, content, btn, vid }) => {
  return (
    <Card
      className={`max-w-md w-full h-full ${styles.flexCenter} m-4 mt-12 flex-col rounded-lg shadow-none bg-transparent`}
    >
      <CardMedia
        component="video"
        className="h-auto w-full rounded-lg shadow-sm"
        controls
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </CardMedia>
      <CardContent className="flex flex-col justify-center items-center w-full space-y-2 py-8">
        <h4 className="text-h4">{title}</h4>
        <p className="text-p">{content}</p>
      </CardContent>
    </Card>
  );
};

