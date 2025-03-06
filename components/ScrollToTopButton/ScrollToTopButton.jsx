"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";  // Importă ChevronUp din Lucide

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {  // Afișează butonul după ce s-a dat scroll mai mult de 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
        <div
        className="fixed bottom-16 right-2 md:right-6 z-50 p-2 rounded-full shadow-lg cursor-pointer
                   bg-[url('https://designmasters.ro/videosz/svg4.min.svg')] bg-cover bg-center"
        onClick={scrollToTop}
        style={{ width: '40px', height: '40px' }}  // Dimensiuni mai mici pentru buton
      >
        <ChevronUp className="w-6 h-6 text-white" />  {/* Dimensiune mică pentru iconiță */}
      </div>
    )
  );
};

export default ScrollToTopButton;
