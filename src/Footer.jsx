import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0b1e5b] text-white text-center py-6 px-16"
    >
      <p className="text-sm">
        Copyright © 2025 <span className="font-semibold text-[#007bff]">Mamadou Ba</span>. Tous droits réservés.
      </p>
    </motion.footer>
  );
};

export default Footer;
