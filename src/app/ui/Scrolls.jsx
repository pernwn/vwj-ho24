
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  //Tooltip,
} from "@material-tailwind/react";
import { Divider } from "@mui/material";

const CardDefault = ({ name, occupation, review }) => {
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
        <h5 className="text-h5 mt-3 font-normal">{name}</h5>
        <h6>{occupation}</h6>
        {/* Rating */}
      </div>
      <Divider />
    </CardHeader>
    <CardBody>
      {" "}
      <div>
        <p className="text-p">{review}</p>
      </div>
    </CardBody>
    <CardFooter className="flex items-center justify-between">
      <p className="text-thin font-normal">CyberMinds</p>
    </CardFooter>
  </Card>;
};

const reviews = [
  {
    id: 1,
    text: "Pirate ipsum arrgh bounty warp jack. Sink aye pounders schooner road sails arr clipper crow's.",
  },

  {
    id: 2,
    text: "Corsair rat tea topgallant corsair. Crack chantey hang overhaul shiver grog sloop anchor to. Crow's cup boatswain timbers seas poop.",
  },

  {
    id: 3,
    text: "Dataindsamling: Indsamle relevante data fra brugerhenvendelser for at forbedre forretningsprocesser, identificere trends og behov samt målrette fremtidige markedsføringsstrategier.",
  },

  {
    id: 4,
    text: "Klarhed: Sikre tydelige instruktioner og vejledninger, så brugerne ved præcis, hvordan de skal kontakte virksomheden og hvilke oplysninger der kræves.",
  },

  {
    id: 5,
    text: "Konvertering: Øge konverteringsfrekvensen ved at sikre, at brugerne nemt kan komme i kontakt med CyberMinds og få svar på deres spørgsmål eller opfyldt deres behov.",
  },
];

export default function SocialProof() {
  return (
    <>
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          name="Name"
          occupation="Occupation"
          review={review.text}
        />
      ))}
    </>
  );
}
