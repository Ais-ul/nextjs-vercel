import { Star } from "lucide-react"

export default function Whoweare() {
  return (
    <div id="noi" className="bg-[#2E2E2E] text-white py-12 px-4 md:py-16">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        Food Masters Romania – A New Standard for Food
        </h1>

        <h2 className="text-amber-500 text-lg md:text-xl">Excellence in Catering, Perfection in Service</h2>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          La <span className="text-amber-500">Food Masters</span>, we elevate catering through premium ingredients, 
          innovative menus, and top-tier food safety standards. With <span className="text-amber-500">over 30 years of experience</span>, we provide customized meals for hospitals, 
          schools, corporations, and diplomatic events, ensuring flawless service, fast delivery,
           and <span className="text-[#f59e0b]">exceptional quality in every dish.</span> 
        </p>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">We are more than just a catering provider - we are the trusted partner for those who 
        demand <span className="text-amber-500"> perfection on every plate</span>. </p>

        <div className="flex justify-center ">
          {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-6 h-6 fill-amber-500" fill="currentColor" />

          ))}
        </div>
      </div>
    </div>
  )
}

