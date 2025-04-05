import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const scrollPos = window.scrollY + 200;
      const sections = Array.from(document.querySelectorAll("section[id]"));

      let current = "";
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          current = section.id;
          break;
        }
      }

      if (scrollPos < 300) {
        setActiveSection("");
        window.history.replaceState(null, "", window.location.pathname);
      } else {
        setActiveSection(current);
        window.history.replaceState(null, "", `#${current}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setIsMenuOpen(false);
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => {
            setActiveSection("");
            setIsMenuOpen(false);
            window.history.replaceState(null, "", window.location.pathname);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center focus:outline-none"
        >
          <img src={logo} alt="Logo" className="w-16 h-auto" />
        </button>

        {/* Desktop navigation */}
        <nav className="hidden sm:flex space-x-6 items-center text-sm font-semibold uppercase tracking-wide">
          {["bemutatkozas", "szolgaltatasok", "kapcsolat"].map((id) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`relative nav-link ${activeSection === id ? "active" : ""}`}
            >
              {id === "bemutatkozas"
                ? "Bemutatkozás"
                : id === "szolgaltatasok"
                ? "Szolgáltatások"
                : "Kapcsolat"}
            </button>
          ))}
        </nav>

        {/* Hamburger menu button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#4a4032] hover:text-[#bfa76a] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-md py-4 px-6 space-y-4">
          {["bemutatkozas", "szolgaltatasok", "kapcsolat"].map((id) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="block w-full text-left focus:outline-none"
            >
              <span
                className={`inline-block font-bold uppercase tracking-wide transition-all duration-200 ${
                  activeSection === id
                    ? "text-[#bfa76a] border-b-2 border-[#bfa76a]"
                    : "text-[#4a4032] hover:text-[#bfa76a]"
                }`}
              >
                {id === "bemutatkozas"
                  ? "Bemutatkozás"
                  : id === "szolgaltatasok"
                  ? "Szolgáltatások"
                  : "Kapcsolat"}
              </span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;