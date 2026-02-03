<script lang="ts">
  import type { Routes } from "$lib/types/navigation";
  import Hero from "$lib/components/sections/Hero.svelte";
  import Services from "$lib/components/sections/Services.svelte";
  import About from "$lib/components/sections/About.svelte";
  import Reviews from "$lib/components/sections/Reviews.svelte";
  import Contact from "$lib/components/sections/Contact.svelte";
</script>

<main>
  <Hero />
  <Services />
  <About />
  <Reviews />
  <Contact />
</main>
