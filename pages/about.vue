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
      <div class="cta"><a href="mailto:ciao@millimetro.xyz">SAY HI :)</a></div>
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

<style scoped>
@media (max-width: 768px) {
  .container {
    padding: 0 10%;
    text-align: left;
  }

  .container .txt-line p {
    font-size: 1.5em !important;
    line-height: 1.2em;
    padding: 10px 0px;
  }
}

@media (min-width: 900px) {
  .cta {
    display: none;
  }
}
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

/* CTA */

.cta {
  margin: 45px 20% 0px;
}

.cta a {
  text-decoration: none;
  padding: 25px 50px;

  display: block;
  justify-content: center;

  color: white;
  background-color: blue;
  /* border: 2px solid white; */
  border-radius: 100%;
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
  font-size: 1.5em;
  line-height: 1.2em;
}
</style>