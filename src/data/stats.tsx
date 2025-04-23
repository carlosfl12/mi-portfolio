import { FaCode, FaGamepad, FaLaptopCode, FaUserTie } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

export interface Stats {
    icon: React.ReactNode;
    value: string;
    label: string;
}

export const stats: Stats[] = [
    { icon: <FaGamepad className="text-4xl text-purple-500" />, value: "1", label: "Videojuego desarrollado" },
    { icon: <FaLaptopCode className="text-4xl text-green-500" />, value: "3", label: "Proyectos personales" },
    { icon: <FaCode className="text-4xl text-blue-500" />, value: "+3 años", label: "Experiencia programando" },
    { icon: <FaUserTie className="text-4xl text-yellow-500" />, value: "3", label: "Proyectos en empresas"},
    { icon: <SiPostgresql className="text-4xl text-indigo-500" />, value: "12", label: "Tecnologías utilizadas" },
  ];
  