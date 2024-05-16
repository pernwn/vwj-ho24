"use client";
import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function FormComp() {
  return (
    <Card color="transparent" shadow={false} className="text-cmwhite">
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <h6 className="text-h6 -mb-3 text-cmsecondary">Navn</h6>
          <Input
            size="lg"
            placeholder="Jens Jensen"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <h6 className="text-h6 -mb-3 text-cmsecondary">Email</h6>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <h6 className="text-h6 -mb-3 text-cmsecondary">
            Beskriv hvordan vi kan hjælpe dig
          </h6>
          <Input
            size="lg"
            placeholder="Jeg ønsker at indlede en dialog med jeres team for at diskutere vores specifikke behov og krav til IT-sikkerhed. Vores virksomhed opererer i en branche, hvor..."
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}
