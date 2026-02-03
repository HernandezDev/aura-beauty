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
- **Smart Noindex (Bloqueo de Robots):** El componente de SEO compara esta variable con la URL de la variable `urlProd` definida en `site.config.ts`.
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

---

© 2026 Aura Beauty Project
