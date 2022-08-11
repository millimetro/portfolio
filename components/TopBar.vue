<template>
  <div>
    <div class="topNav">
      <div>
        <nuxt-link to="#">@millimetro_</nuxt-link>
      </div>

      <div class="pulsante panic">
        <nuxt-link to="panic">PANIC MODE</nuxt-link>
      </div>

      <!-- <div class="pulsante github">
        <a href="https://github.com/millimetro" target="blank">
          <img src="../assets/img/github.svg" alt="" class="git" />
        </a>
      </div> -->

      <div class="pulsante eye">
        <nuxt-link to="eye"><p>EYE</p></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.topNav {
  display: flex;
  justify-content: space-between;
  padding: 2%;

  font-size: 12px;
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
  background-color: blue !important;
}
</style>