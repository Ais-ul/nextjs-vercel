import Image from "next/image"

export default function PhotoSection() {
  return (
    <div className="flex flex-col md:flex-row bg-black text-white max-w-7xl mx-auto  mb-16 ">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 lg:order-2 ">
        <Image
          src="/chicken.jpg"
          alt="Luxury dining room with marble table and elegant chairs"
          width={800}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Benefits */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center  lg:order-1">
        <h2 className="text-xl md:text-2xl font-medium text-amber-500 border-b border-amber-500 pb-2 mb-8 inline-block">
        Cutting-Edge Technology & Fast Delivery 
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Behind every Food Masters Romania dish lies an infrastructure of excellence: :</h3>
            <p className="text-gray-300">
            ● A fully equipped central kitchen, with high-performance production lines ensuring 
maximum efficiency and flawless food safety 
            </p>
            <p className="text-gray-300">
            ● An ultra-fast delivery system, with our own fleet, guaranteeing that food always 
            arrives fresh, warm, and perfectly packaged 
            </p>
            <p className="text-gray-300">
            ● Constant quality monitoring, ensuring the consistency of every dish served  
            </p>
            <p className="text-gray-300">
            ● Stringent hygiene protocols, including daily sanitation, temperature-controlled 
            environments, and real-time tracking of food safety compliance  
            </p>
            <p className="text-gray-300">
            ● Sustainable food production practices, minimizing waste and ensuring ethical 
            sourcing of ingredients 
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Food Masters Romania - Excellence at a Global Level:</h3>
            <p className="text-gray-300">
            Passion for gastronomy, attention to detail 
            </p>
            <p className="text-gray-300">
            A top-tier team of recognized professionals 
            </p>
            <p className="text-gray-300">
            State-of-the-art technology and rapid logistics 
            </p>
            <p className="text-gray-300">
            The highest standards of safety and quality 
            </p>
          </div>

        

        
        </div>
      </div>
    </div>
  )
}

