<template>
  <div class="eye-main">
    <!-- <p>on this website</p> -->
    <Eyz />
    <div class="eye-testino">
      <!-- <h2>You are not watched</h2> -->
    </div>
  </div>
</template>

<script>
import Eyz from "../components/Eyz.vue";
export default { components: { Eyz } };
</script>



<style lang="scss">
@media (max-width: 768px) {
  .eye-main {
    p {
      font-size: 12px;
      text-transform: uppercase;
    }
  }
  .eye-testino {
    h2 {
      font-size: 12px;
      text-transform: uppercase;
    }
  }
}
.eye-main {
  display: flex;
  height: 100vh;
  width: 100%;

  flex-direction: column;
  text-align: center;
  justify-content: center;

  p {
    font-size: 16px;
    text-transform: lowercase;
    color: white;
  }
}

.eye-testino {
  h2 {
    font-size: 50px;
    text-transform: uppercase;
    color: white;
  }
}
</style>