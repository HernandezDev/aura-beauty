<script lang="ts">
  import type { Routes } from "$lib/types/navigation";
  import type { Component } from "svelte";
  import Container from "$lib/components/ui/Container.svelte";
  import { cn } from "$lib/utils";
  import MenuIcon from "~icons/lucide/menu";
  import XIcon from "~icons/lucide/x";
  import { slide, crossfade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { page } from "$app/state";

  interface Props {
    routes: Routes;
    classNameHeader?: string;
    classNameMenu?: string;
    classActive?: string;
    logo?: Component;
    logoHeight?: string;
    logoWidth?: string;
    showIconsDesktop?: boolean;
  }

  let {
    routes,
    classNameHeader,
    classNameMenu,
    classActive,
    logo,
    logoHeight = "h-25",
    logoWidth = "w-50",
    showIconsDesktop = false,
  }: Props = $props();

  let innerWidth = $state(0);
  let headerRef: HTMLElement | undefined = $state();
  let isMobileMenuOpen = $state(false);
  let isUserClick = false;
  let activeID = $state("");

  function toggleMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  // --- LÓGICA DEL OBSERVADOR (SCROLL SPY) ---
  $effect(() => {
    const currentPath = page.url.pathname;

    // 3. Guardia de seguridad: Si no estamos en la home, no intentamos observar nada.
    if (currentPath !== "/") {
      activeID = currentPath;
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Línea central
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (isUserClick) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Aquí actualizamos el estado LOCAL
          activeID = `/#${entry.target.id}`;
        }
      });
    }, observerOptions);

    routes.forEach((route) => {
      const sectionID = route.href.replace("/#", "");
      const element = document.getElementById(sectionID);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  });

  function handleClickOutside(event: MouseEvent) {
    if (!isMobileMenuOpen) return;
    const target = event.target as Node;
    if (headerRef && !headerRef.contains(target)) {
      isMobileMenuOpen = false;
    }
  }

  const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),
    easing: quintOut,
  });

  const [sendMovil, receiveMovil] = crossfade({
    duration: (d) => Math.sqrt(d * 2000),
    easing: quintOut,
  });

  $effect(() => {
    if (innerWidth >= 768 && isMobileMenuOpen) {
      isMobileMenuOpen = false;
    }
  });
</script>

<svelte:window bind:innerWidth on:click={handleClickOutside} />

<header
  bind:this={headerRef}
  class={cn("bg-gray-800 text-white p-4 sticky top-0 z-50", classNameHeader)}
>
  <Container>
    <nav class="flex justify-between items-center">
      <div class={cn("relative flex items-center", logoWidth)}>
        {#if logo}
          {@const Logo = logo}
          <a
            href="/#home"
            aria-label="Volver al inicio"
            onclick={() => {
              if (isMobileMenuOpen) {
                setTimeout(() => {
                  isMobileMenuOpen = false;
                }, 600);
              }
            }}
          >
            <div class="absolute top-1/2 -translate-y-1/2 left-0 z-60">
              <Logo
                class={cn(" filter drop-shadow-lg", logoHeight, logoWidth)}
              />
            </div>
          </a>
        {/if}
      </div>

      <button
        class="md:hidden p-1"
        onclick={(e) => {
          e.stopPropagation();
          toggleMenu();
        }}
        aria-label="Toggle menu"
      >
        {#if isMobileMenuOpen}
          <XIcon class="w-8 h-8" />
        {:else}
          <MenuIcon class="w-8 h-8" />
        {/if}
      </button>

      <ul class="hidden md:flex justify-end items-center gap-0">
        {#each routes as route (route.id)}
          <li>
            <a
              href={route.href}
              class={cn(
                "relative hover:underline block overflow-hidden transition-all",
                // 2. px-3: Reduce el tamaño de la "pastilla" pero mantiene el contacto.
                // px-3 (12px) + px-3 (12px) = 24px de separación visual entre textos.
                "px-3 py-2",
              )}
            >
              {#if activeID === route.href}
                <div
                  in:send={{ key: "active-pill" }}
                  out:receive={{ key: "active-pill" }}
                  class={cn(
                    "absolute inset-0 bg-white/15 rounded-md -z-10",
                    classActive,
                  )}
                ></div>
              {/if}
              {#if showIconsDesktop && route.icon}
                {@const Icon = route.icon}
                <div class="flex items-center gap-2">
                  <Icon class="hidden lg:inline-block mr-2 w-5 h-5 shrink-0" />
                  <span class="relative z-10">{route.label}</span>
                </div>
              {/if}
              {#if !showIconsDesktop || !route.icon}
                <span class="relative z-10">{route.label}</span>
              {/if}
            </a>
          </li>
        {/each}
      </ul>

      {#if isMobileMenuOpen}
        <ul
          transition:slide={{ axis: "y", duration: 300 }}
          class={cn(
            "md:hidden absolute top-full left-0 w-full bg-gray-800 border-t border-gray-700 flex flex-col p-4 gap-4 shadow-xl z-50 ",
            classNameMenu,
          )}
        >
          {#each routes as route (route.id)}
            <li>
              <a
                href={route.href}
                class="relative hover:underline block overflow-hidden px-2 py-2"
                onclick={(e) => {
                  isUserClick = true;
                  if (activeID === route.href) {
                    isMobileMenuOpen = false;
                    isUserClick = false;
                    return;
                  }
                  activeID = route.href;
                }}
              >
                {#if activeID === route.href}
                  <div
                    in:sendMovil={{ key: "mobile-pill" }}
                    out:receiveMovil={{ key: "mobile-pill" }}
                    onintroend={() => {
                      if (isUserClick) {
                        setTimeout(() => {
                          isMobileMenuOpen = false;
                          isUserClick = false;
                        }, 150);
                      }
                    }}
                    class={cn(
                      "absolute inset-0 bg-white/15 rounded-md -z-10",
                      classActive,
                    )}
                  ></div>
                {/if}

                <div class="flex items-center gap-3">
                  {#if route.icon}
                    {@const Icon = route.icon}
                    <Icon class="w-5 h-5 shrink-0" />
                  {/if}

                  <span class="relative z-10 font-medium text-base">
                    {route.label}
                  </span>
                </div>
              </a>
            </li>
          {/each}
        </ul>
      {/if}
    </nav>
  </Container>
</header>
