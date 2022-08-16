<template>
  <div>
    <div class="topNav hoverino">
      <nuxt-link to="/">@millimetro_</nuxt-link>

      <div class="pulsante eye">
        <nuxt-link to="eye">
          <img src="../assets/img/Occhio.svg" alt="" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script >
export default {};
</script>

<style>
.topNav {
  display: flex;
  justify-content: space-between;
  padding: 2%;
  font-size: 12px;
}

img {
  height: 10px;
}

.pulsante {
  color: white;
  padding: 7px;
  border-radius: 12px;
}
.panic {
  background-color: red !important;
}

.github {
  background-color: rgb(46, 239, 94) !important;
}

.git {
  width: 12px;
}

.eye {
  background-color: blue;
  padding: 5px 10px;

  border-radius: 10px;
}
</style>