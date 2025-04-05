import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  // State to store scroll progress as a percentage (0–100)
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Function to calculate scroll progress based on current scroll position
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    // Listen to scroll event
    window.addEventListener("scroll", updateScrollProgress);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    // Wrapper for the full-width scroll progress bar
    <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-transparent">
      {/* Inner bar indicating scroll progress */}
      <div
        className="h-full bg-[#bfa76a] bg-opacity-30 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}