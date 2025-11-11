import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Alvarez y Arancibia</h3>
            <p className="text-background/80 mb-4">
              Nueva generación de servicios legales para la era digital. 
              Flexibilidad, agilidad y tecnología al servicio de tu negocio.
            </p>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contacto</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Av. Apoquindo 3000, Las Condes<br />Santiago, Chile</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:alvarezyarancibiaabogados@gmail.com" className="hover:text-accent transition-smooth">
                  alvarezyarancibiaabogados@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+56912345678" className="hover:text-accent transition-smooth">
                  +56 9 1234 5678
                </a>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-xl font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent flex items-center justify-center transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent flex items-center justify-center transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>© {currentYear} Alvarez y Arancibia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
