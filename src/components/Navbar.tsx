import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

/**
 * The sticky top navigation bar with smooth scroll,
 * active section highlighting and responsive layout.
 */
function Navbar() {
  const [scrolled, setScrolled] = useState(false); // Track whether user has scrolled
  const [activeSection, setActiveSection] = useState(""); // ID of the currently active section

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPos = window.scrollY + 200; // Offset for fixed navbar
      const sections = Array.from(document.querySelectorAll("section[id]"));

      let current = "";

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        // Check if the current scroll position is within this section
        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          current = section.id;
          break;
        }
      }

      // Update URL and active state
      if (scrollPos < 300) {
        setActiveSection("");
        window.history.replaceState(null, "", window.location.pathname);
      } else {
        setActiveSection(current);
        window.history.replaceState(null, "", `#${current}`);
      }
    };

    // Attach and trigger on mount
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="container">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow py-2" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6">
          {/* Logo (clicking scrolls to top) */}
          <button
            onClick={() => {
              setActiveSection("");
              window.history.replaceState(null, "", window.location.pathname);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex justify-center items-center flex-shrink-0 hidden sm:flex focus:outline-none"
            aria-label="Scroll to top"
          >
            <img src={logo} alt="Logo" className="w-16 h-auto" />
          </button>

          {/* Navigation Links */}
          <nav className="nav nav-header flex-1 flex justify-center sm:justify-end space-x-4 sm:space-x-6 items-center text-sm font-semibold uppercase tracking-wide">
            <a
              href="#bemutatkozas"
              onClick={() => handleNavClick("bemutatkozas")}
              className={`nav-link ${activeSection === "bemutatkozas" ? "active" : ""}`}
            >
              Bemutatkozás
            </a>
            <a
              href="#szolgaltatasok"
              onClick={() => handleNavClick("szolgaltatasok")}
              className={`nav-link ${activeSection === "szolgaltatasok" ? "active" : ""}`}
            >
              Szolgáltatások
            </a>
            <a
              href="#kapcsolat"
              onClick={() => handleNavClick("kapcsolat")}
              className={`nav-link ${activeSection === "kapcsolat" ? "active" : ""}`}
            >
              Kapcsolat
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;