'use client';

import { useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from './ui/badge';

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);

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

    if (projectsRef.current) {
      const children = projectsRef.current.querySelectorAll('.animate-on-scroll');
      children.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Tienda de autos Plantilla',
      description: 'Plataforma completa de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración. Incluye gestión de inventario en tiempo real y análisis de ventas.',
      image: '/projects/img/SRMotors.png',
      technologies: [
        'https://cdn.simpleicons.org/html5/E34F26',
        '/icons/css3.svg',
        'https://cdn.simpleicons.org/javascript/F7DF1E',
      ],
      techNames: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: 'https://millersebastian.github.io/TiendaDeAutos-SRmotors/',
      repoUrl: 'https://github.com/MillerSebastian/TiendaDeAutos-SRmotors',
    },
    {
      title: 'Life Sync app',
      description: 'Aplicación de gestión de tareas con funciones de colaboración en tiempo real, asignación de tareas, notificaciones push y seguimiento de progreso mediante dashboards interactivos.',
      image: '/projects/img/LifeSync.png',
      technologies: [
        'https://cdn.simpleicons.org/vuedotjs/4FC08D',
        'https://cdn.simpleicons.org/bulma/00D1B2',
        'https://cdn.simpleicons.org/firebase/FFCA28',
        'https://cdn.simpleicons.org/docker/2496ED',
        'https://cdn.simpleicons.org/typescript/3178C6',
      ],
      techNames: ['Vue', 'Bulma CSS', 'Firebase', 'Docker', 'TypeScript'],
      demoUrl: 'https://life-sync-cyan.vercel.app/login',
      repoUrl: 'https://github.com/MillerSebastian/Life-Sync',
    },
    {
      title: 'NearMe app',
      description: 'Aplicación inteligente que te muestra las tiendas más cercanas que disponen del producto que estás buscando. Podrás comparar opciones, contactar directamente con los comercios y realizar compras o reservas fácilmente. Además, incluye un panel administrativo para que las tiendas gestionen su inventario, pedidos y estadísticas en tiempo real.',
      image: '/projects/img/NearMe.png',
      technologies: [
        'https://cdn.simpleicons.org/html5/E34F26',
        '/icons/css3.svg',
        'https://cdn.simpleicons.org/javascript/F7DF1E',
      ],
      techNames: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: 'https://nearme-frontend-55sc.vercel.app/#/',
      repoUrl: 'https://github.com/MillerSebastian/nearme-frontend',
    },
    {
      title: 'DonaYa widget',
      description: 'Integra donaYa en tu sitio web con una sola línea de código y permite a tus usuarios ayudar a familias vulnerables.',
      image: '/projects/img/donaYa.png',
      technologies: [
        'https://cdn.simpleicons.org/react/61DAFB',
        'https://cdn.simpleicons.org/typescript/3178C6',
        'https://cdn.simpleicons.org/tailwindcss/38BDF8',
      ],
      techNames: ['React', 'TypeScript', 'Tailwind'],
      demoUrl: 'https://dona-ya.vercel.app/',
      repoUrl: 'https://github.com/MillerSebastian/donaYa',
    },
    {
      title: 'Speack Global app',
      description: 'Speack Global es una aplicación web diseñada para conectar a personas de todo el mundo en tiempo real. Permite chatear y compartir experiencias con cualquier usuario, mostrando datos en vivo como la actividad, el estado de conexión y la llegada instantánea de los mensajes. Su enfoque es crear una comunicación fluida, dinámica.',
      image: '/projects/img/global-speack.png',
      technologies: [
        'https://cdn.simpleicons.org/react/61DAFB',
        'https://cdn.simpleicons.org/tailwindcss/38BDF8',
        'https://cdn.simpleicons.org/firebase/FFCA28',
      ],
      techNames: ['React', 'Tailwind', 'Firebase'],
      demoUrl: 'https://speak-global-rouge.vercel.app/',
      repoUrl: 'https://github.com/MillerSebastian/speak-global/tree/main',
    },
    {
      title: 'plantilla E-comerse',
      description: 'Plantilla de e‑commerce moderna lista para conectar catálogo, carrito y checkout. Incluye listado con filtros en tiempo real, buscador inteligente, detalle de producto con galería, reseñas, wishlist y carrito persistente. Arquitectura escalable pensada para integrarse con cualquier API de pagos y panel de administración.',
      image: '/projects/img/techNova.png',
      technologies: [
        'https://cdn.simpleicons.org/react/61DAFB',
        'https://cdn.simpleicons.org/typescript/3178C6',
        'https://cdn.simpleicons.org/mysql/4479A1',
        'https://cdn.simpleicons.org/tailwindcss/38BDF8',
      ],
      techNames: [ 'React', 'TypeScript', 'MySQL', 'Tailwind'],
      demoUrl: 'https://tech-nova-front-end.vercel.app/login',
      repoUrl: 'https://github.com/MillerSebastian/TechNova-FrontEnd',
    },
  ];

  return (
    <section
      id="projects"
      className="section-full bg-gradient-to-br from-gray-900 via-black to-gray-900 py-24 md:py-28"
      ref={projectsRef}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/30 overflow-hidden hover:border-green-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 animate-on-scroll opacity-0 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 py-2">
                  {project.technologies.map((techIconUrl, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-green-500/10 border border-green-500/50 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300"
                      title={project.techNames[techIndex]}
                    >
                      <img src={techIconUrl} alt={project.techNames[techIndex]} className="w-5 h-5 inline-block" />
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold transition-all duration-300 hover:scale-105"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300 hover:scale-105"
                    onClick={() => window.open(project.repoUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Repo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
