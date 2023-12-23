<template>
  <div class="relative max-w100dvw max-h100dvh">
    <ToggleSwitch class="absolute top-5 right-6" />
    <DesktopBG class="hidden xl:block" />
    <MobileBG class="block xl:hidden" />
    <Card
      class="absolute top-50% left-50% -translate-x-50% lg:<xl:translate-y-40%" />
  </div>
</template>

<script setup>
  useHead({
    title: "Frontend Mentor",
  });
</script>
