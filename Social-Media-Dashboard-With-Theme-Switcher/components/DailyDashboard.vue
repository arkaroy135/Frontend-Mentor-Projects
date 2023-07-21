<script setup>
  const daily = [
    {
      id: 1,
      title: "Page Views",
      logo: "/images/icon-facebook.svg",
      counter: 87,
      grew: true,
      arrowStyle: "material-symbols:arrow-drop-up",
      percentageGrowth: 3,
    },
    {
      id: 2,
      title: "Likes",
      logo: "/images/icon-facebook.svg",
      counter: 52,
      grew: false,
      arrowStyle: "material-symbols:arrow-drop-down",
      percentageGrowth: 2,
    },
    {
      id: 3,
      title: "Likes",
      logo: "/images/icon-instagram.svg",
      counter: 5462,
      grew: true,
      arrowStyle: "material-symbols:arrow-drop-up",
      percentageGrowth: 2257,
    },
    {
      id: 4,
      title: "Profile Views",
      logo: "/images/icon-instagram.svg",
      counter: "52k",
      grew: true,
      arrowStyle: "material-symbols:arrow-drop-up",
      percentageGrowth: 1375,
    },
    {
      id: 5,
      title: "Retweets",
      logo: "/images/icon-twitter.svg",
      counter: 117,
      grew: true,
      arrowStyle: "material-symbols:arrow-drop-up",
      percentageGrowth: 303,
    },
    {
      id: 6,
      title: "Likes",
      logo: "/images/icon-twitter.svg",
      counter: 507,
      grew: true,
      arrowStyle: "material-symbols:arrow-drop-up",
      percentageGrowth: 553,
    },
    {
      id: 7,
      title: "Likes",
      logo: "/images/icon-youtube.svg",
      counter: 107,
      grew: false,
      arrowStyle: "material-symbols:arrow-drop-down",
      percentageGrowth: 19,
    },
    {
      id: 8,
      title: "Total Views",
      logo: "/images/icon-youtube.svg",
      counter: 1407,
      grew: false,
      arrowStyle: "material-symbols:arrow-drop-down",
      percentageGrowth: 12,
    },
  ];
</script>

<template>
  <div class="wfull ha flex flex-wrap py6 xl:py1 justify-between gap5">
    <div
      class="absolute content-empty h15rem bg-VeryPaleBlueTBGP dark:bg-VeryDarkBlueTBGP inset-0 z9"></div>
    <DailyCard
      v-for="d in daily"
      :key="d.id"
      :title="d.title"
      :logo="d.logo"
      :counter="d.counter"
      :grew="d.grew"
      :arrow-style="d.arrowStyle"
      :percentage="d.percentageGrowth" />
  </div>
</template>
