<script>
  import { page } from "$app/state";
  import Logo from "$lib/components/graphics/Logo.svelte";
</script>

<div
  class="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-4 text-center"
>
  <div
    class="mb-8 scale-150 opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
  >
    <Logo />
  </div>

  <h1 class="text-6xl font-bold text-[#C9A24D] mb-4">
    {page.status}
  </h1>

  <p class="text-2xl font-serif text-stone-800 mb-2">Algo salió mal.</p>

  <p class="text-stone-500 max-w-md mb-8">
    Parece que la página que buscas no existe o ha sido movida.
  </p>

  <a
    href="/"
    class="
      px-8 py-3
      bg-stone-900 text-white
      rounded-full
      font-medium tracking-wide
      hover:bg-[#C9A24D]
      transition-colors duration-300
      shadow-lg hover:shadow-xl
    "
  >
    Volver al Inicio
  </a>
</div>
