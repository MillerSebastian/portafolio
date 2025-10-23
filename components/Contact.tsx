'use client';

import { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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

    if (contactRef.current) {
      const children = contactRef.current.querySelectorAll('.animate-on-scroll');
      children.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: '¡Mensaje enviado!',
      description: 'Gracias por contactarme. Te responderé pronto.',
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="section-full bg-gradient-to-br from-black via-gray-900 to-black py-24 md:py-28"
      ref={contactRef}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-on-scroll opacity-0 transition-all duration-1000 delay-100">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/30 p-6 hover:border-green-500/60 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-green-500/10 rounded-lg">
                  <Mail className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400">Email</h3>
                  <p className="text-gray-400">contact@sebastianrodelo.com</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/30 p-6 hover:border-green-500/60 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-green-500/10 rounded-lg">
                  <Phone className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400">Teléfono</h3>
                  <p className="text-gray-400">+57 123 456 7890</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/30 p-6 hover:border-green-500/60 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-green-500/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400">Ubicación</h3>
                  <p className="text-gray-400">Colombia</p>
                </div>
              </div>
            </Card>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur-xl opacity-20" />
              <Card className="relative bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/50 p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-4">AtomicLabs</h3>
                <p className="text-gray-300 leading-relaxed">
                  ¿Buscas un equipo de desarrolladores freelance de alto rendimiento?
                  En AtomicLabs transformamos tus ideas en realidad digital.
                </p>
              </Card>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/30 p-8 animate-on-scroll opacity-0 transition-all duration-1000 delay-200 hover:border-green-500/60">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-green-400 mb-2">
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-900/50 border-green-500/30 text-white focus:border-green-500 transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-green-400 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-900/50 border-green-500/30 text-white focus:border-green-500 transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-green-400 mb-2">
                  Asunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-gray-900/50 border-green-500/30 text-white focus:border-green-500 transition-all"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-green-400 mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-gray-900/50 border-green-500/30 text-white focus:border-green-500 transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/50"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensaje
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
