<template>
  <NuxtLayout name="home">
    <Hero />
    <Lead />
    <Creation />
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "home",
});
</script>

