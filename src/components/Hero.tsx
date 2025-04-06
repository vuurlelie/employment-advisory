import hero from "../assets/images/hero.jpg";

function Hero() {
  return (
    <div className="container">
      <div className="relative pt-36 overflow-hidden max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-20">
        
        {/* === TEXT SECTION === */}
        <div className="w-full md:w-1/2 md:pl-10">
          <h1 className="text-center md:text-left text-3xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-[#BFA76A] drop-shadow-md">
            Munkaügyi tanácsadás
          </h1>

          <p className="text-[#4a4032] text-justify font-bold text-base sm:text-lg mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
            Munkaügyi és munkajogi megoldások cégek és magánszemélyek részére a munka világában történő könnyebb eligazodás érdekében.
          </p>

          {/* Facebook button - always centered, fixed width */}
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit bg-[#6e5e4e] text-white font-semibold rounded-full px-6 py-3 shadow hover:bg-[#4A4032] transition text-center"
            >
              <i className="fab fa-facebook-f mr-2"></i> Facebook
            </a>
          </div>
        </div>

        {/* === IMAGE SECTION === */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-8">
          <img
            src={hero}
            alt="Hero image"
            className="img-clip-overlay w-60 sm:w-72 md:w-80 lg:w-96 rounded shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;