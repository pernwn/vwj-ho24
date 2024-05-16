import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import Intro from "./components/Intro";
import Testimonials from "./components/Testimonials";

//Main Page - struktur og layout...
const page = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <Testimonials/>
      <Contact />
      <Faq />
      <Footer />
    </main>
  );
};

export default page;
