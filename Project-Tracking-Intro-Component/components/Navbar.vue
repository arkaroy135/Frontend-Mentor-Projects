<script setup lang="ts">
const menuOpen = ref(false);
defineProps(["nav"]);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<template>
  <header
    class="flex justify-between items-center h15dvh xl:h18dvh bg-transparent px9% relative">
    <NuxtLink to="/" aria-label="Link to Landing Page">
      <Brand class="w8 md:w10 lg:w11 3xl:w16 4xl:w18 aspect-1" />
    </NuxtLink>
    <div
      @click="toggleMenu()"
      class="<sm:(scale-80 -mr5 mt3) md:hidden float-right spacey1.5 z100">
      <div
        class="border-2 border-VeryDarkBlue rounded-full transition-all-200 w4 content-empty"
        :class="{
          'rotate-45 translate-y-1.1 translate-x-0.5': menuOpen,
        }"></div>
      <div
        class="border-2 border-VeryDarkBlue rounded-full transition-all-200 w8 content-empty"
        :class="{ 'rotate--45': menuOpen }"></div>
      <div
        class="border-2 border-VeryDarkBlue rounded-full transition-all-200 w4 translate-x-3.5 content-empty"
        :class="{
          'rotate-45 translate-y--1.1': menuOpen,
        }"></div>
    </div>
    <nav
      class="hidden md:flex flex-col md:flex-row justify-between items-center <md:(text-center text-5.5 tracking-0.3 absolute left-50% top-90% translate-x--50% bg-white w90% ha py5 shadow-xl shadow-GrayishBlue) font-BarlowCondensedBold text-body gap4 md:gap30 lg:text-5 xl:text-body 2xl:text-5 3xl:text-6 4xl:(text-8 gap50) z100"
      :class="{ flex: menuOpen }">
      <ul class="flex flex-col md:flex-row gap5 md:gap10">
        <li class="c-VeryDarkBlue" v-for="item in nav" :key="item.id">
          <NuxtLink
            :to="item.link"
            :aria-label="item.label"
            class="relative menu">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
      <hr class="block md:hidden border-1 border-GrayishBlue w80% my2" />
      <span
        class="!c-GrayishBlue menu after:!bg-GrayishBlue pb0.2 <md:tracking-0.3 cursor-pointer">
        Login
      </span>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
$VeryDarkBlue: hsl(230, 29%, 20%);
.menu {
  position: relative;
  width: max-content;
  justify-self: end;
  border: none;
  outline: transparent;
  background: none;
  text-transform: uppercase;
  transition-timing-function: color cubic-bezier(0.25, 0.8, 0.25, 1) 0.4s linear;

  &:is(:focus, :hover) {
    color: $VeryDarkBlue;

    &:after {
      width: 100%;
      left: 0%;
    }
  }

  &:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: $VeryDarkBlue;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 500ms;
    transition-property: width, left;
  }
}
</style>

