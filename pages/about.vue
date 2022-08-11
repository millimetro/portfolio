<template>
  <div>
    <div class="container">
      <div class="txt-line"><p>Hi! My name is Millimetro</p></div>
      <div class="txt-line">
        <p>I am a graphic designer based in Italy</p>
      </div>

      <div class="txt-line">
        <p>Contact me if you want to spice up your website :))</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const tl = gsap.timeline();
    tl.from(".txt-line p", {
      duration: 1,
      delay: 0,
      y: 200,
      skewY: 20,
      stagger: {
        amount: 0.5,
      },
    });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background-color: black;
  color: white;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 9px 100px; */
  flex-direction: column;
  height: 100vh;
}

.container .txt-line {
  overflow: hidden;
  margin-top: 20px;
}

.container .txt-line p {
  overflow: hidden;
  font-size: 2em;
  /* font-weight: lighter; */
}
</style>