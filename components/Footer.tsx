'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-green-500/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                Sebastian Rodelo
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Desarrollador Full Stack apasionado por crear soluciones innovadoras.
              CEO de AtomicLabs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Sígueme</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/MillerSebastian"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-green-500 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-green-500 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@sebastianrodelo.com"
                className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-green-500 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-500/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} Sebastian Rodelo. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            Hecho con <Heart className="h-4 w-4 text-green-500 fill-green-500 animate-pulse" /> y{' '}
            <span className="text-green-500 font-semibold">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
