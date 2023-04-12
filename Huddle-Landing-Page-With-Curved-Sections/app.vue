<template>
  <div class="grid grid-col-[auto_1fr_auto]">
    <header
      class="flex justify-between items-center py4 md:py7 md:px20 mxa w90% md:w100% max-w100dvw max-wscreen">
      <Navbar />
    </header>
    <main class="max-w100dvw max-wscreen">
      <Hero />
      <Stats />
      <Contents />
      <Community />
    </main>
    <footer class="max-w100dvw max-wscreen">
      <Footer />
    </footer>
  </div>
</template>
<script setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Huddle Landing Page with Curved Sections",
  link: [
    {
      rel: "shortcut icon",
      type: "image/png",
      href: "/favicon.png",
      sizes: "32x32",
    },
  ],
});
</script>
