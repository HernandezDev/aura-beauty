<script lang="ts">
  import Section from "$lib/components/ui/Section.svelte";
  import Container from "$lib/components/ui/Container.svelte";

  // 1. IMPORTAR page state (Svelte 5)
  import { page } from "$app/state";
  import { goto } from "$app/navigation";

  // Iconos...
  import MapPinIcon from "~icons/lucide/map-pin";
  import PhoneIcon from "~icons/lucide/phone";
  import MailIcon from "~icons/lucide/mail";
  import ClockIcon from "~icons/lucide/clock";
  import InstagramIcon from "~icons/lucide/instagram";
  import FacebookIcon from "~icons/lucide/facebook";

  const serviceOptions = [
    "Hair Studio",
    "Nail Bar",
    "Lashes & Brows",
    "Skin Care",
    "Spa & Wellness",
    "Laser & Smooth",
    "Otro consulta",
  ];
  // 2. ESTADO LOCAL (Ya no usamos el Store)
  let selectedService = $state("");

  // 1. URL -> HACIA -> SELECT (Lectura inicial y navegación atrás/adelante)
  $effect(() => {
    const paramService = page.url.searchParams.get("service");
    // Solo si hay parámetro y es diferente al actual (para evitar re-render)
    if (
      paramService &&
      serviceOptions.includes(paramService) &&
      paramService !== selectedService
    ) {
      selectedService = paramService;
    }
  });

  // 2. SELECT -> HACIA -> URL (Cuando el usuario toca el dropdown)
  function updateUrl() {
    // Copiamos la URL actual
    const newUrl = new URL(page.url);

    if (selectedService) {
      // Ponemos el servicio en la URL
      newUrl.searchParams.set("service", selectedService);
    } else {
      // Si por alguna razón se vacía, limpiamos
      newUrl.searchParams.delete("service");
    }

    // Actualizamos la barra de dirección SIN recargar y SIN saltar (noScroll)
    goto(newUrl, {
      replaceState: true, // true = reemplaza historia / false = crea historia nueva (botón atrás funciona paso a paso)
      noScroll: true,
      keepFocus: true,
    });
  }
</script>

<Section id="contact" class="bg-neutral-900 text-white">
  <Container>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      <div class="order-2 lg:order-1">
        <span
          class="text-[#C9A24D] font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
        >
          Contacto
        </span>
        <h2 class="font-serif text-3xl md:text-5xl mb-8 leading-tight">
          Reserva tu momento <br />
          <span class="italic text-neutral-400">de calma</span>.
        </h2>

        <div class="space-y-6 mb-10">
          <div class="flex items-start gap-4">
            <div class="p-3 bg-neutral-800 rounded-lg text-[#C9A24D]">
              <MapPinIcon />
            </div>
            <div>
              <h4 class="font-bold text-lg">Nuestra Ubicación</h4>
              <p class="text-neutral-400">
                Av. Santa Rosa 1234, Ituzaingó<br />Buenos Aires, Argentina
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="p-3 bg-neutral-800 rounded-lg text-[#C9A24D]">
              <PhoneIcon />
            </div>
            <div>
              <h4 class="font-bold text-lg">Teléfono & WhatsApp</h4>
              <p class="text-neutral-400">+54 11 1234-5678</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="p-3 bg-neutral-800 rounded-lg text-[#C9A24D]">
              <ClockIcon />
            </div>
            <div>
              <h4 class="font-bold text-lg">Horarios de Atención</h4>
              <p class="text-neutral-400">Lun - Sáb: 09:00 - 20:00</p>
            </div>
          </div>
        </div>

        <div class="flex gap-4">
          <a
            href="https://instagram.com/"
            target="_blank"
            class="p-3 border border-neutral-700 rounded-full hover:bg-[#C9A24D] hover:border-[#C9A24D] hover:text-white transition-all duration-300"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            class="p-3 border border-neutral-700 rounded-full hover:bg-[#C9A24D] hover:border-[#C9A24D] hover:text-white transition-all duration-300"
          >
            <FacebookIcon />
          </a>
          <a
            href="mailto:contacto@aurabeauty.com"
            class="p-3 border border-neutral-700 rounded-full hover:bg-[#C9A24D] hover:border-[#C9A24D] hover:text-white transition-all duration-300"
          >
            <MailIcon />
          </a>
        </div>
      </div>

      <div
        class="order-1 lg:order-2 bg-neutral-800/50 p-8 md:p-10 rounded-2xl border border-neutral-700/50 backdrop-blur-sm"
      >
        <h3 class="text-2xl font-serif mb-6">Envíanos un mensaje</h3>

        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label for="name" class="text-sm font-medium text-neutral-400"
                >Nombre Completo</label
              >
              <input
                type="text"
                id="name"
                class="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A24D] transition-colors placeholder-neutral-600"
                placeholder="Tu nombre"
              />
            </div>
            <div class="space-y-2">
              <label for="phone" class="text-sm font-medium text-neutral-400"
                >Teléfono</label
              >
              <input
                type="tel"
                id="phone"
                class="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A24D] transition-colors placeholder-neutral-600"
                placeholder="+54 11..."
              />
            </div>
          </div>

          <div class="space-y-2">
            <label for="email" class="text-sm font-medium text-neutral-400"
              >Email</label
            >
            <input
              type="email"
              id="email"
              class="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A24D] transition-colors placeholder-neutral-600"
              placeholder="tu@email.com"
            />
          </div>

          <div class="space-y-2">
            <label for="service" class="text-sm font-medium text-neutral-400"
              >Servicio de interés</label
            >
            <div class="relative">
              <select
                id="service"
                bind:value={selectedService}
                onchange={updateUrl}
                class="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A24D] transition-colors appearance-none text-neutral-300"
              >
                <option value="" disabled>Selecciona un servicio</option>
                {#each serviceOptions as option}
                  <option value={option}>{option}</option>
                {/each}
              </select>

              <div
                class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-neutral-500"
              ></div>
            </div>
          </div>

          <div class="space-y-2">
            <label for="message" class="text-sm font-medium text-neutral-400"
              >Mensaje (Opcional)</label
            >
            <textarea
              id="message"
              rows="4"
              class="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A24D] transition-colors resize-none placeholder-neutral-600"
              placeholder="¿Alguna preferencia de horario?"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-[#C9A24D] text-neutral-900 font-bold py-4 rounded-lg hover:bg-white transition-colors duration-300 shadow-lg mt-4"
          >
            ENVIAR CONSULTA
          </button>
        </form>
      </div>
    </div>
  </Container>
</Section>
