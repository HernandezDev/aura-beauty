<script lang="ts">
  import { cn } from "$lib/utils";
  let { class: className = undefined, ...rest } = $props();
  // colocar siempre class={cn("select-none fill-current", className)}{...rest}
  // en la etiqueta svg para que funcione fill-current
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="115 15 330 170"
  class={cn("select-none fill-current", className)}
  {...rest}
>
  <g class="font-sans font-bold text-[#C9A24D]">
    <circle
      cx="200"
      cy="100"
      r="80"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
    />
    <polygon
      points="275,45 280,55 290,60 280,65 275,75 270,65 260,60 270,55"
      fill="currentColor"
    />
    <text x="320" y="125" font-size="26" letter-spacing="4" fill="currentColor">
      BEAUTY
    </text>
  </g>

  <text
    x="150"
    y="115"
    font-size="72"
    fill="currentColor"
    class="font-serif italic text-[#C48A8A]"
  >
    Aura
  </text>
</svg>
