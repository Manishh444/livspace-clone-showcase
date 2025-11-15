// components/ImageModal.tsx
"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

interface ImageModalProps {
  open: boolean;
  onClose: () => void;
  images: string[];
}

const ModalContent = ({
  images,
  onClose,
  initialIndex = 0,
}: {
  images: string[];
  onClose: () => void;
  initialIndex?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight")
        setCurrentIndex((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft")
        setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length, onClose]);

  if (!images || images.length === 0) {
    return (
      <div className="text-center text-sm text-muted-foreground">
        No images found.
      </div>
    );
  }

  const next = () => setCurrentIndex((p) => (p + 1) % images.length);
  const prev = () =>
    setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-2 top-2 z-30 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white">
        <X className="w-4 h-4" />
      </button>

      {/* Prev */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-2 top-1/2 z-30 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white">
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* Next */}
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-2 top-1/2 z-30 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white">
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* Image container */}
      <div
        className="w-full h-[70vh] sm:h-[60vh] md:h-[70vh] bg-black/5 rounded-xl overflow-hidden flex items-center justify-center"
        onClick={next} // click to go next
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Catalog Image ${currentIndex + 1}`}
            className="object-contain w-full h-full select-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.28 }}
            draggable={false}
          />
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentIndex ? "bg-primary" : "bg-gray-300"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ImageModal = ({ open, onClose, images = [] }: ImageModalProps) => {
  // Ensure portal root exists
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let el = document.getElementById("modal-root");
    if (!el) {
      el = document.createElement("div");
      el.setAttribute("id", "modal-root");
      document.body.appendChild(el);
    }
    setPortalEl(el);
  }, []);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return;
  }, [open]);

  if (!portalEl) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="absolute inset-0 bg-black"
          />

          {/* Modal panel */}
          <motion.div
            key="panel"
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative z-20 w-full max-w-4xl">
            <ModalContent images={images} onClose={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalEl
  );
};

export default ImageModal;
