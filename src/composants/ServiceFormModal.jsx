// src/composants/ServiceFormModal.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";


const ServiceFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    service: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Validation des champs
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "nom":
        if (value.length > 20) error = "Le nom ne doit pas dépasser 20 caractères.";
        break;
      case "telephone":
        if (!/^\d*$/.test(value)) error = "Le numéro doit contenir uniquement des chiffres.";
        else if (value.length > 13)
          error = "Le numéro ne doit pas dépasser 13 chiffres.";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Adresse email invalide.";
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Bloquer les saisies invalides
    if (name === "nom" && value.length > 20) return;
    if (name === "telephone" && !/^\d*$/.test(value)) return;
    if (name === "telephone" && value.length > 13) return;

    validateField(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

// Soumission vers ton script PHP
  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some((error) => error);
    if (hasErrors) return alert("Veuillez corriger les erreurs avant de soumettre.");

    setLoading(true);

    try {
      const response = await fetch("https://sendmail-njcak8m20-momooba07-6674s-projects.vercel.app/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Demande envoyée avec succès !");
        onClose();
          setFormData({
          nom: "",
          telephone: "",
          email: "",
          service: "",
          description: "",
        });
      } else {
        alert("Erreur lors de l'envoi : " + (result.message || "inconnue"));
      }
    } catch (err) {
      console.error("Erreur:", err);
      alert("Impossible de contacter le serveur. Vérifiez votre connexion ou le backend.");
    }

    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 w-full max-w-md relative shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-[#14A3F1] hover:text-red-500"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Demande de service
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nom complet */}
              <div>
                <label className="block text-gray-700 mb-1">Prénom et Nom</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  maxLength={20}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                {errors.nom && <p className="text-red-500 text-sm">{errors.nom}</p>}
              </div>

              {/* Téléphone */}
              <div>
                <label className="block text-gray-700 mb-1">Numéro de téléphone</label>
                <input
                  type="text"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  maxLength={13}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                {errors.telephone && (
                  <p className="text-red-500 text-sm">{errors.telephone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Service */}
              <div>
                <label className="block text-gray-700 mb-1">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">-- Sélectionner un service --</option>
                  <option value="developpement web">Développement web </option>
                  <option value="mobile">Développement mobile</option>
                  <option value="chatbot">Développement de chatbot et agent IA</option>
                  <option value="audit">Audit de sécurité</option>
                  <option value="surveillance">
                    Surveillance et réponse aux incidents
                  </option>
                  <option value="formation">Formation et sensibilisation</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-700 mb-1">Décrire votre besoin</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Décrivez votre projet ou besoin..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#14A3F1] text-white p-2 rounded-md hover:bg-[#1F306B] transition-all"
                disabled={loading}
              >
                {loading ? "Envoi en cours..." : "Envoyer la demande"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceFormModal;
