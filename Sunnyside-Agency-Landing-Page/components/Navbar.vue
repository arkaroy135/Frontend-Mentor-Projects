<template>
  <nav class="<md:hidden">
    <ul
      class="flex gap10 c-White items-center font-Barlow cursor-pointer text-3.8">
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/services">Services</NuxtLink></li>
      <li><NuxtLink to="/projects">Projects</NuxtLink></li>
      <li>
        <button
          type="submit"
          aria-label="false"
          class="bg-White c-VeryDarkDesaturatedBlue px6 py3 rounded-full font-Fraunces uppercase @hover:(bg-blue-300 c-White) transition-all-200 ease-linear">
          Contact
        </button>
      </li>
    </ul>
  </nav>

  <!-- Mobile Nav -->

  <div
    class="w-7.5 h-6 relative cursor-pointer md:hidden mt1"
    :class="{
      cross: isCross,
    }"
    @click.prevent="toggleCross">
    <span
      class="absolute block h-0.6 w-full bg-White rounded-full opacity-100 left-0 transform rotate-0 transition-all-250 ease-linear top-0"></span>
    <span
      class="absolute block h-0.6 w-full bg-White rounded-full opacity-100 left-0 transform rotate-0 transition-all-250 ease-linear top-2.2"></span>
    <span
      class="absolute block h-0.6 w-full bg-White rounded-full opacity-100 left-0 transform rotate-0 transition-all-250 ease-linear top-4.4"></span>
  </div>
  <nav
    v-show="isCross"
    class="md:hidden absolute bg-White w85% top-23 left-7 p10 text-5 text-center rounded-4">
    <div class="absolute -top-7 -right-0.1 triangle"></div>
    <ul class="space-y-5 c-VeryDarkDesaturatedBlue font-Barlow">
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/services">Services</NuxtLink></li>
      <li><NuxtLink to="/projects">Projects</NuxtLink></li>
      <li>
        <button
          type="submit"
          aria-label="false"
          class="bg-Yellow c-VeryDarkDesaturatedBlue px6 py3 rounded-full font-Fraunces uppercase">
          Contact
        </button>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";

const isCross: Ref<boolean> = ref(false);

function toggleCross() {
  isCross.value = !isCross.value;
}
</script>
<style lang="scss" scoped>
.triangle {
  height: 2.6rem;
  aspect-ratio: 1/2;
  background-color: White;
  clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
}

.cross {
  span {
    &:nth-child(1) {
      top: 0.6875rem;
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      top: 0.6875rem;
      transform: rotate(-45deg);
    }
  }
}
</style>

