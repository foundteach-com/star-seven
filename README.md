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

## 🚀 Despliegue en Railway

### Configuración del Almacenamiento (Railway Volumes)

La plataforma utiliza almacenamiento local para los archivos multimedia. En producción, esto se gestiona mediante **Railway Volumes** para asegurar la persistencia de los datos entre despliegues.

#### Pasos de Configuración en Railway:

1.  Ve al servicio de la API (`apps/api`) en tu panel de Railway.
2.  Dirígete a la pestaña **Variables**.
3.  Añade las siguientes variables de entorno:
    - `UPLOAD_PATH`: `/app/uploads` (Esta es la ruta absoluta dentro del contenedor donde se guardarán los archivos).
    - `APP_URL`: `https://tu-dominio-api.up.railway.app` (La URL pública de tu API, necesaria para generar los enlaces a las imágenes).
4.  Dirígete a la pestaña **Volumes**.
5.  Haz clic en **New Volume**.
6.  En el campo **Mount Path**, escribe exactamente lo mismo que pusiste en `UPLOAD_PATH`: `/app/uploads`.
7.  Guarda los cambios y realiza un nuevo despliegue (Deploy) para que los cambios surtan efecto.
