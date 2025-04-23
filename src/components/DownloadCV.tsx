import { FaDownload } from "react-icons/fa";

export default function DownloadCV() {
  return (
    <a
      href="/cv/CarlosFuentes_CV.pdf"
      download
      className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition transform hover:scale-105"
      title="Descargar mi CV"
    >
      <FaDownload className="text-lg" />
      Disponible para trabajar
    </a>
  );
}
