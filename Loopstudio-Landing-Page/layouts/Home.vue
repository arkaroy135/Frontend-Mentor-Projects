<template>
  <div class="w100dvw h100dvh w100vw h100vh flex flex-col overflow-x-hidden">
    <header>
      <Navbar :menuItems="menuItems" />
    </header>
    <main>
      <slot />
    </main>
    <footer class="mta">
      <LazyFooter :menuItems="menuItems" :social="social" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { menuItems, social } from "~/composables/Arrays";
</script>

