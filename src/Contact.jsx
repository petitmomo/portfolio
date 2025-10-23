import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaFacebook } from "react-icons/fa6";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="relative bg-[#1E2A5E] text-white py-16 px-6 md:px-20 overflow-hidden"
        >
            {/* ✅ Image de fond (optionnelle) */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{
                    backgroundImage: `url('contact.jpg')`, // 🔁 Mets ton image ici
                }}
            ></div>

            {/* ✅ Contenu principal */}
            <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-white mb-4 text-left">Contact</h1>
                    <h4 className="text-2xl md:text-2xl font-semi-bold">
                        Contacte-moi et créons quelque chose de génial ensemble!
                    </h4>

                    <div className="space-y-2 text-lg">
                        <p className="flex items-center gap-2">
                            <Mail className="text-blue-400" size={20} />{" "}
                            mamadou.ba@pinaltech.sn
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone className="text-blue-400" size={20} /> +221 77 554 26 62
                        </p>
                        <p className="flex items-center gap-2">
                            <MapPin className="text-blue-400" size={20} /> Saly, Mbour, Thiès,
                            Sénégal
                        </p>
                    </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="flex space-x-4 pt-4">
                    <a href="https://github.com/petitmomo" className="bg-white text-black p-3 rounded-full hover:bg-[#14A3F1]" target="_blank"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/mamadou-ba-97b87920a/" className="bg-white text-black p-3 rounded-full hover:bg-[#14A3F1]" target="_blank"><FaLinkedin /></a>
                    <a href="https://x.com/Mamadou63090858" className="bg-white text-black p-3 rounded-full hover:bg-[#14A3F1]" target="_blank"><FaXTwitter /></a>
                    <a href="https://www.facebook.com/Hockmail" className="bg-white text-black p-3 rounded-full hover:bg-[#14A3F1]" target="_blank"><FaFacebook /></a>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
