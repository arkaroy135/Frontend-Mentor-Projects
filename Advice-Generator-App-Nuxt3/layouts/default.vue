<template>
  <div
    class="grid grid-rows-[auto,1fr,auto] mxa min-h-100dvh min-h-screen bg-hex-e8e8e8 dark:bg-bodyBg theme-transition font-manrope">
    <header>
      <slot name="toggler" />
    </header>
    <main class="flex flex-col justify-center items-center h-90dvh">
      <slot name="card" />
    </main>
    <footer class="sticky top-100%">
      <slot name="footer" />
    </footer>
  </div>
</template>

