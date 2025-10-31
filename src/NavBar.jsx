import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "./assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "À propos", href: "#apropos" },
    { name: "Compétences", href: "#competences" },
    { name: "Services", href: "#services" },
    { name: "Réalisations", href: "#realisations" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact"},
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-[#1F306B]/80 backdrop-blur-md text-white"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo image */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="h-30"
          />
         
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#007bff] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#0b1e5b] px-6 pb-4 flex flex-col space-y-4"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#007bff] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;