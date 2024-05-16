'use client'
import React, { useState } from "react";
import styles from '../style'

function Icon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}

      className={`stroke-cmaccent ${open ? "rotate-180" : ""} h-6 w-6 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}



export default function Accordion({ header, sub, body }) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
    
  };


  return (
    <div className="mb-4 rounded-lg shadow-md border border-cmdark/5 p-4">
      <div
        className={`flex items-center justify-between cursor-pointer ${open ? "bg-cmdark/5 w-full p-2 rounded-md" : ""} transition-colors `}
        onClick={handleToggle}
      >
        <h5 className={`text-h5`}>{header}</h5>
        <Icon open={open} />
      </div>
      {open && (
        <div className="py-4">
          {" "}
          <h5 className={`font-medium`}>{sub}</h5>
          <p>{body}</p>
        </div>
      )}
    </div>
  );
}
