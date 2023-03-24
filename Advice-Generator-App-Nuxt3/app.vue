<template>
  <NuxtLayout>
    <template #toggler>
      <Toggle />
    </template>
    <template #card>
      <Card />
    </template>
    <template #footer>
      <Footer />
    </template>
  </NuxtLayout>
</template>
<script setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Advice Generator App",
  link: [{ rel: "shortcut icon", type: "image/png", href: "favicon.png" }],
});
</script>
<style lang="scss">
.theme-transition {
  transition: background-color 0.3s linear;
}
</style>

