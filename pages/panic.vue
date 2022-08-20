<template>
  <div>
    <div class="panic-message">
      <h1>DON'T PANIC!</h1>
    </div>
    <div class="panic-star">
      <img src="../assets/img/Star 1.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  layout: "nonav",
};
</script>

<style lang="scss">
.panic-message {
  position: absolute;
  background-color: whitesmoke;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    z-index: 100;
    font-size: 65px;
    color: red;
    text-align: center;
  }
}

.panic-star {
  background-color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    z-index: 5;
    width: 80%;
  }
}
</style>