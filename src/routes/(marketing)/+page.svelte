<script lang="ts">
  import HeaderNav from "$lib/components/layout/Navbar.svelte";
  import Section from "$lib/components/ui/Section.svelte";
  import Logo from "$lib/components/ui/Logo.svelte";
  import IconHome from "~icons/lucide/house";
  import IconServices from "~icons/lucide/sparkles";
  import IconAbout from "~icons/lucide/users";
  import IconReviews from "~icons/lucide/star";
  import IconContact from "~icons/lucide/phone";
  import type { Routes } from "$lib/types/navigation";
  import Hero from "$lib/components/sections/Hero.svelte";
  import Services from "$lib/components/sections/Services.svelte";
  import About from "$lib/components/sections/About.svelte";
  import Reviews from "$lib/components/sections/Reviews.svelte";
  import Contact from "$lib/components/sections/Contact.svelte";
  import Footer from "$lib/components/ui/Footer.svelte";
  const ROUTES: Routes = [
    { id: "home", label: "Inicio", href: "#home", icon: IconHome },
    {
      id: "services",
      label: "Servicios",
      href: "#services",
      icon: IconServices,
    },
    { id: "about", label: "Nosotros", href: "#about", icon: IconAbout },
    { id: "reviews", label: "Reseñas", href: "#reviews", icon: IconReviews },
    { id: "contact", label: "Contacto", href: "#contact", icon: IconContact },
  ];

  // Constantes de estilo
  const auraActiveClasses =
    "bg-[#C9A24D]/20 text-[#C9A24D] border border-[#C9A24D]/30 rounded-md";
  const auraMenuClasses =
    "bg-gray-800/90 backdrop-blur-md border-t border-gray-700";
  const auraHeaderClasses = "bg-gray-900/95 shadow-lg";
</script>

<HeaderNav
  routes={ROUTES}
  logo={Logo}
  classActive={auraActiveClasses}
  classNameMenu={auraMenuClasses}
  classNameHeader={auraHeaderClasses}
/>
<main>
  <Hero sectionId="home"></Hero>
  <Services />
  <About />
  <Reviews />
  <Contact />
</main>
<Footer />
