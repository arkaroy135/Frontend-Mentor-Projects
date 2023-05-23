<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 px5 py10 md:(px15 py15) xl:px35 2xl:px40 3xl:py20 4xl:(px50 py25)">
    <h2
      class="text-6 sm:text-8 md:text-9 lg:(text-11 leading-12) 3xl:text-16 4xl:text-20 font-JosefinSans uppercase fw300 order-1 <md:text-center">
      Our creations
    </h2>
    <div
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 <md:order-2 order-3 col-span-2 gap6 3xl:(gap9 py16) 4xl:(gap12 py20) py6 md:py15">
      <Creationcard
        v-for="card in creation"
        :key="card.id"
        :phoneimg="card.smallimg"
        :biggerscreenimg="card.bigimg"
        :alt_text="card.alt"
        :title="card.desc" />
    </div>
    <button
      type="button"
      aria-label="Press this to see more creations"
      class="font-Alata uppercase text-4 tracking-0.8 3xl:text-7 4xl:text-8 <md:(mxa mt3) mla <md:order-3 order-2">
      See all
    </button>
  </div>
</template>

<script setup lang="ts">
import { creation } from "~/composables/Arrays";
</script>

<style lang="scss" scoped>
button {
  background: transparent;
  position: relative;
  padding: 0.45em 2.5em;
  align-self: center;
  border: 1px solid #000;
  outline: none;
  overflow: hidden;
  color: #000;
  transition: color 0.4s 0.1s linear;
  text-align: center;

  &::before {
    position: absolute;
    inset: 0;
    margin: auto;
    content: "";
    border-radius: 50%;
    display: block;
    width: 20em;
    height: 20em;
    left: -5em;
    text-align: center;
    transition: box-shadow 0.4s linear;
    z-index: -1;
  }
  @media (hover: hover) {
    &:hover {
      color: #fff;

      &::before {
        box-shadow: inset 0 0 0 10em #000;
      }
    }
  }
}
</style>

