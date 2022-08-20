<template>
  <div>
    <div class="navTop-container hoverino">
      <nuxt-link to="/">@millimetro_</nuxt-link>

      <div class="navTop-pulsante navTop-eye">
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5%;
  font-size: 12px;

  img {
    height: 10px;
  }

  .navTop-eye {
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