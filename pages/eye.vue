<template>
  <div class="main">
    <Eyz />
    <div class="testino">
      <h2>You are not watched</h2>

      <p>on this website</p>
    </div>
  </div>
</template>

<script>
import Eyz from "../components/Eyz.vue";
export default { components: { Eyz } };
</script>



<style lang="scss" scoped>
.testino {
  // height: 80vh;
  // width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 50px;
    text-transform: uppercase;
  }

  p {
    font-size: 12px;
  }
}

.top {
  top: 0;
}

.bottom {
  bottom: 0;
}

.left {
  left: 0;
}

.right {
  right: 0;
}
</style>