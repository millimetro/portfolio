<template>
  <div id="IndexPage">
    <NavMain />
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
};
</script>

<style lang="scss">
@import "../assets/css/main.scss";
</style>