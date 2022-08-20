<template>
  <div>
    <div class="eyz-web">
      <div class="eyz-eyes">
        <div class="eyz-eye">
          <div class="eyz-ball"></div>
        </div>
        <div class="eyz-eye">
          <div class="eyz-ball"></div>
        </div>
      </div>
    </div>
    <div class="eyz-mobile">
      <div class="eyz-eyes">
        <div class="eyz-eye">
          <div class="eyz-ball"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var balls = document.getElementsByClassName("eyz-ball");
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

<style lang="scss">
@media (max-width: 768px) {
  .eyz-web {
    display: none;
  }
}

@media (min-width: 768px) {
  .eyz-mobile {
    display: none;
  }
}

.eyz-mobile {
  height: 100vh;
}

.eyz-web {
  height: 100vh;
}

.eyz-eyes {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;

  .eyz-eye {
    width: 240px;
    height: 120px;
    background: whitesmoke;
    display: inline-block;
    margin: 40px;
    border-radius: 100%;
    position: relative;
    overflow: hidden;
  }

  .eyz-ball {
    width: 70px;
    height: 70px;
    background: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 15px solid blue;
  }
}
</style>