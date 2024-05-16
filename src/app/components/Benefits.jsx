import React from "react";
import styles from "../style";
import ReviewCard from "../ui/Cards";
import Testimonials from "../ui/Cards";

//import SocialProof from "../ui/SocialProof";


const Benefits = () => {
  return (
    <section className={`${styles.flexCenter} bg-cmprimary ${styles.padding} py-16 w-full`}>
      <div
        className={`w-full h-auto`}
      >
        <h2 className="text-h2 text-cmwhite">Header</h2>
        <p className="text-p text-cmwhite/80">Body text</p>
          </div>
          
<Testimonials/> 
          
   
    </section>
  );
}

export default Benefits;

