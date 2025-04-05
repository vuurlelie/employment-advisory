import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";

/**
 * Responsive and animated sticky navigation bar with mobile hamburger menu.
 */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);               // Tracks scroll position
  const [activeSection, setActiveSection] = useState("");        // Current section ID
  const [isMenuOpen, setIsMenuOpen] = useState(false);           // Mobile menu toggle

  // Scroll detection & active section highlight
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

  // Smooth scroll and state update
  const handleNavClick = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setIsMenuOpen(false); // close mobile menu
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
        {/* Logo */}
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
          {[
            { id: "bemutatkozas", label: "Bemutatkozás" },
            { id: "szolgaltatasok", label: "Szolgáltatások" },
            { id: "kapcsolat", label: "Kapcsolat" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative nav-link ${
                activeSection === link.id ? "active" : ""
              }`}
            >
              {link.label}
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
        <div className="sm:hidden bg-white shadow-md py-4 px-6 space-y-4 text-sm font-semibold uppercase tracking-wide">
          {[
            { id: "bemutatkozas", label: "Bemutatkozás" },
            { id: "szolgaltatasok", label: "Szolgáltatások" },
            { id: "kapcsolat", label: "Kapcsolat" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left nav-link ${
                activeSection === link.id ? "active" : ""
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;