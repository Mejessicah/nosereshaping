import { motion } from "framer-motion";
import { Scissors, MinusCircle, RefreshCw } from "lucide-react";

const services = [
  {
    title: "Open Rhinoplasty",
    description: "Comprehensive reshaping with precision and detail for significant transformations.",
    icon: Scissors,
  },
  {
    title: "Closed Rhinoplasty",
    description: "Minimal incisions for subtle yet effective enhancements with reduced recovery time.",
    icon: MinusCircle,
  },
  {
    title: "Revision Rhinoplasty",
    description: "Expert correction and refinement of previous surgical results.",
    icon: RefreshCw,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Our Services
          </h2>
          <p className="text-gray-600">
            Specialized procedures tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;