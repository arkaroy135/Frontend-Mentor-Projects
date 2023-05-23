<template>
  <div
    class="h6rem sm:(h8rem px9) xl:(h10rem px35) 3xl:(h15rem px50) 4xl-(h18rem px70) bg-transparent flex items-center justify-between px10 md:px15 2xl:px40">
    <NuxtLink to="/" aria-label="Link to Landing Page" class="z100">
      <Brand
        class="h8 w48 <sm:(scale-75 ml--11 mt3) md:mt--2 3xl:scale-150 4xl:scale-180" />
    </NuxtLink>
    <nav class="hidden md:block z100">
      <ul class="flex gap5">
        <li class="pb2 relative" v-for="item in menuItems" :key="item.id">
          <NuxtLink
            :to="item.link"
            :aria-label="item.label"
            class="md:cursor-pointer c-White font-Alata text-3.5 2xl:text-4 3xl:text-6 4xl:text-7 before:(absolute content-none left-50% translate-x--50% bottom-0 h0.5 rounded-full w70% bg-White scale-x-0 origin-left transition-all-200 ease-linear) @hover:before:scale-x-100"
            >{{ item.name }}</NuxtLink
          >
        </li>
      </ul>
    </nav>

    <!-- Mobile Menu -->

    <div
      @click="toggleMenu"
      class="<sm:(scale-80 mr--5 mt3) w8 md:hidden float-right spacey1.5 z100">
      <div
        class="border-2 border-White rounded-full transition-all-300"
        :class="{ 'rotate--45 translate-y-2.5': menuOpen }"></div>
      <div
        class="border-2 border-White rounded-full transition-all-300"
        :class="{ op0: menuOpen }"></div>
      <div
        class="border-2 border-White rounded-full transition-all-300"
        :class="{ 'rotate-45 translate-y--2.5': menuOpen }"></div>
    </div>
    <nav
      class="block md:hidden bg-Black c-DarkGray text-6.5 sm:text-8 font-JosefinSans fw300 z99 fixed inset-0 transition-all-250 ease-linear"
      :style="{
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        opacity: menuOpen ? '1' : '0',
      }">
      <ul class="spacey2 pt25 pl4 sm:(pt30 pl6)">
        <li class="uppercase" v-for="item in menuItems" :key="item.id">
          <NuxtLink
            :to="item.link"
            @click="toggleMenu"
            :aria-label="item.label"
            >{{ item.name }}</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
const menuOpen = ref(false);
defineProps(["menuItems"]);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

