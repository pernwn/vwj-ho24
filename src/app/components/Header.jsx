"use client";

import Image from "next/image";
import React, { useState } from "react";
import logoWhite from "@/app/assets/icons/logo-white.svg";

import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
//TODO: lav hover states

  // const [isHovering, setIsHovering] = useState(false);
  // const hovering = () => setIsHovering(true);
  // const notHovering = () => setIsHovering(false);

  return (
    
    <div className={`flex flex-row justify-between`}>
      <Image
        src={logoWhite}
        alt="CyberMinds Logo; Color White"
        width={75}
        height={75}
      />

      <Button className=" translate-y-0 hover:-translate-y-1 active:-translate-y-2 cursor-pointer my-1 shadow-md  bg-cmaccent rounded-full border-solid border-cmaccent border-2 bg-clip-padding backdrop-filter backdrop-blur-sm hover:bg-cmprimary hover:bg-opacity-40 hover:border-cmprimary hover:text-cmwhite transition-all ease-in-out duration-300">
        <p className="mix-blend-hard-light font-medium text-lg text-cmwhite">
          <FontAwesomeIcon icon={faPhone} size="2xl" className="pr-2" />
          {"+45 1234 5678"}
        </p>
      </Button>

      {/* <Button
        onMouseEnter={hovering}
        onMouseLeave={notHovering}
        className=" translate-y-0 hover:-translate-y-1 active:-translate-y-2 cursor-pointer my-1 shadow-md  bg-cmaccent rounded-full border-solid border-cmaccent border-2 bg-clip-padding backdrop-filter backdrop-blur-sm hover:bg-cmprimary hover:bg-opacity-40 hover:border-cmprimary hover:text-cmwhite transition-all ease-in-out duration-300"
      >
        
        {isHovering ? (
          <p className="mix-blend-soft-light font-semibold text-lg text-cmwhite">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              size="2xl"
              className="pr-2"
            />
            {"+45 1234 5678"}
          </p>
        ) : (
          <p className="mix-blend-hard-light font-medium text-lg text-cmwhite">
            <FontAwesomeIcon
              icon={faPhone}
              size="2xl"
              className="pr-2"
            />
            {"+45 1234 5678"}
          </p>
        )}
      </Button> */}
    </div>
  );
};

export default Header;
