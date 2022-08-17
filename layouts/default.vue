<template>
  <div>
    <NavTop class="topbar hoverino" />

    <Nuxt />

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

<style>
.topbar {
  height: 0vh;
}

/* body {
  position: relative;
} */

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