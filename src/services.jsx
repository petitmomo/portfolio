import {
  FaLaptopCode,
  FaRobot,
  FaShieldAlt,
  FaEye,
  FaChalkboardTeacher,
  FaMobileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import ServiceFormModal from "./composants/ServiceFormModal";

export default function Services() {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-[#14A3F1]" />,
      title: "Développement Web",
      description:
        "Création d’applications web modernes, performantes et sécurisées adaptées à vos besoins.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#14A3F1]" />,
      title: "Développement Mobile",
      description:
        "Création d’applications mobiles performantes, intuitives et compatibles iOS/Android.",
    },
    {
      icon: <FaRobot className="text-4xl text-[#14A3F1]" />,
      title: "Développement de Chatbots et Agents IA",
      description:
        "Conception d’agents intelligents capables d’automatiser la communication et d’améliorer l’expérience utilisateur.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#14A3F1]" />,
      title: "Audit de Sécurité",
      description:
        "Analyse complète de la sécurité de vos systèmes et applications pour détecter et corriger les vulnérabilités.",
    },
    {
      icon: <FaEye className="text-4xl text-[#14A3F1]" />,
      title: "Surveillance et Réponse aux Incidents",
      description:
        "Mise en place de systèmes de détection et de réponse rapide aux menaces de cybersécurité.",
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-[#14A3F1]" />,
      title: "Formation et Sensibilisation",
      description:
        "Sessions de formation pour renforcer les compétences en cybersécurité et sensibiliser vos équipes aux bonnes pratiques.",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="services"
      className="py-20 bg-[#1F306B] px-6 md:px-20 py-30"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-left">
          Mes Services
        </h1>

        <p className="text-white mb-12 max-w-2xl text-left">
          J’offre un ensemble de services couvrant le développement, la sécurité et
          l’intelligence artificielle pour accompagner les entreprises dans leur
          transformation digitale.
        </p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 text-left"
              variants={cardVariants}
              whileHover={{
                scale: 1.07,
                boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#0d2149] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button
                onClick={() => {
                  setSelectedService(service.title);
                  setShowForm(true);
                }}
                className="text-[#14A3F1] font-medium hover:underline"
              >
                Demander un devis →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ✅ Popup Formulaire */}
      <ServiceFormModal
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        selectedService={selectedService}
      />
    </motion.section>
  );
}
