'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

// Componenta AccordionItem
const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-800 mb-4">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="text-gray-300 text-lg font-medium">{title}</h3>
        <span className="text-white">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </div>
      {isOpen && (
        <div className="p-4 text-gray-300 text-sm leading-relaxed">
          {content}
        </div>
      )}
    </div>
  )
}

// Componenta principală PropertyAdvantagesAccordion
export default function PropertyAdvantagesAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  const accordionItems = [
    {
      title: "Premium Ingredients, Carefully Selected",
      content: "We take pride in sourcing only the finest ingredients for our dishes. Each item is handpicked to ensure the highest quality, creating balanced and delicious meals that exceed expectations."
    },
    {
      title: "Customized Menus Tailored to Your Needs",
      content: "Whether it's a hospital, corporate event, or school, our catering services include personalized menus tailored to meet specific dietary requirements, preferences, and cultural sensitivities."
    },
    {
      title: "Food Safety at the Highest Standards",
      content: "Food Masters Romania adheres to the highest food safety standards, ensuring compliance with European regulations, strict nutritional control, and complete ingredient traceability for peace of mind."
    },
    {
      title: "Fast Delivery, Impeccable Service",
      content: "With our ultra-fast delivery system and fleet of vehicles, we guarantee that food always arrives fresh, warm, and perfectly packaged, ready to be served."
    },
    {
      title: "Excellence in Catering for Every Industry",
      content: "From hospitals to diplomatic events, we offer top-tier catering solutions across various sectors, providing healthy, balanced meals that meet the highest standards of taste, nutrition, and quality."
    },
    {
      title: "Global Experience in Large-Scale Operations",
      content: "With over 30 years of experience in Romania and internationally, we have managed large-scale catering operations, including at NATO Headquarters, U.S. Embassies, and elite defense projects."
    },
    {
      title: "Innovative Solutions in Corporate Catering",
      content: "Food Masters Romania provides premium catering for corporations and educational institutions, ensuring that employees, students, and guests receive nutritious, balanced meals that support their health and well-being."
    }
  ];
  

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? -1 : index)
  }

  return (
    <div className="bg-black text-white p-6 max-w-7xl mx-auto">
      <h2 className="text-[#f59e0b] text-center text-2xl font-semibold mb-8">
      THE ADVANTAGES OF WORKING WITH US
      </h2>
      
      <div className="mt-6 ">
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={index === openIndex}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  )
}
