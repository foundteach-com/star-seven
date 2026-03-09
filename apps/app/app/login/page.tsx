"use client";

import { useState } from "react";
import { useAuthStore } from "@/app/store/useAuthStore";
import api from "@/app/lib/api";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, Loader2, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const setAuth = useAuthStore((state) => state.setAuth);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await api.post("/auth/login", { email, password });
      const { access_token } = response.data;
      
      // En una app real, podrías querer obtener los datos del usuario 
      // desde un endpoint /auth/me después del login
      // Por ahora simulamos los datos decodificando o usando lo que devuelve el login
      // Suponiendo que el backend devuelve el objeto user o lo obtenemos de otra forma
      
      // Temporalmente usando datos mock/decodificados para el store
      setAuth({ id: "1", email, name: email.split('@')[0], role: "STUDENT" }, access_token);
      
      router.push("/");
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'response' in err) {
        const axiosError = err as { response: { data: { message: string } } };
        setError(axiosError.response?.data?.message || "Credenciales inválidas");
      } else {
        setError("Ocurrió un error inesperado");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100-64px)] flex items-center justify-center p-4 bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-gray-900 mb-2">Bienvenido</h1>
          <p className="text-gray-500 text-sm">Ingresa tus credenciales para acceder a tus cursos</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center rounded-r-xl">
            <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
            <span className="text-sm font-medium">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-gray-900"
                placeholder="tu-correo@ejemplo.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Contraseña</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-gray-900"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-primary-700 active:scale-[0.98] transition-all shadow-lg shadow-primary-200 disabled:opacity-70 flex items-center justify-center"
          >
            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Iniciar Sesión"}
          </button>
        </form>

        <div className="mt-8 text-center bg-gray-50 -mx-8 -mb-8 p-6 rounded-b-3xl border-t border-gray-100">
          <p className="text-gray-600 text-sm">
            ¿No tienes una cuenta?{" "}
            <Link href="/signup" className="text-primary-600 font-bold hover:underline">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
