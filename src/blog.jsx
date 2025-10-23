import React, { useEffect, useState } from "react";
import { Calendar, Folder } from "lucide-react";
import { motion } from "framer-motion";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "./firebaseConfig";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  // Récupération des articles depuis Firestore
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "articles"), orderBy("date", "desc"), limit(6));
        const querySnapshot = await getDocs(q);
        const articlesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(articlesData);
      } catch (error) {
        console.error("Erreur lors du chargement des articles :", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="bg-[#1F306B] py-30 px-6" id="blog">
      <div className="max-w-6xl mx-auto text-white">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-3 text-left">Derniers Articles</h2>
          <p className="text-white max-w-2xl  text-left">
            Explorez mes derniers articles sur la cybersécurité, le développement web et les bonnes pratiques pour renforcer vos projets numériques.
          </p>
        </motion.div>

        {/* Grille des posts */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              {/* Image locale */}
              <img
                src={`/blog/${post.image}`}
                alt={post.titre}
                className="h-48 w-full object-cover"
              />

              {/* Contenu */}
              <div className="p-5 text-gray-800 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-[#007bff] mb-2 line-clamp-2">
                  {post.titre}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {post.description}
                </p>
                <a
                  href={`/article/${post.id}`}
                  className="text-[#007bff] text-sm font-medium hover:underline mb-4"
                >
                  Lire la suite
                </a>

                {/* Footer */}
                <div className="mt-auto border-t pt-3 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[#007bff]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Folder className="w-4 h-4 text-[#007bff]" />
                    <span>{post.categorie}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
