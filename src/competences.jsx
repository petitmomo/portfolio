import Slider from 'react-slick';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaBrain,
  FaShieldAlt,
  FaHtml5,
  FaCss3Alt,
  
} from 'react-icons/fa';
import { SiFlutter, SiDart, SiFirebase, SiPhp, SiLangchain} from 'react-icons/si';

export default function Competences() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const skills = [
    { icon: <FaHtml5 className="text-orange-600" />, name: 'HTML5' },
    { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS3' },
    { icon: <FaReact className="text-cyan-400" />, name: 'React' },
    { icon: <SiFlutter className="text-blue-400" />, name: 'Flutter' },
    { icon: <SiDart className="text-sky-500" />, name: 'Dart' },
    { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
    { icon: <FaPython className="text-yellow-500" />, name: 'Python' },
    { icon: <SiPhp className="text-red-600" />, name: 'PHP' },
    { icon: <SiFirebase className="text-amber-500" />, name: 'Firebase' },
    { icon: <FaBrain className="text-purple-500" />, name: 'IA' },
    {icon: <SiLangchain className="text-blue-500" />, name: 'Langchin' },
    { icon: <FaShieldAlt className="text-purple-700" />, name: 'Cybersécurité' },
  ];

  return (
    <section id="competences" className="py-20 bg-[#1F306B] px-4 md:px-20 py-30">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-left">
          Mes Compétences
        </h1>

        <p className="text-white mb-10 max-w-2xl text-left">
          J’ai développé un ensemble de compétences dans les domaines du développement web et mobile,
          de l’intelligence artificielle et de la cybersécurité, me permettant de créer des solutions
          performantes et sécurisées.
        </p>

        <div className="max-w-6xl">
          <Slider {...settings}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-3 p-4 transition-transform hover:scale-105"
              >
                <div className="text-6xl">{skill.icon}</div>
                <p className="text-white font-medium">{skill.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
