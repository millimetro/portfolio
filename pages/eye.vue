<template>
  <div class="main">
    <p>on this website</p>

    <Eyz />
    <div class="testino">
      <h2>You are not watched</h2>
    </div>
  </div>
</template>

<script>
import Eyz from "../components/Eyz.vue";
export default { components: { Eyz } };
</script>



<style scoped>
@media (max-width: 768px) {
  .main p {
    font-size: 12px;
    text-transform: uppercase;
  }
  .testino h2 {
    font-size: 12px;
    text-transform: uppercase;
  }
}
.main {
  display: flex;
  height: 100vh;
  width: 100%;

  flex-direction: column;
  text-align: center;
  justify-content: center;
}
/* .testino {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
} */

h2 {
  font-size: 50px;
  text-transform: uppercase;
}

p {
  font-size: 16px;
  text-transform: lowercase;
}
</style>