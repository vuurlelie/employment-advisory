import aboutme from "../assets/images/aboutme.png";

function Introduction() {
  return (
    <>
      {/* Full-width section with top and bottom spacing + shadow */}
      <section
        id="bemutatkozas"
        className="mt-36 mb-28 py-16 bg-[#f9f9f9] shadow relative w-full"
      >
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* === Left side (Image) === */}
            <div className="relative order-2 md:order-1 flex items-center justify-center">
              <div className="w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 rounded-full overflow-hidden border-2 border-[#e7dfd4] shadow-lg">
                <img
                  src={aboutme}
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* === Right side (Text content) === */}
            <div className="order-1 md:order-2">
              <h2 className="pb-6 text-3xl md:text-4xl font-bold text-[#4a4032] leading-tight text-center md:text-left">
                Bemutatkozás
              </h2>

              {/* Paragraphs with justified alignment and adaptive width */}
              <p className="max-w-lg mt-3 text-base lg:text-lg leading-relaxed text-[#4a4032] text-justify mx-auto md:mx-0 md:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p className="max-w-lg mt-3 text-base lg:text-lg leading-relaxed text-[#4a4032] text-justify mx-auto md:mx-0 md:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p className="max-w-lg mt-3 text-base lg:text-lg leading-relaxed text-[#4a4032] text-justify mx-auto md:mx-0 md:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p className="max-w-lg mt-3 text-base lg:text-lg leading-relaxed text-[#4a4032] text-justify mx-auto md:mx-0 md:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>

              {/* Highlighted CTA section with link */}
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
    </>
  );
}

export default Introduction;