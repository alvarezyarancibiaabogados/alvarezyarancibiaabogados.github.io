import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    // Aquí iría la lógica de envío del formulario
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    // Limpiar formulario
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hablemos de tu Próximo Desafío
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Completa el formulario y uno de nuestros socios te contactará a la
            brevedad.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-background/10 backdrop-blur-sm rounded-2xl p-8 shadow-card"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold mb-2">
                Nombre
              </label>
              <Input
                id="nombre"
                type="text"
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                className="bg-background/50 border-background/20 text-foreground placeholder:text-muted-foreground"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-background/50 border-background/20 text-foreground placeholder:text-muted-foreground"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold mb-2">
                Mensaje
              </label>
              <Textarea
                id="mensaje"
                value={formData.mensaje}
                onChange={(e) =>
                  setFormData({ ...formData, mensaje: e.target.value })
                }
                rows={5}
                className="bg-background/50 border-background/20 text-foreground placeholder:text-muted-foreground resize-none"
                placeholder="Cuéntanos sobre tu proyecto o consulta..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 rounded-full transition-smooth hover:scale-105"
            >
              Enviar Mensaje
              <Send className="ml-2" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
