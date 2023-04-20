<template>
  <div class="relative">
    <div>
      <NuxtImg
        format="avif"
        quality="60"
        preload
        src="/images/desktop/image-header.jpg"
        alt=""
        aria-label="false"
        class="hidden xl:block h100dvh w100dvw hscreen wscreen object-cover" />
      <NuxtImg
        format="avif"
        quality="75"
        preload
        src="/images/mobile/image-header.jpg"
        alt=""
        aria-label="false"
        class="block xl:hidden object-cover w100dvw w100vw" />
    </div>
    <div
      class="absolute inset-0 grid place-content-center gap10 md:gap15 mt20 md:mt60 xl:mt0">
      <h1
        class="text-8 md:text-14 c-White font-Fraunces fw900 uppercase tracking-1.5 text-center">
        We are creatives
      </h1>
      <IconsArrow class="w9 h28 mxa animate-bounce cursor-pointer" />
    </div>
  </div>
</template>

