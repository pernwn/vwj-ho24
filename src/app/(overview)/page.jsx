import React, { Suspense } from 'react';
import { HeroSkeleton, IntroSkeleton } from '../ui/skeleton';
import styles from '../style';
import Hero from '../components/hero';
import Intro from "./components/intro";
import { Metadata } from 'next';


export const metadata = (Metadata) = {
  title: "Loading...",
};

export default async function Page() {
  return (
    <main className={`${styles.padding}`}>
      <h1 className='text-h1 mb-4'>Multimediedesign Hovedopgave 2024 | Victoria W. Johansen </h1>
      <h2 className='text-h2 mb-4'>CyberMinds Landingpage</h2>
      <div className='flex flex-col'>
        <Suspense fallback={<HeroSkeleton/>}>
          <Hero/>
        </Suspense>

        <Suspense fallback={<IntroSkeleton/>}>
          <Intro />
        </Suspense>
      </div>

    </main>
  )


}

