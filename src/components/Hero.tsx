import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[800px] h-[800px] animate-flow-lines opacity-5">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#9b87f5"
                d="M45.7,-77.8C58.9,-69.3,69.3,-55.9,76.4,-41.1C83.5,-26.3,87.3,-10.2,86.6,5.8C85.8,21.8,80.5,37.7,71.1,51.2C61.7,64.7,48.2,75.8,33,82.1C17.8,88.4,0.9,89.9,-15.8,86.7C-32.5,83.5,-49,75.6,-62.3,63.7C-75.6,51.8,-85.7,35.9,-89.9,18.5C-94.1,1,-92.4,-17.9,-84.7,-33.5C-77,-49.1,-63.3,-61.4,-48.2,-69C-33.1,-76.6,-16.6,-79.5,0.3,-80C17.2,-80.5,32.5,-86.3,45.7,-77.8Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
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