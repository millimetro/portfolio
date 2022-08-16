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
  }

  .container {
    flex-wrap: wrap;
  }
}
</style>