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
<style lang="scss">
// ### Primary

$Pink: hsl(322, 100%, 66%);
$LightPink: hsl(321, 100%, 78%);
$LightRed: hsl(0, 100%, 63%);

// ### Neutral

$VeryDarkCyan: hsl(192, 100%, 9%);
$VeryPaleBlue: hsl(210, 100%, 98%);
$FooterLink: hsl(228, 45%, 44%);
</style>

