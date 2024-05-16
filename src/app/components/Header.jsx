"use client";

import Image from "next/image";
import React, { createContext } from "react";
import logoWhite from "@/app/assets/icons/logo-white.svg";

import { IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
//import {theme} from "/tailwind.config.js"

const Header = () => {
  return (
    <div className={`flex justify-between`}>
      <Image
        src={logoWhite}
        alt="CyberMinds Logo; Color White"
        width={75}
        height={75}
      />

      <IconButton className="hover:-translate-y-1 active:translate-y-0 cursor-pointer px-4 font-normal tracking-normal hover:font-medium bg-cmaccent rounded-full border-solid border-cmaccent border-2 bg-clip-padding backdrop-filter backdrop-blur-sm hover:bg-cmprimary hover:bg-opacity-40 hover:border-cmprimary hover:text-cmwhite transition-all ease-in-out duration-300">
        <p className="mix-blend-hard-light font-semibold text-lg text-cmwhite text-p">
          <FontAwesomeIcon icon={faPhone} size="2xl" className="pr-2" />
          {"+45 1234 5678"}
        </p>
      </IconButton>
    </div>
  );
};

export default Header;
