import React from "react";
import { FilledBtn, IconBtn, OutlinedBtn } from "../ui/Buttons";
import styles from "../style";
import { layout } from "../style";
import Header from "./Header";



export const Hero = () => {
  return (
    <section className={`bg-no-repeat bg-center bg-heroimg h-full bg-cover`}>
      <div
        className={`${styles.padding} h-full w-full bg-cmdark/60 bg-clip-padding backdrop-filter backdrop-blur-md`}
      >
        <Header />
        <div className={`w-2/3 space-y-4 ${styles.paddingY}`}>
          <h1 className={`${styles.h1} text-cmwhite`}>
            Cybersikkerhed til <i>dine</i> behov
          </h1>
          <h2 className="text-cmwhite text-2xl leading-[34px]">
            CyberMinds er et IT-sikkerheds freelancehus, hvor vi stiller
            Danmarks bedste IT-sikkerhedseksperter til rådighed for dig.
          </h2>
        </div>

        {/* <div>
          <FilledBtn title="Knap" />
          <OutlinedBtn title="Knap" />
          <IconBtn
            icon={
              <svg
                width="52"
                height="34"
                viewBox="0 0 52 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50002 28.1C7.30002 28.4 7.00002 28.5 6.60002 28.5C5.90002 28.5 5.30002 28 5.20002 27.3C4.80002 21.8 6.60002 16.5 10.2 12.3C13.8 8.1 18.8 5.6 24.3 5.2C25.9 5.1 27.5 5.2 29.1 5.4C30.7 5.7 32.2 6.1 33.7 6.7C34.1 6.9 34.5 7 34.8 7.2C35.1 7.4 35.5 7.6 35.9 7.8C36.2 8 36.4 8.2 36.5 8.6C36.6 8.9 36.5 9.3 36.4 9.6C36.2 9.9 36 10.1 35.6 10.2C35.3 10.3 34.9 10.2 34.6 10.1C34.3 9.9 34 9.8 33.6 9.6C33.2 9.4 32.9 9.3 32.6 9.1C31.3 8.6 30 8.2 28.6 7.9C27.6 7.7 26.7 7.7 25.7 7.7C25.3 7.7 24.8 7.7 24.4 7.7C19.6 8 15.2 10.3 12 13.9C9.00002 17.7 7.40002 22.3 7.80002 27.1C7.80002 27.5 7.70002 27.8 7.50002 28.1Z"
                  fill="#003CEE"
                />
                <path
                  d="M33 20.3C33.3 20.1 33.6 20.1 34 20.2C34.3 20.3 34.6 20.5 34.8 20.8C35.2 21.4 35.5 22.1 35.7 22.9C35.9 23.6 36.1 24.4 36.1 25.1C36.2 26.9 37 28.4 38.3 29.6C39.6 30.7 41.3 31.3 43.1 31.2C44.8 31.1 46.4 30.3 47.6 29C48.7 27.7 49.3 26 49.2 24.2C48.8 18 45.9 12.3 41.2 8.3C36.5 4.2 30.5 2.2 24.3 2.7C22.3 2.8 20.4 3.2 18.5 3.9C16.6 4.5 14.9 5.4 13.2 6.5C12.6 6.9 11.8 6.7 11.5 6.1C11.1 5.5 11.3 4.7 11.9 4.4C13.7 3.2 15.7 2.2 17.8 1.5C19.9 0.8 22 0.4 24.2 0.2C24.6 0 25.3 0 25.9 0C32.1 0 38 2.2 42.7 6.3C47.9 10.8 51.1 17.1 51.6 24C51.8 26.4 51 28.8 49.4 30.6C47.8 32.4 45.6 33.5 43.2 33.7C40.8 33.9 38.4 33.1 36.6 31.5C34.8 29.9 33.7 27.7 33.5 25.3C33.5 24.7 33.4 24.1 33.2 23.6C33 23.1 32.8 22.5 32.5 22C32.3 21.7 32.3 21.4 32.4 21C32.5 20.8 32.7 20.5 33 20.3Z"
                  fill="#003CEE"
                />
                <path
                  d="M1.30001 17.6C2.40001 14.3 4.10001 11.4 6.40001 8.8C6.70002 8.5 7.00001 8.2 7.30001 7.9C7.60002 7.6 7.90001 7.3 8.10001 7C8.30001 6.8 8.70001 6.6 9.00001 6.7C9.30001 6.7 9.70001 6.9 9.90001 7.1C10.1 7.3 10.3 7.7 10.2 8C10.2 8.3 10 8.7 9.80001 8.9C9.60001 9.1 9.30001 9.4 9.10001 9.6C8.90001 9.8 8.60001 10.1 8.40001 10.4C6.30001 12.7 4.80001 15.4 3.80001 18.4C2.80001 21.3 2.40001 24.4 2.60001 27.5C2.70001 28.6 3.20001 29.5 3.90001 30.2C4.70001 30.9 5.70002 31.2 6.80001 31.1C7.80001 31 8.80001 30.5 9.50001 29.8C10.2 29 10.5 28 10.4 26.9C10.3 25.9 10.4 24.8 10.5 23.8C10.6 22.8 10.9 21.7 11.2 20.7C11.4 20.2 11.9 19.9 12.4 19.9C12.5 19.9 12.7 19.9 12.8 20C13.1 20.1 13.4 20.3 13.5 20.6C13.6 20.9 13.7 21.2 13.6 21.6C13.3 22.4 13.1 23.3 13 24.2C12.9 25.1 12.9 25.9 12.9 26.8C13 28.5 12.5 30.2 11.3 31.5C10.2 32.8 8.60001 33.6 6.90001 33.7C5.20002 33.8 3.50001 33.3 2.20001 32.1C1.00001 31 0.200015 29.4 0.100015 27.7C-0.199985 24.2 0.300015 20.8 1.30001 17.6Z"
                  fill="#003CEE"
                />
                <path
                  d="M13.1 17.8C13 17.5 13.1 17.1 13.3 16.9C14.6 15.1 16.3 13.5 18.3 12.5C20.3 11.4 22.4 10.8 24.7 10.6C28.8 10.3 32.8 11.6 35.9 14.3C39 17 40.9 20.7 41.2 24.9C41.2 25.3 41.4 25.6 41.7 25.8C42 26 42.3 26.2 42.7 26.1C43.1 26.1 43.4 25.9 43.6 25.6C43.8 25.3 43.9 25 43.9 24.6C43.7 22.3 43.1 20 42.1 18C41.1 15.9 39.7 14.1 38 12.5C37.5 12 37.4 11.2 37.9 10.7C38.1 10.4 38.5 10.3 38.8 10.3C39.1 10.3 39.4 10.4 39.6 10.6C41.6 12.4 43.2 14.5 44.3 16.9C45.5 19.3 46.1 21.8 46.3 24.5C46.4 25.6 46 26.5 45.4 27.3C44.7 28.1 43.8 28.6 42.8 28.6C41.8 28.7 40.8 28.3 40 27.7C39.2 27 38.8 26.1 38.7 25.1C38.4 21.6 36.9 18.5 34.3 16.2C31.7 13.9 28.4 12.8 24.9 13.1C23 13.2 21.2 13.8 19.6 14.7C18 15.6 16.5 16.9 15.4 18.4C15 19 14.2 19.1 13.6 18.7C13.3 18.4 13.2 18.1 13.1 17.8Z"
                  fill="#003CEE"
                />
                <path
                  d="M25.1 15.6C26.1 15.5 27.2 15.6 28.2 15.9C29.2 16.1 30.2 16.5 31.1 17.1C31.7 17.5 31.9 18.2 31.5 18.8C31.1 19.4 30.4 19.6 29.8 19.2C29.1 18.8 28.4 18.5 27.6 18.3C26.8 18.1 26 18.1 25.3 18.1C23.3 18.2 21.4 19.2 20 20.7C18.7 22.3 18 24.2 18.1 26.3C18.1 26.7 18.2 27 18.2 27.3C18.3 27.6 18.4 27.9 18.5 28.3C18.6 28.6 18.9 28.9 19.2 29.1C19.5 29.3 19.9 29.3 20.2 29.2C20.5 29.1 20.8 28.8 21 28.5C21.2 28.2 21.2 27.8 21.1 27.5C21 27.3 21 27.1 20.9 26.9C20.9 26.7 20.8 26.4 20.8 26.3C20.7 25 21.1 23.7 22 22.7C22.9 21.7 24.1 21.1 25.4 21C26.7 20.9 28 21.3 29 22.2C29.9 23 30.5 24.1 30.7 25.3C30.7 25.4 30.7 25.5 30.7 25.6C30.7 26.3 30.1 26.9 29.4 26.9C28.7 26.9 28.2 26.4 28.1 25.7C28 25.1 27.7 24.5 27.3 24.2C26.8 23.8 26.3 23.6 25.7 23.6C25.6 23.6 25.6 23.6 25.5 23.6C24.8 23.6 24.2 23.9 23.8 24.4C23.4 24.9 23.2 25.5 23.2 26.2C23.2 26.3 23.2 26.4 23.2 26.5C23.2 26.6 23.2 26.7 23.3 26.8C23.6 27.8 23.6 28.8 23.1 29.8C22.6 30.7 21.9 31.4 20.9 31.8C19.9 32.1 18.9 32.1 17.9 31.6C17 31.2 16.3 30.4 15.9 29.4C15.8 29 15.6 28.5 15.5 28.1C15.4 27.6 15.3 27.2 15.3 26.8C15.1 24.1 16 21.4 17.8 19.4C19.9 17.1 22.4 15.8 25.1 15.6Z"
                  fill="#003CEE"
                />
              </svg>
            }
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
