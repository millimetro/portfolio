<template>
  <div>
    <div class="navMain-container">
      <ul>
        <li>
          <nuxt-link to="projects" class="navMain-rolling-text"
            >Projects</nuxt-link
          >
        </li>
        <li>
          <a
            href="https://www.instagram.com/millimetro_/"
            target="blank"
            class="navMain-rolling-text"
            >Instagram</a
          >
        </li>
        <!-- <li>
          <a
            href="https://giphy.com/channel/millimetro"
            target="blank"
            class="navMain-rolling-text"
            >Giphy</a
          >
        </li> -->
        <!-- <li><nuxt-link to="sound">Sound Design</nuxt-link></li> -->

        <li>
          <nuxt-link to="about" class="navMain-rolling-text"
            >About Me</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="contact" class="navMain-rolling-text"
            >Contacts</nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<script>
export default {
  mounted() {
    let elements = document.querySelectorAll(".navMain-rolling-text");

    elements.forEach((element) => {
      let innerText = element.innerText;
      element.innerHTML = "";

      let textContainer = document.createElement("div");
      textContainer.classList.add("block");

      for (let letter of innerText) {
        let span = document.createElement("span");
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add("letter");
        textContainer.appendChild(span);
      }

      element.appendChild(textContainer);
      element.appendChild(textContainer.cloneNode(true));
    });

    elements.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.classList.remove("play");
      });
    });
  },
};
</script>


<style>
@media (max-width: 768px) {
  .navMain-container {
    top: 50%;
  }
  .navMain-container ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 42px;
  }

  .navMain-container ul li {
    padding: 5px;
  }

  .navMain-container ul li a {
    font-size: 32px !important;
  }
}
.navMain-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.navMain-container ul {
  list-style: none;
  display: flex;
}

.navMain-container ul li {
  margin: 0px 20px;
}

.navMain-container ul li a {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-size: 24px;
}

/* ROLLING TEXT */

.navMain-rolling-text {
  display: inline-block;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: 0px;
  height: 36px;
  text-decoration: none;
  overflow: hidden;
  color: #fff;
}
.navMain-rolling-text:hover .letter,
.navMain-rolling-text.play .letter {
  transform: translateY(-100%);
}
.navMain-rolling-text .block:last-child {
  color: white;
}
.navMain-rolling-text .letter {
  display: inline-block;
  transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);
}

.letter:nth-child(1) {
  transition-delay: 0s;
}

.letter:nth-child(2) {
  transition-delay: 0.015s;
}

.letter:nth-child(3) {
  transition-delay: 0.03s;
}

.letter:nth-child(4) {
  transition-delay: 0.045s;
}

.letter:nth-child(5) {
  transition-delay: 0.06s;
}

.letter:nth-child(6) {
  transition-delay: 0.075s;
}

.letter:nth-child(7) {
  transition-delay: 0.09s;
}

.letter:nth-child(8) {
  transition-delay: 0.105s;
}

.letter:nth-child(9) {
  transition-delay: 0.12s;
}

.letter:nth-child(10) {
  transition-delay: 0.135s;
}

.letter:nth-child(11) {
  transition-delay: 0.15s;
}

.letter:nth-child(12) {
  transition-delay: 0.165s;
}

.letter:nth-child(13) {
  transition-delay: 0.18s;
}

.letter:nth-child(14) {
  transition-delay: 0.195s;
}

.letter:nth-child(15) {
  transition-delay: 0.21s;
}

.letter:nth-child(16) {
  transition-delay: 0.225s;
}

.letter:nth-child(17) {
  transition-delay: 0.24s;
}

.letter:nth-child(18) {
  transition-delay: 0.255s;
}

.letter:nth-child(19) {
  transition-delay: 0.27s;
}

.letter:nth-child(20) {
  transition-delay: 0.285s;
}

.letter:nth-child(21) {
  transition-delay: 0.3s;
}
</style>