<template>
  <!-- <div>
    <div class="news">
      <p>Hello there! :)) My name is millimetro - welcome to my portfolio</p>
      <img src="../assets/img/dot.svg" alt="" />

      <p>Hello there! :)) My name is millimetro - welcome to my portfolio</p>
      <img src="../assets/img/dot.svg" alt="" />

      <p>Hello there! :)) My name is millimetro - welcome to my portfolio</p>
      <img src="../assets/img/dot.svg" alt="" />

      <p>Hello there! :)) My name is millimetro - welcome to my portfolio</p>
      <img src="../assets/img/dot.svg" alt="" />
    </div>
  </div> -->

  <div>
    <div class="marquee">
      <div class="track">
        <div class="content">
          &nbsp;Hello there! My name is millimetro - welcome to my portfolio :))
          <img src="../assets/img/dot.svg" alt="" />
          &nbsp;Hello there! My name is millimetro - welcome to my portfolio :))
          <img src="../assets/img/dot.svg" alt="" />
          &nbsp;Hello there! My name is millimetro - welcome to my portfolio :))
          <img src="../assets/img/dot.svg" alt="" />
          &nbsp;Hello there! My name is millimetro - welcome to my portfolio :))
          <img src="../assets/img/dot.svg" alt="" />
          &nbsp;Hello there! My name is millimetro - welcome to my portfolio :))
          <img src="../assets/img/dot.svg" alt="" />
          &nbsp;Hello there! My name is millimetro - welcome to my portfolio :))
          <img src="../assets/img/dot.svg" alt="" />
          &nbsp;Hello there! My name is millimetro - welcome to my portfolio :))
          <img src="../assets/img/dot.svg" alt="" />
          &nbsp;Hello there! My name is millimetro - welcome to my portfolio :))
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
/* .news {
  width: 100%;
  border-top: 0.5px solid rgb(67, 67, 229);
  bottom: 0;
  position: absolute;
  height: 5%;
  overflow: auto;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
}

p {
  font-size: 12px;
  color: rgb(67, 67, 229);
  padding: 0 5px;
  text-transform: uppercase;
}
*/

img {
  padding: 0 10px;
  width: 32px;
}

.marquee {
  position: absolute;
  bottom: 0;
  width: 100vw;
  max-width: 100%;
  height: 5%;
  overflow-x: hidden;

  border-top: 0.5px solid rgb(67, 67, 229);
}

.track {
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 45s linear infinite;

  font-size: 16px;
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