import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/lovable-uploads/4ab750f5-155f-46c2-b072-8e8970e232d3.png')",
        }}
      />
      
      {/* 3D Animation Background */}
      <HeroBackground />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-secondary-foreground mb-6"
        >
          Refine Your Profile,<br />Redefine Your Confidence
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-8"
        >
          Expert open, closed, and revision rhinoplasty tailored to your needs
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
          >
            Book Your Free Consultation
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Start your journey to a confident, refined look today!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;