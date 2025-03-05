"use client"
import { useState } from "react";
import { Plus } from "lucide-react";
import Image from "next/image";

export default function DesignMasters() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionIndex) => {
    if (expandedSection === sectionIndex) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionIndex);
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-black text-white  max-w-7xl mx-auto my-16">
      {/* Left side - Image */}
      <div className="md:w-1/2 h-[200px] md:h-144 relative  lg:self-center">
        <Image
        
          src="/food3.jpg"
          alt="Modern interior design with high ceiling and wooden stairs"
          className="object-cover "
          fill
        />
      </div>

      {/* Right side - Content */}
      <div className="md:w-1/2 p-8 md:p-4 flex flex-col justify-center">
        <div className="mb-8">
        <div className="flex-shrink-0">
              
                  <div className="w-48 h-auto">
                    <Image
                    src="/foodmastersnew.png"
                    alt="Logo"
                    width={128}
                    height={20}
                    />
                  </div>
              
              </div>

          <div className="flex items-center mt-6">
            <div className="w-12 h-0.5 bg-amber-500"></div>
            <span className="ml-4 text-amber-500 font-medium">PROCESS FOOD MASTERS</span>
          </div>
        </div>

        {/* Collapsible sections */}
        <div className="space-y-4">
          <CollapsibleSection
            number="1"
            title="Excellence in Catering and Customized Services"
            content="At Food Masters Romania, we turn every meal into an unforgettable experience. With a team of professionals and premium ingredients, we offer personalized catering solutions for any industry, from hospitals and educational institutions to diplomatic events."
            isExpanded={expandedSection === 1}
            onClick={() => toggleSection(1)}
          />

          <CollapsibleSection
            number="2"
            title="Cutting-Edge Technology for Fast Delivery"
            content="We have a fully equipped central kitchen with advanced technology and an ultra-fast delivery system, ensuring that every meal arrives fresh, warm, and perfectly packaged, while maintaining the highest food safety standards."
            isExpanded={expandedSection === 2}
            onClick={() => toggleSection(2)}
          />

          <CollapsibleSection
            number="3"
            title="Global Expertise and Successful Partnerships"
            content="With over 30 years of experience, we have managed large-scale catering operations for international institutions and top organizations, from embassies and financial institutions to projects in high-security zones, ensuring excellence in every detail."
            isExpanded={expandedSection === 3}
            onClick={() => toggleSection(3)}
          />
        </div>

        {/* Rating and text */}
        <div className="mt-8">
          <div className="flex text-amber-500 text-2xl mb-4 whitespace-nowrap">★ ★ ★ ★ ★</div>
          <p className="text-gray-300 ">
          Because we know that catering services are an important investment, we’ll guide you through every step, from designing customized menus to ensuring compliance with all technical and legal requirements, all while keeping your budget in focus.
          </p>
        </div>
      </div>
    </div>
  );
}

function CollapsibleSection({ number, title, content, isExpanded, onClick }) {
  return (
    <div className="border border-gray-700 p-4 cursor-pointer" onClick={onClick}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="mr-2 text-lg">{number}.</span>
          <span className="text-lg">{title}</span>
        </div>
        <Plus className={`transition-transform ${isExpanded ? "rotate-45" : ""}`} />
      </div>

      {isExpanded && (
        <div className="mt-4 text-gray-300">
          {/* Now using the content prop for each section */}
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}
