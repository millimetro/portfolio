<template>
  <div class="sound-main">
    <div class="sound-title">
      <h1>The Anxious Journey</h1>
    </div>

    <div class="sound-video">
      <iframe
        src="https://player.vimeo.com/video/680421358?h=4f94a2531b&autoplay=1"
        width="1280"
        height="720"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div class="sound-subtitle">
      <p>sound design</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "nonav",
};
</script>

<style lang="scss">
.sound-main {
  height: 100vh;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-around;
}
.sound-title {
  h1 {
    font-size: 7rem;
    text-align: center;
  }
  text-transform: uppercase;
  padding-bottom: 5%;
}
.sound-video {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sound-subtitle {
  font-size: 14px;
  text-transform: uppercase;

  text-align: center;
  padding: 5%;
}
</style>