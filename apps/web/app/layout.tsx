import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// next/font/google descarga la fuente en build-time y la sirve localmente
// Elimina por completo la petición externa a Google Fonts (render-blocking).
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Star Seven — Formación Técnica Certificada",
  description:
    "Plataforma educativa de cursos técnicos en tecnología. Aprende desarrollo de software, ciberseguridad y arquitectura cloud con expertos de la industria.",
  keywords: "cursos técnicos, programación, ciberseguridad, cloud, desarrollo web, Colombia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={outfit.variable}>
        {children}
      </body>
    </html>
  );
}
