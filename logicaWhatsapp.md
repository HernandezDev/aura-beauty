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

para la burbuja flotante se usa position: fixed y bottom/right para ubicarla en la esquina inferior derecha.

componete logico

```svelte
<script lang="ts">
  import { onMount } from 'svelte';
  import IconWhatsapp from '$lib/components/icons/Whatsapp.svelte'; // Importamos el visual

  let href = '';
  let visible = false;

  const ENCODED_NUMBER = 'NTQ5MTEzMzMzNDQ0NA==';
  const WHATSAPP_MESSAGE = "Hola Aura! 👋 Quisiera consultar por un turno.";

  onMount(() => {
    setTimeout(() => {
      const phone = atob(ENCODED_NUMBER);
      const message = encodeURIComponent(WHATSAPP_MESSAGE);
      href = `https://wa.me/${phone}?text=${message}`;
      visible = true;
    }, 1500);
  });
</script>

{#if visible}
  <a {href}
     target="_blank"
     rel="noopener noreferrer"
     class="fixed bottom-4 right-4 z-50 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-stone-100 group"
     aria-label="Contactar por WhatsApp">

    <IconWhatsapp
        class="w-8 h-8 text-[#C9A24D] group-hover:text-[#25D366] transition-colors duration-300"
    />
  </a>
{/if}
```
