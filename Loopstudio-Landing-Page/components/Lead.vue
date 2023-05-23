<template>
  <div
    class="grid grid-cols-1 <md:place-items-center <sm:(px4 pt14) sm:(px8 pt15 pb10) md:p14 xl:(px35 py25) 2xl:(px40 py30) 4xl:p50">
    <div class="md:w55vw md:relative">
      <LazyNuxtImg
        format="avif"
        width="654"
        height="448"
        alt="Image of a man wearing a VR glass and enjoying the show"
        src="/images/mobile/image-interactive.jpg"
        class="md:hidden" />
      <LazyNuxtImg
        format="avif"
        width="1731"
        height="1184"
        alt="Image of a man wearing a VR glass and enjoying the show"
        src="/images/desktop/image-interactive.jpg"
        class="<md-hidden" />
      <div
        class="w100% bg-White <md:(px5 py10 text-center) md:(absolute bottom--1 left-78% pl8 pt8 pb3) lg:(pl13 pt13) xl:(pl15 pt15) 3xl:(pl22 pt22) 4xl:(pl30 pt30)">
        <h2
          class="font-JosefinSans fw300 xs:(text-6 leading-7) sm:(text-7 leading-10) md:(text-6 leading-8) lg:text-8 xl:(text-10 leading-10) 2xl:(text-11 leading-11) 3xl:(text-17 leading-17) 4xl:(text-20 leading-20) c-Black uppercase">
          The leader in <br />
          interactive VR
        </h2>
        <p
          class="font-Alata xs:text-3 pt5 sm:text-3.52 md:(text-2.55 pt6) lg:(text-3.35 pt8) xl:text-3.7 2xl:text-3.8 3xl:text-5.9 4xl:text-8 c-VeryDarkGray">
          Founded in 2011, Loopstudios has been producing world-class
          <br />virtual reality projects for some of the best companies around
          the <br />globe. Our award-winning creations have transformed
          <br />businesses through digital experiences that bind to their brand.
        </p>
      </div>
    </div>
  </div>
</template>

