<script setup>
  defineProps(["title", "logo", "counter", "grew", "arrowStyle", "percentage"]);
</script>

<template>
  <div
    class="wfull md:w16rem z10 px6 py5 rd-1.5 bg-LightGrayishBlue c-VeryDarkBlue dark:(bg-DarkDesaturatedBlue c-DesaturatedBlue) mxa cursor-pointer @hover:(bg-gray-200 dark:bg-gray-700) transition-all-200 ease-linear">
    <div class="flex justify-between items-center py1">
      <h3 class="font-Inter-700 text-Card-Heading">{{ title }}</h3>
      <img
        :src="logo"
        alt=""
        aria-hidden="true"
        class="w5 h5" />
    </div>
    <div class="flex items-center justify-between py1.5">
      <strong class="text-8.1 dark:c-White font-Inter-700">
        {{ counter }}
      </strong>
      <div
        class="c-LimeGreen font-Inter-700 text-3.5 flex items-center mt3"
        :class="{ '!c-BrightRed': !grew }">
        <Icon :name="arrowStyle" />
        <p class="p0">{{ percentage }}%</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
