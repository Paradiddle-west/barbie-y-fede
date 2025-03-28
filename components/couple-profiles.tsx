"use client"

import Image from "next/image"

export default function CoupleProfiles() {
  return (
    <section className="py-8 bg-white" id="couple">
      <div className="container mx-auto px-4">
        <h2 className="font-dancing text-4xl md:text-5xl text-center mb-8">Los Novios</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Bride Profile */}
          <div className="flex flex-col items-center text-center mobile-padding">
            <div className="mb-4 relative">
              <div className="rounded-full overflow-hidden w-40 h-40 md:w-52 md:h-52 shadow-lg mx-auto">
                <Image
                  src="/images/perfil-bar.png"
                  alt="Barbie sonriendo con sombrero de paja en la playa"
                  width={208}
                  height={208}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-pink-100 rounded-full p-2 shadow-md">
                <span className="text-pink-600 font-dancing text-xl">B</span>
              </div>
            </div>
            <h3 className="font-dancing text-2xl md:text-3xl mb-2">Barbie Dattile</h3>
            <p className="text-sm text-gray-600 italic mb-4">Mis 3 "no me juzguen"</p>
            <ul className="text-xs md:text-sm text-gray-600 space-y-2 md:space-y-3 max-w-xs mx-auto">
              <li className="bg-gray-50 p-2 rounded-md shadow-sm">
                Mates y sándwiches de miga en la Costanera: el mejor plan
              </li>
              <li className="bg-gray-50 p-2 rounded-md shadow-sm">El buen humor de la manaña es innegociable</li>
              <li className="bg-gray-50 p-2 rounded-md shadow-sm">
                Correr juntos el finde bien temprano
              </li>
            </ul>
          </div>

          {/* Groom Profile */}
          <div className="flex flex-col items-center text-center mobile-padding">
            <div className="mb-4 relative">
              <div className="rounded-full overflow-hidden w-40 h-40 md:w-52 md:h-52 shadow-lg mx-auto">
                <Image
                  src="/images/perfil-fed.png"
                  alt="Fede sonriendo con gafas de sol en la playa"
                  width={208}
                  height={208}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-100 rounded-full p-2 shadow-md">
                <span className="text-blue-600 font-dancing text-xl">F</span>
              </div>
            </div>
            <h3 className="font-dancing text-2xl md:text-3xl mb-2">Fede Caroni</h3>
            <p className="text-sm text-gray-600 italic mb-4">Mis 3 "no me juzguen"</p>
            <ul className="text-xs md:text-sm text-gray-600 space-y-2 md:space-y-3 max-w-xs mx-auto">
              <li className="bg-gray-50 p-2 rounded-md shadow-sm">Las mejores charlas son las que se dan en la ruta</li>
              <li className="bg-gray-50 p-2 rounded-md shadow-sm">Me falta uno acá</li>
              <li className="bg-gray-50 p-2 rounded-md shadow-sm">
                Luz que no se usa, luz que se apaga
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile-only "Ver más" button */}
        <div className="mt-6 text-center md:hidden">
          <button
            className="text-blue-600 text-sm font-medium flex items-center justify-center mx-auto"
            onClick={() => {
              const hiddenItems = document.querySelectorAll(".hidden.md\\:block")
              hiddenItems.forEach((item) => {
                item.classList.remove("hidden")
                item.classList.add("block")
              })
              document.querySelector(".mt-6.text-center")?.classList.add("hidden")
            }}
          >
            Ver más detalles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

