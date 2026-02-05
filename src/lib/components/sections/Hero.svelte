<script lang="ts">
  import { cn } from "$lib/utils";
  import type { EnhancedImage } from "$lib/types";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import type { Snippet } from "svelte";
  import heroDesktopDefault from "$lib/assets/images/hero-bg.webp?enhanced";
  import heroMobileDefault from "$lib/assets/images/hero-bg-mobile.webp?enhanced";

  interface Props {
    class?: string;
    id?: string;
    altText?: string;
    title: string | Snippet;
    titleClass?: string;
    subtitle?: string | Snippet;
    subtitleClass?: string;
    overlayClass?: string;

    desktopImage?: EnhancedImage;
    mobileImage?: EnhancedImage;
  }

  let {
    class: className = "",
    id = "home",

    title,
    altText = "",
    titleClass = "",
    subtitle = "",
    subtitleClass = "",
    overlayClass = "bg-linear-to-t from-gray-900/90 via-gray-900/30 to-black/10",
    desktopImage = heroDesktopDefault,
    mobileImage = heroMobileDefault,
  }: Props = $props();

  let ready = $state(false);

  onMount(() => {
    ready = true;
  });
</script>

<!-- snippet auxiliar -->
{#snippet renderContent(content: string | Snippet)}
  {#if typeof content === "string"}
    {content}
  {:else}
    {@render content()}
  {/if}
{/snippet}

<section {id} class={cn("w-full -mt-20", className)}>
  <div class="relative w-full h-screen min-h-150 overflow-hidden shadow-xl">
    <picture>
      <!-- Móvil: AVIF primero, luego WebP -->
      <source
        media="(max-width: 768px)"
        srcset={mobileImage.sources.avif}
        type="image/avif"
      />
      <source
        media="(max-width: 768px)"
        srcset={mobileImage.sources.webp}
        type="image/webp"
      />

      <!-- Escritorio: AVIF primero, luego WebP -->
      <source srcset={desktopImage.sources.avif} type="image/avif" />
      <source srcset={desktopImage.sources.webp} type="image/webp" />

      <img
        src={desktopImage.img.src}
        width={desktopImage.img.w}
        height={desktopImage.img.h}
        alt={desktopImage.img.alt ??
          altText ??
          (typeof title === "string" ? title : "")}
        class="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        fetchpriority="high"
      />
    </picture>

    <div class={cn("absolute inset-0", overlayClass)}></div>

    <div
      class="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pt-20"
    >
      {#if ready}
        <h1
          in:fly={{ y: 30, duration: 1000, delay: 100 }}
          class={cn(
            "font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 drop-shadow-lg max-w-5xl leading-tight text-balance",
            titleClass,
          )}
        >
          {@render renderContent(title)}
        </h1>
      {:else}
        <!-- H1 accesible para SEO/lectores de pantalla mientras aún no se anima -->
        <h1 class="sr-only">
          {title}
        </h1>
      {/if}
      {#if subtitle && ready}
        <p
          in:fly={{ y: 30, duration: 1000, delay: 300 }}
          class={cn(
            "text-lg md:text-xl lg:text-2xl text-white drop-shadow-md max-w-3xl text-balance",
            subtitleClass,
          )}
        >
          {@render renderContent(subtitle)}
        </p>
      {:else if subtitle}
        <!-- P accesible para SEO/lectores de pantalla mientras aún no se anima -->
        <p class="sr-only">
          {@render renderContent(subtitle)}
        </p>
      {/if}
    </div>
  </div>
</section>
