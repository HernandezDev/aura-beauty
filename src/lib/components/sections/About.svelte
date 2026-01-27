<script lang="ts">
  import Section from "../ui/Section.svelte";
  import Container from "../ui/Container.svelte";
  import ImageReveal from "../ui/ImageReveal.svelte";

  // Asegúrate de que la ruta sea correcta según donde guardaste la foto
  import staffImg from "$lib/assets/images/staff.webp";
</script>

<Section id="about" class="bg-stone-50 overflow-hidden">
  <Container>
    <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
      <div class="w-full md:w-1/2 relative group px-4 md:px-0">
        <div class="relative w-full md:max-w-md mx-auto">
          <div
            class="absolute inset-0 border-2 border-[#C9A24D]/40 rounded-xl transform translate-x-4 translate-y-4 hidden md:block transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
          ></div>

          <div
            class="relative aspect-3/4 rounded-xl overflow-hidden shadow-xl z-10 bg-gray-200"
          >
            <ImageReveal
              src={staffImg}
              alt="Equipo de profesionales de Aura Beauty"
            />
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 text-center md:text-left">
        <span
          class="text-[#C9A24D] font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
        >
          Sobre Nosotros
        </span>

        <h2
          class="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight"
        >
          Expertas en realzar <br class="hidden md:block" /> tu
          <span class="italic font-light text-gray-600">belleza natural</span>.
        </h2>

        <p class="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
          Somos un equipo apasionado por la estética y el bienestar. En <strong
            >Aura Beauty</strong
          >, cada profesional se especializa en una disciplina técnica, desde la
          colorimetría avanzada hasta la aparatología láser de última
          generación.
        </p>

        <p class="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          Creemos que el verdadero lujo está en la atención personalizada y en
          los detalles que transforman un servicio rutinario en una experiencia
          renovadora.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#contact"
            class="bg-zinc-900 text-white px-8 py-3 rounded text-sm tracking-wide font-medium hover:bg-[#C9A24D] transition-colors duration-300 shadow-lg"
          >
            Reservar Cita
          </a>
        </div>
      </div>
    </div>
  </Container>
</Section>
