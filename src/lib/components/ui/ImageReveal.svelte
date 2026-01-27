<script lang="ts">
  import { cn } from "$lib/utils";
  import { viewport } from "$lib/actions/viewport";
  import { fade } from "svelte/transition"; // Tus transiciones favoritas

  interface Props {
    src: string;
    alt: string;
    class?: string;
    width?: number;
    height?: number;
  }

  let { src, alt, class: className, width, height }: Props = $props();

  let visible = $state(false);

  // ESTA ES LA MAGIA 🪄
  // Esta función carga la imagen en memoria (sin pintarla) y avisa cuando está lista.
  const loadImage = (url: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(url); // ¡Listo!
      img.onerror = reject; // Falló
    });
  };
</script>

<div
  use:viewport={() => (visible = true)}
  class={cn(
    "relative w-full h-full bg-gray-200 overflow-hidden aspect-auto",
    className,
  )}
>
  {#if visible}
    {#await loadImage(src)}
      <div
        class="absolute inset-0 flex items-center justify-center text-gray-400"
      ></div>
    {:then _}
      <img
        {src}
        {alt}
        {width}
        {height}
        decoding="async"
        class="absolute inset-0 w-full h-full object-cover"
        in:fade={{ duration: 600 }}
      />
    {:catch}
      <div
        class="absolute inset-0 flex items-center justify-center bg-red-50 text-red-400 text-sm"
      >
        Error
      </div>
    {/await}
  {/if}
</div>
