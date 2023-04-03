<template>
  <IconsBrand class="w23 h11.5" />
  <nav class="hidden md:block">
    <ul class="flex gap-7 md:cursor-pointer c-darkGrayishBlue fw500">
      <li class="md:hover:c-softOrange transition-all-200 ease-linear">Home</li>
      <li class="md:hover:c-softOrange transition-all-200 ease-linear">New</li>
      <li class="md:hover:c-softOrange transition-all-200 ease-linear">
        Popular
      </li>
      <li class="md:hover:c-softOrange transition-all-200 ease-linear">
        Trending
      </li>
      <li class="md:hover:c-softOrange transition-all-200 ease-linear">
        Categories
      </li>
    </ul>
  </nav>

  <!-- Mobile Menu -->

  <button
    @click.prevent="toggleItems"
    class="md:hidden text-12 absolute right-4 top-0"
    type="submit"
    aria-label="false">
    <Icon name="mdi:menu-open" />
  </button>
  <nav
    v-show="showItems"
    class="md:hidden absolute bg-white w65% right-0 top-0 bottom-0 pt27 pl8 min-h-screen fw500 text-5">
    <button
      @click.prevent="toggleItems"
      class="md:hidden text-12 absolute right-5 top-0"
      type="submit"
      aria-label="false">
      <Icon name="mdi:close" />
    </button>
    <ul class="space-y-4">
      <li>Home</li>
      <li>New</li>
      <li>Popular</li>
      <li>Trending</li>
      <li>Categories</li>
    </ul>
  </nav>
</template>

<script setup>
const showItems = ref(false);

function toggleItems() {
  showItems.value = !showItems.value;
  if (showItems.value) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "";
  }
}
</script>

<style lang="scss" scoped>
.no-scroll {
  overflow: hidden;
}
</style>

