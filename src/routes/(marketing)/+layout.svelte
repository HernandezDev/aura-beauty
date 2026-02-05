<script lang="ts">
  import { page } from "$app/state";
  import Seo from "$lib/components/meta/Seo.svelte";
  import HeaderNav from "$lib/components/layout/Navbar.svelte";
  import Logo from "$lib/components/graphics/Logo.svelte";
  import IconHome from "~icons/lucide/house";
  import IconServices from "~icons/lucide/sparkles";
  import IconAbout from "~icons/lucide/users";
  import IconReviews from "~icons/lucide/star";
  import IconContact from "~icons/lucide/phone";
  import IconFacebook from "~icons/lucide/facebook";
  import IconInstagram from "~icons/lucide/instagram";
  import Footer from "$lib/components/layout/Footer.svelte";
  import Whatsapp from "$lib/components/layout/FloatingWhatsApp.svelte";
  import type { Routes, FooterLinks, SocialLinks } from "$lib/types/navigation";
  const ROUTES: Routes = [
    { id: "home", label: "Inicio", href: "/#home", icon: IconHome },
    {
      id: "services",
      label: "Servicios",
      href: "/#services",
      icon: IconServices,
    },
    { id: "about", label: "Nosotros", href: "/#about", icon: IconAbout },
    { id: "reviews", label: "Reseñas", href: "/#reviews", icon: IconReviews },
    { id: "contact", label: "Contacto", href: "/#contact", icon: IconContact },
  ];
  const FOOTER_LINKS: FooterLinks = [
    { label: "Preguntas frecuentes", href: "/faq" },
  ];
  const SOCIAL_LINKS: SocialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: IconInstagram,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      icon: IconFacebook,
    },
  ];

  // Constantes de estilo
  const auraActiveClasses =
    "bg-[#C9A24D]/20 text-[#C9A24D] border border-[#C9A24D]/30 rounded-md";
  const auraMenuClasses =
    "bg-gray-800/90 backdrop-blur-md border-t border-gray-700";
  const auraHeaderClasses = "bg-gray-900/95 shadow-lg";
  let { children } = $props();
  let seoData = $derived(page.data ?? {});
  /* 📝 SEO INDIVIDUAL (Instrucciones para copiar en +page.ts):
  -----------------------------------------------------------
  import type { PageLoad } from './$types';
  
  export const load: PageLoad = () => ({
      title: "Título Personalizado", 
      description: "Descripción para Google...",
      noindex: false 
  });
  */
</script>

<Seo {...seoData} />

<HeaderNav
  routes={ROUTES}
  logo={Logo}
  classActive={auraActiveClasses}
  classNameMenu={auraMenuClasses}
  classNameHeader={auraHeaderClasses}
/>
{@render children()}
<Whatsapp />
<Footer
  brandName="Aura Beauty"
  footerLinks={FOOTER_LINKS}
  socialLinks={SOCIAL_LINKS}
/>
