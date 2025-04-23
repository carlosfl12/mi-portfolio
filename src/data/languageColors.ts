import { IconType } from "react-icons";
import {
  SiBlender,
  SiCplusplus,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiLinkedin,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
  SiUnrealengine
} from "react-icons/si";

export const languageColors: Record<string, string> = {
    JavaScript: "bg-yellow-100 text-yellow-800",
    TypeScript: "bg-blue-100 text-[#3178c6]",
    Python: "bg-blue-100 text-[#3776ab]",
    React: "bg-[#61dafb]/20 text-[#61dafb]",
    TailwindCSS: "bg-sky-100 text-[#38bdf8]",
    "C#": "bg-purple-100 text-[#68217A]",
    Unity: "bg-gray-200 text-gray-900", 
    HTML: "bg-orange-100 text-[#e34f26]",
    CSS: "bg-blue-100 text-[#264de4]",
    "C++": "bg-blue-100 text-[#00599C]",
    Blender: "bg-orange-100 text-[#f5792a]",
    "Unreal Engine": "bg-gray-200 text-[#0e1128]",
    GitHub: "bg-gray-100 text-[#181717]",
    LinkedIn: "bg-blue-100 text-[#0a66c2]",
    PHP: "bg-indigo-200 text-indigo-800",
    jQuery: "bg-blue-100 text-blue-800",
    PostgreSQL: "bg-blue-900 text-white", 
    Laravel: "bg-red-200 text-red-800",  
  };

export const languageIcons: Record<string, IconType> = {
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "Python": SiPython,
    "React": SiReact,
    "TailwindCSS": SiTailwindcss,
    "C#": SiSharp,
    "Unity": SiUnity,
    "Unreal Engine": SiUnrealengine,
    "HTML": SiHtml5,
    "CSS": SiCss3,
    "C++": SiCplusplus,
    "Blender": SiBlender,
    Github: SiGithub,
    Linkedin: SiLinkedin,
    PHP: SiPhp,
    jQuery: SiJquery,
    Laravel: SiLaravel,
    PostgreSQL: SiPostgresql
  };

  