<script lang="ts">
  import Section from "$lib/components/ui/Section.svelte";
  import Container from "$lib/components/ui/Container.svelte";
  import StarIcon from "~icons/lucide/star";
  import QuoteIcon from "~icons/lucide/quote";

  const reviews = [
    {
      name: "Valeria M.",
      service: "Hair Studio",
      text: "Llegué con el pelo muy dañado y el tratamiento de restauración fue mágico. Nunca había tenido el cabello tan brillante. La atención de las chicas es un 10.",
      stars: 5,
    },
    {
      name: "Sofía R.",
      service: "Spa & Wellness",
      text: "El circuito de spa es otro mundo. Me desconecté totalmente del estrés de la semana. El ambiente, los aromas y la música están pensados al detalle.",
      stars: 5,
    },
    {
      name: "Camila G.",
      service: "Lashes & Brows",
      text: "Me hice el lifting de pestañas y perfilado. El resultado es súper natural, justo lo que buscaba. Me encanta que usen productos de tan buena calidad.",
      stars: 5,
    },
  ];
</script>

<Section id="reviews" class="bg-white">
  <Container>
    <div class="text-center mb-16">
      <span
        class="text-[#C9A24D] font-bold tracking-[0.2em] uppercase text-xs mb-3 block"
      >
        La Experiencia Aura
      </span>
      <h2 class="font-serif text-3xl md:text-4xl text-gray-900">
        Reviews de nuestras clientas
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each reviews as review}
        <div
          class="bg-stone-50 p-8 rounded-2xl relative hover:shadow-lg transition-shadow duration-300"
        >
          <div class="absolute top-6 right-6 text-[#C9A24D]/10">
            <QuoteIcon class="text-5xl" />
          </div>

          <div class="flex gap-1 text-[#C9A24D] mb-6">
            {#each Array(review.stars) as _}
              <StarIcon class="text-sm fill-current" />
            {/each}
          </div>

          <p class="text-gray-600 italic mb-6 leading-relaxed relative z-10">
            "{review.text}"
          </p>

          <div class="mt-auto border-t border-gray-200 pt-4">
            <h4 class="font-bold text-gray-900">{review.name}</h4>
            <span
              class="text-xs text-[#C9A24D] font-medium tracking-wide uppercase"
            >
              {review.service}
            </span>
          </div>
        </div>
      {/each}
    </div>
  </Container>
</Section>
