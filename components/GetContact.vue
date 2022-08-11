<template>
  <div>
    <div class="lottie"></div>
    <div class="container">
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const scrollbar = Scrollbar.init(document.querySelector(".container"), {
      renderByPixels: false,
    });

    let lottiePlayer = lottie.loadAnimation({
      container: document.querySelector(".lottie"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "https://assets6.lottiefiles.com/packages/lf20_jtzvwi8m.json",
    });

    scrollbar.addListener(() => {
      let totalHeight = scrollbar.limit.y;
      let scrollFromTop = scrollbar.scrollTop;
      let scrollPercent = (scrollFromTop * 100) / totalHeight;
      lottiePlayer.goToAndStop(
        (scrollPercent * lottiePlayer.totalFrames) / 100,
        true
      );
    });

    scrollbar.scrollTo(0, 1000, 3000);
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #e0e0e0;
  color: white;
}
.container {
  height: 100vh;
  width: 100%;
}
.content {
  height: 400vh;
  width: 100%;
}
.lottie {
  width: 400px;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>