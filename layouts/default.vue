<template>
  <div class="main-wrapper">
    <NavTop class="topbar hoverino" />

    <Nuxt class="main" />

    <div class="cursor"></div>
    <!-- <div class="paperOverlay"></div> -->
  </div>
</template>

<script>
import NavTop from "../components/NavTop.vue";

export default {
  components: { NavTop },


  mounted() {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    });
  },

  

};


</script>

<style lang="scss">
@media (max-width: 900px) {
  .main-wrapper {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    height: -webkit-fill-available;
  }
}

.paperOverlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: repeat;
  background-image: url(../assets/img/overlay/23.jpg);
  mix-blend-mode: difference;
  pointer-events: none;

  opacity: 0.8;
}
</style>