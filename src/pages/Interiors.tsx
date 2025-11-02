import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChefHat, Bed, Sofa, Bath, Baby, BookOpen } from "lucide-react";
import kitchenImg from "@/assets/kitchen.jpg";
import bedroomImg from "@/assets/bedroom1.jpg";
import livingRoomImg from "@/assets/living2.jpg";
import terrace from "@/assets/livingRoom1.jpg";
import WaterProofing from "@/assets/bedroom2.jpg";
import terraceWaterproffig from "@/assets/Terrace Waterproofin.png";

const Interiors = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    {
      id: "kitchen",
      icon: ChefHat,
      title: "Kitchen",
      description: "Contemporary kitchen designs.",
      image: kitchenImg,
      // price: "Starting from ₹1,50,000",
    },
    {
      id: "bedroom",
      icon: Bed,
      title: "Bedroom",
      description: "Cozy and elegant bedroom interiors for perfect rest",
      image: bedroomImg,
      // price: "Starting from ₹1,00,000",
    },
    {
      id: "living",
      icon: Sofa,
      title: "Living Room",
      description: "Stylish living spaces for family gatherings",
      image: livingRoomImg,
      // price: "Starting from ₹1,25,000",
    },
    {
      id: "bathroom",
      icon: Bath,
      title: "Bedroom",
      description: "Luxurious and functional bathroom designs",
      image: terrace,
      // price: "Starting from ₹80,000",
    },
    {
      id: "kids",
      icon: Baby,
      title: "Kids Room",
      description: "Fun and functional spaces for children",
      image: WaterProofing,
      // price: "Starting from ₹90,000",
    },
    {
      id: "study",
      icon: BookOpen,
      title: "Living Room",
      description: "Productive workspaces.",
      image: livingRoomImg,
      // price: "Starting from ₹70,000",
    },
    {
      id: "terrace",
      icon: BookOpen,
      title: "Terrace",
      description: "Beautifully designed terrace spaces",
      image: terraceWaterproffig,
      // price: "Starting from ₹70,000",
    },
  ];

  const filters = [
    { id: "all", label: "All Rooms" },
    { id: "kitchen", label: "Kitchen" },
    { id: "bedroom", label: "Bedroom" },
    { id: "living", label: "Living" },
    { id: "bathroom", label: "Kids Bedroom" },
    { id: "terrace", label: "terrace" },
  ];

  const filteredCategories =
    activeFilter === "all"
      ? categories
      : categories.filter((cat) => cat.id === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Interior Design Solutions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of interior design services for every space in your home
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-none shadow-[var(--card-shadow)] hover:shadow-[var(--hover-shadow)] transition-all duration-300 overflow-hidden group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-3 rounded-lg">
                      <category.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <p className="text-primary font-semibold mb-4">{category.price}</p>
                    {/* <Button className="w-full">Explore Designs</Button> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Interiors?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description: "High-quality materials and expert craftsmanship",
              },
              {
                title: "45-Day Guarantee",
                description: "Complete your home interiors in just 45 days",
              },
              {
                title: "10-Year Warranty",
                description: "Comprehensive warranty on all our products",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Interiors;
