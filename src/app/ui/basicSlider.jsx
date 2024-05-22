"use client";

import React from "react";
import { motion } from "framer-motion";

import ScanGlobalIcon from "@/app/assets/icons/scanglobal.svg";
import IncomIcon from "@/app/assets/icons/incommodities.svg";
import IncubaIcon from "@/app/assets/icons/incuba.svg";
import WristShipIcon from "@/app/assets/icons/wristship.svg";
import ObtonIcon from "@/app/assets/icons/obton.svg";

const partners = [
  { id: 1, icon: ScanGlobalIcon },
  { id: 2, icon: IncomIcon },
  { id: 3, icon: IncubaIcon },
  { id: 4, icon: WristShipIcon },
  { id: 5, icon: ObtonIcon },
];

const IconComponent = ({ icon: Icon }) => {
  return <Icon className="w-32 h-32 text-cmprimary mix-blend-hard-light fill-current" />;
};

const CyberPartners = () => {
  const duplicateSlides = [...partners, ...partners];

  return (
    <div className="w-full h-1/4 overflow-x-auto flex flex-row no-scrollbar ">
      <motion.div
        className="flex "
        animate={{
          x: ["-100%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: 50,
          repeat: Infinity,
        }}
      >
        {duplicateSlides.map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center w-fit bg-cmdark bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-origin-border "
            style={{ width: `${100 / partners.length}%` }}
          >
            <IconComponent icon={partner.icon} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CyberPartners;
