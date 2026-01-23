<script lang="ts">
  import { cn } from "$lib/utils"; // Suponiendo que usas tu utilidad de clases
  import type { Snippet } from "svelte"; // Importa el tipo Snippet

  interface Props {
    id: string;
    class?: string; // El signo ? hace que sea opcional
    children: Snippet; // 👈 Esto le dice a TS qué esperar
  }

  // 3. Usamos la interfaz en $props()
  let { id, class: className, children }: Props = $props();
</script>

<section
  {id}
  class={cn(
    "min-h-screen w-full flex flex-col justify-center items-center px-4 py-12 pt-22", // Estilos base obligatorios
    className, // Estilos opcionales (colores de fondo)
  )}
>
  {@render children()}
</section>
