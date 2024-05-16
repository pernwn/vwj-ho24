import React from 'react';
import styles from '../style'
import { CardScroll } from '../ui/Scrolls';



export default function Testimonials() {
  return (
    <div className={`${styles.padding} bg-cmprimary w-full h-auto text-cmwhite py-16`}>
          <h2 className='text-h2 text-cmwhite'>Header</h2>
          <p className='text-p text-cmwhite/80'>Body text</p>
          
          <CardScroll/>
    </div>
  );
}


 