<template>
  <div>
    <section class="grid grid-cols-1 md:grid-cols-2">
      <div
        class="<md:order-1 self-center p10 md:p8 xl:p25 spacey8 <md:text-center">
        <h2
          class="text-8/8 lg:text-12/12 font-Fraunces fw900 c-VeryDarkDesaturatedBlue">
          Transform your brand
        </h2>
        <p class="text-4.1/6 font-Barlow c-GrayishBlue">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <button
          type="submit"
          aria-label="false"
          class="font-Fraunces text-body/1.5 rounded-full px1 border-b-8 border-Yellow/40 @hover:(border-Yellow) transition-all-200 ease-linear">
          Learn more
        </button>
      </div>
      <div>
        <NuxtImg
          format="avif"
          src="/images/desktop/image-transform.jpg"
          alt="Image of an egg to depict you can break the shell"
          class="hidden md:block w100% hauto" />
        <NuxtImg
          format="avif"
          src="/images/mobile/image-transform.jpg"
          alt="Image of an egg to depict you can break the shell"
          class="block md:hidden w100dvw wscreen aspect-4/3 object-cover" />
      </div>
    </section>
    <section class="grid md:grid-cols-2">
      <div class="order-1 self-center p10 md:p8 xl:p25 spacey8 <md:text-center">
        <h2
          class="text-8/8 lg:text-11/12 font-Fraunces fw900 c-VeryDarkDesaturatedBlue">
          Stand out to the right audience
        </h2>
        <p class="text-4.1/6 font-Barlow c-GrayishBlue">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <button
          type="submit"
          aria-label="false"
          class="font-Fraunces text-body/1.5 rounded-full px1 border-b-8 border-SoftRed/40 @hover:(border-SoftRed) transition-all-200 ease-linear">
          Learn more
        </button>
      </div>
      <div>
        <NuxtImg
          format="avif"
          src="/images/desktop/image-stand-out.jpg"
          alt="Image depicting you have to stand-out of the crowd"
          class="hidden md:block w100% hauto" />
        <NuxtImg
          format="avif"
          src="/images/mobile/image-stand-out.jpg"
          alt="Image depicting you have to stand-out of the crowd"
          class="block md:hidden w100dvw wscreen aspect-4/3 object-cover" />
      </div>
    </section>
    <section class="grid grid-cols-1 md:grid-cols-2 text-center">
      <div class="relative">
        <div>
          <NuxtImg
            format="avif"
            src="/images/desktop/image-graphic-design.jpg"
            alt="Background image of the graphic design"
            class="hidden md:block w100% hauto" />
          <NuxtImg
            format="avif"
            src="/images/mobile/image-graphic-design.jpg"
            alt="Background image of the graphic design"
            class="block md:hidden w100dvw wscreen aspect-10/16" />
        </div>
        <div
          class="absolute inset-0 flex flex-col justify-center xl:p30 gap4 c-DarkDesaturatedCyan">
          <h2
            class="mt60 md:mt40 lg:mt60 font-Fraunces fw900 text-6 md:text-5 lg:text-6">
            Graphic design
          </h2>
          <p class="font-Barlow px7 lg:px11 text-3.8">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div class="relative">
        <div>
          <NuxtImg
            format="avif"
            src="/images/desktop/image-photography.jpg"
            alt="Background image representing the photography feature"
            class="hidden md:block w100% hauto" />
          <NuxtImg
            format="avif"
            src="/images/mobile/image-photography.jpg"
            alt="Background image representing the photography feature"
            class="block md:hidden w100dvw wscreen aspect-10/16" />
        </div>
        <div
          class="absolute inset-0 flex flex-col justify-center xl:p30 gap4 c-DarkBlue">
          <h2
            class="mt60 md:mt40 lg:mt60 font-Fraunces fw900 text-6 md:text-5 lg:text-6">
            Photography
          </h2>
          <p class="font-Barlow px7 lg:px11 text-3.8">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

