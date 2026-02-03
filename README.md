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

# 4. Iniciar servidor de desarrollo
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

## ⚙️configuración del Sitio

Edita `src/lib/site.config.ts` para personalizar la configuración del sitio.
