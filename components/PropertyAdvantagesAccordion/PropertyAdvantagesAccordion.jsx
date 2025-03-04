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
      title: "Proiect de Design Interior Gratuit",
      content: "Beneficiezi de un proiect complet de design interior realizat de designerii noștri, fără niciun cost suplimentar. Acest lucru înseamnă că vei avea acces la expertiza și creativitatea unor profesioniști în domeniu, care vor transforma spațiul într-un loc armonios și estetic plăcut. Designul interior va reflecta cele mai recente tendințe și va fi realizat cu o atenție deosebită la detalii, asigurându-ți astfel un mediu de locuit de excepție, fără să fie nevoie să plătești suplimentar pentru aceste servicii."
    },
    {
      title: "Personalizare la Cerere",
      content: "Oferim opțiuni de personalizare conform preferințelor tale. Poți alege finisaje, culori și materiale care se potrivesc stilului tău personal, transformând proprietatea într-un spațiu care te reprezintă cu adevărat."
    },
    {
      title: "Economie de Timp și Efort",
      content: "Achiziționarea unei proprietăți complet mobilate îți economisește timpul și efortul considerabil. Nu va mai fi nevoie să petreci săptămâni sau luni căutând mobilier potrivit, coordonând livrarea și asamblând piesele."
    },
    {
      title: "Costuri Reduse",
      content: "Deși poate părea surprinzător, achiziționarea unei proprietăți complet mobilate poate fi mai economică decât cumpărarea separată a mobilierului. Beneficiezi de prețuri negociate în avans și eviti costurile ascunse ale amenajării."
    },
    {
      title: "Design de Calitate",
      content: "Proprietățile noastre sunt amenajate de designeri profesioniști care asigură un aspect estetic unitar și funcțional. Fiecare element este ales cu grijă pentru a se integra perfect în spațiu și a crea o atmosferă plăcută."
    },
    {
      title: "Investiție Ideală",
      content: "O proprietate complet mobilată și amenajată profesional are o valoare de piață mai mare și poate fi închiriată sau revândută mai ușor. Este o investiție inteligentă care își păstrează valoarea în timp."
    },
    {
      title: "Gata de Mutare",
      content: "Poți să te muți imediat după achiziție, fără să aștepți livrarea mobilierului sau finalizarea lucrărilor de amenajare. Totul este pregătit pentru a-ți începe noua viață în confort deplin."
    }
  ]

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? -1 : index)
  }

  return (
    <div className="bg-black text-white p-6 max-w-4xl mx-auto">
      <h2 className="text-amber-500 text-center text-2xl font-semibold mb-8">
        AVANTAJELE CUMPĂRĂRII UNEI PROPRIETĂȚI COMPLET MOBILATE
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
