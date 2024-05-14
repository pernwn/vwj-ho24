
import { Hero } from "./components/Hero"
import Intro from "./components/Intro";
import USP from "./ui/usp";



//Main Page - struktur og layout...
const page = () => {
  return (
    <main>
      <Hero />
      <USP />
      <Intro/>
    </main>
  );
}

export default page;
