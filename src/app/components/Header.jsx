"use client";

import Image from "next/image";
import React, { createContext } from "react";
import logoWhite from "@/app/assets/icons/logo-white.svg";

import { IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className={`flex justify-between`}>
      <Image
        src={logoWhite}
        alt="CyberMinds Logo; Color White"
        height={75}
        width={75}
      />

      <IconButton className="text-base hover:-translate-y-1 active:translate-y-0 gap-8 cursor-pointer py-2 px-6 my-4 mx-0 text-cmsecondary mix-blend-hard-light font-normal tracking-normal hover:font-medium bg-cmaccent rounded-xl border-solid border-cmaccent border-2 bg-clip-padding backdrop-filter backdrop-blur-sm hover:bg-cmprimary hover:bg-opacity-40 hover:text-cmwhite transition-all ease-in-out duration-300">
        <FontAwesomeIcon icon={faPhone} size="xl" /> +45 1234 5678
      </IconButton>
    </div>
  );
};

export default Header;
