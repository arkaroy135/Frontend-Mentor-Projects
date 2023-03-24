<template>
  <div
    class="md:max-w-md w90% card dark:bg-gradient-to-l dark:to-cardBg dark:from-cardBg rounded-xl text-center p8 pb14 relative">
    <h1
      class="c-hex-093850 dark:c-neonGreen text-xs lg:text-sm tracking-0.95 uppercase fw600">
      Advice # {{ adviceNumber }}
    </h1>
    <p class="text-7 c-hex-0d0338 dark:c-textCol py6 fw700">“{{ advice }}”</p>
    <picture>
      <source
        media="(min-width: 430px)"
        srcset="@/assets/images/pattern-divider-desktop.svg"
        aria-hidden="true"
        class="mxa" />
      <img
        src="@/assets/images/pattern-divider-mobile.svg"
        alt=""
        aria-hidden="true"
        class="mxa" />
    </picture>
    <button
      @click="generator"
      type="submit"
      aria-label="false"
      class="bg-hex-143571 theme-transition dark:bg-neonGreen w16 h16 rounded-full absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 glow">
      <span v-if="isDark" class="c-black">
        <Icon name="tabler:dice-5-filled" size="32" />
      </span>
      <span v-if="!isDark" class="c-white">
        <Icon name="tabler:dice-5-filled" size="32" />
      </span>
    </button>
  </div>
</template>

<script setup>
const isDark = useDark();
const adviceNumber = ref(null);
const advice = ref(null);

const generator = async () => {
  const response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-store",
  });
  const data = await response.json();
  adviceNumber.value = data.slip.id;
  advice.value = data.slip.advice;
};
onMounted(() => {
  generator();
});
</script>

<style lang="scss">
.glow:hover {
  box-shadow: 0px 0px 0.75rem 0.5rem hsla(150, 100%, 66%, 0.4);
}
.card {
  background-image: linear-gradient(-135deg, #5eecb8 0%, #eb83e0 100%);
  box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01),
    0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09),
    0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
}
</style>

