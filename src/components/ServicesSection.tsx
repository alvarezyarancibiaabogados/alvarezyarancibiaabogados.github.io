import { Rocket, Shield, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Rocket,
      title: "Startups y Venture Capital",
      description:
        "Desde la constitución hasta rondas de financiamiento, ofrecemos una asesoría ágil que entiende la velocidad de tu crecimiento. Estructuramos legalmente tu innovación.",
    },
    {
      icon: Shield,
      title: "Tecnología y Protección de Datos",
      description:
        "Navegamos la complejidad regulatoria de la economía digital. Te ayudamos a cumplir con la normativa de protección de datos y a proteger tus activos digitales.",
    },
    {
      icon: FileText,
      title: "Contratos Inteligentes y Asesoría Corporativa",
      description:
        "Modernizamos tu área legal con contratos eficientes y una asesoría corporativa continua. Nos integramos como tu equipo legal externo, flexible y a demanda.",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Soluciones Legales a tu Medida
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="shadow-card hover:shadow-xl transition-smooth border-none bg-background"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
