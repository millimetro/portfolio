<template>
  <div>
    <div class="about-cta hoverino">
      <a href="mailto:ciao@millimetro.xyz" class="hover-this"
        ><span class="span-btn">SAY HI :)</span></a
      >
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    (function () {
      const link = document.querySelectorAll(".hover-this");
      const cursor = document.querySelector(".cursor");

      const animateit = function (e) {
        const span = this.querySelector(".span-btn");
        const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,
          move = 25,
          xMove = (x / width) * (move * 2) - move,
          yMove = (y / height) * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === "mouseleave") span.style.transform = "";
      };

      const editCursor = (e) => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
      };

      link.forEach((b) => b.addEventListener("mousemove", animateit));
      link.forEach((b) => b.addEventListener("mouseleave", animateit));
      window.addEventListener("mousemove", editCursor);
    })();
  },
};
</script>

<style lang="scss">
.about-cta {
  //   margin: 60px 20% 30px;
  a {
    text-decoration: none;
    // padding: 25px 50px;

    display: block;
    justify-content: center;

    color: white;
    // background-color: blue;
    /* border: 2px solid white; */
    // border-radius: 100%;
  }
}

.hover-this {
  transition: all 0.3s ease;
}

.span-btn {
  //   transform: translate(-25%, -25%);

  margin: 35px 20% 30px;
  padding: 25px 100px;
  border-radius: 100%;

  display: inline-block;
  position: relative;
  width: 150px;
  height: 85px;
  top: -25%;
  left: -25%;
  justify-content: center;

  background-color: blue;

  pointer-events: none;
  transition: transform 0.1s linear;
  padding: 32px 35px;
}

// .cursor {
//   pointer-events: none;
//   position: fixed;
//   padding: 0.3rem;
//   background-color: #fff;
//   mix-blend-mode: difference;
//   transition: transform 0.3s ease;
// }

// .hover-this:hover ~ .cursor {
//   transform: translate(-50%, -50%) scale(8);
// }
</style>