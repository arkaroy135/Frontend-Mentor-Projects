<template>
  <SeoKit />
  <NuxtPage />
</template>

<style lang="scss">
@media screen and (min-width: 1280px) {
  ::-webkit-scrollbar {
    width: 0.6rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    margin-block: 0.2em;
  }

  ::-webkit-scrollbar-thumb {
    background: #c532c5;
    border: 0.2em solid #c532c5;
    border-radius: 100vw;
    transition: all 0.3s linear;

    &:hover {
      background: #a626a6;
      border: 0.2em solid #a626a6;
    }
  }

  //this thing used for Firefox support

  @supports (scrollbar-color: #c532c5 #fff) {
    * {
      scrollbar-color: #c532c5 #fff;
      scrollbar-width: thin; //auto and none are also there

      scrollbar-color:hover {
        scrollbar-color: #a626a6 #fff;
      }
    }
  }
}
</style>

