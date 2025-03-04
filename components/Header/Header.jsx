import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col ">
      {/* Top contact bar */}
      <div className="bg-black text-white px-4 py-2 text-sm flex items-start">
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
        <div className="w-full bg-black/33 absolute z-10">
          <div className="container mx-auto px-4 ">
            <div className="flex justify-between items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-white">
                  <div className="w-24 h-auto">
                    <Image
                    src="/foodmastersnew.png"
                    alt="Logo"
                    width={128}
                    height={20}
                    />
                  </div>
                </Link>
              </div>

              <nav className="hidden md:flex items-center space-x-12">
                <Link href="#servicii" className="text-white hover:text-primary transition-colors">
                  Servicii
                </Link>
                <Link href="#noi" className="text-white hover:text-primary transition-colors">
                  Despre Noi
                </Link>
                <Link href="#contact" className="text-white hover:text-primary transition-colors">
                  Contact
                </Link>
                {/* <Search className="text-white h-5 w-5 cursor-pointer" /> */}
                <button className="bg-primary hover:bg-primary/90 text-[#a1784b] py-2 px-4 rounded-lg text-lg font-bold transition-colors">
                  SOLICITA OFERTA
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
                <button className="bg-black hover:bg-black/60 cursor-pointer border border-white text-white py-4 px-6 rounded-lg text-lg transition-colors font-sans">
                  SOLICITA OFERTA
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

      {/* Main content would go here */}
  

      {/* Footer would go here */}
    </div>
  );
}