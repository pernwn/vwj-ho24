'use client'

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar1 from "../assets/backgrounds/avatar1.png";
import avatar2 from "../assets/backgrounds/avatar2.png";
import avatar3 from "../assets/backgrounds/avatar3.png";
import avatar4 from "../assets/backgrounds/avatar4.png";
import avatar5 from "../assets/backgrounds/avatar5.png";
import avatar6 from "../assets/backgrounds/avatar6.png";
import avatar7 from "../assets/backgrounds/avatar7.png";
import avatar8 from "../assets/backgrounds/avatar8.png";
import avatar9 from "../assets/backgrounds/avatar9.png";
import avatar10 from "../assets/backgrounds/avatar10.png";
import { ReviewCard } from "./cards";
import { useState } from "react";
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    text: "CyberMinds har leveret en fremragende service! Deres professionelle team var hurtige til at løse mine tekniske problemer, og de gav mig også værdifulde råd om, hvordan jeg kan forbedre min online sikkerhed.",
    name: "Anna Jensen",
    occupation: "IT Specialist",
    avatar: avatar1,
    rating: 5,
  },
  {
    id: 2,
    text: "Jeg er virkelig imponeret over den ekspertise, som CyberMinds-teamet har. De var i stand til at optimere min virksomheds hjemmeside, hvilket resulterede i en markant stigning i trafik og konverteringer. Tak CyberMinds!",
    name: "Lars Petersen",
    occupation: "Marketing Manager",
    avatar: avatar2,
    rating: 4,
  },
  {
    id: 3,
    text: "Fantastisk kundeservice fra CyberMinds! Deres supportteam var meget hjælpsomme og tålmodige, da de guidede mig gennem opsætningen af ​​mit nye IT-system. Jeg kan varmt anbefale dem til alle mine kolleger.",
    name: "Sofie Andersen",
    occupation: "Project Coordinator",
    avatar: avatar3,
    rating: 5,
  },
  {
    id: 4,
    text: "Jeg er utrolig tilfreds med CyberMinds' arbejde. De udviklede en brugerdefineret softwareløsning til min virksomhed, der overgik mine forventninger. Deres professionalisme og opmærksomhed på detaljer gjorde hele forskellen.",
    name: "Thomas Nielsen",
    occupation: "Software Developer",
    avatar: avatar4,
    rating: 4,
  },
  {
    id: 5,
    text: "CyberMinds har virkelig hjulpet mig med at beskytte min virksomhed mod cybertrusler. Deres omfattende sikkerhedsløsninger har gjort mig mere tryg ved min online tilstedeværelse. Tak for jeres fantastiske arbejde!",
    name: "Maria Kristensen",
    occupation: "Security Analyst",
    avatar: avatar5,
    rating: 4,
  },
  {
    id: 6,
    text: "Jeg er imponeret over CyberMinds' evne til at forstå mine forretningsbehov og levere skræddersyede løsninger, der passer perfekt til min virksomhed. Deres ekspertise inden for IT-konsultation er uvurderlig.",
    name: "Peter Sørensen",
    occupation: "Business Consultant",
    avatar: avatar6,
    rating: 3,
  },
  {
    id: 7,
    text: "CyberMinds er et fantastisk firma at arbejde sammen med. Deres dedikation til kundetilfredshed er tydelig i alt, hvad de gør. Jeg er meget tilfreds med resultaterne af vores samarbejde.",
    name: "Katrine Hansen",
    occupation: "Account Manager",
    avatar: avatar7,
    rating: 5,
  },
  {
    id: 8,
    text: "Jeg har haft en fantastisk oplevelse med CyberMinds. Deres hold er yderst professionelt og kyndigt. De var i stand til at løse mine tekniske problemer på kort tid og holde mig opdateret under hele processen.",
    name: "Jens Madsen",
    occupation: "Technical Support",
    avatar: avatar8,
    rating: 4,
  },
  {
    id: 9,
    text: "Jeg kan ikke takke CyberMinds nok for deres enestående service. De var hurtige til at reagere på mine henvendelser og løse mine problemer effektivt. Jeg vil helt sikkert bruge dem igen i fremtiden.",
    name: "Emma Larsen",
    occupation: "Operations Manager",
    avatar: avatar9,
    rating: 5,
  },
  {
    id: 10,
    text: "CyberMinds har virkelig været en uvurderlig ressource for min virksomhed. Deres ekspertise inden for IT-sikkerhed og teknologi har hjulpet mig med at beskytte min virksomhed mod cybertrusler og holde mine data sikre.",
    name: "Mikkel Thomsen",
    occupation: "Data Analyst",
    avatar: avatar10,
    rating: 3,
  },
];

export const Rating = ({rating}) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <FontAwesomeIcon
          icon={faStar}
          key={i}
          className={i < rating ? "text-cmaccent" : "text-cmwhite/30"}
        />
      ))}
    </div>
  );
}

export const ReviewComp = () => { 
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length)
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide -1 +reviews.length) % reviews.length)
  }


  return (
<div className="relative">
      <div
        className={`max-w-full h-auto overflow-x-auto flex flex-row pb-16 pt-12`}
      >
        <motion.div
        className="flex"
        animate = {{
          x:`-1{currentSlide * 100}%`,
          transition:{
            ease:"linear",
            duration:0.4,
          }
        }}
        >
          {reviews.map((review, index) => (
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
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {reviews.map((_, index) => (
          <div key={index}
          className={`w-2 h-2 rounded-full cursor-pointer ${index === currentSlide ? "bg-cmdark" :"bg-cmwhite/40"}`} 
          onClick={() => setCurrentSlide(index)}></div>
        ))}
      </div>
      <button className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-cmdark rounded-full w-8 h-8 text-cmwhite flex items-center justify-center"
      onClick={handlePrevSlide}>
        {"<"}
      </button>
            <button className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-cmdark rounded-full w-8 h-8 text-cmwhite flex items-center justify-center"
      onClick={handleNextSlide}>
        {">"}
      </button>
  

      
</div>
  );
}
