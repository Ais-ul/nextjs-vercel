"use client"
import { useEffect, useState } from "react";
import SolicitaOfertaModal from "components/SolicitaOfertaModal/SolicitaOfertaModal"
const MobileOfferButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
     // Adaugă și elimină clasele pentru body atunci când modalul se deschide sau se închide
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Dezactivează scroll-ul
    } else {
      document.body.style.overflow = "auto"; // Activează scroll-ul
    }

    return () => {
      document.body.style.overflow = "auto"; // Asigură-te că scroll-ul este activat când componenta se demontează
    };
  }, [isModalOpen]);
    return (
      <div className="sticky bottom-0 left-0 w-full bg-[#a1784b] text-white p-2 flex justify-center shadow-lg md:hidden">
        <button 
                 onClick={() => setIsModalOpen(true)} 
                className="  bg-primary hover:bg-primary/90 text-white bg-black py-2 px-10 rounded-lg text-lg font-bold transition-colors">
                  REQUEST OFFER
                </button>
                <SolicitaOfertaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
      
    );
  };
  
  export default MobileOfferButton;
  