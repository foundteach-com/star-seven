"use client";

import { useAuthStore } from "@/app/store/useAuthStore";
import { BookOpen, GraduationCap, Clock, ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const { user } = useAuthStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-indigo-700 rounded-3xl p-8 md:p-12 mb-12 shadow-xl text-white overflow-hidden relative">
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {user ? `¡Hola de nuevo, ${user.name || 'Estudiante'}!` : 'Bienvenido a Star Seven'}
          </motion.h1>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl">
            Tu camino hacia el éxito técnico comienza aquí. Explora nuestra biblioteca de cursos diseñados por expertos de la industria.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/courses" 
              className="bg-white text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center"
            >
              Ver Cursos <BookOpen className="ml-2 w-5 h-5" />
            </Link>
            {!user && (
              <Link 
                href="/signup" 
                className="bg-primary-500 text-white border border-primary-400 hover:bg-primary-400 px-6 py-3 rounded-xl font-bold transition-all flex items-center"
              >
                Registrarme <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
        {/* Decoración abstracta */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* Stats / Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { icon: <GraduationCap className="w-8 h-8 text-primary-600" />, label: 'Certificación Profesional', desc: 'Obtén diplomas válidos para impulsar tu CV.' },
          { icon: <Clock className="w-8 h-8 text-primary-600" />, label: 'Acceso de Por Vida', desc: 'Aprende a tu ritmo, el contenido nunca expira.' },
          { icon: <Play className="w-8 h-8 text-primary-600" />, label: 'Contenido Actualizado', desc: 'Cursos renovados con las últimas tecnologías.' },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-primary-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.label}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Featured Courses Placeholder */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Cursos Destacados</h2>
          <Link href="/courses" className="text-primary-600 font-semibold hover:underline flex items-center">
            Ver todos <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:scale-[1.02] transition-transform duration-300">
              <div className="h-48 bg-gray-200 animate-pulse relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <BookOpen className="w-12 h-12" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="bg-primary-50 text-primary-600 text-xs font-bold px-2 py-1 rounded">Tecnología</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">Próximamente: Curso Técnico {item}</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  Estamos preparando contenido de alta calidad para que puedas dominar nuevas habilidades técnicas rápidamente.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-primary-600">$0.00</span>
                  <button className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200">
                    Saber más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
