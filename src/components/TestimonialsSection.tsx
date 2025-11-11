import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Alvarez y Arancibia fue clave en nuestra primera ronda de levantamiento de capital. Su agilidad y comprensión del ecosistema startup nos ahorró tiempo y recursos valiosos.",
      author: "CEO de una Fintech Chilena",
    },
    {
      quote:
        "Implementaron toda nuestra política de protección de datos en tiempo récord, con una claridad que nunca habíamos tenido de un estudio de abogados tradicional.",
      author: "Gerente de Operaciones de un E-commerce",
    },
    {
      quote:
        "Su modelo de asesoría flexible se adapta perfectamente a nuestras necesidades cambiantes. Son verdaderos socios estratégicos de nuestro negocio.",
      author: "Fundador de una Startup Tecnológica",
    },
  ];

  return (
    <section id="casos-de-exito" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Resultados que Hablan por Sí Mismos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-xl transition-smooth border-none bg-background"
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-accent mb-6 opacity-50" />
                <blockquote className="text-lg text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-secondary font-semibold not-italic">
                  — {testimonial.author}
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
