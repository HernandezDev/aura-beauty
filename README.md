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
- **Despliegue:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **Iconos:** Svelte-Lucide
- **Formulario:** Integración con Formspree
- **Fuentes:** fontsource.org (Lora & Manrope)

## ✨ Características

- **Diseño Responsivo:** Adaptado perfectamente a móviles, tablets y escritorio.
- **Animaciones Suaves:** Transiciones de entrada usando Svelte transitions (`fly`).
- **Imágenes Optimizadas:** Uso de formatos modernos (WebP) y estrategias de carga (`fetchpriority`, `loading="eager"`).
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

# 5. Iniciar servidor de desarrollo
npm run dev
```

## ⚙️ variables de Entorno

arachivo `.env` en la raíz del proyecto con las siguientes variables:

```
PRIVATE_WHATSAPP_NUMBER=
PUBLIC_SITE_URL=
```

PRIVATE_WHATSAPP_NUMBER: Número de WhatsApp con código de país (ej: 5491123456789), es usado en el botón de contacto para no mostrar el número directamente en el código fuente.

PUBLIC_SITE_URL: URL del sitio en producción (ej: https://aura-beauty.pages.dev), usado para generar URLs canónicas y Open Graph.

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

### Estrategia de Carga de Fuentes

Implementación de **Self-Hosting** para las fuentes (Manrope & Lora) para evitar el layout shift (CLS) y la dependencia de servidores externos (Google Fonts).

- **Cache Busting:** Las fuentes se importan usando el sufijo `?url` de Vite.
- **Resultado:** Se genera un hash único (ej: `manrope.DHIcAJRg.woff2`) que garantiza que los usuarios siempre descarguen la versión más reciente, permitiendo políticas de caché agresivas (Inmutabilidad).

```svelte
<script>
  // Importación optimizada con Vite
  import fontSans from "@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2?url";
</script>

<svelte:head>
  <link rel="preload" href={fontSans} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

```

### Gestión de Estilos

- Importación única de `app.css` (Tailwind) para mantener el CSS crítico pequeño.
- Inyección dinámica de Favicons optimizados.

## 🔒 Sistema de SEO Inteligente ("Smart Noindex")

El componente `<Seo />` implementa una lógica de protección automática para evitar contenido duplicado:

1. **Detección de Entorno:** Compara la variable `PUBLIC_SITE_URL` contra la configuración de producción.
2. **Bloqueo Automático:** Si el despliegue es una _Preview_ (ej: `test.aura-beauty...`) o _Localhost_, inyecta automáticamente:
   `<meta name="robots" content="noindex, nofollow" />`
3. **Producción:** Solo permite la indexación (`index, follow`) si el dominio coincide exactamente con la URL oficial.

---

© 2026 Aura Beauty Project
