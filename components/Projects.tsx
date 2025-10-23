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
        'https://cdn.simpleicons.org/css3/1572B6',
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
        'https://cdn.simpleicons.org/supabase/3FCF8E',
        'https://cdn.simpleicons.org/typescript/3178C6',
        'https://cdn.simpleicons.org/tailwindcss/38BDF8',
      ],
      techNames: ['Vue', 'Supabase', 'TypeScript', 'Tailwind'],
      demoUrl: 'https://life-sync-cyan.vercel.app/login',
      repoUrl: 'https://github.com/MillerSebastian/Life-Sync',
    },
    {
      title: 'NearMe app',
      description: 'Dashboard analítico para gestión de redes sociales con métricas en tiempo real, programación de publicaciones, análisis de audiencia y generación de reportes automáticos.',
      image: '/projects/img/NearMe.png',
      technologies: [
        'https://cdn.simpleicons.org/react/61DAFB',
        'https://cdn.simpleicons.org/nodedotjs/5FA04E',
        'https://cdn.simpleicons.org/mongodb/47A248',
        'https://cdn.simpleicons.org/bootstrap/7952B3',
      ],
      techNames: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
      demoUrl: 'https://nearme-frontend-55sc.vercel.app/#/',
      repoUrl: 'https://github.com/MillerSebastian/nearme-frontend',
    },
    {
      title: 'DonaYa widget',
      description: 'Sistema de gestión de contenido para portafolios creativos con editor visual drag-and-drop, optimización de imágenes automática y SEO integrado para máxima visibilidad.',
      image: '/projects/img/donaYa.png',
      technologies: [
        'https://cdn.simpleicons.org/astro/BC52EE',
        'https://cdn.simpleicons.org/typescript/3178C6',
        'https://cdn.simpleicons.org/tailwindcss/38BDF8',
        'https://cdn.simpleicons.org/supabase/3FCF8E',
      ],
      techNames: ['Astro', 'TypeScript', 'Tailwind', 'Supabase'],
      demoUrl: 'https://dona-ya.vercel.app/',
      repoUrl: 'https://github.com/MillerSebastian/donaYa',
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Aplicación de mensajería instantánea con salas privadas y grupales, compartir archivos multimedia, llamadas de voz, y cifrado end-to-end para máxima seguridad.',
      image: '/projects/img/techNova.png',
      technologies: [
        'https://cdn.simpleicons.org/nextdotjs/FFFFFF',
        'https://cdn.simpleicons.org/supabase/3FCF8E',
        'https://cdn.simpleicons.org/typescript/3178C6',
        'https://cdn.simpleicons.org/tailwindcss/38BDF8',
      ],
      techNames: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind'],
      demoUrl: '#',
      repoUrl: 'https://github.com/MillerSebastian',
    },
    {
      title: 'Fitness Tracker',
      description: 'Aplicación para seguimiento de ejercicios y nutrición con planes personalizados, estadísticas de progreso, integración con wearables y comunidad de usuarios para motivación.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: [
        'https://cdn.simpleicons.org/nuxtdotjs/00DC82',
        'https://cdn.simpleicons.org/prisma/2D3748',
        'https://cdn.simpleicons.org/typescript/3178C6',
        'https://cdn.simpleicons.org/tailwindcss/38BDF8',
      ],
      techNames: ['Nuxt', 'Prisma', 'TypeScript', 'Tailwind'],
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
