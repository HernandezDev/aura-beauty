<script lang="ts">
  import type { Routes } from "$lib/types/navigation";
  import Hero from "$lib/components/sections/Hero.svelte";
  import Services from "$lib/components/sections/Services.svelte";
  import About from "$lib/components/sections/About.svelte";
  import Reviews from "$lib/components/sections/Reviews.svelte";
  import Contact from "$lib/components/sections/Contact.svelte";

  const SEO = {
    title: "Aura Beauty | Estética y Bienestar",
    description: "Reserva tu turno en Aura Beauty...",
  };
</script>

<svelte:head>
  <title>{SEO.title}</title>
  <meta name="description" content={SEO.description} />
</svelte:head>

<main>
  <Hero />
  <Services />
  <About />
  <Reviews />
  <Contact />
</main>
