<template>
  <div
    class="grid grid-cols-1 md:grid-cols-3 px2 py10 md:px5 lg:p20 place-items-center <md:gap8">
    <h2
      class="col-span-1 md:col-span-3 text-center font-Fraunces text-3.7 md:text-5 fw900 c-GrayishBlue uppercase tracking-1 mb10">
      Client testimonials
    </h2>
    <div
      class="flex flex-col items-center justify-center text-center px6 md:px7 spacey8 <md:mt--10">
      <NuxtImg
        format="avif"
        src="/images/image-emily.jpg"
        alt=""
        aria-hidden="true"
        class="w18 h18 rounded-full" />
      <p class="text-4 lg:text-body/6 font-Barlow c-VeryDarkGrayishBlue">
        We put our trust in Sunnyside and they delivered, making sure our needs
        were met and deadlines were always hit.
      </p>
      <div class="flex flex-col gap2">
        <strong class="font-Fraunces fw900 c-VeryDarkDesaturatedBlue"
          >Emily R.</strong
        >
        <small class="c-GrayishBlue font-Barlow">Marketing Director</small>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center text-center px6 md:px7 spacey8">
      <NuxtImg
        format="avif"
        src="/images/image-thomas.jpg"
        alt=""
        aria-hidden="true"
        class="w18 h18 rounded-full" />
      <p class="text-4 lg:text-body/6 font-Barlow c-VeryDarkGrayishBlue">
        Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
        success made it a satisfying and enjoyable experience.
      </p>
      <div class="flex flex-col gap2">
        <strong class="font-Fraunces fw900 c-VeryDarkDesaturatedBlue"
          >Thomas S.</strong
        >
        <small class="c-GrayishBlue font-Barlow">Chief Operating Officer</small>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center text-center px6 md:px7 spacey8">
      <NuxtImg
        format="avif"
        src="/images/image-jennie.jpg"
        alt=""
        aria-hidden="true"
        class="w18 h18 rounded-full" />
      <p class="text-4 lg:text-body/6 font-Barlow c-VeryDarkGrayishBlue">
        Incredible end result! Our sales increased over 400% when we worked with
        Sunnyside. Highly recommended!
      </p>
      <div class="flex flex-col gap2">
        <strong class="font-Fraunces fw900 c-VeryDarkDesaturatedBlue"
          >Jennie F.</strong
        >
        <small class="c-GrayishBlue font-Barlow">Business Owner</small>
      </div>
    </div>
  </div>
</template>

