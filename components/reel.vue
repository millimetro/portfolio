<template>
  <div class="main-container">
    <div class="container">
      <div class="text">
        <div class="ticker-reel" id="ticker">
          <div class="reel-item">&nbsp; Hi! I am millimetro</div>
          <div class="reel-item">&nbsp; Hi! I am millimetro</div>
          <div class="reel-item">&nbsp; Hi! I am millimetro</div>
          <div class="reel-item">&nbsp; Hi! I am millimetro</div>
          <div class="reel-item">&nbsp; Hi! I am millimetro</div>
          <div class="reel-item">&nbsp; Hi! I am millimetro</div>
          <div class="reel-item">&nbsp; Hi! I am millimetro</div>
          <div class="reel-item">&nbsp; Hi! I am millimetro</div>
          <div class="reel-item">&nbsp; Hi! I am millimetro</div>
        </div>
      </div>
    </div>
    <div class="scroll-text">Scroll to animate</div>
  </div>
</template>

<script>
export default {
  mounted() {
    let scroll = window.scrollY;
    const updateScroll = () => {
      scroll = window.scrollY / 1.5;
      document.getElementById("ticker").style.transform =
        "translateX(-" + scroll + "px)";
    };
    setInterval(updateScroll, 1);
  },
};
</script>

<style lang="scss" >
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: black;
  color: white;
}

::-webkit-scrollbar {
  display: none;
}
.main-container {
  height: 500vh;
}

.container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text {
  width: 100%;
  overflow-x: hidden;
}

.ticker-reel {
  display: flex;

  align-items: center;
  white-space: nowrap;
  width: 100%;
  will-change: transform;
}
.reel-item {
  //   font-weight: lighter;
  font-size: 80px;
  text-transform: uppercase;
}

.scroll-text {
  //   text-transform: uppercase;

  position: fixed;

  bottom: 50px;
  left: 50px;
}
</style>