<script lang="ts">
  import { cn } from "$lib/utils";
  let { class: className = undefined, ...rest } = $props();
  // colocar siempre class={cn("select-none fill-current", className)}{...rest}
  // en la etiqueta svg para que funcione fill-current
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class={cn("select-none fill-current", className)}
  {...rest}
>
  <path
    d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
  />
  <path
    d="M15.5 13.5a.6.6 0 0 0 .7-.2l.2-.3a1.2 1.2 0 0 1 1.1-.5h1.8a1.2 1.2 0 0 1 1.2 1.2v1.8a1.2 1.2 0 0 1-1.2 1.2 10.8 10.8 0 0 1-10.8-10.8 1.2 1.2 0 0 1 1.2-1.2h1.8a1.2 1.2 0 0 1 1.2 1.2l-.1.2a.6.6 0 0 0 .2.7l3.8 3.8z"
    transform="translate(-2, -2) scale(1.1)"
    transform-origin="center"
  />
</svg>
