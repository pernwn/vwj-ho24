"use client";

import Image from "next/image";
import React, { createContext } from "react";
import logoWhite from "@/app/assets/icons/logo-white.svg";

import { IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {theme} from "/tailwind.config.js"

const Header = () => {

  const dropShadow = {
    dropShadow: "2px 2px 4px #000000",


  };

  return (
    <div className={`flex justify-between`}>
      <Image
        src={logoWhite}
        alt="CyberMinds Logo; Color White"
        height={75}
        width={75}
      />

      <IconButton className="text-base hover:-translate-y-1 active:translate-y-0 cursor-pointer px-4  font-normal tracking-normal hover:font-medium bg-cmaccent rounded-full border-solid border-cmaccent border-2 bg-clip-padding backdrop-filter backdrop-blur-sm hover:bg-cmprimary hover:bg-opacity-40 hover:border-cmprimary hover:text-cmwhite transition-all ease-in-out duration-300">
        <p className="mix-blend-hard-light font-bold text-cmsecondary ">
          <FontAwesomeIcon
            icon={faPhone}
            size="2xl"
            className="pr-2"
          />

          {"+45 1234 5678"}
        </p>
      </IconButton>
    </div>
  );
};

export default Header;
