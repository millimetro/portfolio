<template>
  <div id="IndexPage" class="paperino">
    <NavMain class="hoverino" />
    <News />
  </div>
</template>

<script>
import News from "../components/news.vue";
import NavMain from "../components/NavMain.vue";

export default {
  name: "IndexPage",
  components: {
    News,
    NavMain,
  },

  mounted() {
    //Dal basso verso l'alto
    gsap.from(".paperino", 2, {
      y: "100",
      opacity: 0,
      ease: Expo.easeInOut,
      delay: 0,
      stagger: 1,
    });
  },
};
</script>

<style lang="scss">
@import "../assets/css/main.scss";

@media (max-width: 768px) {
  .cursor {
    display: none;
  }

  .topNav {
    padding: 5%;
    z-index: 100;
  }

  .container {
    flex-wrap: wrap;
  }
}
</style>