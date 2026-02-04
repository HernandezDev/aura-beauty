<script lang="ts">
  import Hero from "$lib/components/sections/Hero.svelte";
  import Services from "$lib/components/sections/Services.svelte";
  import About from "$lib/components/sections/About.svelte";
  import Reviews from "$lib/components/sections/Reviews.svelte";
  import Contact from "$lib/components/sections/Contact.svelte";
</script>

<main>
  <Hero
    title="Revela tu verdadera esencia"
    subtitle="Tratamientos exclusivos para realzar tu belleza natural."
  />
  <Services />
  <About />
  <Reviews />
  <Contact />
</main>
