"use client";

import { useAuthStore } from "@/app/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LayoutDashboard, BookOpen, GraduationCap, Settings, User as UserIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const { user, token } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
        router.push("/login");
    }
  }, [token, router]);

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Mini */}
        <aside className="w-full md:w-64 space-y-2">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center mb-6">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary-50">
                    <UserIcon className="w-10 h-10 text-primary-600" />
                </div>
                <h2 className="text-xl font-black text-gray-900 truncate">{user.name || 'Estudiante'}</h2>
                <p className="text-gray-500 text-xs truncate">{user.email}</p>
                <div className="mt-4 bg-primary-50 text-xs font-bold text-primary-700 py-1 px-3 rounded-full inline-block">
                    {user.role}
                </div>
            </div>

            <nav className="space-y-1">
                <button className="w-full flex items-center px-4 py-3 text-sm font-bold text-primary-600 bg-primary-50 rounded-2xl transition-all">
                    <LayoutDashboard className="w-5 h-5 mr-3" /> Dashboard
                </button>
                <button className="w-full flex items-center px-4 py-3 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-2xl transition-all">
                    <BookOpen className="w-5 h-5 mr-3" /> Mis Cursos
                </button>
                <button className="w-full flex items-center px-4 py-3 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-2xl transition-all">
                    <GraduationCap className="w-5 h-5 mr-3" /> Certificados
                </button>
                <button className="w-full flex items-center px-4 py-3 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-2xl transition-all">
                    <Settings className="w-5 h-5 mr-3" /> Configuración
                </button>
            </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1">
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 col-span-full">
                    <h1 className="text-2xl font-black text-gray-900 mb-2">Panel de Control</h1>
                    <p className="text-gray-500 text-sm">Gestiona tu aprendizaje y haz seguimiento a tu progreso técnico.</p>
                </div>

                {/* Stat Card 1 */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 lg:col-span-1">
                    <p className="text-gray-500 text-sm font-bold mb-1">Cursos Inscritos</p>
                    <div className="flex items-center justify-between">
                        <span className="text-4xl font-black text-gray-900">0</span>
                        <div className="bg-blue-50 p-3 rounded-2xl">
                            <BookOpen className="w-6 h-6 text-blue-500" />
                        </div>
                    </div>
                </div>

                {/* Stat Card 2 */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 lg:col-span-1">
                    <p className="text-gray-500 text-sm font-bold mb-1">Cursos Completados</p>
                    <div className="flex items-center justify-between">
                        <span className="text-4xl font-black text-gray-900">0</span>
                        <div className="bg-green-50 p-3 rounded-2xl">
                            <GraduationCap className="w-6 h-6 text-green-500" />
                        </div>
                    </div>
                </div>

                {/* Empty State / Welcome */}
                <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 col-span-full text-center">
                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <BookOpen className="w-12 h-12 text-gray-200" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Aún no tienes cursos inscritos</h3>
                    <p className="text-gray-500 text-sm mb-8">Comienza a aprender hoy mismo explorando nuestra catálogo de cursos diseñados para ti.</p>
                    <button className="bg-primary-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-100">
                        Explorar Catálogo
                    </button>
                </div>
            </motion.div>
        </main>
      </div>
    </div>
  );
}
