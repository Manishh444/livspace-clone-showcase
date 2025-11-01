import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ name, role, content, rating }: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full border-none shadow-[var(--card-shadow)] hover:shadow-[var(--hover-shadow)] transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="flex gap-1 mb-4">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-muted-foreground mb-6 italic">"{content}"</p>
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
