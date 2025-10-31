import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projets = [
  {
    id: 1,
    image: "/realisations/biodoux_mamadou_ba.png",
    type: "E-commerce",
    titre: "Biodoux-saly",
    description: "Biodoux Saly est un site web responsive de vente de produits 100% bio &amp; naturel en ligne.La boutique Biodoux Saly dispose des moyens de paiement par mobile monnaie(Wave, Orange-monnaie et free-monnaie) et par carte bancaire. Développé avec Wordpress.",
    lien: "https://biodoux-saly.com",
  },
  {
    id: 2,
    image: "/realisations/yotto-gay_mamadou_ba.png",
    type: "Plate-forme",
    titre: "Yotto-gay",
    description: "Yottogay est une plateforme numérique polyvalente conçue pour transformer et dynamiser les entreprises de la petite côte, offrant une solution adaptée à tous types de business avec une interface simple et intuitive.Développée avec Wordpress.",
    lien: "https://www.yotto-gay.com",
  },
  {
    id: 3,
    image: "/realisations/cbe_btp_mamadou_ba.png",
    type: "Site vitrine",
    titre: "CBE-BTP",
    description: "Le site vitrine de CBE-BTP permet aux clients de se renseigner, s'orienter et demander des factures pour leurs projets BTP. Discutions en chat directe sur WhatsApp et appel direct via le site. Développé avec Wordpress",
    lien: "https://www.cbe-btp.com",
  },
  {
    id: 4,
    image: "/realisations/gscolarite_mamadou_ba.png",
    type: "Plate-forme",
    titre: "G-Scolarité",
    description: "G-scolarité, une application web qui offre une solution intuitive et efficace pour simplifier et moderniser la gestion scolaire au sein d'un établissement.Cette application web est un véritable outil de gain de temps.G-Scolarité est développée avec Laravel",
    lien: "https://gscolarite.yotto-gay.com",
  },
  {
    id: 5,
    image: "/realisations/sayna_group_mamadou_ba.png",
    type: "Mobile",
    titre: "Sayna-group",
    description: "Sayna-app est une application qui met en relation des services( Plombier, Electricien, Peintre, Jardinier,...) avec des clients ou utilisateur.L'application est développée avec Flutter",
    lien: "#",
  },
  {
    id: 6,
    image: "/realisations/sarah_consulting_mamadou_ba.png",
    type: "Refonte",
    titre: "Sarah-consulting",
    description: "Refonte du site vitrine de Sarah-consulting:Amélioration de l'expérience utilisateur, Modernisation de l'identité visuelle, Optimisation technique. Technologie utilisée: Wordpress",
    lien: "https://www.sarah-consulting.com",
  },
];

const Realisation = () => {
  return (
    <section className="py-20 bg-[#1F306B] px-4 md:px-20 py-30"
    id="realisations">
      <div className="max-w-6xl mx-auto text-white">
        {/* Titre et description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold mb-3">Dernières Réalisations</h2>
          <p className="text-gray-300 leading-relaxed max-w-2xl">
            J’ai développé des applications web, mobiles et des chatbots
            conversationnels. Parmi mes réalisations, on retrouve également des
            projets personnels comme
            <span className="font-semibold text-white"> SenMiniFoot</span>, une
            application mobile qui facilite la gestion des terrains de mini-foot
            au Sénégal et simplifie les réservations pour les joueurs et
            amoureux du football.
          </p>
        </motion.div>

        {/* Grille des projets */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projets.map((projet, index) => (
            <motion.div
              key={projet.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm hover:scale-[1.03] transition-all duration-300"
            >
              {/* Image */}
              <img
                src={projet.image}
                alt={projet.titre}
                className="w-full h-52 object-cover"
              />

              {/* Overlay animé au hover */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-[#007bff]/95 flex items-center justify-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm"
                >
                  {projet.description}
                </motion.p>
              </motion.div>

              {/* Bas de la carte */}
              <div className="bg-[#007bff] flex items-center justify-between px-4 py-3 text-white relative z-10" >
                <div>
                  <p className="uppercase text-xs opacity-80">{projet.type}</p>
                  <h3 className="font-semibold text-lg">{projet.titre}</h3>
                </div>
                <a
                  href={projet.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition-colors z-20"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realisation;
