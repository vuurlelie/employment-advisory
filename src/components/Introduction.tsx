import aboutme from "../assets/images/aboutme.jpg";

function Introduction() {
  return (
    <section
      id="bemutatkozas"
      className="mt-36 mb-20 py-12 bg-[#f9f9f9] shadow relative w-full"
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Flex column for mobile, grid row for md+ */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center md:gap-10">
          
          {/* === Title (always first) === */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a4032] leading-tight text-center md:text-left pb-6 md:col-span-2 md:pb-0 drop-shadow-md">
            Bemutatkozás
          </h2>

          {/* === Image === */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 rounded-full overflow-hidden border-2 border-[#e7dfd4] shadow-lg animate-fade-in-up">
              <img
                src={aboutme}
                alt="About me"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* === Text Content === */}
          <div className="order-3 md:order-2 mt-8 lg:pr-10 md:mt-0">
            <p className="max-w-lg mt-3 text-base lg:text-lg leading-relaxed text-[#4a4032] text-justify mx-auto md:mx-0">
              Sike Enikő HR és munkajogi szakokleveles tanácsadó vagyok. Több éves HR területen szerzett tapasztalattal hiszem, hogy a munka nem csupán megélhetés, hanem az önmegvalósítás és a jövőépítés egyik legfontosabb eszköze. HR és munkaügyi szakemberként abban támogathatlak, hogy magabiztosan, tudatosan és jogilag is megalapozottan hozhass döntéseket a karrierutad során.
            </p>
            <p className="max-w-lg mt-3 text-base lg:text-lg leading-relaxed text-[#4a4032] text-justify mx-auto md:mx-0">
              Legyen szó álláskeresésről, karrierváltásról, munkahelyi nehézségekről vagy munkajogi kérdésekről, célom, hogy személyre szabott, gyakorlatias és őszinte tanácsokat adjak. Melletted állok, ha elbizonytalanodtál, változás előtt állsz, vagy egyszerűen csak szeretnél tisztábban látni a lehetőségeid között.
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
                  href="https://www.facebook.com/profile.php?id=61574846083614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bfa76a] hover:underline hover:text-[#d4af37] transition-colors duration-200"
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