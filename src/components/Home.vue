<template>
  <div>
    <Banner v-for="banner in banners" :key="banner.id" :banner="banner" />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Menu from "@/components/NavigationMenu.vue.js";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Menu,
    Footer,
  },
};
</script>
