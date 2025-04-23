
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section className="text-white py-12 px-4 text-center">
      <hr className="border-gray-600 mb-6" />
      <h2 className="text-3xl font-bold mb-2">Contacto</h2>
      <p className="mb-6 text-sm text-gray-300">
        ¿Quieres colaborar conmigo o ver más sobre mi trabajo? ¡Aquí me encuentras!
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xl">
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub className="text-white text-2xl" />
        </a>

        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0A66C2] p-1 rounded hover:scale-110 transition-transform"
        >
          <FaLinkedin className="text-white text-xl" />
        </a>

        <div className="flex items-center gap-2">
          <HiOutlineMail className="text-blue-400 text-xl" />
          <a
            href="mailto:cfuenteslorente@gmail.com"
            className="text-white hover:underline"
          >
            cfuenteslorente@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
