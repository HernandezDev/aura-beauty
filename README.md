# Aura Beauty - Landing Page 🌿

Una landing page moderna y de alto rendimiento diseñada para un salón de belleza y bienestar. Desarrollada con **SvelteKit** y **Tailwind CSS**, enfocada en la velocidad de carga (Core Web Vitals), accesibilidad y SEO.

![Aura Beauty Screenshot](./screenshot.png)

## 🚀 Demo en Vivo

Visita el sitio: **[https://aura-beauty.pages.dev/](https://aura-beauty.pages.dev/)**

## 🏆 Puntuaciones Lighthouse (PageSpeed Insights)

El sitio ha sido optimizado para alcanzar métricas de excelencia.
_Auditoría realizada en Enero 2026._ [Ver reporte en vivo](https://pagespeed.web.dev/analysis/https-aura-beauty-pages-dev/f1nvxx6wqx?form_factor=mobile)

| Categoría             | Móvil 📱 | Escritorio 💻 |
| --------------------- | :------: | :-----------: |
| 🟢 **SEO**            | **100**  |    **100**    |
| 🟢 **Best Practices** | **100**  |    **100**    |
| 🟢 **Performance**    |  **99**  |    **100**    |
| 🟢 **Accessibility**  |  **96**  |    **96**     |

## 🛠️ Tecnologías

- **Framework:** [SvelteKit](https://kit.svelte.dev/) (SSR & Prerendering)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Imágenes:** [@sveltejs/enhanced-img](https://github.com/sveltejs/enhanced-img) (Optimización en Build-time)
- **Despliegue:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **Iconos:** Svelte-Lucide
- **Formulario:** Integración con Formspree
- **Fuentes:** fontsource.org (Lora & Manrope)

## ✨ Características

- **Diseño Responsivo:** Adaptado perfectamente a móviles, tablets y escritorio.
- **Animaciones Suaves:** Transiciones de entrada usando Svelte transitions (`fly`).
- **Imágenes Optimizadas:**
  - Uso de **@sveltejs/enhanced-img** para servir formatos modernos (AVIF/WebP) y redimensionamiento automático en el Hero.
  - Componente `ImageReveal` propio para carga diferida (lazy loading) con efecto fade-in en el resto del sitio.
- **Accesibilidad (a11y):** Navegación por teclado, etiquetas ARIA y jerarquía semántica correcta.
- **SEO On-Page:** Configuración correcta de títulos y meta-descripciones para indexación en Google.

## 📦 Instalación y Desarrollo

Si quieres clonar y correr este proyecto localmente:

```bash
# 1. Clonar el repositorio
git clone https://github.com/HernandezDev/aura-beauty.git

# 2. Entrar al directorio
cd aura-beauty

# 3. Instalar dependencias
npm install

# 4. Configurar variables de entorno
// ver sección "Configuración de Entorno y Seguridad" más abajo

# 5. Iniciar servidor de desarrollo
npm run dev

```

## 🧩 Estructura de componentes

- `src/lib/components/ui/`: Componentes de UI reutilizables (design system).
- `src/lib/components/layout/`: Layouts compartidos (navbar, footer, FloatingWhatsApp).
- `src/lib/components/sections/`: Secciones de contenido **pensadas para reescribirse** según el cliente/proyecto.

Para crear una nueva landing para otro negocio:

1. Si es necesario, instala nuevas fuentes con `npm` desde [fontsource.org](https://fontsource.org) y ajusta `src/routes/+layout.svelte` y `src/lib/styles/layout.css`.
2. Ajusta `src/lib/site.config.ts` (nombre, URLs, SEO, idioma).
3. Reescribe los componentes en `src/lib/components/sections/` con el nuevo contenido.
4. Reemplaza las imágenes en `src/lib/assets/images/`.

## ⚙️ Configuración de Entorno y Seguridad

Este proyecto utiliza variables de entorno para manejar datos sensibles y lógica de despliegue. Crea un archivo `.env` en la raíz (no se sube al repositorio) basado en el siguiente esquema:

```bash
# Datos Privados (Solo Servidor)
PRIVATE_WHATSAPP_NUMBER=5491123456789

# Configuración Pública (Cliente y Build)
PUBLIC_SITE_URL=https://aura-beauty.pages.dev

```

### 🔐 Detalle de Variables

#### 1. `PRIVATE_WHATSAPP_NUMBER` (Seguridad Anti-Scraping)

**El Problema:** Colocar un enlace `href="tel:..."` o `wa.me/...` expone el número del cliente directamente en el código fuente HTML, haciéndolo vulnerable a bots y scrapers de spam.

**La Solución:**

- Esta variable **nunca** se expone al cliente.
- Se implementó un endpoint de API (`/api/whatsapp`) protegido.
- **Flujo:** El botón de contacto en el frontend no contiene el número. Al hacer clic, se dispara una petición asíncrona. El servidor valida el origen de la solicitud y devuelve el número solo si la petición es legítima.

#### 2. `PUBLIC_SITE_URL` (SEO Técnico & Lógica de Entorno)

Define la URL canónica del sitio. Esta variable es crítica para dos sistemas:

- **Generación de Open Graph:** Asegura que las imágenes y enlaces compartidos en redes sociales tengan rutas absolutas correctas.
- **Smart Noindex (Bloqueo de Robots):** El componente de SEO compara esta variable con la URL definida en `site.config.ts`.
- Si coinciden: Se permite la indexación (`index, follow`).
- Si NO coinciden (ej. en `localhost` o `test.aura-beauty...`): Se activa automáticamente el bloqueo (`noindex, nofollow`) para evitar contenido duplicado en Google.

---

> **Nota para Cloudflare Pages:** Recuerda configurar estas mismas variables en el panel de control bajo **Settings > Environment Variables** para tus entornos de Producción y Preview.

## 🧠 Configuración Centralizada (`site.config.ts`)

La lógica de negocio y los metadatos estáticos están desacoplados de los componentes visuales. El archivo `src/lib/site.config.ts` actúa como la "fuente de la verdad" para todo el sitio.

**Ventajas de esta arquitectura:**

- **Mantenibilidad:** Cambiar el nombre del negocio, el color del tema o las palabras clave en este archivo actualiza automáticamente todo el SEO y la UI.
- **Seguridad SEO:** Gestiona la lógica de comparación entre `url` (actual) y `urlProd` (objetivo) para activar el bloqueo de robots en entornos de prueba.

```typescript
// Ejemplo de estructura
export const site = {
  name: "Aura Beauty",
  urlProd: "https://aura-beauty.pages.dev", // URL Oficial
  author: "Cliente",
  ogImageAlt: "Descripción para accesibilidad...",
  themeColor: "#c9a24d",
  // ...
};
```

## 🎨 Arquitectura Global (`+layout.svelte`)

El layout raíz (`src/routes/+layout.svelte`) no solo envuelve las páginas, sino que gestiona la **optimización técnica de assets** crítica para el rendimiento.

### ⚡ Estrategia de Carga de Fuentes (Performance & DX)

Se implementó una arquitectura de **Self-Hosting** gestionada vía NPM (`@fontsource`) para optimizar el _Critical Rendering Path_ y simplificar el mantenimiento.

**Decisiones de Arquitectura:**

1. **Prioridad de Carga (Preloading):**

- **Objetivo:** Evitar la cadena de latencia habitual donde el navegador espera a descargar y procesar el CSS para "descubrir" que necesita una fuente.
- **Implementación:** Importamos la URL de la fuente en el Layout raíz y la inyectamos con `<link rel="preload">`. Esto fuerza al navegador a descargar la fuente **en paralelo** al CSS, acelerando el primer pintado con texto (LCP) y reduciendo el movimiento visual (CLS).

2. **Gestión como Dependencia:**

- Al usar NPM, las fuentes se versionan y actualizan igual que cualquier librería de código, evitando la gestión manual de archivos binarios en carpetas estáticas.

3. **Inmutabilidad (Efecto Colateral del Build):**

- Al usar el sufijo `?url` de Vite, se genera un hash único en el nombre del archivo (ej: `manrope.DHIcAJRg.woff2`).
- Esto habilita automáticamente políticas de **Caché Inmutable**: el navegador guarda la fuente indefinidamente y nunca gasta tiempo de red en revalidarla, ya que cualquier actualización futura de la librería generará un nuevo nombre de archivo.

```svelte
<script>
  // Obtenemos la URL final procesada por Vite
  import fontSans from "@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2?url";
</script>

<svelte:head>
  <link rel="preload" href={fontSans} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

```

### 💅 Gestión de Estilos y UI (Tailwind v4)

La configuración de estilos está centralizada en `src/lib/styles/layout.css`. Se utiliza la nueva arquitectura de **Tailwind CSS v4** basada en variables CSS nativas para definir la identidad visual:

```css
@theme {
  --font-sans: "Manrope Variable", sans-serif;
  --font-serif: "Lora Variable", serif;
  --color-gold: #c9a24d;
}
```

Para los formularios, se utiliza una **estrategia híbrida**:

1. **Normalización:** El plugin `@tailwindcss/forms` resetea los estilos nativos del navegador, garantizando una base idéntica en Chrome, Safari y Firefox.
2. **Personalización Global:** Sobre esa base limpia, inyectamos los estilos corporativos en la capa `@layer base`. Esto permite que todos los inputs adquieran el diseño automáticamente sin necesidad de clases utilitarias en el HTML.

```css
/* layout.css */
@layer base {
  /* Seleccionamos todos los elementos de formulario normalizados */
  [type="text"], [type="email"], textarea, select /* ... */ {
    /* Estilos visuales del tema (Dark Mode) */
    @apply bg-neutral-900 border-neutral-700 text-neutral-300;

    /* Focus state corporativo (forzando prioridad sobre el plugin con !) */
    @apply focus:outline-none focus:ring-gold! focus:border-gold!;
  }
}
```
## compatibilidad con cloudflare pages:

añadir nodejs_compat a las compatibility flags en el panel de control de cloudflare pages


© 2026 Aura Beauty Project
