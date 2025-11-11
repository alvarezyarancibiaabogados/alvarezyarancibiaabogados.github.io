import { Users, Zap, Gauge } from "lucide-react";

const HowWeWorkSection = () => {
  const workPoints = [
    {
      icon: Users,
      title: "Tu Negocio es el Centro",
      description:
        "Nos sumergimos en tus objetivos para ofrecer soluciones que no solo son legalmente sólidas, sino que también impulsan tu estrategia. No somos solo tus abogados, somos tus socios.",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
      reverse: false,
    },
    {
      icon: Zap,
      title: "Tecnología para la Eficiencia",
      description:
        "Utilizamos plataformas de gestión de proyectos y comunicación en tiempo real para darte total visibilidad sobre nuestros avances. Automatizamos procesos para reducir costos y tiempos de respuesta.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      reverse: true,
    },
    {
      icon: Gauge,
      title: "Flexibilidad y Agilidad",
      description:
        "Operamos con una estructura liviana que nos permite adaptarnos a tus necesidades. Ofrecemos modelos de precios alternativos y transparentes, desde igualas mensuales hasta honorarios por proyecto.",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
      reverse: false,
    },
  ];

  return (
    <section id="como-trabajamos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Nuestro Modelo: La Nueva Forma de Entender el Derecho
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Enfoque innovador que combina experiencia legal con metodologías ágiles
        </p>

        <div className="space-y-24">
          {workPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className={`flex flex-col ${
                  point.reverse ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-12`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
                    <img
                      src={point.imageUrl}
                      alt={point.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-primary">
                    {point.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
