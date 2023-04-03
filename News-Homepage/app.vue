<template>
  <div
    class="container w92% md:w80% mxa text-0.9375rem font-inter grid grid-rows-[auto,1fr,auto]">
    <header
      class="flex justify-between items-center py5 md:py8 lg:py11 row-span-1">
      <Navbar />
    </header>
    <main class="grid grid-cols-1 md:grid-cols-3 gap-6 row-auto mb2">
      <section class="md:col-span-3 lg:grid lg:grid-cols-3 lg:space-x-6">
        <Hero />
      </section>
      <section class="md:col-span-3 md:grid md:grid-cols-3">
        <News />
      </section>
    </main>
    <footer class="w-full row-span-1 self-end py1">
      <Footer />
    </footer>
  </div>
</template>
<script setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "News Homepage",
  link: [{ rel: "shortcut icon", type: "image/png", href: "/favicon.png" }],
});
</script>
<style lang="scss">
// .theme-transition {
//   transition: background-color 0.3s linear;
// }

$Soft-orange: hsl(35, 77%, 62%);
$Soft-red: hsl(5, 85%, 63%);

$Off-white: hsl(36, 100%, 99%);
$Grayish-blue: hsl(233, 8%, 79%);
$Dark-grayish-blue: hsl(236, 13%, 42%);
$Very-dark-blue: hsl(240, 100%, 5%);
</style>

