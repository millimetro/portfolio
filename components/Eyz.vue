<template>
  <div>
    <div class="eyes">
      <div class="eye">
        <div class="ball"></div>
      </div>
      <div class="eye">
        <div class="ball"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var balls = document.getElementsByClassName("ball");
    document.onmousemove = function () {
      var x = (event.clientX * 100) / window.innerWidth + "%";
      var y = (event.clientY * 100) / window.innerHeight + "%";

      for (var i = 0; 1 < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = "translate(-" + x + ", -" + y + ")";
      }
    };
  },
};
</script>

<style scoped>
.eyes {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
}

.eye {
  width: 240px;
  height: 120px;
  background: whitesmoke;
  display: inline-block;
  margin: 40px;
  border-radius: 100%;
  position: relative;
  overflow: hidden;
}

.ball {
  width: 40px;
  height: 40px;
  background: violet;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 15px solid blue;
}
</style>