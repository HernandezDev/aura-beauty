```svelte
<script lang="ts">
  import { onMount } from 'svelte';

  let href = '';
  let visible = false;

  // --- CONFIGURACIÓN ---
  // 1. Tu número ofuscado (Base64)
  const ENCODED_NUMBER = 'NTQ5MTEzMzMzNDQ0NA==';

  // 2. Tu mensaje editable (Escribe normal, con espacios y tildes)
  const WHATSAPP_MESSAGE = "Hola Aura! 👋 Quisiera consultar por un turno.";

  onMount(() => {
    setTimeout(() => {
      const phone = atob(ENCODED_NUMBER);

      // encodeURIComponent convierte:
      // "Hola Aura!" -> "Hola%20Aura%21"
      const message = encodeURIComponent(WHATSAPP_MESSAGE);

      href = `https://wa.me/${phone}?text=${message}`;
      visible = true;
    }, 1500);
  });
</script>

{#if visible}
  <a {href}
     class="fixed bottom-4 right-4 z-50 transition-opacity duration-700 hover:scale-110"
     target="_blank"
     rel="noopener noreferrer"
     aria-label="Contactar por WhatsApp">
    <img src="/whatsapp.svg" alt="" class="w-12 h-12" />
  </a>
{/if}
```
