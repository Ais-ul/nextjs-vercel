import Link from "next/link"

const foodCategories = [
    "STEAKHOUSE",
    "ITALIAN FOOD",
    "DESERTS",
    "PIZZA",
    "SUSHI",
    "PASTA",
    "BURGERS",
    "SEAFOOD",
    "DESSERT",
    "BAKERY",
    "COFFEE",
    "WINE BAR",
    "PUB",
    "BBQ",
    "MEDITERRANEAN",
  ];

export default function Bar() {
  return (
    <div className="hidden md:block w-full bg-[#006400] py-3 px-4">
      <ul className="flex flex-row flex-wrap justify-center gap-4 md:gap-6">
        {foodCategories.map((foodCategories) => (
          <li key={foodCategories}>
            <span
          
              className="text-white hover:text-amber-200 text-sm md:text-base font-medium transition-colors"
            >
              {foodCategories}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

