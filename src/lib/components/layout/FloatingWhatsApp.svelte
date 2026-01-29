<script lang="ts">
  import { onMount } from "svelte";
  // Importamos el gráfico "tonto" desde su nueva casa
  import WhatsappIcon from "$lib/components/graphics/Whatsapp.svelte";
  import mensajes from "$lib/components/layout/mensajes.json";
  let href = $state("#");
  let visible = $state(false);

  // --- CONFIGURACIÓN ---
  // Tu número en Base64 (Recuerda generarlo con btoa('54911...') en la consola)
  const ENCODED_NUMBER = "NTQxMTM4NDY4Mjcx";
  const WHATSAPP_MESSAGE = mensajes.whatsapp_aura;

  onMount(() => {
    // Retraso táctico: Evita bloquear el hilo principal al cargar
    // y oculta el enlace de los crawlers básicos
    const timer = setTimeout(() => {
      const phone = atob(ENCODED_NUMBER);
      const message = encodeURIComponent(WHATSAPP_MESSAGE);

      href = `https://wa.me/${phone}?text=${message}`;
      visible = true;
    }, 1500);

    return () => clearTimeout(timer); // Limpieza de memoria
  });
</script>

{#if visible}
  <a
    {href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    class="
      fixed bottom-4 right-4 z-50
      group
      flex items-center justify-center
      p-3
      bg-white rounded-full
      shadow-lg hover:shadow-xl
      border border-stone-100
      transition-all duration-300
      hover:scale-110
    "
  >
    <WhatsappIcon
      class="w-8 h-8 text-[#C9A24D] transition-colors duration-300 group-hover:text-[#25D366]"
    />
  </a>
{/if}
