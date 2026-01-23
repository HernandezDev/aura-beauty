<script lang="ts">
  import { cn } from "$lib/utils";

  interface Props {
    src: string;
    alt: string;
    class?: string;
    width?: string | number; // Importante para evitar saltos de diseño (CLS)
    height?: string | number;
  }

  let { src, alt, class: className, width, height }: Props = $props();

  let isLoaded = $state(false);
</script>

<div class={cn("relative overflow-hidden bg-gray-100", className)}>
  <img
    {src}
    {alt}
    {width}
    {height}
    loading="lazy"
    decoding="async"
    onload={() => (isLoaded = true)}
    class={cn(
      "w-full h-full object-cover transition-all duration-700 ease-out will-change-opacity",
      // Si cargó, opacidad 1 y escala normal.
      // Si no, opacidad 0 y ligeramente zoomin (efecto premium).
      isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-sm",
    )}
  />
</div>
