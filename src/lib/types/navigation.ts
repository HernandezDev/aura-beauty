import type { Component } from 'svelte';
export interface Route {
    id: string;
    label: string;
    href: string;
    icon?: Component;
}
// Arreglo no vacío genérico
export type NonEmptyArray<T> = [T, ...T[]];

// Lista de rutas no vacía
export type Routes = NonEmptyArray<Route>;