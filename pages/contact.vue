<template>
  <div>
    <div class="contact-container">
      <div class="contact-mobile">
        <!-- <h1>IG</h1> -->

        <a href="http://instragram.com/millimetro_">@millimetro_</a>

        <!-- <h1>Email</h1> -->
        <a href="mailto:ciao@millimetro.xyz">ciao@millimetro.xyz</a>
      </div>
      <div class="contact-web">
        <div class="contact-email contact-block">
          <h1 class="contact-present">email</h1>
          <h1 class="contact-hover">
            <a href="mailto:ciao@millimetro.xyz">ciao@millimetro.xyz</a>
          </h1>
        </div>

        <div class="contact-instagram contact-block">
          <h1 class="contact-present">instagram</h1>
          <h1 class="contact-hover">
            <a href="http://instragram.com/millimetro_">@millimetro_</a>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Dall'alto verso il basso
    // const tl = gsap.timeline();
    // tl.from(".contact-web, .contact-mobile", {
    //   duration: 2,
    //   y: "-200%",
    //   opacity: 0,
    //   stagger: {
    //     amount: 0.25,
    //   },
    // });

    //Dal basso verso l'alto
    gsap.from(".contact-web, .contact-mobile", 2, {
      y: "200",
      opacity: 0,
      ease: Expo.easeInOut,
      delay: 0,
      stagger: 0.08,
    });
  },
};
</script>

<style>
@media (max-width: 768px) {
  .contact-web {
    display: none !important;
  }

  .contact-mobile {
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    text-align: center;
    padding: 0 5%;
  }

  .contact-mobile a {
    font-size: 24px;
    padding: 35px 20px;
    margin: 15px 0px;
    border: 2px solid white;
    border-radius: 100%;
  }

  .contact-mobile h1 {
    margin: 0;
  }
}

@media (min-width: 900px) {
  .contact-mobile {
    display: none !important;
  }
}

.contact-web {
  display: flex;
  align-items: left;
  justify-content: center;
  height: 90vh;

  width: 100%;
  flex-direction: column;
}

h1 {
  font-size: 72px;

  white-space: nowrap;
  margin-left: 20px;
  transition: 0.5s ease-in-out;
}

.contact-block {
  display: flex;
  border-bottom: 1px solid white;
}

.contact-hover {
  opacity: 0;
  overflow: hidden;
  transition: 0.5s ease-in-out;
}

.contact-block:hover .contact-hover {
  opacity: 1;
  animation: animate 10s linear infinite;
}

@keyframes animate {
  from {
    transform: translateX(60%);
  }
  to {
    transform: translateX(-100%);
  }
}

.contact-block:hover .contact-present {
  opacity: 0;
}

a {
  text-decoration: none;
  color: white;
  transition: 0.5s ease-in-out;
}

.contact-present {
  text-transform: lowercase;
}

h1 {
  color: black;
  -webkit-text-stroke: 2px white;
  padding: 10px 0px;
}
</style>