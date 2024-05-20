"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { reviews } from "../ui/reviews";
import { ReviewCard } from "./cards";

//TODO: enten er det reviews der skal scroll, eller tilføj i hero scroll af deres samarbejdspartnere
const ReviewSlider = () => {
  const duplicateSlides = [...reviews, ...reviews];
const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`max-w-full overflow-x-auto flex flex-row pb-28 no-scrollbar`}>
      <motion.div
        className="flex"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 100,
            repeat: Infinity,
          },
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{ pointerEvents: isHovered ? "none" : "auto" }}
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
              name="Name"
              occupation="Occupation"
              review={review.text}
              rating={review.rating}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ReviewSlider;
