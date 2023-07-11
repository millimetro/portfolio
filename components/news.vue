<template>
  <div>
    <div class="news-marquee">
      <div class="news-track">
        <div class="news-content">
          &nbsp;Hello there! My name is millimetro - WELCOME TO MY PORTFOLIO :))
          <img src="../assets/img/dot.svg" alt="" />
          &nbsp;Hello there! My name is millimetro - WELCOME TO MY PORTFOLIO :))
          <img src="../assets/img/dot.svg" alt="" />
          &nbsp;Hello there! My name is millimetro - WELCOME TO MY PORTFOLIO :))
          <img src="../assets/img/dot.svg" alt="" />
          &nbsp;Hello there! My name is millimetro - WELCOME TO MY PORTFOLIO :))
          <img src="../assets/img/dot.svg" alt="" />
          &nbsp;Hello there! My name is millimetro - WELCOME TO MY PORTFOLIO :))
          <img src="../assets/img/dot.svg" alt="" />
          &nbsp;Hello there! My name is millimetro - WELCOME TO MY PORTFOLIO :))
          <img src="../assets/img/dot.svg" alt="" />
          &nbsp;Hello there! My name is millimetro - WELCOME TO MY PORTFOLIO :))
          <img src="../assets/img/dot.svg" alt="" />
          &nbsp;Hello there! My name is millimetro - WELCOME TO MY PORTFOLIO :))
          <img src="../assets/img/dot.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const tl = gsap.timeline();
    tl.from(".news-content", {
      duration: 1,
      delay: 0,
      x: 200,
      skewY: 20,
      stagger: {
        amount: 0.5,
      },
    });
  },
};
</script>

<style lang="scss">
@media (max-width: 768px) {
  .news-content {
    font-size: 8px;
  }
}

.news-marquee {
  position: absolute;
  bottom: 0;
  width: 100vw;
  max-width: 100%;
  height: 6%;
  overflow: hidden;

  border-top: 0.5px solid rgb(67, 67, 229);

  .news-track {
    position: absolute;
    top: 30%;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 45s linear infinite;

    font-size: 12px;
    color: rgb(67, 67, 229);
    text-transform: uppercase;

    .news-content {
      img {
        padding: 0 10px;
        width: 30px;
      }
    }
  }
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>