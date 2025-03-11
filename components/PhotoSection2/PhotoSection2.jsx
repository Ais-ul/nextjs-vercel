import Image from "next/image"

export default function PhotoSection2() {
  return (
    <div className="flex flex-col md:flex-row bg-black text-white max-w-7xl mx-auto  mb-16" >
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 self-center px-8 lg:px-0">
        <Image
          src="/industry.jpg"
          alt="Luxury dining room with marble table and elegant chairs"
          width={800}
          height={200}
          className="w-full h-full object-contain "
        />
         <Image
          src="/food6.jpg"
          alt="Another catering setup"
          width={800}
          height={400}
          className="w-full h-full object-contain"
        />
         <Image
          src="/food7.jpg"
          alt="Another catering setup"
          width={800}
          height={400}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Right side - Benefits */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-xl md:text-2xl font-medium text-[#f59e0b] border-b border-[#f59e0b] pb-2 mb-8 inline-block">
        Customized Catering for Every Industry
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Corporate & Institutional Catering:</h3>
            <p className="text-gray-300">
            ●  Educational Institutions - We provided balanced daily meals for the American
International School, ensuring high-quality nutrition for students and staff.

            </p>
            <p className="text-gray-300">
            ● Financial & Corporate Sector - Premium catering solutions for ING Nederlanden,
            Opera Plaza, Kiseleff, and other top companies.
            </p>
            <p className="text-gray-300">
            ● Embassies & Diplomatic Events - High-end services for the U.S. Embassy in
            Romania
            </p>
            <p className="text-gray-300">
            ● Multinational Companies & Corporate Elites - Customized meal programs for global
            enterprises
            </p>
        
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">International Expertise & Large-Scale Operations:</h3>
            <p className="text-gray-300">
            ● U.S. Embassy, Iraq - Full-scale kitchen development and operational management
            </p>
            <p className="text-gray-300">
            ● NATO Headquarters, Baghdad - Large-scale food service operations in high-security
            environments.
            </p>
            <p className="text-gray-300">
            ● Adnan Palace Catering Services - Exclusive catering for elite events.
            </p>
            <p className="text-gray-300">
            ● DynCorp & Blackwater Camp (Green Zone, Iraq) - Food service and logistics for
military and government operations.
            </p>
            <p className="text-gray-300">
            ● Defense & International Security Projects - High-performance catering for global
            security forces.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Hospitality & Restaurant Management:</h3>
            <p className="text-gray-300">
            ● Bucharest’s Most Iconic Restaurants – We have created and managed some of the
city’s top dining destinations, including Café de Paris, Santa Fe Restaurant, Osho
Steakhouse, Osho Fish, Vacamuuu Steakhouse, Uptown Restaurant, and Eatery
Coffee.
            </p>
            <p className="text-gray-300">
            ● Central Kitchen for Kaufland – A high-capacity food production center ensuring
efficiency and consistent quality.
            </p>
         
          </div>

         
        </div>
      </div>
    </div>
  )
}

