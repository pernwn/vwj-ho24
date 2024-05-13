
import FaqFooter from "./components/faqFooter";
import Header from "./components/header";

import "./globals.css";


import { Josefin_Sans, Lato } from "next/font/google";


const josefin_Sans = Josefin_Sans({
  weight: "variable",
  subsets: ["latin"]
});

const lato = Lato({
  weight: "300",
  subsets: ["latin"],
});

export const metadata = {
  title: "CyberMinds Revised",
  description: "Victoria W Johansen - Multimediedesign, Hovedopgave 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${josefin_Sans.className} mx-auto max-w-[1920px] overflow-x-hidden ${lato.className} mx-auto max-w-[1920px] overflow-x-hidden`}
      >
        <Header />
        <main className="flex-grow h-screen">{children}</main>
        <FaqFooter/>
      </body>
    </html>
  );
}
