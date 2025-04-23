import { stats } from "../data/stats";
export default function StatsSection() {
    return (
      <section className="my-12 text-center space-y-8 text-white">
        <h2 className="text-3xl font-bold">Resumen</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md p-4 rounded-xl w-full max-w-[150px] hover:scale-105 transition-transform"
              style={{backgroundColor:'oklch(0.28 0.03 268.48)'}}
            >
              <div className="text-4xl">{stat.icon}</div>
              <div className="text-xl font-bold mt-2">{stat.value}</div>
              <div className="text-sm text-white dark:text-gray-300 text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  