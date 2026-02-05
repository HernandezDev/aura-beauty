<script lang="ts">
  import Container from "$lib/components/ui/Container.svelte";
  import type { Snippet, Component } from "svelte";
  import type { FooterLinks, SocialLinks } from "$lib/types/navigation";

  interface Props {
    brandName: string | Snippet;
    copyrightText?: string;

    // Arrays de datos
    footerLinks?: FooterLinks;
    socialLinks?: SocialLinks;

    // Créditos del desarrollador (Tú)
    developerName?: string;
    developerUrl?: string;
  }

  const currentYear = new Date().getFullYear();

  let {
    brandName,
    copyrightText = "Todos los derechos reservados.",
    footerLinks = [],
    socialLinks = [],
    developerName = "HernandezDev", // Tu marca personal por defecto
    developerUrl = "https://www.linkedin.com/in/hernandezdev/",
  }: Props = $props();
</script>

{#snippet renderContent(content: string | Snippet)}
  {#if typeof content === "string"}
    {content}
  {:else}
    {@render content()}
  {/if}
{/snippet}

<footer
  class="bg-black text-neutral-400 py-12 border-t border-neutral-800 flex-nowrap md:pr-14"
>
  <Container>
    <div class="flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="text-center md:text-left">
        <h4 class="text-white font-serif text-lg tracking-wide mb-1">
          {@render renderContent(brandName)}
        </h4>
        <p class="text-sm">
          &copy; {currentYear}
          {copyrightText}
        </p>
      </div>

      {#if footerLinks.length > 0}
        <div class="flex gap-6 text-sm font-medium">
          {#each footerLinks as link}
            <a href={link.href} class="hover:text-white transition-colors">
              {link.label}
            </a>
          {/each}
        </div>
      {/if}

      <div class="flex flex-col items-center md:items-end gap-3">
        {#if socialLinks.length > 0}
          <div class="flex gap-4">
            {#each socialLinks as social}
              <a
                href={social.href}
                aria-label={social.label}
                class="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon />
              </a>
            {/each}
          </div>
        {/if}

        <p class="text-xs text-neutral-600">
          Diseñado por
          <a
            class="text-neutral-400 font-medium hover:text-white transition-colors"
            href={developerUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {developerName}
          </a>
        </p>
      </div>
    </div>
  </Container>
</footer>
