<template>
  <div class="min-w100dvw min-h100dvh bg-Yellow grid place-items-center">
    <main
      class=":uno: w90% max-w24rem p4.5 bg-White rd-4.8 shadow-[10px_11px_Black] @hover:shadow-[14px_14px_Black] transition-all-500 group cursor-pointer">
      <Article class=":uno: w100% rd-2.5 mb6" />
      <NuxtLink
        to="/"
        class=":uno: c-Black font-Figtree-800 bg-Yellow rd-1 p2"
        >Learning</NuxtLink
      >
      <p
        class=":uno: text-3.3 md:text-body font-Figtree-600 px0 md:py5 c-Black">
        Published 21 Dec 2023
      </p>
      <h1
        class=":uno: text-5.5 md:text-6 font-Figtree-800 c-Black group-hover:(c-Yellow) cursor-pointer transition-all-400 ease-linear">
        HTML & CSS foundations
      </h1>
      <p
        class=":uno: text-3.3 leading-5 md:(text-body leading-5.5) font-Figtree-600 px0 py2 c-Grey">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <span class="flex gap4 mt4 items-center">
        <NuxtImg
          src="/images/image-avatar.webp"
          alt="Avatar of Greg Hooper"
          class="w9 h9 md:(w12 h12) shadow-[6px_4px_4px_Grey] rd-full" />
        <strong class="font-Figtree-800 text-body">Greg Hooper</strong>
      </span>
    </main>
  </div>
</template>

<script setup>
  useHead({
    title: "Frontend Mentor",
  });
</script>
