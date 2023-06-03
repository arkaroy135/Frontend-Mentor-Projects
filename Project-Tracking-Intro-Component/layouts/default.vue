<script setup lang="ts">
import { navMenu } from "~/composables/MenuArray";
</script>

<template>
  <div class="w100dvw h100dvh overflow-x-hidden">
    <Navbar :nav="navMenu" />
    <slot />
  </div>
</template>

