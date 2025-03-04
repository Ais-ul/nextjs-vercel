import Image from "next/image"

export default function PhotoSection2() {
  return (
    <div className="flex flex-col md:flex-col bg-black text-white max-w-7xl mx-auto  mb-16" >
      {/* Left side - Image */}
      <div className="w-full">
        <Image
          src="/food2.jpg"
          alt="Luxury dining room with marble table and elegant chairs"
          width={800}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Benefits */}
      <div className="w-full  p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-xl md:text-2xl font-medium text-amber-500 border-b border-amber-500 pb-2 mb-8 inline-block">
        Chef Bora - Visionary Restaurateur & Culinary Innovator 
        </h2>

        <div className="space-y-6">
          <div>
      
            <p className="text-gray-300">
            With a career spanning decades in the culinary industry, Chef Bora has played a pivotal role in 
shaping Romania s modern restaurant scene. His ability to blend innovation, precision, and 
traditional culinary values has set new standards in fine dining and large-scale catering 
operations. 

            </p>
           
        
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Professional Background & Achievements</h3>
            <p className="text-gray-300">
            ● Graduate of the Romanian Culinary Institute, specializing in high-end gastronomy 
            and international cuisine
            </p>
            <p className="text-gray-300">
            ● Certified Executive Chef, with advanced training in food safety, kitchen management, 
            and large-scale catering 
            </p>
            <p className="text-gray-300">
            ● Leader of high-profile culinary teams, mentoring and training the next generation of 
            top chefs 
            </p>
            <p className="text-gray-300">
            ● Expert in nutritional planning, working alongside dietitians to design specialized 
            medical and wellness menus 
            </p>
            <p className="text-gray-300">
            ● Renowned menu developer, creating innovative dishes that balance tradition with 
            modern techniques 
            </p>
       
          </div>

          <div>
           
            <p className="text-gray-300">
            Currently, Chef Bora continues to expand his impact as the principal of the Cooking School 
at DallesGO and the leader of DallesGO Professionals, a specialized recruitment agency for 
HoReCa professionals. His dedication to mentoring, innovation, and the pursuit of culinary 
perfection ensures that every dish served by Food Masters Romania meets the highest 
standards of excellence.
            </p>
           
         
          </div>

         
        </div>
      </div>
    </div>
  )
}

