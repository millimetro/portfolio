<template>
  <div>
    <div class="about-container">
      <div class="about-txt-line"><p>Latest project</p></div>
      <div class="about-txt-line"><p>ARCA Milano</p></div>
      <div class="tags_container">
        <div class="tag"><p>#3D Modeling</p></div>
        <div class="tag"><p>#Interactive</p></div>
        <div class="tag"><p>#Website</p></div>
      </div>

      <div class="image_wrapper">
        <img src="../dist/arca_1.png" />
      </div>
      
      <div class=".BtnSticky">
        <BtnSticky text="website" href="https://www.arcamilano.eu/" /> 
      </div>
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

    tl.from(".tags_container", {
      duration: 1,
      delay: 0,
      y: 200,
      // skewY: 20,
      opacity: 0,
      stagger: {
        amount: 0.5,
      },
    }, "-=0.5");

    tl.from(".image_wrapper", {
      duration: 1,
      delay: 0,
      y: 200,
      // skewY: 20,
      opacity: 0,
    }, "-=0.5");

    tl.from(".BtnSticky", {
      duration: 1,
      delay: 0,
      y: 200,
      skewY: 20,
      opacity: 0,
    }, "-=0.5");
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
    h3 {
      font-size: 1.5em;
      line-height: 1.2em;
      overflow: hidden;
    }
  }
}

.tags_container {
  display: flex;
  gap: 7px;
  padding: 25px;
}

.tag {
  display: inline-block;
  border: 1px solid;
  padding: 10px 15px;
  border-radius: 15px;
  transition: all 0.25s ease-in-out;
  width: max-content;
  font-size: 13px;
}



.tag:hover {
  // transform: scale(1.05);
  background-color: invert($color: #000000);
  color: black;
}

.image_wrapper {
  // border: 1px solid white;
  height: max-content;
  width:  50vw;
  overflow: hidden;
  border-radius: 10px;


  // box-shadow: 0px 0px 15px 0px rgba(219, 219, 219, 0.7);

}

.image_wrapper img {
  object-fit: contain;
  height: max-content;
  width: 50vw;
}

@media screen and (max-width: 768px) {
  .image_wrapper {
    height: min-content;
    width:  90vw;
  }
  .image_wrapper img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.tag {
  padding: 2px 10px;
}

.tag p {
  font-size: 0.70rem !important;
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