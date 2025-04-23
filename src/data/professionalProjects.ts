export interface ProfessionalProject {
    title: string;
    description: string;
    contribution: string;
    technologies?: string[];
  }
  
  export const professionalProjects: ProfessionalProject[] = [
    {
      title: "Chatbot en local",
      description: "Autis Ingenieros SLU.",
      contribution: "Usando Python, creación de un chatbot en local, permitiendo así el mejor flujo de trabajo dentro de la empresa",
      technologies: ["React", "TypeScript", "Python", "PostgreSQL"]
    },
    {
      title: "Prácticas empresariales",
      description: "Mr. Moon Rocket",
      contribution: "Conexión con APIs, creación de tablas dinámicas con precios de distintos hoteles, refactorización de código.",
      technologies: ["PHP", "Laravel", "JavaScript", "jQuery"]
    },
  ];
  