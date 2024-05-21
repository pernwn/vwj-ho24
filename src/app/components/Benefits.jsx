import React from "react";
import styles from "../style";
import ReviewSlider from "../ui/basicSlider";
import { ReviewCard, SimpleCard } from "../ui/cards";
import { FilledBtn } from "../ui/buttons";
import { ReviewComp, reviews } from "../ui/reviews";


//import SocialProof from "../ui/SocialProof";

const Para = ({ header, body }) => {
  return (
    <div className={`${styles.flexCenter} text-center flex-col w-2/3 pb-8`}>
      <h2 className="text-h2 text-cmwhite">{header}</h2>
      <p className="text-p text-cmwhite/80">{body}</p>
    </div>
  );
};

const Benefits = () => {
  return (
    <section
      className={`bg-cmprimary ${styles.paddingY} w-full rounded-tl-[12em] rounded-br-[12em]`}
    >
      {/* Testimonials / social proof */}
      <div className={`flex-col ${styles.flexCenter} w-full pb-4 pt-8 h-auto`}>
        <Para
          header="Hvorfor vælge CyberMinds?"
          body="Vi specialiserer os i at forbinde virksomheder med de bedste IT-sikkerhedsfreelancere, der imødekommer dine behov. Med vores omfattende netværk sikrer vi adgang til de mest kompetente eksperter."
        />
        {/* TODO: carousel with buttons and dots - possibly with smooth transition? */}
        <ReviewComp/>
      </div>

      {/* Services */}
      <div className={`flex-col ${styles.flexCenter} pb-8 pt-4 w-full h-auto`}>
        <Para
          header="Skræddersyet IT-sikkerhedseksperthjælp"
          body="Vi specialiserer os i at forbinde virksomheder med de bedste IT-sikkerhedsfreelancere, der imødekommer dine behov. Med vores omfattende netværk sikrer vi adgang til de mest kompetente eksperter."
        />
        <div className="grid grid-cols-2 gap-x-4">
          {/* TODO: GRID */}
          <SimpleCard content="Simple Line" action="Læs mere" />
          <SimpleCard content="Simple Line" action="Læs mere" />
          <SimpleCard content="Simple Line" action="Læs mere" />
          <SimpleCard content="Simple Line" action="Læs mere" />
        </div>
        <FilledBtn title="Book en samtale" />
      </div>
    </section>
  );
};

export default Benefits;
