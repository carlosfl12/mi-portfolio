import { languageColors, languageIcons } from "../data/languageColors";
import { professionalProjects } from "../data/professionalProjects";

export default function ProfessionalProjects() {
  return (
    <section className="space-y-8 py-10">
      <h2 className="text-3xl font-bold text-center text-white">Experiencia Profesional</h2>
      <div 
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {professionalProjects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow space-y-4"
            style={{backgroundColor:'oklch(0.28 0.03 268.48)'}}
          >
            <h3 className="text-xl font-semibold text-white">{proj.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm text-white">{proj.description}</p>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {proj.contribution}
            </p>
            {proj.technologies && (
              <div className="flex flex-wrap gap-2 mb-2">
              {proj.technologies?.map((lang) => {
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
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
