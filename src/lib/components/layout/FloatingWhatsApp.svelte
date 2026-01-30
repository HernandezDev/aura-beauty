<script lang="ts">
  import WhatsappIcon from "$lib/components/graphics/Whatsapp.svelte";

  // Estado para evitar doble clic y mostrar feedback visual si la red es lenta
  let loading = $state(false);

  const WHATSAPP_MESSAGE = "Hola Aura! 👋 Quisiera consultar por un turno.";

  async function handleContact() {
    if (loading) return; // Evita pulsaciones múltiples
    loading = true;

    try {
      // 1. Petición al endpoint (Backend SvelteKit)
      // No enviamos nada, solo pedimos el recurso.
      const response = await fetch("/api/whatsapp");

      if (!response.ok) throw new Error("Error al obtener contacto");

      const data = await response.json();

      // 2. Extracción Directa
      // Ya no decodificamos ni invertimos. Asumimos que el endpoint
      // hizo las validaciones de seguridad y nos dio el número listo.
      const phone = data.phone;

      if (!phone) throw new Error("Número no encontrado");

      // 3. Construcción de la URL
      const message = encodeURIComponent(WHATSAPP_MESSAGE);
      const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;

      // 4. Apertura Segura
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error iniciando chat:", error);
      // Opcional: alert("No pudimos conectar con WhatsApp en este momento.");
    } finally {
      loading = false;
    }
  }
</script>

<button
  onclick={handleContact}
  disabled={loading}
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
    cursor-pointer
    disabled:opacity-70 disabled:cursor-wait
  "
>
  {#if loading}
    <div class="w-8 h-8 flex items-center justify-center">
      <div
        class="w-5 h-5 border-2 border-[#C9A24D] border-t-transparent rounded-full animate-spin"
      ></div>
    </div>
  {:else}
    <WhatsappIcon
      class="w-8 h-8 text-[#C9A24D] transition-colors duration-300 group-hover:text-[#25D366]"
    />
  {/if}
</button>
