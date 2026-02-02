<script lang="ts">
  import "$lib/styles/layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import fontSans from "@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2?url";
  import fontSerif from "@fontsource-variable/lora/files/lora-latin-wght-normal.woff2?url";
  let { children } = $props();
</script>

<svelte:head>
  <link
    rel="preload"
    href={fontSans}
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href={fontSerif}
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  <link rel="icon" href={favicon} />
</svelte:head>
{@render children()}
