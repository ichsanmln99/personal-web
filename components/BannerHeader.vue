<template>
  <div class="w-full h-64 bg-black lofi-effect">
    <img
      :src="image || randomBanner"
      class="w-full h-full object-cover"
      alt=""
    />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
defineProps({
  image: {
    type: String,
    default: "",
  },
});

const randomBanner = ref();

onMounted(() => {
  randomBanner.value = `/banner-${getRandomArbitrary(1, 4)}.gif`;
});

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
</script>

<style lang="scss">
.lofi-effect {
  position: relative;
  will-change: opacity;
  animation: opacity 3s linear infinite;

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: turnon 0.8s normal;
  }
}

.lofi-effect::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: 100% 4px;
  will-change: background, background-size;
  animation: scanlines 0.2s linear infinite;
}

@keyframes scanlines {
  from {
    background: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(0, 0, 0, 0.5) 51%
      ),
      radial-gradient(circle, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 0.7) 100%);
    background-size: 100% 6px;
  }

  to {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5) 50%,
        transparent 51%
      ),
      radial-gradient(circle, rgba(0, 0, 0, 0) 89%, rgba(0, 0, 0, 0.7) 100%);
    background-size: 100% 6px;
  }
}

@keyframes opacity {
  0% {
    opacity: 0.8;
  }

  20% {
    opacity: 1;
  }

  50% {
    opacity: 0.9;
  }

  80% {
    opacity: 0.8;
  }

  100% {
    opacity: 0.7;
  }
}

@keyframes turnon {
  0% {
    height: 1%;
    width: 1%;
    filter: brightness(300%);
  }

  40% {
    height: 1%;
    width: 100%;
    filter: brightness(300%);
  }

  100% {
    height: 100%;
    width: 100%;
    filter: brightness(100%);
  }
}
</style>
