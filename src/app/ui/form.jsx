"use client";

import React from "react";
import { Card, Input, Button } from "@material-tailwind/react";

//TODO: if form not filled, button disabled
export default function FormComp() {
  return (
    <Card shadow={false} className="text-cmwhite">
      <form className="w-80 max-w-screen-lg sm:w-96">
        <div className="flex flex-col gap-6">
          <h5 className="text-h5 -mb-4 text-cmwhite/90">Navn</h5>
          <Input
            required 
            type="text"
            name="name"
            size="lg"
            placeholder="Jens Jensen"
            className="placeholder-cmwhite/40 focus:placeholder-cmwhite/0 !border-cmsecondary/35 focus:!border-cmsecondary focus:ring-0 focus:outline-none border-2 p-2 bg-cmprimary text-[12px] lg:text-[16px]"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <h5 className="text-h5 -mb-4 text-cmwhite/90">Email</h5>
          <Input
            size="lg"
            placeholder="eksempel@email.com"
            className="placeholder-cmwhite/40 focus:placeholder-cmwhite/0 !border-cmsecondary/35  focus:!border-cmsecondary focus:ring-0 focus:outline-none border-2 p-2 bg-cmprimary text-[12px] lg:text-[16px]"
            required
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <h5 className="text-h5 -mb-4 text-cmwhite/90">
            Beskriv hvordan vi kan hjælpe dig
          </h5>
          <Input
            type="message"
            size="lg"
            placeholder="Jeg ønsker at indlede en dialog med jeres team for at diskutere vores specifikke behov og krav til IT-sikkerhed. Vores virksomhed opererer i en branche, hvor..."
            className="placeholder-cmwhite/40 focus:placeholder-cmwhite/0 !border-cmsecondary/35 focus:!border-cmsecondary focus:ring-0 focus:outline-none text-pretty border-2 bg-cmprimary p-2 pb-28 text-[12px] lg:text-[16px]"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <Button
          type="submit"
          variant="filled"
          className="bg-cmaccent text-cmprimary uppercase w-full p-3 mt-4 text-md font-medium transition-colors ease-in hover:bg-[#ED532D]"
        >
          start dialogen
        </Button>
      </form>
    </Card>
  );
}
