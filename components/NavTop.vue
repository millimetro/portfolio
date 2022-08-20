<template>
  <div>
    <div class="navTop-container">
      <div class="navTop-home hoverino">
        <nuxt-link to="/">@millimetro_</nuxt-link>
      </div>

      <div class="navTop-pulsante navTop-eye hoverino">
        <nuxt-link to="eye">
          <img src="../assets/img/Occhio.svg" alt="" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script >
export default {};
</script>

<style lang="scss">
.navTop-container {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5%;
  font-size: 12px;
  z-index: 10;

  img {
    height: 10px;
  }

  .navTop-home {
    border: 2px solid white;
    padding: 5px;
  }

  .navTop-eye {
    border: 2px solid white;

    background-color: blue;
    padding: 5px 10px;

    border-radius: 10px;
  }
}

@media (max-width: 900px) {
  .navTop-container {
    padding: 7% 5%;
    font-size: 14px;
    img {
      height: 12px;
    }
  }
}
</style>