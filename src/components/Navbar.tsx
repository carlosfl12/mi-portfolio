import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Inicio", path: "#inicio" },
  { name: "Proyectos", path: "#proyectos" },
  { name: "Contacto", path: "#contacto" },
];


export default function Navbar() {
  return (
    <nav 
    className="bg-white shadow-md dark:bg-gray-900"
    style={{backgroundColor: 'oklch(0.21 0.03 275.2)'}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center ">
        <h1 className="text-xl font-bold text-white dark:text-white">Carlos Fuentes</h1>
        <div className="flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors  ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
