# Star Seven — Plataforma Educativa de Cursos Técnicos

Plataforma educativa completa para cursos técnicos, compuesta por:

- 🌐 **Sitio Web Institucional** — Presentación de la marca, información y captación
- 📚 **Plataforma de Cursos** — Desarrollo e impartición de cursos técnicos
- ⚙️ **Panel Administrativo** — Gestión interna de contenidos, usuarios y operaciones

## Stack Tecnológico

| Capa                | Tecnología      |
| ------------------- | --------------- |
| Frontend            | Next.js         |
| Backend             | NestJS          |
| Base de Datos       | PostgreSQL      |
| Archivos Multimedia | Railway Volumes |
| Despliegue          | Railway         |
| Monorepo            | Turborepo       |

## Estructura del Proyecto

```
star-seven/
├── apps/
│   ├── web/          # Sitio web institucional (Next.js)
│   ├── app/          # Plataforma de cursos (Next.js)
│   ├── admin/        # Panel administrativo (Next.js)
│   └── api/          # Backend API (NestJS)
├── packages/
│   ├── ui/           # Componentes compartidos
│   ├── config/       # Configuraciones compartidas
│   └── types/        # Tipos TypeScript compartidos
└── turbo.json
```

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar todos los servicios en desarrollo
npm run dev
```
