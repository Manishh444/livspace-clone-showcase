"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import ImageModal from "./ImageModal";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  catalogImages: string[];
  delay?: number;
}

const ProjectCard = ({
  image,
  title,
  category,
  catalogImages,
  delay = 0,
}: ProjectCardProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ scale: 1.02 }}
        onClick={() => setOpen(true)}
        className="group cursor-pointer">
        <Card className="overflow-hidden border-none shadow-[var(--card-shadow)] hover:shadow-[var(--hover-shadow)] transition-all duration-300">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <p className="text-sm text-primary mb-2">{category}</p>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <div className="flex items-center gap-2 text-sm">
                  <span>View Catalog</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Modal */}
      <ImageModal
        open={open}
        onClose={() => setOpen(false)}
        images={catalogImages}
      />
    </>
  );
};

export default ProjectCard;
