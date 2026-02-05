<script lang="ts">
  import Hero from "$lib/components/sections/Hero.svelte";
  import Services from "$lib/components/sections/Services.svelte";
  import About from "$lib/components/sections/About.svelte";
  import Reviews from "$lib/components/sections/Reviews.svelte";
  import Contact from "$lib/components/sections/Contact.svelte";
</script>

<main>
  <Hero subtitle="Tratamientos exclusivos para realzar tu belleza natural.">
    {#snippet title()}
      Revela tu verdadera
      <span class="italic text-[#F3E5AB] whitespace-nowrap">esencia</span>
    {/snippet}
  </Hero>
  <Services />
  <About />
  <Reviews />
  <Contact />
</main>
