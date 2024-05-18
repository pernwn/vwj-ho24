"use client";
import React from "react";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";


export default function FormComp() {
  return (
    <Card color="transparent" shadow={false} className="text-cmwhite">
      <form className="w-80 max-w-screen-lg sm:w-96">
        <div className=" flex flex-col gap-6">
          <h6 className="text-h6 -mb-4 text-cmsecondary">Navn</h6>
          <Input
            size="lg"
            placeholder="Jens Jensen"
            className="!border-cmsecondary focus:!border-cmsecondary border-2 bg-transparent p-2"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <h6 className="text-h6 -mb-4 text-cmsecondary">Email</h6>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className="!border-cmsecondary focus:!border-cmsecondary border-2 bg-transparent p-2"
            labelProps={{
              className:
                "before:content-none after:content-none ",
            }}
          />
          <h6 className="text-h6 -mb-4 text-cmsecondary">
            Beskriv hvordan vi kan hjælpe dig
          </h6>
          <Input
            size="lg"
            placeholder="Jeg ønsker at indlede en dialog med jeres team for at diskutere vores specifikke behov og krav til IT-sikkerhed. Vores virksomhed opererer i en branche, hvor..."
            className="!border-cmsecondary focus:!border-cmsecondary border-2 bg-transparent p-2"
            labelProps={{
              className: "before:bg-cmaccent after:content-none",
            }}
            multiline
          />
        </div>
        <Button className="bg-cmaccent text-cmprimary uppercase w-full p-2 mt-4 transition-colors ease-in hover:bg-[#ED532D]´">
          start dialogen
        </Button>
      </form>
    </Card>
  );
}

            // <Typography
            //   variant="small"
            //   color="gray"
            //   className="flex items-center font-normal"
            // >
            //   I agree the
            //   <a
            //     href="#"
            //     className="font-medium transition-colors hover:text-gray-900"
            //   >
            //     &nbsp;Terms and Conditions
            //   </a>
            // </Typography>;
