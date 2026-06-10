# Mejoras propuestas para el portfolio

Este documento recoge mejoras recomendadas para el proyecto `portfolio_next.js`.

## 1. Calidad del código y tipado

- Reemplazar `any` por tipos específicos en `src/pages/index.tsx`, `Header.tsx` y otros componentes.
- Definir interfaces/Tipos para `texts`, `startups`, `projects`, `repositories` y `stackImages`.
- Evitar el uso de `require(...)` en `getStaticProps`; usar `import` estático o un helper tipado para cargar datos JSON.
- Activar `strict: true` en `tsconfig.json` y actualizar `target` a `es2020` o superior.
- Eliminar `allowJs` si no hay archivos JavaScript en el proyecto.

## 2. Arquitectura y dependencias

- Revisar `next.config.js`: actualmente contiene un override de Webpack vacío. Si no se necesita, removerlo.
- Eliminar `next-i18next` si no se está usando realmente la configuración completa, o configurar correctamente el plugin con `next-i18next.config.js`.
- Evaluar si `@mui/material`, `@emotion/react` y `@emotion/styled` son necesarios solo para el tema. Si se usan mínimamente, reemplazar por Tailwind CSS puro para reducir el bundle.
- Considerar mover datos estáticos de `startups`, `projects` y `repositories` a un objeto tipado/TypeScript en lugar de JSON sin tipar.

## 3. Mejora del theme y dark mode

- Corregir `useDarkMode` en `src/hooks/useDarkMode.ts`: el effect tiene `theme` como dependencia y puede re-ejecutarse innecesariamente. Debe usar `[]` para inicializar solo una vez.
- Asegurar que `document.documentElement.setAttribute('data-theme', newTheme)` se aplique también al cargar el tema inicial.
- Unificar el manejo de color entre MUI, Tailwind y CSS personalizado para evitar inconsistencias.

## 4. Accesibilidad y HTML válido

- Evitar `<button>` dentro de `<a>` en `Header.tsx`; usar solo un elemento interactivo válido.
- Corregir `e.preventDefault` en los manejadores de clic: actualmente no se llama como función.
- Añadir `aria-label` o texto visible para botones de audio, batería de idiomas y enlaces de contacto.
- Asegurar que los íconos de redes sociales tengan texto alternativo relevante.

## 5. Rendimiento

- Optimizar imágenes y recursos estáticos: usar `next/image` solo para imágenes que aporten valor real, y mantener los íconos simples si no requieren optimización pesada.
- Revisar el uso de un background GIF fijo (`backgroundAttachment: 'fixed'`), ya que puede afectar rendimiento y consumo de memoria en mobile.
- Evitar cargar audio de fondo automáticamente; ofrecer un botón claro de reproducción con consentimiento del usuario.

## 6. Internacionalización

- Si se utiliza `next-i18next`, agregar `next-i18next.config.js` y mover la lógica de idioma a configuración estándar.
- Si no, usar la internacionalización nativa de Next (`i18n` en `next.config.js`) y eliminar `appWithTranslation`.
- Actualizar `README.md` para documentar el cambio de idioma y cómo se cargan las traducciones.

## 7. Documentación

- Reescribir `README.md` para describir:
  - Stack usado (Next.js 14, TypeScript, Tailwind, MUI opcional)
  - Comandos `npm run dev`, `build`, `start`, `lint`
  - Estructura de folders relevantes
  - Cómo funciona la internacionalización
  - Cómo desplegar en Vercel o Netlify
- Añadir un `CHANGELOG` o `NOTAS.md` si se planea iterar con nuevas mejoras.

## 8. Experiencia de usuario

- Mejorar el `Header` para que el cambio de idioma sea más intuitivo.
- Añadir una sección de `SEO` con componentes `<Head>` en la página principal.
- Añadir un footer con copyright, enlaces y versiones.

## 9. Pruebas y mantenimiento

- Configurar ESLint y Prettier juntos para asegurar formato y calidad.
- Añadir un archivo `.gitignore` si no existe o verificar que ignore `node_modules`, `build`, `.next`.
- Considerar agregar pruebas simples con React Testing Library si el proyecto debe escalar.

---

### Prioridad inicial recomendada

1. Corregir tipado y `useDarkMode`.
2. Limpiar dependencias innecesarias (`next-i18next` / MUI si no son requeridas).
3. Actualizar `README.md` y documentar el flujo de idioma.
4. Ajustar accesibilidad en `Header.tsx` y el audio de fondo.
5. Revisar rendimiento del background GIF y recursos estáticos.
