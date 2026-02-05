import type { Component } from 'svelte';

// 1. Átomo base: El enlace mínimo viable
// Sirve para: Enlaces de texto en el footer (ej: "Aviso Legal")
export interface Link {
    label: string;
    href: string;
    // Opcional: target para abrir en nueva pestaña (útil en footer)
    target?: "_blank" | "_self" | string; 
}

// 2. Enlace con Icono
// Sirve para: Botones de redes sociales
export interface IconLink extends Link {
    icon: Component;
}

// 3. Ruta de Navegación Principal
// Extiende de Link, pero añade 'id' que es CRÍTICO para tu Navbar y el scroll-spy
export interface Route extends Link {
    id: string; 
    icon?: Component; // En navbar el icono puede ser opcional
}

// --- TUS UTILIDADES ---

// Arreglo no vacío genérico (¡Lo mantenemos, es muy útil!)
export type NonEmptyArray<T> = [T, ...T[]];

// --- COLECCIONES EXPORTABLES ---

// Para el Navbar (Garantiza al menos un elemento)
export type Routes = NonEmptyArray<Route>;

// Para los iconos sociales del Footer (Array normal, puede estar vacío)
export type SocialLinks = IconLink[];

// Para enlaces de texto del Footer (Array normal)
export type FooterLinks = Link[];