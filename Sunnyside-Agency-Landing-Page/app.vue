<template>
  <div class="max-w100dvw max-wscreen">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
  titleTemplate: (s) => {
    return s ? `Sunnyside Agency | ${s}` : "Sunnyside Agency";
  },
  meta: [
    {
      name: "description",
      content:
        "This is a landing page of the Sunnyside Agency with all the SEO requirements fulfilled. It is a Junior level Frontend Mentor Challenge.",
    },
  ],
});
</script>

