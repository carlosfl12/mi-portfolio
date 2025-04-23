import { SiGithub, SiLinkedin } from "react-icons/si";
import DownloadCV from "../components/DownloadCV";
import ProfessionalProjects from "../components/ProfessionalProjects";
import StatsSection from "../components/StatsSection";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Sección: Introducción */}
      <section id="sobremi" className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Carlos Fuentes Lorente</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Desarrollador con experiencia en la creación de videojuegos y aplicaciones web.
        </p>
        <DownloadCV/>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/carlosfl12" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline transition transform hover:scale-105"><SiGithub className="text-2xl"/></a>
          <a href="https://www.linkedin.com/in/carlos-fuentes-lorente-61b92123b/" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline transition transform hover:scale-105"><SiLinkedin className="text-2xl"/></a>
        </div>
      </section>

      {/* Sección: Proyectos */}
      <Projects />
      
      <ProfessionalProjects/>

      <StatsSection />

      {/* Sección: Contacto */}
      <Contact />

    </div>
  );
}
