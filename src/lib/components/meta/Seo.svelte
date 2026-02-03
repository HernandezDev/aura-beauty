<script lang="ts">
  import { page } from "$app/state";
  import { site } from "$lib/site.config";
  let props = $props();

  let title = $derived(props.title ?? site.name);
  let description = $derived(props.description ?? site.description);
  let image = $derived(props.image ?? site.ogImage);
  let type = $derived(props.type ?? "website");
  let noindex = $derived(props.noindex ?? false);

  let titleString = $derived(
    title === site.name ? title : `${title} | ${site.name}`,
  );

  // 4. URLs Absolutas
  // MODIFICADO: Usamos la variable de entorno como fuente de verdad.
  // Si por error no existe en el .env, usa site.url como respaldo.
  const rawUrl = site.url;
  const siteUrl = rawUrl.replace(/\/$/, "");

  let imageUrl = $derived(
    image.startsWith("http") ? image : `${siteUrl}${image}`,
  );

  let canonicalUrl = $derived(`${siteUrl}${page.url.pathname}`);
</script>

<svelte:head>
  <title>{titleString}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={site.keywords} />
  <meta name="author" content={site.author} />
  <meta name="theme-color" content={site.themeColor} />
  <link rel="canonical" href={canonicalUrl} />

  {#if noindex}
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
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:card" content="summary_large_image" />

  <meta name="copyright" content={site.author} />
  <meta name="web_author" content={site.agency} />
</svelte:head>
