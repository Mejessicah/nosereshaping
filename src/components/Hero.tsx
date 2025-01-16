import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Fade In and Scale */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/4ab750f5-155f-46c2-b072-8e8970e232d3.png')",
        }}
      />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          <motion.h1 
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 100
                }
              }
            }}
            className="text-4xl md:text-6xl font-bold text-secondary-foreground mb-6"
          >
            Refine Your Profile,<br />Redefine Your Confidence
          </motion.h1>
          
          <motion.p
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 90
                }
              }
            }}
            className="text-lg md:text-xl text-gray-600 mb-8"
          >
            Expert open, closed, and revision rhinoplasty tailored to your needs
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 80
                }
              }
            }}
            className="space-y-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
            >
              Book Your Free Consultation
            </motion.a>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="relative"
            >
              <motion.p
                className="mt-4 text-sm text-gray-500"
                animate={{
                  x: [-5, 5, -5],
                  y: [0, -3, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                Start your journey to a confident, refined look today!
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;