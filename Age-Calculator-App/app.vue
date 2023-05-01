<template>
  <div
    class="flex justify-center items-center min-w100dvw min-wscreen min-h100dvh min-h100vh bg-LightGrey">
    <Card />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en-IN",
  },
  title: "Age Calculator",
  meta: [
    {
      name: "description",
      content:
        "Find out your exact age with our free online age calculator. Simply enter your birth date and get your age in years, months, and days. Try it now!",
    },
  ],
});
</script>

