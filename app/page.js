



import Benefits from '@/components/benefits';
import ClientRender from '@/components/clientrender';
import Contact from '@/components/contact';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import ExplainerCard from '@/components/info';
import CircleCard from '@/components/intro';


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

