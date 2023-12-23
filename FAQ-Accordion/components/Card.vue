<script setup lang="ts">
  const items = [
    {
      label: "What is Frontend Mentor, and how will it help me?",
      defaultOpen: true,
      content:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      label: "Is Frontend Mentor free?",
      content:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      label: "Can I use Frontend Mentor projects in my portfolio?",
      content:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      label: "How can I get help if I'm stuck on a challenge?",
      content:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];
</script>

<template>
  <div
    class=":uno: w88% max-w30rem ha rd-3 bg-white p4 lg:(px6 py5.5) font-WorkSans shadow-2xl shadow-grayishPurple">
    <div
      class=":uno: flex items-center space-x-5 lg:space-x-4 cursor-default my1">
      <Star class="w8 h8 lg:(w9 h9)" />
      <h1 class=":uno: c-darkPurple fw700 text-8 lg:text-12">FAQs</h1>
    </div>
    <NAccordion
      :items="items"
      class=":uno: b-none rd-none divide-lightPink gap-2.5 lg:gap-2"
      :una="{
        accordionButton:
          ':uno: !c-darkPurple @hover:!c-hoverColor text-body leading-4.6 lg:text-3.6 text-left fw600 transition-all-200 ease-linear',
        accordionPanel:
          ':uno: c-grayishPurple b-none text-3.3 <lg:leading-4.5 lg:text-3.2 -mt3 fw400',
        accordionTrailingOpen:
          ':uno: size-4.5 i-heroicons-plus-circle-20-solid?mask c-hoverColor mba',
        accordionTrailingClose:
          ':uno: size-4.5 i-heroicons-minus-circle-20-solid?mask c-darkPurple mba',
      }" />
  </div>
</template>
