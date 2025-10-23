import { FaGithub, FaLinkedin, FaXTwitter, FaFacebook } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';

export default function AproposSection() {
  return (
    <section className="bg-[#1F306B] min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-16"
      id="apropos">
      {/* Gauche : Texte */}
      <div className="flex-1 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Mamadou Ba
        </h1>
        {/* --- Texte animé --- */}

        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Je suis{' '}
          <span className="text-[#14A3F1]">
            <Typewriter
              words={[
                'Développeur Web et Mobile',
                'Développeur IA',
                'Pentesteur',
                'Analyste en Cybersécurité',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <p className="text-white max-w-xl">
          Passionné par les technologies numériques et l’innovation.
          Fort de compétences en <span className="text-[#14A3F1] font-bold">développement web</span>, <span className="text-[#14A3F1] font-bold">mobile</span> et en <span className="text-[#14A3F1] font-bold">intélligence artificielle</span>, j’ai également renforcé mon expertise avec des certifications dans le domaine de la <span className="text-[#14A3F1] font-bold">cybersécurité</span>. Mon profil combine <span className="text-[#14A3F1] font-bold">créativité</span>, <span className="text-[#14A3F1] font-bold">savoir-faire</span>,<span className="text-[#14A3F1] font-bold">technique et rigueur</span> pour relever les défis liés à la transformation digitale et à la protection des systèmes d’information.
        </p>

        {/* Réseaux sociaux */}
        <div className="flex space-x-4 pt-4">
          <a href="https://github.com/petitmomo" className="bg-white text-black p-3 rounded-full hover:bg-[#14A3F1]" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/mamadou-ba-97b87920a/" className="bg-white text-black p-3 rounded-full hover:bg-[#14A3F1]" target="_blank"><FaLinkedin /></a>
          <a href="https://x.com/Mamadou63090858" className="bg-white text-black p-3 rounded-full hover:bg-[#14A3F1]" target="_blank"><FaXTwitter /></a>
          <a href="https://www.facebook.com/Hockmail" className="bg-white text-black p-3 rounded-full hover:bg-[#14A3F1]" target="_blank"><FaFacebook /></a>

        </div>

        {/* Bouton */}
        <a
          href="#contact"
          className="mt-6 inline-block bg-[#14A3F1] hover:bg-[#000000] text-white font-medium py-3 px-6 rounded-lg shadow-md flex items-center gap-2 transition duration-300"
        >
          ⭐ Me contacter
        </a>

      </div>

      {/* --- DROITE : Image circulaire --- */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-[4px] border-[#14A3F1] shadow-xl">
          <img
            src="/image.jpg"
            alt="Photo de profil"
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </section>
  );
}
