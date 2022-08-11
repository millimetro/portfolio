<template>
  <div id="IndexPage">
    <NavBar />
    <News />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import News from "../components/news.vue";

export default {
  name: "IndexPage",
  components: {
    NavBar,
    News,
  },
};
</script>

<style lang="scss">
@import "../assets/css/main.scss";
</style>