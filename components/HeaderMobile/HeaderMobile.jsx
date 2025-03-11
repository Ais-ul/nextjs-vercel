"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import SolicitaOfertaModal from "components/SolicitaOfertaModal/SolicitaOfertaModal";
import { Phone, Mail } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="flex flex-col  md:hidden">
      {/* Top contact bar */}
      <div className="bg-black text-white px-4 py-2 text-sm flex items-start">
        <div className="container flex justify-between">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <Phone className="h-3 w-3 mr-1" />
              <a href="tel:+40769041711" className="text-md">
                0769 041 711
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <Mail className="h-3 w-3 mr-1" />
            <a href="mailto:office@foodmasters.ro" className="text-md">
              office@foodmasters.ro
            </a>
          </div>
        </div>
      </div>

      {/* Top bar */}
      <div className="bg-black text-white px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <div className="h-10 flex items-center">
            <Image
              src="/foodmasterswhite.png"
              alt="Logo"
              width={128}
              height={32} // In place of 20, to maintain better proportions
              className="h-20 w-auto"
            />
          </div>
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="transition-transform duration-300" // Adaugă tranziție
        >
          {/* Iconița schimbă între Menu și X */}
          {isMenuOpen ? (
            <X className="text-white w-6 h-6 transform rotate-180 " /> // Adaugă rotația pentru efectul de tranziție
          ) : (
            <Menu className="text-white w-6 h-6" />
          )}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-24 right-4 bg-black text-white font-semibold p-4 rounded-lg w-84 h-[40vh] z-50 ">
          <nav>
            <Link href="#servicii" className="block border-b text-white hover:text-[#f59e0b] mb-6">
              Services
            </Link>
            <Link href="#noi" className="block text-white  border-b hover:text-[#f59e0b] mb-6">
              About Us
            </Link>
            <Link href="#contact" className="block text-white  border-b hover:text-[#f59e0b] mb-6">
              Contact
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="block  text-[#f59e0b]  border-b w-full text-left hover:text-[#f59e0b] mb-6"
            >
              Request Offer!
            </button>
          </nav>
        </div>
      )}

      {/* Image section */}
      <div className="relative w-full h-[50vh]">
        <Image src="/food1.jpg" alt="Living Room" layout="fill" objectFit="cover" priority />
      </div>

      {/* Text section */}
      <div className="bg-black text-white text-center py-4 px-4">
        <h1 className="text-white text-3xl font-bold">FLAVORS</h1>
        <h2 className="text-[#c69c6d] text-3xl font-bold">INCREDIBLE&DELICIOUS</h2>
        <h1 className="text-white text-3xl font-bold">FOOD</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-2 bg-black hover:bg-black/60 cursor-pointer border-2 border-[rgb(179,179,179)] text-white font-bold px-8 text-lg transition-colors font-sans"


        >
          REQUEST OFFER
        </button>
      </div>

      {/* Modal */}
      <SolicitaOfertaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
