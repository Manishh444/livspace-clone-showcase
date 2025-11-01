import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-living-room.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful interior design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight"
          >
            Design Your
            <span className="text-primary"> Dream Home</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-background/90 mb-8"
          >
            Transform your living space with our expert interior design services.
            From modular kitchens to complete home makeovers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="gap-2 text-base">
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background/20">
              View Our Work
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center gap-8 text-background/90"
          >
            <div>
              <div className="text-3xl font-bold text-primary">5000+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div className="h-12 w-px bg-background/30" />
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm">Design Experts</div>
            </div>
            <div className="h-12 w-px bg-background/30" />
            <div>
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
