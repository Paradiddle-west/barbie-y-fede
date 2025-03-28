"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import CalendarModal from "@/components/calendar-modal"

export default function WeddingHeader() {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Marcar como cargado para activar animaciones
    setIsLoaded(true)
  }, [])

  const scrollToNextSection = () => {
    const dateSection = document.getElementById("date")
    if (dateSection) {
      dateSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="relative h-screen w-full flex flex-col items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/portada-1.webp"
          alt="Barbie y Fede sonriendo juntos en un mirador con vista al mar turquesa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center">
        <div className={`text-center mb-20 ${isLoaded ? "fade-in" : "opacity-0"}`} style={{ transitionDelay: "0.3s" }}>
          <h1 className="font-dancing text-6xl md:text-8xl mb-4 text-shadow-lg">Barbie & Fede</h1>
          <p className="uppercase tracking-[0.2em] text-sm md:text-base font-light mb-6">¡Nos casamos!</p>

          {/* Event Info Pill */}
          <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-8 py-3 text-gray-800 shadow-lg">
            <div className="text-center">
              <p className="text-sm">Sábado</p>
              <p className="font-medium">1° de noviembre, 2025</p>
              <p className="text-sm font-medium text-blue-600">17:00 hs</p>
            </div>
            <div className="mx-6 h-8 w-px bg-gray-300"></div>
            <div className="text-center">
              <p className="text-sm">Álamos de Cañuelas</p>
              <p className="font-medium">Buenos Aires</p>
            </div>
          </div>
        </div>

        {/* CTA Button - Destacado */}
        <Button
          size="lg"
          className={`bg-blue-600 hover:bg-blue-700 text-white uppercase tracking-wider text-base py-6 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 ${isLoaded ? "scale-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.6s" }}
          onClick={() => setIsCalendarModalOpen(true)}
        >
          <Calendar className="h-5 w-5" />
          <span>Agenda el día</span>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`scroll-indicator cursor-pointer ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "opacity 1s ease-in-out", transitionDelay: "1.2s" }}
        onClick={scrollToNextSection}
        role="button"
        aria-label="Desplazarse hacia abajo"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            scrollToNextSection()
          }
        }}
      >
        <span className="sr-only">Desplazarse hacia abajo</span>
      </div>

      {/* Calendar Modal */}
      <CalendarModal isOpen={isCalendarModalOpen} onClose={() => setIsCalendarModalOpen(false)} />
    </header>
  )
}

