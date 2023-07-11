<template>
  <div id="IndexPage" class="paperino">
    <NavMain class="main" />
    <NewsBar />
  </div>
</template>

<script>
import NavMain from "../components/NavMain.vue";
import NewsBar from "../components/NewsBar.vue";

export default {
  name: "IndexPage",
  components: {
    NavMain,
    NewsBar,
  },
  layout: "index",

  // mounted() {
  //   //Dal basso verso l'alto
  //   gsap.from(".paperino", 2, {
  //     y: "100",
  //     opacity: 0,
  //     ease: Expo.easeInOut,
  //     delay: 0,
  //     stagger: 1,
  //   });
  // },
};
</script>

<style lang="scss">
@import "../assets/css/main.scss";

@media (max-width: 900px) {
  .cursor {
    display: none;
  }
}
</style>