<script lang="ts">
  import heroDesktop from "$lib/assets/images/hero-bg.webp?enhanced";
  import heroMobile from "$lib/assets/images/hero-bg-mobile.webp?enhanced";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  interface Props {
    class?: string;
    id?: string;
  }

  let {
    class: className = "",

    id = "home",
  }: Props = $props();

  let ready = $state(false);
  onMount(() => {
    ready = true;
  });
</script>

<section {id} class="w-full -mt-20 {className}">
  <div class="relative w-full h-screen min-h-150 overflow-hidden shadow-xl">
    <picture>
      <!-- Móvil: AVIF primero, luego WebP -->
      <source
        media="(max-width: 768px)"
        srcset={heroMobile.sources.avif}
        type="image/avif"
      />
      <source
        media="(max-width: 768px)"
        srcset={heroMobile.sources.webp}
        type="image/webp"
      />

      <!-- Escritorio: AVIF primero, luego WebP -->
      <source srcset={heroDesktop.sources.avif} type="image/avif" />
      <source srcset={heroDesktop.sources.webp} type="image/webp" />

      <img
        src={heroDesktop.img.src}
        width={heroDesktop.img.w}
        height={heroDesktop.img.h}
        alt="Spa Background"
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
          class="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 drop-shadow-lg max-w-5xl leading-tight text-balance"
        >
          Revela tu verdadera
          <span class="italic text-[#F3E5AB] whitespace-nowrap">esencia</span>
        </h1>

        <p
          in:fly={{ y: 30, duration: 1000, delay: 300 }}
          class="text-lg md:text-2xl text-gray-200 drop-shadow-md font-light max-w-2xl text-pretty"
        >
          Tratamientos exclusivos para realzar tu belleza natural.
        </p>
      {/if}
    </div>
  </div>
</section>
