<template>
  <div>
    <div class="loader__container">
      <div class="loader__text-wrapper">
        <div class="text-1 text">Hello there!</div>
        <div class="text-2 text">Hello there!</div>
        <div class="text-3 text">Hello there!</div>
        <div class="text-4 text">Hello there!</div>
        <div class="text-5 text">Hello there!</div>
        <div class="text-6 text">Hello there!</div>
        <div class="text-7 text">Hello there!</div>
        <div class="text-8 text">Hello there!</div>
        <div class="text-9 text">Hello there!</div>
        <div class="text-10 text">Hello there!</div>
        <div class="text-11 text">Hello there!</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loader__header {
  z-index: -1;
}

.loader__container {
  width: 100%;
  height: 100vh;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #161616;
  animation: slide-out-container 4s cubic-bezier(0.97, 0.01, 0.36, 0.99) 2.8s;
  animation-fill-mode: forwards;
}

.loader__text-wrapper {
  color: white;
  position: absolute;
  text-transform: uppercase;
}

.text {
  font-family: gill sans;
  font-weight: lighter;
  font-size: 54px;
}

.text-1,
.text-3,
.text-4,
.text-8,
.text-9,
.text-11 {
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 1px white;
}

@keyframes blink {
  0% {
    opacity: 0%;
  }
  1% {
    opacity: 100%;
  }
  99% {
    opacity: 100%;
  }
  100% {
    opacity: 0;
  }
}

.text-1 {
  animation: blink 0.8s linear 0.9s, blink 0.8s linear 2s;
  opacity: 0;
}

.text-2 {
  animation: blink 0.8s linear 0.8s, blink 0.8s linear 2.1s;
  opacity: 0;
}

.text-3 {
  animation: blink 0.8s linear 0.7s, blink 0.8s linear 2.2s;
  opacity: 0;
}

.text-4 {
  animation: blink 0.8s linear 0.6s, blink 0.8s linear 2.3s;
  opacity: 0;
}

.text-5 {
  animation: blink 0.8s linear 0.5s, blink 0.8s linear 2.4s;
  opacity: 0;
}

.text-6 {
  animation: blink 0.8s linear 0.4s, blink 0.8s linear 2.5s,
    slide-out 1s linear 3.2s;
  opacity: 0;
}

.text-7 {
  animation: blink 0.8s linear 0.5s, blink 0.8s linear 2.4s;
  opacity: 0;
}

.text-8 {
  animation: blink 0.8s linear 0.6s, blink 0.8s linear 2.3s;
  opacity: 0;
}

.text-9 {
  animation: blink 0.8s linear 0.7s, blink 0.8s linear 2.2s;
  opacity: 0;
}

.text-10 {
  animation: blink 0.8s linear 0.8s, blink 0.8s linear 2.1s;
  opacity: 0;
}

.text-11 {
  animation: blink 0.8s linear 0.9s, blink 0.8s linear 2s;
  opacity: 0;
}

@keyframes slide-out {
  0% {
    opacity: 0%;
  }
  1% {
    opacity: 100%;
  }

  19% {
    opacity: 100%;
  }
  20% {
    opacity: 0%;
  }

  39% {
    opacity: 0%;
  }
  40% {
    opacity: 100%;
  }

  59% {
    opacity: 100%;
  }
  60% {
    opacity: 0%;
  }

  79% {
    opacity: 0%;
  }
  80% {
    opacity: 100%;
  }

  100% {
    opacity: 100%;
  }
}

@keyframes slide-out-container {
  0% {
    height: 100vh;
  }

  40% {
    height: 100vh;
  }

  100% {
    height: 0%;
  }
}
</style>