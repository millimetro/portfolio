<template>
  <div>
    <NavTop />
    <Nuxt />

    <div class="cursor"></div>
    <div class="paperOverlay"></div>
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
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  background-color: white;
  mix-blend-mode: difference;
  /* transition: 0.1s; */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  pointer-events: none;

  /* -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
  -ms-transition: all 0.1s ease; 
  transition: all 0.1s ease;*/

  /* -webkit-transform: scale(0.2);
  -moz-transform: scale(0.2);
  -ms-transform: scale(0.2); */
  transform: scale(1);
}

ul li:hover ~ .cursor {
  /* -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1); */
  transform: scale(5);
}

body {
  position: relative;
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

  /* opacity: 0.6; */
}
</style>