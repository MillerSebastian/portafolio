"use client";

import { useEffect, useRef } from "react";
import { Briefcase, GraduationCap, Languages } from "lucide-react";
import { Card } from "./ui/card";

export default function Experience() {
  const expRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-fade-in");
        });
      },
      { threshold: 0.1 }
    );

    if (expRef.current) {
      const children = expRef.current.querySelectorAll(".animate-on-scroll");
      children.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="section-full bg-gradient-to-br from-black via-gray-900 to-black py-24 md:py-28"
      ref={expRef}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Experiencia & Educación
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Un recorrido por mi experiencia profesional, formación académica y habilidades lingüísticas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Experiencia Profesional */}
          <div className="lg:col-span-2 space-y-10 animate-on-scroll opacity-0 transition-all duration-1000 delay-100">
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-green-500" />
              <h3 className="text-2xl font-bold text-green-400">Experiencia Profesional</h3>
            </div>

            <div className="relative pl-8 border-l border-green-500/30 space-y-8">
              {/* Cooweb */}
              <div className="relative">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-green-500 shadow-[0_0_20px_rgba(16,185,129,0.6)]" />
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/30 p-6 hover:border-green-500/60 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-lg font-semibold text-gray-200">DESARROLLADOR FRONTEND</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-green-400">Cooweb</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">Diciembre 2023 – Diciembre 2024</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Responsable del desarrollo de interfaces intuitivas y eficientes, garantizando una experiencia de usuario óptima y la integración fluida con servicios backend. Participé en el diseño de un bot de atención con n8n e implementé soluciones responsivas con frameworks CSS modernos, colaborando con equipos ágiles.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
                    <li>Vistas responsivas y dinámicas con Vue.js.</li>
                    <li>Integraciones con Firebase y APIs en Express/Node.js.</li>
                    <li>Diseño e implementación de bot de atención con n8n.</li>
                    <li>Optimización de rutas y lógica UI para mejorar carga y usabilidad.</li>
                  </ul>
                  <div className="mt-4 text-sm text-gray-400">
                    <p><span className="text-green-400">Tech stack:</span> Vue.js, Tailwind CSS, Bulma CSS, TypeScript, JavaScript, Node.js, Express, Firebase</p>
                    <p><span className="text-green-400">Tools:</span> Postman, Figma, Git, GitHub, ClickUp, Google Cloud, Google Workspace, n8n</p>
                  </div>
                </Card>
              </div>

              {/* Freelance */}
              <div className="relative">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-green-500 shadow-[0_0_20px_rgba(16,185,129,0.6)]" />
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/30 p-6 hover:border-green-500/60 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-lg font-semibold text-gray-200">DESARROLLADOR WEB FREELANCE</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-green-400">Proyectos independientes</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">Enero 2023 – Actualidad</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Desarrollo de soluciones a medida: e‑commerce, chatbots, bots de llamadas y software empresarial. Trabajo autónomo y en equipos remotos, fortaleciendo liderazgo, planificación y gestión del tiempo.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
                    <li>E‑commerce con integración de pagos (Stripe).</li>
                    <li>Chatbots conversacionales y bots de voz (Twilio, Chatbase).</li>
                    <li>Aplicaciones con Supabase y despliegues en Railway.</li>
                    <li>Gestión de proyectos con metodologías ágiles (Asana).</li>
                  </ul>
                  <div className="mt-4 text-sm text-gray-400">
                    <p><span className="text-green-400">Tech stack:</span> React.js, Next.js, Python (Flask, Django), Supabase, JavaScript, TypeScript</p>
                    <p><span className="text-green-400">Tools:</span> Chatbase, Twilio, Railway, Stripe, Hostinger, Git, GitHub, Figma, Asana</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Educación y Lenguajes */}
          <div className="space-y-10 animate-on-scroll opacity-0 transition-all duration-1000 delay-200">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-green-500" />
              <h3 className="text-2xl font-bold text-green-400">Educación</h3>
            </div>
            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/30 p-5 hover:border-green-500/60 transition-all duration-300">
                <p className="text-gray-200 font-semibold">Desarrollador Web Junior en formación</p>
                <p className="text-gray-400">RIWI, Barranquilla - Colombia</p>
                <p className="text-gray-500 text-sm">2025 – En curso</p>
              </Card>
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/30 p-5 hover:border-green-500/60 transition-all duration-300">
                <p className="text-gray-200 font-semibold">Técnico Profesional en Desarrollo de Computadoras</p>
                <p className="text-gray-400">Institución Universitaria Americana, Barranquilla - Colombia</p>
                <p className="text-gray-500 text-sm">Febrero 2024 – Diciembre 2024</p>
              </Card>
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/30 p-5 hover:border-green-500/60 transition-all duration-300">
                <p className="text-gray-200 font-semibold">Ingeniería de Sistemas (3 semestres cursados)</p>
                <p className="text-gray-400">Universidad Autónoma del Caribe, Barranquilla - Colombia</p>
                <p className="text-gray-500 text-sm">Enero 2023 – Noviembre 2024</p>
              </Card>
            </div>

            <div className="flex items-center gap-3">
              <Languages className="h-6 w-6 text-green-500" />
              <h3 className="text-2xl font-bold text-green-400">Lenguajes</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/30 p-5 hover:border-green-500/60 transition-all duration-300">
                <p className="text-gray-200 font-semibold">Español</p>
                <p className="text-gray-400">Nativo</p>
              </Card>
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/30 p-5 hover:border-green-500/60 transition-all duration-300">
                <p className="text-gray-200 font-semibold">Inglés</p>
                <p className="text-gray-400">A2</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
