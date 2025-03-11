import Image from "next/image"

export default function PhotoSection() {
  return (
    <div id="servicii" className="flex flex-col md:flex-row bg-black text-white max-w-7xl mx-auto  mb-16" >
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 px-8 lg:px-0">
        <Image
          src="/catering.jpg"
          alt="Luxury dining room with marble table and elegant chairs"
          width={800}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Benefits */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-xl md:text-2xl font-medium text-[#f59e0b] border-b border-[#f59e0b] pb-2 mb-8 inline-block">
        Food Masters Romania - Perfection in
        Catering, Excellence in Service
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Food is not just about nutrition:</h3>
            <p className="text-gray-300">
              It s about balance, safety, and experience. At Food Masters
Romania, we take catering to the next level, combining a passion for gastronomy with
cutting-edge technology, impeccable delivery, and an elite team.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Every meal we serve reflects our
commitment to excellence and innovation:</h3>
            <p className="text-gray-300">
            We provide customized menus for hospitals, catering services for schools, or
            refined dishes for corporations and diplomatic events
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">From healthy hospital meals to sophisticated dishes for premium spaces and
            international companies:</h3>
            <p className="text-gray-300">
            Food Masters Romania redefines catering through quality, taste,
and excellence in every detail.

            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">We have:</h3>
            <p className="text-gray-300">
            ● Premium ingredients, carefully selected
            </p>
            <p className="text-gray-300">
            ● Balanced menus tailored to each client segment
            </p>
            <p className="text-gray-300">
            ● Food safety at the highest standards
            </p>
            <p className="text-gray-300">
            ● Fast delivery and impeccable service
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

