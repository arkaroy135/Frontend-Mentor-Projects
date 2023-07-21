<script setup>
  defineProps([
    "icon",
    "user",
    "top",
    "followers",
    "followerCall",
    "growth",
    "arrow",
    "growthFig",
  ]);
</script>

<template>
  <div
    class="wfull md:w16rem z10 pt1 rd-2"
    :class="top">
    <div
      class="text-center wfull hfull mt0.2 p5 bg-LightGrayishBlue c-VeryDarkBlue dark:(bg-DarkDesaturatedBlue c-DesaturatedBlue) cursor-pointer @hover:(bg-gray-200 dark:bg-gray-700) transition-all-200 ease-linear z10 rd-2 mxa">
      <div class="spacex3 flex items-center justify-center">
        <img
          :src="icon"
          alt=""
          aria-hidden="true" />
        <span class="font-Inter-700 text-Card-Heading">{{ user }}</span>
      </div>
      <div class="-spacey1 py1.5">
        <strong class="text-13 dark:c-White font-Inter-700">{{
          followers
        }}</strong>
        <p class="p0 font-Inter-400 uppercase tracking-1 text-Card-Heading">
          {{ followerCall }}
        </p>
      </div>
      <div
        class="c-LimeGreen font-Inter-700 text-3.5 pt4"
        :class="{ '!c-BrightRed': !growth }">
        <Icon
          :name="arrow"
          class="w6 h6" />
        <span>{{ growthFig }} Today</span>
      </div>
    </div>
  </div>
</template>
