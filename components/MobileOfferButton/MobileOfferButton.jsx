"use client";

import { useEffect, useState } from "react";
import SolicitaOfertaModal from "components/SolicitaOfertaModal/SolicitaOfertaModal";

const MobileOfferButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div
      className="sticky bottom-0 left-0 w-full text-white p-2 flex justify-center shadow-lg 
                 bg-[url('https://designmasters.ro/videosz/svg4.min.svg')] bg-cover bg-center"
    >
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-primary hover:bg-primary/90 text-white bg-black py-2 px-10 text-lg font-bold transition-colors"
      >
        REQUEST OFFER
      </button>
      <SolicitaOfertaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default MobileOfferButton;
