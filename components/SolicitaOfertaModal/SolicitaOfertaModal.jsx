import { useState } from "react";

export default function SolicitaOfertaModal({ isOpen, onClose }) {
  const [nume, setNume] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [detalii, setDetalii] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aici poți adăuga logica pentru trimiterea datelor
    console.log({ nume, email, telefon, detalii });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center   justify-center  bg-black/50 z-50">
      <div className="relative lg:w-244 w-74 px-4 pt-4 lg:p-8 bg-[#292929]    rounded-lg shadow-lg">
       <button
              type="button"
              onClick={onClose}
              className="absolute top-2 right-2 px-2 lg:py-2 lg:px-4   bg-[#cda274] text-white rounded-full  cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              X
            </button>
        <h2 className="text-black text-xl font-bold text-center mb-8"></h2>
      



        <form onSubmit={handleSubmit}>
          <div className="relative mb-6">
          <input
  type="text"
  value={nume}
  onChange={(e) => setNume(e.target.value)}
  className="w-full py-2 px-0 border-2 focus:outline-none"
  style={{ WebkitTextFillColor: "#cda274", borderColor: "#cda274 !important" }} // Forțăm culoarea border-ului
  placeholder="Name123"
  required
/>

           
          </div>


<div className="lg:flex gap-4">
          <div className="relative mb-6 lg:w-1/2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-0  border-2 border-[#cda274] focus:outline-none"
              style={{ WebkitTextFillColor: "#cda274" }} // Adăugăm stilul inline
              placeholder=" Email"
              required
            />
           
          </div>

          <div className="relative mb-6  lg:w-1/2">
            <input
              type="tel"
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
              className="w-full py-2 px-0  border-2 border-[#cda274] focus:outline-none"
              style={{ WebkitTextFillColor: "#cda274" }} // Adăugăm stilul inline
              placeholder=" Phone"
              required
            />
       
          </div>
          </div>
          <div className="relative mb-6">
            <textarea
              value={detalii}
              onChange={(e) => setDetalii(e.target.value)}
              className="w-full py-2 px-0  border-2 border-[#cda274] focus:outline-none"
              style={{ WebkitTextFillColor: "#cda274" }} // Adăugăm stilul inline
              placeholder=" Details"
              rows="4"
              required
            />
          
          </div>

          <div className="flex justify-between lg:justify-end  space-x-4">
         
            <button
              type="submit"
              className="py-2 px-6 mb-2 lg:mb-0 bg-transparent border border-[#cda274] hover:bg-green-700 text-[#cda274] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              REQUEST OFFER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}