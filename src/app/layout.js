
import FaqFooter from "./components/faqFooter";
import Header from "./components/header";

import "./globals.css";


import { Josefin_Sans, Lato } from 'next/font/google';


const josefin_Sans = Josefin_Sans({
  weight: "variable",
  subsets: ["latin"],
  style: ['normal', 'italic'],
  variable:"--font-josefin"
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable:"--font-lato"
});

export const metadata = {
  title: "CyberMinds Revised",
  description: "Victoria W Johansen - Multimediedesign, Hovedopgave 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-cmwhite">
      <body
       className={`${josefin_Sans.variable} ${lato.variable}`}
      >
        <Header />
        <main className="flex-grow h-screen">{children}</main>
        <FaqFooter/>
      </body>
    </html>
  );
}
