<template>
  <div class="rounded-3 3xl:rounded-4 overflow-hidden relative mxa group">
    <LazyNuxtImg
      format="avif"
      width="654"
      height="240"
      :src="phoneimg"
      :alt="alt_text"
      class="md:hidden" />
    <LazyNuxtImg
      format="avif"
      width="512"
      height="900"
      :src="biggerscreenimg"
      :alt="alt_text"
      class="<md:hidden group-hover:(scale-105 blur-2) transition-all-500 cursor-pointer" />
    <h2
      class="absolute w80% max-w6em c-White font-JosefinSans fw300 xs:(bottom-2.5 left-3 leading-4 text-4) sm:(bottom-3 left-4 leading-6 text-6) xl:(bottom-4 left-5 leading-7) 2xl:(text-7 bottom-5 left-5.5) 3xl:(text-9 leading-10 bottom-7 left-8) 4xl:(text-13 leading-14 bottom-9 left-10) uppercase cursor-pointer whitespace-pre">
      {{ title }}
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps(["phoneimg", "biggerscreenimg", "alt_text", "title"]);
</script>

