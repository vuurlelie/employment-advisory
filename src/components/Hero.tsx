import { motion } from "framer-motion";
import hero from "../assets/images/hero.jpg";

function Hero() {
  return (
    <div className="container">
      <div className="relative pt-36 overflow-hidden max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 lg:gap-20">

        {/* === TEXT SECTION WITH ANIMATION === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 md:pl-10"
        >
          {/* Gradient title text */}
          <h1 className="text-center md:text-left text-3xl sm:text-5xl font-extrabold mb-6 pb-2 text-[#bfa76a] drop-shadow-md">
            Munkaügyi tanácsadás
          </h1>

          {/* Description paragraph */}
          <p className="text-[#4a4032] text-justify font-bold text-base sm:text-lg mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
            Munkaügyi és munkajogi megoldások cégek és magánszemélyek részére a munka világában történő könnyebb eligazodás érdekében.
          </p>

          {/* Facebook button */}
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit bg-[#6e5e4e] text-white font-semibold tracking-wide rounded-full px-6 py-3 shadow hover:bg-[#4A4032] transition text-center"
            >
              <i className="fab fa-facebook-f mr-2"></i> Facebook
            </a>
          </div>
        </motion.div>

        {/* === IMAGE SECTION WITH ANIMATION === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-8"
        >
          <img
            src={hero}
            alt="Hero image"
            className="img-clip-overlay w-60 sm:w-72 md:w-80 lg:w-96 rounded shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;