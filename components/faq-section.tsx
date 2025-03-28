import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "¿Cuál es el código de vestimenta?",
      answer:
        "El código de vestimenta para nuestra boda es formal. Para los caballeros sugerimos traje oscuro o smoking, y para las damas vestido largo o cocktail. Evitar el color blanco, por favor.",
    },
    {
      question: "¿Habrá transporte desde la ciudad?",
      answer:
        "Sí, hemos organizado transporte desde el centro de Buenos Aires hasta el lugar de la ceremonia. Los buses saldrán a las 15:00 hs desde el Hotel Sheraton. Por favor, confirma tu lugar en el transporte al momento de enviar tu RSVP.",
    },
    {
      question: "¿Hay opciones de alojamiento cerca?",
      answer:
        "Hemos reservado un bloque de habitaciones en el Hotel Cañuelas con tarifa especial para nuestros invitados. Menciona 'Boda Barbie y Fede' al hacer tu reserva. También hay otras opciones cercanas como Posada del Sol y Cabañas El Descanso.",
    },
    {
      question: "¿Habrá opciones para dietas especiales?",
      answer:
        "Por supuesto. Ofreceremos opciones vegetarianas, veganas y sin gluten. Por favor, indícanos tus restricciones alimentarias en el formulario de confirmación de asistencia.",
    },
  ]

  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="font-dancing text-4xl md:text-5xl text-center mb-4">Preguntas Frecuentes</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Todo lo que necesitas saber para nuestro gran día
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

