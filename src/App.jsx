import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import AproposSection from "./Apropos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Competences from "./competences";
import Services from "./services";
import Realisation from "./realisations";
import BlogSection from "./blog";
import ArticleDetail from "./ArticleDetail";
import Footer from "./Footer";
import Navbar from "./NavBar";
import ScrollToTopButton from "./composants/ScrolleTotop";
import ContactSection from "./Contact";

// Animation fade & slide
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Page principale */}
        <Route
          path="/"
          element={
            <>
              <Navbar />

              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.3 }}
                className="scroll-smooth"
              >
                {/* Sections animées */}
                <motion.section
                  id="apropos"
                  variants={fadeInUp}
                  transition={{ duration: 0.8 }}
                >
                  <AproposSection />
                </motion.section>

                <motion.section
                  id="competences"
                  variants={fadeInUp}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Competences />
                </motion.section>

                <motion.section
                  id="services"
                  variants={fadeInUp}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Services />
                </motion.section>

                <motion.section
                  id="realisations"
                  variants={fadeInUp}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Realisation />
                </motion.section>

                <motion.section
                  id="blog"
                  variants={fadeInUp}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <BlogSection />
                </motion.section>

                <motion.section
                  id="contact"
                  variants={fadeInUp}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <ContactSection />
                </motion.section>

                <Footer />
                <ScrollToTopButton />
              </motion.div>
            </>
          }
        />

        {/* Page de détail d’un article */}
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
