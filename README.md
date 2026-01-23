# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

# 🚀 Protocolo de Entrenamiento: Svelte 5 + Arquitectura Híbrida

Este repositorio documenta mi transición de React Native a Svelte 5, enfocándome en la nueva sintaxis de **Runas** y la arquitectura de **Rendering Híbrido** (SSG + CSR).

## 🛠 Configuración Inicial

- **Framework:** SvelteKit (Svelte 5 Preview/RC)
- **Estilos:** Tailwind CSS + Konsta UI
- **Lenguaje:** JavaScript (JSDoc) o TypeScript

---

## 🏆 Nivel 1: El Componente Estático (SSG)

**Objetivo:** Crear una Landing Page optimizada para SEO usando componentes reutilizables y tipados con props modernas.

### 📝 Requisitos

1. **Configuración SSG:**
   - Crear la ruta `src/routes/(marketing)/`.
   - Configurar `+page.js` con `export const prerender = true;`.
2. **Componente `HeroSection.svelte`:**
   - Debe recibir `title` (string) y `subtitle` (string) usando la runa **`$props()`**.
   - No usar valores hardcodeados en el HTML.
3. **HTML Semántico:**
   - Usar `<header>`, `<h1>`, `<p>`, `<section>`.
   - **Prohibido:** Usar `display: flex` en bloques de texto.
4. **Build Check:**
   - Ejecutar `npm run build` y verificar que se genere el HTML estático.

### 🧠 Conceptos Clave

- `$props()` destructuring.
- Static Site Generation (Build time).
- Estructura de "Route Groups".

---

## 🏆 Nivel 2: Lógica de Negocio (Reactividad)

**Objetivo:** Manejar estado local y valores calculados sin efectos secundarios innecesarios.

### 📝 Requisitos

1. **Componente `ProductCounter.svelte`:**
   - Crear una variable `cantidad` usando **`$state(1)`**.
   - Crear una constante `precioUnitario` (ej: 500).
2. **Valores Derivados:**
   - Calcular `total` automáticamente (`cantidad * precio`) usando **`$derived()`**.
   - Calcular `esMayorista` (booleano) si la cantidad es > 10, usando **`$derived()`**.
3. **Eventos Nativos:**
   - Usar atributos HTML estándar: `<button onclick={...}>`.
   - Mostrar un mensaje especial si `esMayorista` es true.
   - Botón de "restar" deshabilitado si `cantidad === 1`.

### 🧠 Conceptos Clave

- `$state()` para variables mutables.
- `$derived()` para lógica automática (reemplaza a las dependencias manuales).
- Eventos `onclick` vs `on:click` (Legacy).

---

## 🏆 Nivel 3: La App Simulada (CSR + Efectos)

**Objetivo:** Crear una experiencia "App-like" usando Konsta UI y manipulando el navegador directamente.

### 📝 Requisitos

1. **Configuración CSR:**
   - Crear la ruta `src/routes/(app)/settings/`.
   - Configurar `+page.js` con `export const ssr = false;`.
2. **Integración Konsta UI:**
   - Usar `<Page>`, `<Navbar>` y `<List>` de Konsta.
   - La Navbar debe tener título fijo.
3. **Efectos Secundarios (Side Effects):**
   - Crear un toggle para "Modo Oscuro" con estado local `$state(false)`.
   - Usar **`$effect()`** para que, cuando el estado cambie, se añada/quite la clase `dark` al `<body>` o `<html>`.
   - _Nota:_ `$effect` solo corre en el cliente, ideal para manipular el DOM.

### 🧠 Conceptos Clave

- Client Side Rendering (CSR).
- `$effect()` para sincronización con sistemas externos (DOM, API, LocalStorage).
- Konsta UI Components.

---

## 🏆 Nivel 4: Estado Global Universal (Arquitectura)

**Objetivo:** Compartir datos entre la Landing (Nivel 1) y la App (Nivel 3) sin librerías externas.

### 📝 Requisitos

1. **Módulo de Estado (`.svelte.js`):**
   - Crear `src/lib/userState.svelte.js`.
   - Definir una clase o función que retorne un objeto reactivo usando `$state()` (ej: `user`, `isLoggedIn`).
2. **Consumo Híbrido:**
   - En la **Landing (SSG)**: Mostrar "Bienvenido, Invitado" o "Bienvenido, [Nombre]" según el estado.
   - En la **App (CSR)**: Crear un formulario simple para cambiar el nombre del usuario.
3. **Prueba de Navegación:**
   - Cambiar el nombre en la App, volver a la Landing y verificar que el nombre persiste (mientras no se recargue la página).

### 🧠 Conceptos Clave

- Archivos `.svelte.js` (Reactividad Universal).
- Compartir estado fuera de componentes `.svelte`.
- Separación de responsabilidades.

---

## 📚 Glosario Svelte 5 (Mi Cheat Sheet)

| Concepto           | Sintaxis                      | Descripción                                                   |
| :----------------- | :---------------------------- | :------------------------------------------------------------ |
| **Definir Estado** | `let x = $state(0)`           | Crea una variable reactiva. Si cambia, la UI se actualiza.    |
| **Recibir Props**  | `let { title } = $props()`    | Recibe datos del padre.                                       |
| **Cálculo Auto**   | `let doble = $derived(x * 2)` | Se recalcula automáticamente si `x` cambia.                   |
| **Efecto**         | `$effect(() => { ... })`      | Ejecuta código cuando las dependencias cambian (post-render). |
| **Eventos**        | `<button onclick={fn}>`       | Sintaxis nativa de JS para eventos del DOM.                   |

Las tipografias que se usaran seran lora(serif) para textos especiales de la landing y manrope(sans-serif) para texto de ui y textos generales,
que se intalan con:

```sh

npm install @fontsource-variable/lora @fontsource-variable/manrope
```

## idea General de componte de svelte 5

```svelte
<script lang="ts">
  import { cn } from "$lib/utils"; // Tu utilidad para mezclar clases
  import type { Snippet } from "svelte"; // Para tipar el slot (children)

  interface Props {
    class?: string;        // Opcional: Clases extra
    children?: Snippet;    // Opcional: Contenido interno (slot)
    // Tus props específicas...
    variant?: "primary" | "secondary";
  }

  let {
    class: className = undefined,
    children,
    variant = "primary",
    ...rest
  }: Props = $props();
</script>

<div
  class={cn(
    "clases-base-obligatorias transition-all",
    variant === "primary" ? "bg-gold" : "bg-gray", // Lógica condicional
    className // Clases externas (ganan a las anteriores si hay conflicto)
  )}
  {...rest}
>
  {@render children?.()}
</div>
```
