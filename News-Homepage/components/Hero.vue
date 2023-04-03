<template>
  <div class="md:col-span-2">
    <picture>
      <source
        media="(min-width: 768px)"
        srcset="@/assets/images/image-web-3-desktop.jpg" />
      <img src="@/assets/images/image-web-3-mobile.jpg" alt="article-image" />
    </picture>
    <div class="md:grid md:grid-cols-2 py6">
      <h1
        class="text-10 md:text-14 leading-12 md:leading-14 fw800 c-veryDarkBlue">
        The Bright Future of Web 3.0?
      </h1>
      <div class="mt3 md:mt0">
        <p class="md:text-4.1 fw400 c-darkGrayishBlue">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button
          type="submit"
          aria-label="false"
          class="fw700 text-4 px13 md:px15.5 py3 bg-softRed c-offWhite mt6 border-0 outline-0 md:hover:bg-veryDarkBlue md:hover:c-offWhite transition-all-200 ease-linear">
          Read more
        </button>
      </div>
    </div>
  </div>
  <div
    class="md:col-span-1 bg-veryDarkBlue c-offWhite p6 md:p8 lg:px8 lg:py4 mt5 lg:mt0 h-max">
    <h2 class="c-softOrange fw800 text-10 pb3">New</h2>
    <div class="py3 space-y-5">
      <h3
        class="w-max md:hover:c-softOrange transition-all-200 ease-linear cursor-pointer fw800 text-4.2">
        Hydrogen VS Electric Cars
      </h3>
      <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      <hr />
    </div>
    <div class="space-y-5">
      <h3
        class="w-max md:hover:c-softOrange transition-all-200 ease-linear cursor-pointer fw800 text-4.2">
        The Downsides of AI Artistry
      </h3>
      <p>
        What are the possible adverse effects of on-demand AI image generation?
      </p>
      <hr />
    </div>
    <div class="py3 space-y-5">
      <h3
        class="w-max md:hover:c-softOrange transition-all-200 ease-linear cursor-pointer fw800 text-4.2">
        Is VC Funding Drying Up?
      </h3>
      <p>
        Private funding by VC firms is down 50% YOY. We take a look at what that
        means.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

