<script lang="ts">
  // 1. IMPORTS ESTRUCTURALES
  import Section from "$lib/components/ui/Section.svelte";
  import Container from "$lib/components/ui/Container.svelte";

  // 3. IMPORTS DE IMÁGENES
  import peluqueriaImg from "$lib/assets/images/peluqueria.webp";
  import unasImg from "$lib/assets/images/unas.webp";
  import pestanasImg from "$lib/assets/images/pestanas.webp";
  import dermapenImg from "$lib/assets/images/dermapen.webp";
  import spaImg from "$lib/assets/images/spa.webp";
  import laserImg from "$lib/assets/images/laser.webp";

  // 4. ICONOS
  import HairIcon from "~icons/lucide/scissors";
  import NailIcon from "~icons/lucide/flame";
  import LashesIcon from "~icons/lucide/eye";
  import SkinIcon from "~icons/lucide/sparkles";
  import SpaIcon from "~icons/lucide/waves";
  import LaserIcon from "~icons/lucide/zap";
  import ArrowRightIcon from "~icons/lucide/arrow-right";

  // 5. DATOS
  const services = [
    {
      title: "Hair Studio",
      description:
        "Coloración orgánica, cortes de autor y tratamientos de restauración profunda.",
      image: peluqueriaImg,
      icon: HairIcon,
    },
    {
      title: "Nail Bar",
      description:
        "Manicura Soft Gel, Kapping, Esculpidas y diseños exclusivos a mano alzada.",
      image: unasImg,
      icon: NailIcon,
    },
    {
      title: "Lashes & Brows",
      description:
        "Lifting de pestañas, perfilado de cejas y laminado para una mirada impactante.",
      image: pestanasImg,
      icon: LashesIcon,
    },
    {
      title: "Skin Care",
      description:
        "Tratamientos faciales avanzados con Dermapen y puntas de diamante.",
      image: dermapenImg,
      icon: SkinIcon,
    },
    {
      title: "Spa & Wellness",
      description:
        "Masajes terapéuticos, exfoliaciones corporales y envolturas nutritivas.",
      image: spaImg,
      icon: SpaIcon,
    },
    {
      title: "Laser & Smooth",
      description:
        "Depilación definitiva con tecnología láser indolora para una piel suave y duradera.",
      image: laserImg,
      icon: LaserIcon,
    },
  ];
</script>

<Section id="services" class="bg-white">
  <Container>
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2
        class="font-serif text-3xl md:text-5xl text-gray-900 mb-4 font-medium pt-4"
      >
        Nuestros Rituales
      </h2>
      <p class="text-gray-500 text-lg font-light">
        Experiencias diseñadas para realzar tu belleza natural en un entorno de
        relajación absoluta.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {#each services as service, i}
        <div class="h-full">
          <div
            class="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 bg-gray-50 h-full flex flex-col"
          >
            <div class="aspect-video overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            <div class="flex mt-6 ml-2">
              <service.icon class="w-8 h-8 mx-2 group-hover:text-[#C9A24D]" />
              <h3
                class="font-serif text-2xl text-gray-900 mb-3 group-hover:text-[#C9A24D] transition-colors"
              >
                {service.title}
              </h3>
            </div>

            <p
              class="text-gray-600 font-light text-sm leading-relaxed mb-6 grow ml-6 mr-4"
            >
              {service.description}
            </p>
            <div class="pt-4 border-t border-gray-100 mt-auto ml-6 mb-4">
              <a
                href="?service={encodeURIComponent(service.title)}#contact"
                class="text-[#C9A24D] font-bold text-xs tracking-[0.15em] uppercase hover:text-black transition-colors flex items-center gap-2 group"
              >
                Reservar Cita
                <ArrowRightIcon
                  class="transform transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </Container>
</Section>
