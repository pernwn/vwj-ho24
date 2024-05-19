"use client";

import React from "react";
import { Card, Input, Button } from "@material-tailwind/react";

export default function FormComp() {
  return (
    <Card shadow={false} className="text-cmwhite">
      <form className="w-80 max-w-screen-lg sm:w-96">
        <div className="flex flex-col gap-6">
          <h6 className="text-h6 -mb-4 text-cmsecondary">Navn</h6>
          <Input
            size="lg"
            placeholder="Jens Jensen"
            className="!border-cmsecondary focus:!border-cmsecondary border-2 p-2 bg-cmprimary text-[12px] lg:text-[16px]"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <h6 className="text-h6 -mb-4 text-cmsecondary">Email</h6>
          <Input
            size="lg"
            placeholder="eksempel@email.com"
            className="!border-cmsecondary focus:!border-cmsecondary border-2 p-2 bg-cmprimary text-[12px] lg:text-[16px]"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <h6 className="text-h6 -mb-4 text-cmsecondary">
            Beskriv hvordan vi kan hjælpe dig
          </h6>
          <Input
            size="lg"
            placeholder="Jeg ønsker at indlede en dialog med jeres team for at diskutere vores specifikke behov og krav til IT-sikkerhed. Vores virksomhed opererer i en branche, hvor..."
            className="!border-cmsecondary focus:!border-cmsecondary text-pretty border-2 p-2 bg-cmprimary p-2 pb-28 text-[12px] lg:text-[16px]"
            labelProps={{
              className: "before:bg-none after:content-none",
            }}
          />
        </div>

        <Button className="bg-cmaccent text-cmprimary uppercase w-full p-3 mt-4 text-md font-normal transition-colors ease-in hover:bg-[#ED532D]">
          start dialogen
        </Button>
      </form>
    </Card>
  );
}
