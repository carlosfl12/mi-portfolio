import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-backgroundLight text-black dark:bg-backgroundDark dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-grow w-full max-w-5xl mx-auto px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6 border-t border-gray-200 dark:border-gray-700">
        &copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
      </footer>
    </div>
  );
}
