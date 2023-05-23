<template>
  <NuxtLayout name="others">
    <div class="text-center">
      <h1 class="text-8 font-Alata capitalize">hello from {{ page }}</h1>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
const page = useRoute("page").params.page;
definePageMeta({
  layout: "others",
});
</script>

