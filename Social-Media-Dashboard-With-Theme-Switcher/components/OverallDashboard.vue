<script setup>
  const overall = [
    {
      id: 1,
      platform: "/images/icon-facebook.svg",
      userid: "@nathanf",
      topColor: "bg-Facebook",
      followers_no: 1987,
      followers_call: "followers",
      growth: true,
      arrow: "material-symbols:arrow-drop-up",
      growthFig: 12,
    },
    {
      id: 2,
      platform: "/images/icon-twitter.svg",
      userid: "@nathanf",
      topColor: "bg-Twitter",
      followers_no: 1044,
      followers_call: "followers",
      growth: true,
      arrow: "material-symbols:arrow-drop-up",
      growthFig: 99,
    },
    {
      id: 3,
      platform: "/images/icon-instagram.svg",
      userid: "@realnathanf",
      topColor: "bg-gradient-to-r from-Instagram-Left to-Instagram-Right",
      followers_no: "11k",
      followers_call: "followers",
      growth: true,
      arrow: "material-symbols:arrow-drop-up",
      growthFig: 1099,
    },
    {
      id: 4,
      platform: "/images/icon-youtube.svg",
      userid: "Nathan F.",
      topColor: "bg-BrightRed",
      followers_no: 8239,
      followers_call: "subscribers",
      growth: false,
      arrow: "material-symbols:arrow-drop-down",
      growthFig: 144,
    },
  ];
</script>

<template>
  <div class="wfull ha flex flex-wrap py6 xl:py1 gap5 justify-between">
    <div
      class="absolute content-empty h15rem bg-VeryPaleBlueTBGP dark:bg-VeryDarkBlueTBGP inset-0 z9"></div>
    <OverallCard
      v-for="o in overall"
      :key="o.id"
      :icon="o.platform"
      :user="o.userid"
      :top="o.topColor"
      :followers="o.followers_no"
      :followerCall="o.followers_call"
      :growth="o.growth"
      :arrow="o.arrow"
      :growthFig="o.growthFig" />
  </div>
</template>
