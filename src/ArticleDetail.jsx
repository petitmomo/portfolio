import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { Calendar, Folder, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const ArticleDetail = () => {
  const { id } = useParams(); // Récupération de l’ID depuis l’URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, "articles", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setArticle({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("Article non trouvé !");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l’article :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#0b1e5b] text-white">
        <p>Chargement de l’article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-[#0b1e5b] text-white">
        <p>Article introuvable 😕</p>
        <Link to="/" className="text-[#007bff] hover:underline mt-4">
          Retour à l’accueil
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#0b1e5b] min-h-screen py-16 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Bouton retour */}
        <Link
          to="/"
          className="flex items-center gap-2 text-[#007bff] mb-8 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Retour aux articles
        </Link>

        {/* Image principale */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          src={`/blog/${article.image}`}
          alt={article.titre}
          className="w-full h-80 object-cover rounded-lg shadow-lg mb-8"
        />

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-3xl font-bold mb-3">{article.titre}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-[#007bff]" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Folder className="w-4 h-4 text-[#007bff]" />
              <span>{article.categorie}</span>
            </div>
          </div>
        </motion.div>

        {/* Contenu de l’article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-200 leading-relaxed space-y-4"
        >
          {article.contenu ? (
            article.contenu.split("\n").map((para, index) => (
              <p key={index} className="text-justify">
                {para}
              </p>
            ))
          ) : (
            <p>Aucun contenu disponible pour cet article.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleDetail;
