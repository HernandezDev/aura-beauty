<script lang="ts">
  import { cn } from "$lib/utils";
  import heroDesktopDefault from "$lib/assets/images/hero-bg.webp?enhanced";
  import heroMobileDefault from "$lib/assets/images/hero-bg-mobile.webp?enhanced";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  interface Props {
    class?: string;
    id?: string;

    title: string;
    titleClass?: string;
    subtitle?: string;
    subtitleClass?: string;

    desktopImage?: any;
    mobileImage?: any;
  }

  let {
    class: className = "",
    id = "home",

    title,
    titleClass = "",
    subtitle = "",
    subtitleClass = "",

    desktopImage = heroDesktopDefault,
    mobileImage = heroMobileDefault,
  }: Props = $props();

  let ready = $state(false);

  onMount(() => {
    ready = true;
  });
</script>

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
        alt={desktopImage.img.alt ?? title}
        class="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        fetchpriority="high"
      />
    </picture>

    <div
      class="absolute inset-0 bg-linear-to-t from-gray-900/90 via-gray-900/30 to-black/10"
    ></div>

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
          {title}
        </h1>

        <p
          in:fly={{ y: 30, duration: 1000, delay: 300 }}
          class={cn(
            "text-lg md:text-2xl text-gray-200 drop-shadow-md font-light max-w-2xl text-pretty",
            subtitleClass,
          )}
          class:hidden={!subtitle}
        >
          {subtitle}
        </p>
      {:else}
        <!-- H1 accesible para SEO/lectores de pantalla mientras aún no se anima -->
        <h1 class="sr-only">
          {title}
        </h1>
        <p class="sr-only">
          {subtitle}
        </p>
      {/if}
    </div>
  </div>
</section>
