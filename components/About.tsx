'use client';

import { useEffect, useRef } from 'react';
import { Code, Rocket, Users } from 'lucide-react';
import { Card } from './ui/card';

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      const children = aboutRef.current.querySelectorAll('.animate-on-scroll');
      children.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="section-full bg-gradient-to-br from-gray-900 via-black to-gray-900 py-24 md:py-28"
      ref={aboutRef}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0 transition-all duration-1000">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur-2xl opacity-20" />
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border-2 border-green-500/30 hover:border-green-500/60 transition-all duration-300">
                <img
                  src="/avatar/sebastian.png"
                  alt="Sebastian Rodelo"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-on-scroll opacity-0 transition-all duration-1000 delay-300">
            <div>
              <h2 className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                  Sobre Mí
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full" />
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Soy un desarrollador Full Stack apasionado por crear soluciones web innovadoras
              y escalables. Con experiencia en las últimas tecnologías del ecosistema JavaScript,
              me especializo en construir aplicaciones modernas y eficientes.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Como CEO de <span className="text-emerald-500 font-semibold">AtomicLabs</span>, lidero
              un talentoso equipo de desarrolladores freelance, colaborando en proyectos desafiantes
              y entregando resultados excepcionales a nuestros clientes.
            </p>

            {/* Stack Principal */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Stack Principal</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[ 
                  { name: 'Vue', iconUrl: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
                  { name: 'TypeScript', iconUrl: 'https://cdn.simpleicons.org/typescript/3178C6' },
                  { name: 'Firebase', iconUrl: 'https://cdn.simpleicons.org/firebase/FFCA28' },
                  { name: 'Tailwind', iconUrl: 'https://cdn.simpleicons.org/tailwindcss/38BDF8' },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-gray-800/50 border border-green-500/20 text-gray-200 py-4 px-4 hover:border-green-500/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300"
                    title={s.name}
                  >
                    <img src={s.iconUrl} alt={s.name} className="w-5 h-5" />
                    <span className="font-medium">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-6">
              <Card className="bg-gray-800/50 border-green-500/30 p-6 hover:border-green-500/60 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <Code className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-400 mb-2">Desarrollo Full Stack</h3>
                    <p className="text-gray-400">
                      Experiencia en frontend y backend con tecnologías modernas
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-800/50 border-green-500/30 p-6 hover:border-green-500/60 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <Rocket className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-400 mb-2">Innovación Constante</h3>
                    <p className="text-gray-400">
                      Siempre aprendiendo y adoptando las últimas tendencias tecnológicas
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-800/50 border-green-500/30 p-6 hover:border-green-500/60 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <Users className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-400 mb-2">Liderazgo en AtomicLabs</h3>
                    <p className="text-gray-400">
                      Dirigiendo un equipo de desarrolladores freelance de alto rendimiento
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
