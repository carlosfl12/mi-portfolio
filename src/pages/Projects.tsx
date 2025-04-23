import { languageColors, languageIcons } from "../data/languageColors";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Proyectos Destacados</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.languages.map((lang) => {
                const Icon = languageIcons[lang];
                return (
                  <span
                    key={lang}
                    className={`flex items-center gap-2 px-3 py-1 text-sm rounded-full font-medium ring-1 ring-inset transition-transform hover:scale-105 ${
                      languageColors[lang] || "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {Icon && <Icon className="text-base" />}
                    {lang}
                  </span>
                );
              })}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              Ver proyecto →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
