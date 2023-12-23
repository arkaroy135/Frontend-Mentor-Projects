<script setup lang="ts">
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>

<template>
  <button
    @click="toggleDark()"
    type="reset"
    aria-label="false"
    class="!bg-transparent">
    <span v-if="isDark">
      <IconsMoon2Sun
        class="c-yellow-400 w8 h6 transition-all-200 ease-linear" />
    </span>
    <span v-if="!isDark">
      <IconsSun2Moon class="c-gray-300 w8 h6 transition-all-200 ease-linear" />
    </span>
  </button>
</template>
