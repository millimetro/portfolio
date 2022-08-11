<template>
  <div>
    <div class="container">
      <ul>
        <li>
          <a href="https://www.instagram.com/millimetro_/" target="blank"
            >Instagram</a
          >
        </li>
        <li>
          <a href="https://giphy.com/channel/millimetro" target="blank"
            >Giphy</a
          >
        </li>
        <li><nuxt-link to="sound">Sound Design</nuxt-link></li>
        <li><nuxt-link to="contact">Contacts</nuxt-link></li>
        <li><nuxt-link to="about">About Me</nuxt-link></li>
        <div class="cursor"></div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    });
  },
};
</script>

<style  >
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: black;
  /* cursor: none; */
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.container ul {
  list-style: none;
  display: flex;
}

.container ul li {
  margin: 0px 20px;
}

.container ul li a {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-size: 20px;
}

.cursor {
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  background-color: white;
  mix-blend-mode: difference;
  transition: 0.1s;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  pointer-events: none;

  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
  -ms-transition: all 0.1s ease;
  transition: all 0.1s ease;

  -webkit-transform: scale(0.2);
  -moz-transform: scale(0.2);
  -ms-transform: scale(0.2);
  transform: scale(0.2);
}

ul li:hover ~ .cursor {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
</style>