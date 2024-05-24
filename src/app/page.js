

import ClientRender from "./components/clientrender";
import CircleCard from "./components/intro";
import ExplainerCard from "./components/info";
import Contact from "./components/contact";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Hero from './components/hero';
import Benefits from './components/benefits';


export default function Page() {
  return (
    <ClientRender>
      <main className="flex-grow">
        <Hero />
        <CircleCard />
        <Benefits />
        <ExplainerCard />
        <Contact />
        <Faq />
        <Footer />
      </main>
</ClientRender>
  );
};

