<script lang="ts">
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    class?: string; // 👈 Aquí dice que es opcional...
  }

  // 👇 AQUI ESTÁ LA CORRECCIÓN:
  // 1. Añadimos ': Props' para conectar la interfaz.
  // 2. Añadimos '= ""' para darle un valor por defecto si no se pasa nada.
  let { children, class: className = "" }: Props = $props();
</script>

<div class={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
  {@render children()}
</div>
