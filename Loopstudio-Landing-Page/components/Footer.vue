<template>
  <div
    class="flex flex-col md:(flex-row p15) items-center justify-between bg-Black c-White <md:gap10 p10 xl:px35 2xl:px40 3xl:py20 4xl:py30">
    <div class="text-left <md:text-center">
      <Brand class="<md:mxa mb5 w48 h10" />
      <nav>
        <ul class="flex gap3 md:gap5 xl:gap7">
          <li class="pb1 relative" v-for="item in menuItems" :key="item.id">
            <NuxtLink
              :to="item.link"
              :aria-label="item.label"
              class="md:cursor-pointer c-White font-Alata xs:text-2.8 sm:text-body md:text-3 xl:text-body 3xl:text-4.1 4xl:text-5 before:(absolute content-none left-50% translate-x--50% bottom-0 h0.5 rounded-full w70% bg-White scale-x-0 origin-left transition-all-200 ease-linear) @hover:before:scale-x-100"
              >{{ item.name }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex flex-col text-right <md:text-center gap2 xl:gap5">
      <ul class="gap2 flex justify-center md:justify-end">
        <li class="relative pb2" v-for="s in social" :key="s.id">
          <NuxtLink
            :to="s.link"
            :external="true"
            target="_blank"
            :aria-label="'Link to ' + s.name + ' Page'"
            class="before:(absolute content-none left-50% translate-x--50% bottom-0 h0.5 rounded-full w60% bg-White scale-x-0 origin-left transition-all-200 ease-linear) @hover:before:scale-x-100">
            <Icon :name="s.icon" class="w7 h7 cursor-pointer"
          /></NuxtLink>
        </li>
      </ul>
      <p
        class="c-CopyRight font-Alata xs:(text-2.7 leading-5) sm:(text-body leading-6) md:(text-3 leading-4) xl:(text-body leading-5) 3xl:(text-4.1 leading-6) 4xl:text-5">
        © {{ year }} Loopstudios. All rights reserved.<br />Designed by
        <span class="relative pb1"
          ><NuxtLink
            to="/"
            aria-label="Link to Designer's Profile"
            class="c-White before:(absolute content-none left-45% translate-x--50% bottom-0 h0.5 rounded-full w50% bg-White scale-x-0 origin-left transition-all-200 ease-linear) @hover:before:scale-x-100"
            >Roy</NuxtLink
          >.</span
        >
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps(["menuItems", "social"]);
const date = new Date();
const year = date.getFullYear();
</script>

