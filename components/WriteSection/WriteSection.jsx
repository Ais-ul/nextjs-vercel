import Image from "next/image"

export default function PhotoSection() {
  return (
    <div className="flex flex-col md:flex-row bg-black text-white max-w-7xl mx-auto  mb-16 ">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 order-2 ">
        <Image
          src="/food2.jpg"
          alt="Luxury dining room with marble table and elegant chairs"
          width={800}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Benefits */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center  order-1">
        <h2 className="text-xl md:text-2xl font-medium text-amber-500 border-b border-amber-500 pb-2 mb-8 inline-block">
        Hospitals & Medical Facilities - Catering at the Highest
        Standard
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Nutrition plays a vital role in patient recovery and overall health:</h3>
            <p className="text-gray-300">
            We understand the
complexity of medical menus. That is why we have developed an advanced hospital
catering system, strictly adhering to precise portions, specific dietary requirements, and
the highest hygiene standards
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Our kitchen is fully equipped with state-of-the-art technology:</h3>
            <p className="text-gray-300">
            Allowing us to prepare
thousands of portions daily without compromising taste, freshness, or food safety.

            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">We do:</h3>
            <p className="text-gray-300">
            ● Personalized menus for patients with specific dietary needs (diabetes, cardiovascular
              diseases, kidney conditions, etc.)
            </p>
            <p className="text-gray-300">
            ● Strict nutritional control, in collaboration with dietitians and medical specialists
            </p>
            <p className="text-gray-300">
            ● High-level food safety standards, compliant with European regulations
            </p>
            <p className="text-gray-300">
            ● Ultra-fast delivery, ensuring freshness and optimal food temperature
            </p>
            <p className="text-gray-300">
            ● Complete ingredient traceability, guaranteeing transparency and total quality contro
            </p>
         
          </div>

        
        </div>
      </div>
    </div>
  )
}

