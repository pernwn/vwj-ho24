import React from "react";
import styles from "../style";

import { ReviewCard, SimpleCard } from "../ui/cards";
import { reviews } from "../ui/reviews";
import { FilledBtn } from "../ui/buttons";

//import SocialProof from "../ui/SocialProof";

const Para = ({ header, body }) => {
  return (
    <div className={`${styles.flexCenter} p-8 flex-col`}>
      <h2 className="text-h2 text-cmwhite">{header}</h2>
      <p className="text-p text-cmwhite/80">{body}</p>
    </div>
  );
};

const Benefits = () => {
  return (
    <section className={`bg-cmprimary ${styles.paddingY} w-full`}>
      {/* Testimonials / social proof */}
      <div className={`flex-col ${styles.flexCenter} w-full h-auto`}>
        <Para header="Header" body="Body text" />
        {/* TODO: carousel with buttons and dots - possibly with smooth transition? */}
        <div className={`max-w-full overflow-x-auto flex flex-row pb-16`}>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name="Name"
              occupation="Occupation"
              review={review.text}
              rating={review.rating}
            />
          ))}
        </div>
      </div>

      {/* Services */}
      <div className={`flex-col ${styles.flexCenter} w-full h-auto`}>
        <Para header="Header" body="Body text" />
        <div className="grid grid-cols-2 gap-x-4">
          {/* TODO: GRID */}
          <SimpleCard content="Simple Line" action="Læs mere" />
          <SimpleCard content="Simple Line" action="Læs mere" />
          <SimpleCard content="Simple Line" action="Læs mere" />
          <SimpleCard content="Simple Line" action="Læs mere" />
        </div>
        <FilledBtn title="Få et tilbud"/>
      </div>
    </section>
  );
};

export default Benefits;
