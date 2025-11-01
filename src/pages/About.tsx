import { motion } from "framer-motion";
import { Users, Award, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { value: "5000+", label: "Happy Customers" },
    { value: "50+", label: "Design Experts" },
    { value: "10+", label: "Years Experience" },
    { value: "15", label: "Cities Covered" },
  ];

  const values = [
    {
      icon: Users,
      title: "Customer First",
      description:
        "We prioritize your vision and satisfaction in every project",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering premium quality with attention to every detail",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Staying ahead with latest design trends and technology",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in our work",
    },
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
              About Maurya Plaster & Water Proofing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming houses into dream homes since 2014
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Maurya Plaster & Water Proofingstarted with a simple mission: to
                make beautiful home interiors accessible to everyone. What began
                as a small team of passionate designers has grown into India's
                most trusted interior design platform.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                We combine expert craftsmanship with cutting-edge technology to
                deliver stunning interiors that reflect your personality and
                lifestyle. Our end-to-end service ensures a hassle-free
                experience from design to installation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we've helped thousands of homeowners across India create
                spaces they love, and we're just getting started.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}>
                <Card className="h-full text-center border-none shadow-[var(--card-shadow)] hover:shadow-[var(--hover-shadow)] transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      {/* <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Awards & Recognition</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Recognized by leading industry bodies for design excellence and innovation
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {["Award 1", "Award 2", "Award 3", "Award 4"].map((award) => (
                <div
                  key={award}
                  className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center"
                >
                  <span className="text-sm">{award}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
