<script setup lang="ts">
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>

<template>
  <div
    class="max-w100dvw min-h100dvh bg-White dark:bg-VeryDarkBlue px6 md:px14 xl:px32 relative">
    <SeoKit />
    <header class="flex <md:flex-col justify-between">
      <div class="py4 xl:py6 z10">
        <h1 class="text-6 md:text-7 font-Inter-700 c-VeryDarkBlue dark:c-White">
          Social Media Dashboard
        </h1>
        <p
          class="p0 font-Inter-700 text-3.8 c-DarkGrayishBlue dark:c-DesaturatedBlue">
          Total Followers: 23,004
        </p>
      </div>
      <div
        class="md:hidden content-empty bg-gray-300 dark:bg-DesaturatedBlue h0.02 wfull z10 rd-full"></div>
      <div class="py4 xl:py10 flex justify-between items-center z10 gap8">
        <span
          class="font-Inter-700 text-3.8 c-DarkGrayishBlue dark:c-DesaturatedBlue cursor-default">
          Dark Mode
        </span>
        <div
          @click="toggleDark()"
          class="bg-Toggle dark:(bg-gradient-to-r from-Toggle-Left to-Toggle-Right) w12 h7 rd-[1rem_0_1rem_0] content-empty cursor-pointer relative before:(absolute left-1 top-1 bg-white dark:bg-VeryDarkBlue dark:translate-x-100% w5 h5 rd-full content-empty)"></div>
      </div>
    </header>
    <main class="py4">
      <div>
        <OverallDashboard />
      </div>
      <h2
        class="text-5.5 md:text-6.5 font-Inter-700 c-VeryDarkBlue dark:c-White py3">
        Overview - Today
      </h2>
      <div>
        <DailyDashboard />
      </div>
    </main>
  </div>
</template>
