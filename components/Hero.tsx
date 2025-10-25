'use client';

import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownloadCV = () => {
    window.open('/Sebastian Rodelo.docx.pdf', '_blank');
  };

  return (
    <section
      id="hero"
      className="section-full relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
      ref={heroRef}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-2xl opacity-30 animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-bold relative">
              <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                Sebastian Rodelo
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
              Full Stack Developer
            </h2>
            <p className="text-xl md:text-2xl text-green-400 font-medium">
              CEO @{' '}
              <Button
                className="text-green-500 font-semibold px-5 py-2.5 rounded-md align-middle text-xl md:text-2xl hover:text-green-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] transition-all duration-300"
                onClick={() => window.open('https://atomiclabs.up.railway.app/', '_blank')}
                aria-label="Abrir sitio de AtomicLabs"
              >
                AtomicLabs
              </Button>
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Creando experiencias web excepcionales con las tecnologías más modernas.
            Líder de un equipo de desarrolladores freelance apasionados por la innovación.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button
              onClick={handleDownloadCV}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/50"
            >
              <Download className="mr-2 h-5 w-5" />
              Descargar CV
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://github.com/MillerSebastian', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>

          <div className="flex gap-6 pt-8">
            <a
              href="https://github.com/MillerSebastian"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/sebastian-rodelo-139696266/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="mailto:sebastianrodelog@gmail.com"
              className="text-gray-400 hover:text-green-500 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
