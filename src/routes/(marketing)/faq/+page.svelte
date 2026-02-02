<script>
  const SEO = {
    title: "Aura Beauty | Preguntas Frecuentes",
    description: "Resuelve tus dudas sobre nuestros servicios y reservas.",
  };
  const faqs = [
    {
      pregunta: "¿Cómo funciona el servicio?",
      respuesta: "Nuestro sistema gestiona tus reservas automáticamente...",
    },
    {
      pregunta: "¿Tengo que instalar algo?",
      respuesta: "No, todo funciona en la nube. Solo necesitas un navegador.",
    },
    {
      pregunta: "¿Cuáles son los métodos de pago?",
      respuesta:
        "Aceptamos todas las tarjetas de crédito, débito y transferencias.",
    },
  ];
</script>

<svelte:head>
  <title>{SEO.title}</title>
  <meta name="description" content={SEO.description} />
</svelte:head>

<div class="py-12 px-4 sm:px-6 lg:px-8">
  <article class="prose prose-lg mx-auto">
    <h1 class="text-center text-primary-600">Preguntas Frecuentes</h1>

    <p class="lead text-center">
      Aquí resolvemos las dudas más comunes sobre nuestro servicio.
    </p>

    {#each faqs as item}
      <div class="not-prose mt-8 mb-4"></div>

      <h3>{item.pregunta}</h3>
      <p>{item.respuesta}</p>
    {/each}

    <hr />
    <h3>¿Tienes más dudas?</h3>
    <p>
      Escríbenos a <a href="mailto:contacto@ejemplo.com">contacto@ejemplo.com</a
      > o contáctanos por WhatsApp.
    </p>
  </article>
</div>
