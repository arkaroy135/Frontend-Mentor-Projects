<template>
  <section class="grid xl:grid-cols-2 max-w100dvw max-h100dvh">
    <div
      class="order-2 xl:order-1 px5 md:px10% mt10% md:mt6% lg:mt4% xl:pl18% mya py3% spacey3 xl:spacey5 4xl:spacey8">
      <mark
        class="flex items-center font-BarlowCondensed bg-transparent c-GrayishBlue uppercase text-4.1 tracking-1.05 md:(text-5 tracking-1.2) lg:text-6.5 xl:(text-4.1 tracking-1.05) 2xl:text-4.4 3xl:text-6.7 4xl:(text-8.2 tracking-2) gap4 3xl:gap5 4xl:gap6">
        <span
          class="c-LightGrayishBlue bg-VeryDarkBlue font-BarlowCondensedBold rounded-full tracking-0.2 px2.5 py1"
          >New</span
        >Monograph Dashboard
      </mark>
      <h1
        class="text-10.5 leading-11 md:(text-19 leading-17) lg:(text-23 leading-23) xl:(text-16 leading-16) 2xl:(text-17 leading-17) 3xl:(text-23 leading-23) 4xl:(text-31 leading-31) uppercase font-BarlowCondensedBold c-VeryDarkBlue pb1">
        Powerful insights into your team
      </h1>
      <p
        class="pb4 text-4.8 md:text-5.5 lg:text-6.5 xl:(text-4.6 leading-6.5 pb6) 2xl:(text-4.9 leading-7) 3xl:(text-6.6 leading-9) 4xl:(text-9 leading-12) font-Barlow c-VeryDarkBlue">
        Project planning and time tracking <br />
        for agile teams
      </p>
      <div class="flex items-center xl:gap3">
        <button
          type="submit"
          aria-label="Call to action button"
          class="font-BarlowCondensedBold text-4 md:text-6 lg:text-6.5 xl:text-4.3 2xl:text-5 3xl:text-7 4xl:text-10 uppercase bg-Red c-LightGrayishBlue p3 md:(px6 py2.5) rounded-1.5 tracking-0.25 @hover:bg-Red/85 transition-all-200 ease-linear">
          Schedule a demo
        </button>
        <span
          class="box uppercase font-BarlowCondensed text-3 tracking-0.55 md:text-6 lg:text-6.5 xl:(text-4 tracking-0.9) 2xl:(text-4.4 tracking-1) 3xl:(text-6.2 tracking-1.1) 4xl:(text-9 tracking-1.2) c-DarkGrayishBlue px4 py3"
          >to see a live preview</span
        >
      </div>
    </div>
    <div
      class="md:-mt2vh xl:mt2vh order-1 xl:order-2 relative before:(absolute right-0 -top-23dvh w50% xl:w100% h58dvh md:h73dvh xl:h60dvh rounded-bl-10 bg-LightGrayishBlue content-empty -z1)">
      <IDevice class="w140% xl:w138% aspect-2.2 lg:aspect-2.35 xl:aspect-2" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
$VeryDarkBlue: hsl(230, 29%, 20%);
.box {
  cursor: pointer;
  float: left;
  -webkit-transition: 0.5s linear;
  transition: 0.5s linear;
  position: relative;
  display: block;
  overflow: hidden;
  text-align: center;
  margin: 0 5px;
  background: transparent;
  text-transform: uppercase;

  &:before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 4px;
    width: 100%;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
  }

  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  &:hover {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

    &::before {
      border-color: $VeryDarkBlue;
      height: 100%;
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
      -webkit-transition: 0.4s transform linear, 0.4s height linear 0.4s;
      transition: 0.4s transform linear, 0.4s height linear 0.4s;
    }

    &::after {
      border-color: $VeryDarkBlue;
      height: 100%;
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
      -webkit-transition: 0.4s transform linear, 0.4s height linear 0.5s;
      transition: 0.4s transform linear, 0.4s height linear 0.5s;
    }
  }
}
</style>

