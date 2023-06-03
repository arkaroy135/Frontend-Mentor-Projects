<script setup lang="ts">
const page = useRoute("page").params.page;
</script>

<template>
  <NuxtLayout>
    <div
      class="mt--15dvh w100dvw h100dvh flex items-center justify-center capitalize text-10 font-BarlowCondensedBold">
      welcome to
      <mark class="c-Red bg-transparent mx1 uppercase">{{ page }}</mark> page
    </div>
  </NuxtLayout>
</template>

