<template>
  <div class="bg-DarkModerateCyan/60 grid place-items-center p12">
    <IconsBrand class="fill-DarkDesaturatedCyan w32 h6 mb2" />
    <ul class="flex gap12 mt4 c-DarkDesaturatedCyan font-Barlow text-3.4">
      <li>
        <NuxtLink
          to="/about"
          class="@hover:c-white transition-all-200 ease-linear"
          >About</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/services"
          class="@hover:c-white transition-all-200 ease-linear"
          >Services</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/projects"
          class="@hover:c-white transition-all-200 ease-linear"
          >Projects</NuxtLink
        >
      </li>
    </ul>
    <div class="mt8 spacex5">
      <span>
        <Icon
          name="mdi:facebook-box"
          size="25"
          class="c-DarkDesaturatedCyan cursor-pointer @hover:c-White transition-all-200 ease-linear" />
      </span>
      <span>
        <Icon
          name="mdi:instagram"
          size="25"
          class="c-DarkDesaturatedCyan cursor-pointer @hover:c-White transition-all-200 ease-linear" />
      </span>
      <span>
        <Icon
          name="mdi:twitter"
          size="25"
          class="c-DarkDesaturatedCyan cursor-pointer @hover:c-White transition-all-200 ease-linear" />
      </span>
      <span>
        <Icon
          name="mdi:pinterest"
          size="25"
          class="c-DarkDesaturatedCyan cursor-pointer @hover:c-White transition-all-200 ease-linear" />
      </span>
    </div>
  </div>
</template>

