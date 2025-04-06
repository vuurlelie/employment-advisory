import aboutme from "../assets/images/aboutme.png";

function Introduction() {
  return (
    <section
      id="bemutatkozas"
      className="mt-36 mb-20 py-16 bg-[#f9f9f9] shadow relative w-full"
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Flex column for mobile, grid row for md+ */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center md:gap-10">
          
          {/* === Title (always first) === */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a4032] leading-tight text-center md:text-left pb-6 md:col-span-2 md:pb-0">
            Bemutatkozás
          </h2>

          {/* === Image === */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 rounded-full overflow-hidden border-2 border-[#e7dfd4] shadow-lg">
              <img
                src={aboutme}
                alt="About me"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* === Text Content === */}
          <div className="order-3 md:order-2 mt-8 md:mt-0">
            <p className="max-w-lg mt-3 text-base lg:text-lg leading-relaxed text-[#4a4032] text-justify mx-auto md:mx-0">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p className="max-w-lg mt-3 text-base lg:text-lg leading-relaxed text-[#4a4032] text-justify mx-auto md:mx-0">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p className="max-w-lg mt-3 text-base lg:text-lg leading-relaxed text-[#4a4032] text-justify mx-auto md:mx-0">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p className="max-w-lg mt-3 text-base lg:text-lg leading-relaxed text-[#4a4032] text-justify mx-auto md:mx-0">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>

            {/* Highlighted question section */}
            <p className="mt-6 text-[#4a4032] text-center md:text-left md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-[#bfa76a] bg-opacity-30"></span>
                <span className="relative text-xl"> Kérdésed van? </span>
              </span>
              <span className="block text-md mt-2">
                Bővebb információk a{" "}
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200 text-[#bfa76a] hover:text-[#d4af37] hover:underline"
                >
                  Facebook
                </a>
                <span> oldalamon. </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
