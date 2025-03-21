import Link from "next/link"
import { Facebook, Rss } from "lucide-react"
import Image from "next/image"
export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white   py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div>
            <div className="mb-6">
            <Link href="/" className="text-white">
                  <div className="w-32 h-auto">
                    <Image
                    src="/foodmasterswhite.png"
                    alt="Logo"
                    width={128}
                    height={20}
                    />
                  </div>
                </Link>
            </div>
            <p className="text-sm text-gray-300">
              <span className=" font-medium">Food Masters România</span> is a global leader in gastronomy, bringing together a top-tier team of specialists.
              Utilizing cutting-edge technology and rapid logistics, while adhering to the highest standards of quality and safety, all driven by a passion for culinary arts and attention to detail.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl mb-6 ">Navigare</h3>
            <nav className="flex flex-col space-y-4 text-gray-300">
              <Link href="/" className="flex  items-center gap-2 hover:text-[#f59e0b] transition-colors">
                <span className="text-[#f59e0b]">+</span> Home
              </Link>
              <Link href="#noi" className="flex items-center gap-2 hover:text-[#f59e0b] transition-colors">
                <span className="text-[#f59e0b]">+</span> About us
              </Link>
             
              <Link href="#servicii" className="flex items-center gap-2 hover:text-[#f59e0b] transition-colors">
                <span className="text-[#f59e0b]">+</span> Services
              </Link>
              <Link href="#contact" className="flex items-center gap-2 hover:text-[#f59e0b] transition-colors">
                <span className="text-[#f59e0b]">+</span> Contact
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div id="contact">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-black border border-[#f59e0b] flex items-center justify-center text-[#f59e0b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium ">Contact Number</h4>
                <a href="tel:+40769 041 711" className="text-gray-300 hover:text-[#f59e0b]">0769 041 711</a>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6 ">
              <div className="w-8 h-8 rounded-full bg-black border border-[#f59e0b] flex items-center justify-center text-[#f59e0b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Email Contact</h4>
                <a href="mailto:office@foodmasters.ro" className="text-gray-300 hover:text-[#f59e0b]">office@foodmasters.ro</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-black border border-[#f59e0b] flex items-center justify-center text-[#f59e0b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Locatie</h4>
                <a href="https://www.google.com/maps/place/Strada+General+Christian+Tell+22,+Bucure%C8%99ti+010386/@44.4463071,26.0942518,179m/data=!3m1!1e3!4m6!3m5!1s0x40b1ff5228795a8d:0xdaed2e1fa33343d0!8m2!3d44.4461504!4d26.0946881!16s%2Fg%2F11c1kyybr3?entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D" className="text-gray-300 hover:text-amber-500">Christian Tell 22, Bucuresti</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Social Media */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            Copyright © 2025 <span className="text-[#f59e0b]">Food Masters</span>. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://facebook.com"
              className="w-8 h-8 border border-[#f59e0b] flex items-center justify-center hover:bg-[#f59e0b] transition-colors"
            >
              <Facebook size={16} />
            </Link>
            <Link
              href="/"
              className="w-8 h-8 border border-[#f59e0b] flex items-center justify-center hover:bg-[#f59e0b] transition-colors"
            >
              <Rss size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

