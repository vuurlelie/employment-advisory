import { motion } from "framer-motion";
import hero from "../assets/images/hero.jpg";

function Hero() {
  return (
    <div className="container">
      <div className="relative pt-32 max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 lg:gap-20">

        {/* --- Text section with animation --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 md:pl-10"
        >
          {/* Motto Block */}
          <div className="relative text-center max-w-xl mx-auto md:mx-0">
            <p className="text-[#4a4032] text-xl sm:text-2xl font-medium leading-relaxed px-6 py-6">
              Munkával építjük a jövőnket – én segítek, hogy ezt a jövőt magabiztosan építhesd.
            </p>
            <div className="h-1 w-24 bg-[#bfa76a] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Facebook button */}
          <div className="flex justify-center mt-8">
            <a
              href="https://www.facebook.com/profile.php?id=61574846083614"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit bg-[#6e5e4e] text-lg text-white font-semibold tracking-wide rounded-full px-6 py-3 shadow-md hover:bg-[#4A4032] transition text-center"
            >
              <i className="fab fa-facebook-f mr-2"></i> Facebook
            </a>
          </div>
        </motion.div>

        {/* --- Image section with animation --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-8"
        >
          <img
            src={hero}
            alt="Hero image"
            className="border:white p-2 w-60 sm:w-72 md:w-80 lg:w-80 rounded shadow-md"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
