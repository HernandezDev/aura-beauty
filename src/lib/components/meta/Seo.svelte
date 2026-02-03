<script lang="ts">
  import { page } from "$app/state";
  import { site } from "$lib/site.config";

  let props = $props();

  // 1. Normalización de URLs (Quitamos la barra al final para comparar strings limpiamente)
  const currentBase = site.url.replace(/\/$/, "");
  const productionBase = site.urlProd.replace(/\/$/, "");

  // 2. Detector de Producción
  // Si la URL del .env (currentBase) coincide con la oficial (productionBase), es PROD.
  const isProductionTarget = currentBase === productionBase;

  let title = $derived(props.title ?? site.name);
  let description = $derived(props.description ?? site.description);
  let image = $derived(props.image ?? site.ogImage);
  let imageAlt = $derived(props.imageAlt ?? site.ogImageAlt);
  let type = $derived(props.type ?? "website");

  // 3. Lógica de Indexación Blindada
  // Bloqueamos (true) si:
  // A. La página específica lo pide (props.noindex es true)
  // B. O NO estamos en el dominio de producción (!isProductionTarget)
  let shouldNoIndex = $derived(props.noindex || !isProductionTarget);

  let titleString = $derived(
    title === site.name ? title : `${title} | ${site.name}`,
  );

  let imageUrl = $derived(
    image.startsWith("http") ? image : `${currentBase}${image}`,
  );

  let canonicalUrl = $derived(`${currentBase}${page.url.pathname}`);
</script>

<svelte:head>
  <title>{titleString}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={site.keywords} />
  <meta name="author" content={site.author} />
  <meta name="theme-color" content={site.themeColor} />
  <link rel="canonical" href={canonicalUrl} />

  {#if shouldNoIndex}
    <meta name="robots" content="noindex, nofollow" />
  {:else}
    <meta name="robots" content="index, follow" />
  {/if}

  <meta property="og:site_name" content={site.name} />
  <meta property="og:type" content={type} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:title" content={titleString} />
  <meta property="og:description" content={description} />
  <meta property="og:locale" content={site.locale} />

  <meta property="og:image" content={imageUrl} />
  <meta property="og:image:alt" content={imageAlt} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image:alt" content={imageAlt} />

  <meta name="copyright" content={site.author} />
  <meta name="web_author" content={site.agency} />
</svelte:head>
