import React from 'react'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  //Tooltip,
} from "@material-tailwind/react";
import { Divider } from "@mui/material";

const CardDefault = () => {
  <Card className="max-w-[24rem] overflow-hidden">
    <CardHeader
      floated={false}
      shadow={false}
      color="transparent"
      className="m-0 rounded-none"
    >
      <Avatar
        size="sm"
        variant="circular"
        alt="natali craig"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
        className="border-2 border-white hover:z-10"
      />
      <div>
        {" "}
        <h5 className="text-h5 mt-3 font-normal">Name</h5>
        <h6>Occupation</h6>
        {/* Rating */}
      </div>
      <Divider />
    </CardHeader>
    <CardBody>
      {" "}
      <div>
        <p className="text-p">Review text</p>
      </div>
    </CardBody>
    <CardFooter className="flex items-center justify-between">
      <p className="text-thin font-normal">CyberMinds</p>
    </CardFooter>
  </Card>;
};
export default function SocialProof() {
  return (
    <>
      <CardDefault/>
    </>
  )
}