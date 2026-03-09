"use client";

import { useAuthStore } from "@/app/store/useAuthStore";
import { LogOut, BookOpen, LayoutDashboard, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-30 top-0">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <Link href="/" className="flex ml-2 md:mr-24">
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-primary-600">
                Star Seven
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center ml-3 space-x-4">
                <span className="text-sm text-gray-700 hidden sm:block">
                  Hola, <span className="font-medium">{user.name || user.email}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-500 hover:text-red-600 transition-colors"
                >
                  <LogOut className="w-5 h-5 mr-1" />
                  <span className="text-sm font-medium hidden sm:block">Salir</span>
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
              >
                Ingresar
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
