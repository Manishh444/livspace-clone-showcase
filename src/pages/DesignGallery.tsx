import { motion } from "framer-motion";
import { useState } from "react";
import kitchenImg from "@/assets/kitchen.jpg";
import bedroomImg from "@/assets/bedroom2.jpg";
import bedroomImg2 from "@/assets/bedroom1.jpg";
import livingRoomImg from "@/assets/livingRoom1.jpg";
import terrace from "@/assets/living3.jpg";
import wall from "@/assets/living5.jpg";
import room from "@/assets/living3 (2).jpg";
import toilet from "@/assets/hall1.jpg";
import kids from "@/assets/ceilingfanpop.jpg";
import water1 from "@/assets/wtfp4.jpg";
import water2 from "@/assets/wtfp.jpg";
import water3 from "@/assets/wtfp6.jpg";

const DesignGallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const designs = [
    { id: 1, image: kitchenImg, title: "Modern Kitchen", category: "Kitchen" },
    { id: 2, image: bedroomImg, title: "Master Bedroom", category: "Bedroom" },
    { id: 2, image: bedroomImg2, title: "Master Bedroom", category: "Bedroom" },
    { id: 3, image: livingRoomImg, title: "Living Room", category: "Living" },
    {
      id: 4,
      image: terrace,
      title: "Contemporary Kitchen",
      category: "Kitchen",
    },
    { id: 5, image: wall, title: "Kids Bedroom", category: "Bedroom" },
    { id: 6, image: room, title: "Luxury Living", category: "Living" },
    { id: 7, image: toilet, title: "Compact Kitchen", category: "Kitchen" },
    { id: 8, image: kids, title: "Guest Room", category: "Bedroom" },
    {
      id: 9,
      image: livingRoomImg,
      title: "Cozy Living Space",
      category: "Living",
    },
    { id: 10, image: water3, title: "Water Proofing Solution", category: "Living" },
    { id: 11, image: water2, title: "Water Proofing Solution", category: "Living" },
    { id: 12, image: water1, title: "Water Proofing Solution", category: "Living" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Design Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through our collection of stunning interior designs for
              inspiration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {designs.map((design, index) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="break-inside-avoid group cursor-pointer"
                onMouseEnter={() => setHoveredId(design.id)}
                onMouseLeave={() => setHoveredId(null)}>
                <div className="relative overflow-hidden rounded-lg shadow-[var(--card-shadow)] hover:shadow-[var(--hover-shadow)] transition-all duration-300">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {hoveredId === design.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent flex flex-col justify-end p-6 text-background">
                      <span className="text-sm text-primary mb-2">
                        {design.category}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">
                        {design.title}
                      </h3>
                      <button className="text-sm underline text-left">
                        View Details →
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">Love What You See?</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Let's bring these designs to life in your home
            </p>
            <a href="tel:tel:+917892233147 ">
              <button className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                Get Free Consultation
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DesignGallery;
