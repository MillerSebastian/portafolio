'use client';

import { useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

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

    if (skillsRef.current) {
      const children = skillsRef.current.querySelectorAll('.animate-on-scroll');
      children.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  const primarySkills = [
    { name: 'React', iconUrl: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Vue', iconUrl: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
    { name: 'Next.js', iconUrl: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF' },
    { name: 'TypeScript', iconUrl: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'Tailwind CSS', iconUrl: 'https://cdn.simpleicons.org/tailwindcss/38BDF8' },
    { name: 'Bootstrap', iconUrl: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
    { name: 'Astro', iconUrl: 'https://cdn.simpleicons.org/astro/BC52EE' },
    { name: 'JavaScript', iconUrl: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'Angular', iconUrl: 'https://cdn.simpleicons.org/angular/DD0031' },
  ];

  const secondarySkills = [
    { name: 'Node.js', iconUrl: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
    { name: 'MongoDB', iconUrl: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'Prisma', iconUrl: 'https://cdn.simpleicons.org/prisma/2D3748' },
    { name: 'MySQL', iconUrl: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'Firebase', iconUrl: 'https://cdn.simpleicons.org/firebase/FFCA28' },
    { name: 'Supabase', iconUrl: 'https://cdn.simpleicons.org/supabase/3FCF8E' },
  ];

  const technicalSkills = [
    { name: 'Git', iconUrl: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'GitHub', iconUrl: 'https://cdn.simpleicons.org/github/FFFFFF' },
    { name: 'npm', iconUrl: 'https://cdn.simpleicons.org/npm/CB3837' },
    { name: 'Terminal', iconUrl: 'https://cdn.simpleicons.org/gnubash/4EAA25' },
    { name: 'macOS', iconUrl: 'https://cdn.simpleicons.org/apple/FFFFFF' },
    { name: 'n8n', iconUrl: 'https://cdn.simpleicons.org/n8n' },
    { name: 'Excalidraw', iconUrl: 'https://cdn.simpleicons.org/excalidraw/6965DB' },
    { name: 'Figma', iconUrl: 'https://cdn.simpleicons.org/figma/F24E1E' },
  ];

  const frontendSkills = primarySkills;
  const backendSkills = secondarySkills;
  const toolsSkills = technicalSkills;

  return (
    <section
      id="skills"
      className="section-full bg-gradient-to-br from-black via-gray-900 to-black py-24 md:py-28"
      ref={skillsRef}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo diariamente
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Frontend */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-100">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Frontend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-gray-800/50 border border-green-500/20 text-gray-200 py-4 px-4 hover:border-green-500/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300"
                  title={skill.name}
                >
                  <img src={skill.iconUrl} alt={skill.name} className="w-5 h-5" />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools - izquierda en desktop */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-200">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Herramientas de trabajo</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-start">
              {toolsSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-gray-800/50 border border-green-500/20 text-gray-200 py-4 px-4 hover:border-green-500/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300"
                  title={skill.name}
                >
                  <img src={skill.iconUrl} alt={skill.name} className="w-5 h-5" />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend - derecha en desktop */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-300">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Backend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:justify-end">
              {backendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-gray-800/50 border border-green-500/20 text-gray-200 py-4 px-4 hover:border-green-500/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300"
                  title={skill.name}
                >
                  <img src={skill.iconUrl} alt={skill.name} className="w-5 h-5" />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
