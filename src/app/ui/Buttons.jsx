"use client";

import { Button } from "@material-tailwind/react";
import React from "react";

export const FilledBtn = (props) => {
  const { title, url, icon } = props;

  return (
    <a href={url}>
      <Button className="flex items-center gap-2 text-text text-base hover:text-lg rounded-xl border-2 border-cmprimary font-normal tracking-normal hover:font-medium hover:tracking-wider cursor-pointer py-2 px-6 my-4 mx-0 bg-cmsecondary hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-out transform">
        {title} {icon}
      </Button>
    </a>
  );
};

export const OutlinedBtn = (props) => {
  const { title, url, icon } = props;

  return (
    <a href={url}>
      <Button className="flex items-center text-base hover:text-lg hover:-translate-y-1 active:translate-y-0 gap-4 cursor-pointer py-2 px-6 my-4 mx-0 text-cmprimary font-normal tracking-normal hover:font-medium hover:tracking-wider bg-text rounded-xl border-solid border-cmprimary border-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 hover:bg-cmprimary hover:bg-opacity-40 hover:text-cmwhite transition-all ease-in-out duration-300">
        {title} {icon}
      </Button>
    </a>
  );
};


// eslint-disable-next-line import/no-anonymous-default-export


//NOTE - knapper der har gradient, kan evt bruges som skeumorphism kort - den skal være nested i div eller andet med en baggrund
/*
   <div className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-br to-white via-black from-red-500 bg-size-200 hover:bg-right-bottom">  <p>Hover over me</p></div>
    
  <div className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-t to-white via-black from-red-500 bg-size-200 hover:bg-right-bottom cursor-pointer">  Hover over me</div>

*/