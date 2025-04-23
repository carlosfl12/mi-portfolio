export interface Project {
    title: string;
    description: string;
    languages: string[];
    link: string;
    image: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Dentist Hour",
      description: "Un juego hecho en Unreal Engine 5.",
      languages: ["C++", "Unreal Engine", "Blender"],
      link: "https://example.com/juego-plataformas",
      image: "/images/MainMenu_2.png"
    },
    {
      title: "App de Gimnasio",
      description: "Una aplicación de tareas con React, TypeScript y Node.",
      languages: ["React", "TypeScript", "Node.js"],
      link: "https://github.com/tuusuario/app-tareas",
      image: "/images/MainMenu_2.png"

    },
    {
      title: "Conversor de facturas",
      description: "Conversor de facturas a apunte contable hecho en Python.",
      languages: ["Python"],
      link: "https://itch.io/roguelike-dungeon",
      image: "/images/MainMenu_2.png"

    },
    {
      title: "Meteorite landings",
      description: "Proyecto de un curso de ciencia de datos en el que se clasifican los tipos de meteoritos que han caído en la tierra y hay registro de ellos.",
      languages: ["Python"],
      link: "https://itch.io/roguelike-dungeon",
      image: "/images/MainMenu_2.png"

    },
  ];
  