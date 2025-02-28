import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-semibold text-primary">Nose-Reshaping.com</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-secondary-foreground hover:text-primary transition-colors">Services</a>
            <a href="#why-us" className="text-secondary-foreground hover:text-primary transition-colors">Why Us</a>
            <a href="#faq" className="text-secondary-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors">
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#services" className="block px-3 py-2 text-secondary-foreground hover:text-primary transition-colors">Services</a>
            <a href="#why-us" className="block px-3 py-2 text-secondary-foreground hover:text-primary transition-colors">Why Us</a>
            <a href="#faq" className="block px-3 py-2 text-secondary-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="block px-3 py-2 text-secondary-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;