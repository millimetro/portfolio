<template>
  <div>
    <div class="marquee">
      <div class="track">
        <div class="content">
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
export default {};
</script>

<style scoped>
img {
  padding: 0 10px;
  width: 32px;
}

.marquee {
  position: absolute;
  bottom: 0;
  width: 100vw;
  max-width: 100%;
  height: 6%;
  overflow-x: hidden;

  border-top: 0.5px solid rgb(67, 67, 229);
}

.track {
  position: absolute;
  top: 30%;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 45s linear infinite;

  font-size: 14px;
  color: rgb(67, 67, 229);
  text-transform: uppercase;
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