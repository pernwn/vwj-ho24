"use client";

import React from "react";
import { motion } from "framer-motion";

import ScanGlobalIcon from "@/app/assets/icons/scanglobal.svg";
import IncomIcon from "@/app/assets/icons/incommodities.svg";
import IncubaIcon from "@/app/assets/icons/incuba.svg";
import WristShipIcon from "@/app/assets/icons/wristship.svg";
import ObtonIcon from "@/app/assets/icons/obton.svg";

import Image from "next/image";

const partners = [
  { icon: ScanGlobalIcon },
  { icon: IncomIcon },
  { icon: IncubaIcon },
  { icon: WristShipIcon },
  { icon: ObtonIcon },
];

const CyberPartners = () => {
  const duplicateSlides = [...partners, ...partners];

  return (
    <div
      className={`max-w-full h-auto overflow-x-auto flex flex-row pb-16 pt-12 no-scrollbar`}
    >
      <motion.div
        className="flex"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 150,
            repeat: Infinity,
          },
        }}
      >
        {/* Render duplicated slides */}
        {duplicateSlides.map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center w-full p-4 bg-cmwhite bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-origin-border"
            style={{ width: `${100 / partners.length}%` }}
          >
            <div className="mx-2 w-full text-cmaccent ">
              <Image
                src={partner.icon}
                alt="Samarbejdspartnere"
                width={100}
                height={100}
                className="fill-current"
              />
       
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CyberPartners;
