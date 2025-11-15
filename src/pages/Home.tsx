import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import {
  Home,
  Sofa,
  Bed,
  Bath,
  Lightbulb,
  Ruler,
  ArrowRight,
} from "lucide-react";
import kitchenImg from "@/assets/kitchen.jpg";
import bedroomImg from "@/assets/bedroom1.jpg";
import livingRoomImg from "@/assets/livingRoom1.jpg";
import { fosrocImg } from "@/utils/imageutils";
import { gyprocImg } from "@/utils/imageutils";
import { roff } from "@/utils/imageutils";


const HomePage = () => {
  const services = [
    {
      icon: Home,
      title: "POP False Ceiling Design & Installation",
      description:
        "End-to-end interior solutions for your entire home with personalized designs.",
    },
    {
      icon: Sofa,
      title: "Wall Moulding and Decorative POP Work",
      description:
        "Functional and stylish kitchen designs tailored to your lifestyle.",
    },
    {
      icon: Bed,
      title: "Waterproofing for Bathrooms and Kitchens",
      description:
        "Create your perfect sanctuary with our custom bedroom solutions.",
    },
    {
      icon: Bath,
      title: "Terrace and Roof Waterproof Coating",
      description:
        "Modern bathroom designs that combine luxury with functionality.",
    },
    {
      icon: Lightbulb,
      title: "Wall Dampness Treatment and Repairs",
      description:
        "Expert lighting design to enhance ambiance and functionality.",
    },
  ];

  const projects = [
    {
      image: "/product_img/fosroc/IMG-20251110-WA0014.jpg",
      title: "FOSROC",
      category: "Kitchen",
      catalogImages: fosrocImg,
    },
    { image: bedroomImg, title: "Contemporary Bedroom", category: "Bedroom" },
    {
      image: livingRoomImg,
      title: "Elegant Living Room",
      category: "Living Room",
      catalogImages: gyprocImg,
    },
    {
      image: kitchenImg,
      title: "Modern Kitchen",
      category: "Kitchen",
      catalogImages: roff,
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Homeowner, Bangalore",
      content:
        "Maurya Plaster & Water Proofing transformed our apartment into a dream home. The attention to detail and professionalism was outstanding!",
      rating: 5,
    },
    {
      name: "Raj Patel",
      role: "Homeowner, Bangalore",
      content:
        "From design to execution, everything was seamless. Our modular kitchen is exactly what we envisioned.",
      rating: 5,
    },
    {
      name: "Anita Reddy",
      role: "Homeowner, Bangalore",
      content:
        "Exceptional service and beautiful designs. The team understood our needs perfectly and delivered beyond expectations.",
      rating: 5,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Share your vision with our design experts",
    },
    {
      number: "02",
      title: "Design",
      description: "Get personalized 3D designs and quotes",
    },
    {
      number: "03",
      title: "Execution",
      description: "Watch your dream home come to life",
    },
    {
      number: "04",
      title: "Handover",
      description: "Move into your beautiful new space",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive interior design solutions for every room in your
              home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent process from concept to completion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center">
                <div className="text-6xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our latest interior design transformations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                image={project.image}
                title={project.title}
                category={project.category}
                catalogImages={project.catalogImages} // <-- IMPORTANT
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center">
            {/* <Button size="lg" variant="outline" className="gap-2">
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Button> */}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from satisfied homeowners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Home?
            </h2>

            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Get a free consultation with our design experts and start your
              journey to a beautiful home
            </p>
            <a href="tel:tel:+917892233147 ">
              <Button size="lg" variant="secondary" className="gap-2">
                Schedule Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
