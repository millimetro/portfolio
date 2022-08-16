<template>
  <div>
    <div class="contactPage">
      <div class="email block">
        <h1 class="present">email</h1>
        <h1 class="hover">
          <a href="mailto:ciao@millimetro.xyz">ciao@millimetro.xyz</a>
        </h1>
      </div>

      <div class="instagram block">
        <h1 class="present">instagram</h1>
        <h1 class="hover">
          <a href="http://instragram.com/millimetro_">@millimetro_</a>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const tl = gsap.timeline();
    tl.from("contactPage", {
      duration: 2,
      y: "-100%",
      opacity: 0,
      stagger: {
        amount: 0.25,
      },
    });
  },
};
</script>

<style>
.contactPage {
  display: flex;
  align-items: left;
  justify-content: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
}

h1 {
  font-size: 72px;

  white-space: nowrap;
  margin-left: 20px;
  transition: 0.5s ease-in-out;
}

.block {
  display: flex;
  border-bottom: 1px solid white;
}

.hover {
  opacity: 0;
  overflow: hidden;
  transition: 0.5s ease-in-out;
}

.block:hover .hover {
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

.block:hover .present {
  opacity: 0;
}

a {
  text-decoration: none;
  color: white;
  transition: 0.5s ease-in-out;
}

.present {
  text-transform: lowercase;
}

h1 {
  color: black;
  -webkit-text-stroke: 2px white;
  padding: 10px 0px;
}
</style>