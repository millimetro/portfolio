<template>
  <div>
    <div class="about-container">
      <div class="about-txt-line"><p>Hi! My name is Millimetro</p></div>
      <div class="about-txt-line">
        <p>I am a graphic designer based in Italy</p>
      </div>

      <div class="about-txt-line">
        <p>Contact me if you want to spice up your website :)</p>
      </div>
      <!-- <div class="about-cta hoverino">
        <a href="mailto:ciao@millimetro.xyz">SAY HI :)</a>
      </div> -->
      <BtnSticky />
    </div>
  </div>
</template>

<script>
import BtnSticky from "../components/BtnSticky.vue";
export default {
  mounted() {
    const tl = gsap.timeline();
    tl.from(".about-txt-line p", {
      duration: 1,
      delay: 0,
      y: 200,
      skewY: 20,
      stagger: {
        amount: 0.5,
      },
    });
    // Dal basso verso l'alto
    gsap.from(".about-cta", 2, {
      y: "200",
      opacity: 0,
      ease: Expo.easeInOut,
      delay: 0.5,
      stagger: 0.08,
    });
  },
  components: { BtnSticky },
};
</script>

<style lang="scss">
@media (max-width: 768px) {
  .about-container {
    height: 100vh;
    padding: 0 10%;
    text-align: left;

    p {
      font-size: 1.5em !important;
      line-height: 1.2em;
      padding: 7px 0px !important;
    }
  }
}

.about-container {
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background-color: black;
  color: white;
}

.about-container {
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 9px 100px; */
  flex-direction: column;
  height: 100vh;
  width: 100%;

  .about-txt-line {
    overflow: hidden;
    margin-top: 20px;
    p {
      overflow: hidden;
      font-size: 1.5em;
      line-height: 1.2em;
    }
  }
}

/* CTA only mobile! */

// .about-cta {
//   margin: 60px 20% 30px;
//   a {
//     text-decoration: none;
//     padding: 25px 50px;

//     display: block;
//     justify-content: center;

//     color: white;
//     background-color: blue;
//     /* border: 2px solid white; */
//     border-radius: 100%;
//   }
// }
</style>