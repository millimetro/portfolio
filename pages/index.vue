<template>
  <div class="main">
    <div class="content">
      <h1>millimetro_</h1>
      <a href="http://instagram.com/millimetro_" target="blank">instagram</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style lang="scss">
@import "../assets/css/main.scss";
body {
  font-family: "Mattone-150";
  background-color: black;
}

.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    text-align: center;
  }
}

a {
  color: white;
  font-size: 2em;
  transition: 250ms ease-in-out;
}

h1 {
  color: white;
  font-size: 15em;
  transition: 250ms ease-in-out;
}

h1:hover {
  color: blue;
  transition: 500ms ease-in-out;
}

a:hover {
  color: red;
  transition: 500ms ease-in-out;
}
</style>