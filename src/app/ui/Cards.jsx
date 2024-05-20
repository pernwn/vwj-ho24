import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import { Divider } from "@mui/material";


import styles from "../style"


export const ReviewCard = ({ name, occupation, review }) => {
  return (
    <Card className="mx-2 max-w-[325px] min-h-[425px] rounded-lg">
      <CardContent>
        <div className="flex flex-row pb-4 justify-items-center">
          <div className="w-1/2">{/* TODO: User Image */} UserImg</div>
          <div className="w-1/2">
            <h5 className="text-h5 mt-3 font-medium">{name}</h5>
            <h6 className="text-h6 font-normal">{occupation}</h6>
            {/* TODO: Rating */}
          </div>
        </div>
        <Divider />
        <div className="py-4 overflow-y-auto">
          {" "}
          <p className="text-p">{review}</p>
        </div>
      </CardContent>
    </Card>
  );
};


export const SimpleCard = ({content, action}) => {
    return (
      <Card className={`w-[275px] ${styles.flexCenter} flex-col p-8 mb-4`}>
          <h4 className="text-h5">{content}</h4>
      </Card>
    );
};


