<template>
  <button @click="toggleDark()">
    <span v-if="isDark" class="absolute top-3 right-4">
      <IconsMtos class="c-neonGreen w8 h6 transition-all-300 ease-linear" />
    </span>
    <span v-if="!isDark" class="absolute top-3 right-4">
      <IconsStom class="c-hex-143571 w8 h6 transition-all-300 ease-linear" />
    </span>
  </button>
</template>

<script setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

