import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Interiors", path: "/interiors" },
    { name: "Design Gallery", path: "/design-gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "POP False Ceiling Design & Installation",
    "Wall Moulding and Decorative POP Work",
    "Waterproofing for Bathrooms and Kitchens",
    "Terrace and Roof Waterproof Coating",
    "Wall Dampness Treatment and Repairs",
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">
              Maurya Plaster & Water Proofing
            </h3>
            <p className="text-sm text-background/80 mb-4">
              Transforming houses into dream homes with beautiful, functional
              interior designs.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-background/80 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/80 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-background/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-background/80">
                  Baburao complex, 6 & 7, new airport road, Gowdara Badavane,
                  cross, Sonnapanahalli, Bettahalsoor, Bengaluru, Karnataka
                  562157
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-background/80">
                  +91 98441 24349
                </span>
              </li>
              {/* <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-background/80">
                  hello@example.com
                </span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Maurya Plaster & Water Proofing. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
