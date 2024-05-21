"use client";

import React from "react";
import { motion } from "framer-motion";

//TODO: samarbejds partnere slider i hero
const cmPartners = () => {
  const duplicateSlides = [...reviews, ...reviews];

  return (
    <div
      className={`max-w-full h-auto overflow-x-auto flex flex-row pb-16 pt-12 no-scrollbar`}
    >
      <motion.div
        className="flex"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 200,
            repeat: Infinity,
          },
        }}
      >
        {/* Render duplicated slides */}
        {duplicateSlides.map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            // style={{ width: `${100/reviews.length}%` }}
          >
            <ReviewCard
              key={review.id}
              name={review.name}
              occupation={review.occupation}
              review={review.text}
              stars={review.rating}
              avatarImg={review.avatar}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default cmPartners;
