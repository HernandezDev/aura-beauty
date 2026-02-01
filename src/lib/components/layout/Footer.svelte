<script lang="ts">
  import Container from "$lib/components/ui/Container.svelte";
  import InstagramIcon from "~icons/lucide/instagram";
  import FacebookIcon from "~icons/lucide/facebook";

  const currentYear = new Date().getFullYear();
  // Para depuración de generación de pie de página
  //const horaGeneracion = new Date().toLocaleTimeString();
</script>

<footer class="bg-black text-neutral-400 py-12 border-t border-neutral-800">
  <Container>
    <div class="flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="text-center md:text-left">
        <h4 class="text-white font-serif text-lg tracking-wide mb-1">
          AURA BEAUTY
        </h4>
        <p class="text-sm">
          &copy; {currentYear} Todos los derechos reservados.
        </p>
      </div>

      <div class="flex gap-6 text-sm font-medium">
        <a
          href="#home"
          aria-label="Inicio"
          class="hover:text-[#C9A24D] transition-colors">Inicio</a
        >
        <a
          href="#services"
          aria-label="Servicios"
          class="hover:text-[#C9A24D] transition-colors">Servicios</a
        >
        <a
          href="#contact"
          aria-label="Contacto"
          class="hover:text-[#C9A24D] transition-colors">Contacto</a
        >
      </div>

      <div class="flex flex-col items-center md:items-end gap-3">
        <div class="flex gap-4">
          <a
            href="https://instagram.com/"
            aria-label="Instagram"
            class="hover:text-white transition-colors"><InstagramIcon /></a
          >
          <a
            href="https://facebook.com/"
            aria-label="Facebook"
            class="hover:text-white transition-colors"><FacebookIcon /></a
          >
        </div>

        <p class="text-xs text-neutral-600">
          Diseñado por <span class="text-neutral-400 font-medium"
            >HernandezDev</span
          >
        </p>
      </div>
    </div>
  </Container>
</footer>
