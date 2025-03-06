"use client"
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Search } from "lucide-react";
import { useEffect, useState } from "react";
import SolicitaOfertaModal from "components/SolicitaOfertaModal/SolicitaOfertaModal"
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Când scroll-ul depășește 50px, face bara fixed
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
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
    <div className="flex flex-col hidden md:block ">
      {/* Top contact bar */}
      <div className="bg-black  text-white px-4 py-2 text-sm flex items-start">
        <div className="container flex justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-3 w-3 mr-1" />
              <a href="tel:+40769041711" className="text-lg">0769 041 711</a>
            </div>
            <div className="flex items-center">
  <Mail className="h-3 w-3 mr-1" />
  <a href="mailto:office@foodmasters.ro" className="text-lg">office@foodmasters.ro</a>
</div>
          </div>
        </div>
      </div>

      {/* Main header with navigation */}
      <header className="relative flex flex-col">
        {/* Logo and navigation */}
        <div className={`w-full ${isScrolled ? "fixed top-0 py-4 bg-[#111111] shadow-lg" : "absolute bg-black/33"} left-0 z-50 transition-all duration-300`}>

          <div className="container mx-auto  px-4 ">
            <div className="flex justify-between items-center  ">
              <div className="flex-shrink-0">
                <Link href="/" className="text-white">
               <div className="h-12 flex items-center">
  <Image
    src="/foodmastersnew.png"
    alt="Logo"
    width={128}
    height={20}
    className="h-32 w-auto"
  />
</div>
                </Link>
              </div>

              <nav className="hidden md:flex items-center space-x-16">
                <Link href="#servicii" className="text-white hover:text-primary transition-colors hover:text-amber-500">
                  Services
                </Link>
                <Link href="#noi" className="text-white hover:text-primary transition-colors hover:text-amber-500 ">
                About Us
                </Link>
                <Link href="#contact" className="text-white hover:text-primary transition-colors hover:text-amber-500 ">
                  Contact
                </Link>
                {/* <Search className="text-white h-5 w-5 cursor-pointer" /> */}
                
                <button 
                 onClick={() => setIsModalOpen(true)} 
                className="bg-primary cursor-pointer hover:bg-primary/90 text-[#a1784b] py-2 px-4 rounded-lg text-lg font-bold transition-colors">
                   REQUEST OFFER
                </button>
              </nav>

              {/* Mobile menu button */}
              <button className="md:hidden text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Hero section */}
        <div className="flex">
          {/* Left black section */}
          <div className="w-1/2 bg-black flex flex-col justify-between">
            {/* Hero content */}
            <div className="mx-auto px-4 py-24 z-20 mt-12">
              <div className="max-w-xl">
                <div className="flex justify-between">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-2 ">FLAVORS</h1>
                <button 
                 onClick={() => setIsModalOpen(true)} 
                className="bg-black hover:bg-black/60 cursor-pointer border-4 border-white text-white font-bold px-16 text-lg transition-colors font-sans">
                 
                 REQUEST OFFER
                </button>
                </div>
                <h2 className="text-[#c69c6d] text-5xl md:text-6xl font-bold mb-2">INCREDIBLE&DELICIOUS</h2>
                <h1 className="text-white text-4xl md:text-8xl font-bold mb-8">FOOD</h1>
              
              </div>
            </div>
          </div>

          {/* Right image section */}
          <div className="w-1/2 relative">
            <Image
              src="/food1.jpg"
              alt="Modern house with glass walls"
              fill
              className="object-cover brightness-100"
              priority
            />
          </div>
        </div>
      </header>
{/* Modal */}
<SolicitaOfertaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}