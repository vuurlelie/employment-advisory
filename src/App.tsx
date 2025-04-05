import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ScrollProgressBar from "./components/ScrollProgressBar";
import BackToTopButton from "./components/BackToTopButton";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ScrollProgressBar />
      <BackToTopButton />
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;