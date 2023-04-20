<template>
  <header
    class="absolute top-0 left-0 right-0 px5 md:px10 py6 flex justify-between items-center z-10 bg-Navbar">
    <NuxtLink to="/" aria-label="Click here to visit the homepage"
      ><IconsBrand class="h5 w32 fill-White"
    /></NuxtLink>
    <Navbar />
  </header>
  <slot />
</template>

