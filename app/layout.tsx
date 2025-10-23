import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sebastian Rodelo | Full Stack Developer & CEO AtomicLabs',
  description: 'Desarrollador Full Stack especializado en React, Next.js, Vue, TypeScript, y tecnologías modernas. CEO de AtomicLabs - Grupo de desarrolladores freelance.',
  keywords: 'Sebastian Rodelo, Full Stack Developer, React, Next.js, Vue, TypeScript, Tailwind CSS, Firebase, Supabase, AtomicLabs, Desarrollador Web',
  authors: [{ name: 'Sebastian Rodelo' }],
  icons: {
    icon: '/icon-sr.svg',
  },
  openGraph: {
    title: 'Sebastian Rodelo | Full Stack Developer',
    description: 'Desarrollador Full Stack especializado en React, Next.js, Vue y tecnologías modernas.',
    url: 'https://github.com/MillerSebastian',
    siteName: 'Sebastian Rodelo Portfolio',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sebastian Rodelo | Full Stack Developer',
    description: 'Desarrollador Full Stack & CEO AtomicLabs',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
