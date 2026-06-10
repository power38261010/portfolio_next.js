# Alejandro Arrua | Fullstack Engineer Portfolio

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://react-ts-netflix.vercel.app/movies-netflix)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

Portafolio profesional de Alejandro Arrua, Analista de Sistemas y Desarrollador Fullstack. Diseñado con una estética **Premium Synthwave / Miami Vice**, enfocado en mostrar habilidades técnicas de alto nivel y arquitectura de software.

## 🚀 Stack Tecnológico

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router ready, aunque usando Pages Router).
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Tipado estricto habilitado).
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) + [Framer Motion](https://www.framer.com/motion/) para animaciones.
- **UI:** Glassmorphism custom components (eliminando dependencia de MUI).
- **Internacionalización:** Sistema dinámico de locales (ES/EN) mediante `getStaticProps`.

## 🛠️ Estructura del Proyecto

```text
src/
├── components/     # Componentes modulares y reutilizables
├── constants/      # Datos estáticos (JSON) y tipos globales
├── hooks/          # Hooks personalizados (useDarkMode, etc.)
├── locales/        # Archivos de traducción (JSON)
├── pages/          # Rutas y lógica de servidor (Next.js)
└── styles/         # Configuración de temas y CSS global
```

## ⚙️ Configuración y Desarrollo

### Requisitos
- Node.js 18.x o superior
- npm o yarn

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```

### Construcción para Producción
```bash
npm run build
npm run start
```

## 🌐 Internacionalización (i18n)

El proyecto utiliza la funcionalidad nativa de Next.js para detección de idioma. Las traducciones se encuentran en `src/locales/` y se cargan estáticamente según la ruta para maximizar el rendimiento y SEO.

## 📈 Mejoras Recientes (Auditoría 2026)
- ✅ **Narrativa de Impacto:** Refactorización de textos para un enfoque senior orientado a negocio.
- ✅ **Optimización Técnica:** Migración a TypeScript estricto y eliminación de `any`.
- ✅ **UI/UX:** Implementación de Glassmorphism y animaciones fluidas con Framer Motion.
- ✅ **Performance:** Optimización de carga de recursos y manejo de estados.

## 📄 Licencia

Este proyecto es de uso personal para portafolio. Todos los derechos reservados © 2026.
