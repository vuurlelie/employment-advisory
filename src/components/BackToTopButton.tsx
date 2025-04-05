import { useEffect, useState } from "react";
import { Ripple, initTWE } from "tw-elements";

/**
 * A floating button that appears after scrolling down,
 * and scrolls smoothly back to the top when clicked.
 */
function BackToTopBtn() {
  // Initialize Ripple effect (from tw-elements) once
  useEffect(() => {
    initTWE({ Ripple });
  }, []);

  // Track visibility state of the button
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event to toggle button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 30);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to the top of the page
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ease-in-out transform ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
      }`}
    >
      <button
        onClick={backToTop}
        type="button"
        data-twe-ripple-init
        data-twe-ripple-color="light"
        className="rounded-full bg-[#bfa76a] p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out 
          hover:bg-[#6e5e4e] active:bg-[#bfa76a] focus:bg-[#bfa76a] focus:outline-none hover:shadow-lg"
        aria-label="Scroll back to top"
      >
        <span className="block w-4 h-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default BackToTopBtn;