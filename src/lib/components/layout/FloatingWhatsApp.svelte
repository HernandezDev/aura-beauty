<script lang="ts">
  import { onMount } from "svelte";
  import WhatsappIcon from "$lib/components/graphics/Whatsapp.svelte";

  let href = $state("#");
  let visible = $state(false);

  // 1. NÚMERO CON EL '9' (Formato Argentina Móvil)
  // 5491138468271 en Base64
  const ENCODED_NUMBER = "NTQ5MTEzODQ2ODI3MQ==";

  // 2. USAMOS EL EMOJI DIRECTO (Ya vimos que tu log lo saca bien)
  const WHATSAPP_MESSAGE = "Hola Aura! 👋 Quisiera consultar por un turno.";

  onMount(() => {
    const timer = setTimeout(() => {
      const phone = atob(ENCODED_NUMBER);
      const message = encodeURIComponent(WHATSAPP_MESSAGE);

      // 3. CAMBIO CLAVE: Usamos api.whatsapp.com en lugar de wa.me
      // Esto evita que el navegador 'limpie' los códigos antes de mandar el mensaje.
      href = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;

      visible = true;
    }, 1500);

    return () => clearTimeout(timer);
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
