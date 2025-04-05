import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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
    setActiveSection(id);
    window.history.replaceState(null, "", `#${id}`);
    setMenuOpen(false); // close menu on mobile
  };

  return (
    <div className="container">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow py-2" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <button
            onClick={() => {
              setActiveSection("");
              window.history.replaceState(null, "", window.location.pathname);
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMenuOpen(false);
            }}
            className="flex justify-center items-center flex-shrink-0 focus:outline-none"
            aria-label="Scroll to top"
          >
            <img src={logo} alt="Logo" className="w-16 h-auto" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden sm:flex flex-1 justify-end space-x-6 items-center text-sm font-semibold uppercase tracking-wide nav-header">
            {["bemutatkozas", "szolgaltatasok", "kapcsolat"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => handleNavClick(id)}
                className={`nav-link ${activeSection === id ? "active" : ""}`}
              >
                {id === "bemutatkozas"
                  ? "Bemutatkozás"
                  : id === "szolgaltatasok"
                  ? "Szolgáltatások"
                  : "Kapcsolat"}
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden focus:outline-none text-[#4a4032]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="sm:hidden bg-white shadow-md mt-2 px-4 pb-4 text-sm font-semibold uppercase tracking-wide">
            {["bemutatkozas", "szolgaltatasok", "kapcsolat"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => handleNavClick(id)}
                className={`block px-4 py-2 rounded text-[#4a4032] hover:text-[#bfa76a] ${
                  activeSection === id ? "text-[#bfa76a]" : ""
                }`}
              >
                {id === "bemutatkozas"
                  ? "Bemutatkozás"
                  : id === "szolgaltatasok"
                  ? "Szolgáltatások"
                  : "Kapcsolat"}
              </a>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;