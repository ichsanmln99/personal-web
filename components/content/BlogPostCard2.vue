<template>
  <NuxtLink :to="url">
    <div>
      <NuxtImg
        sizes="xs:90vw"
        quality="90"
        densities="2x"
        format="webp"
        class="w-full md:h-[360px] h-[240px] object-cover bg-black"
        :src="thumbnail"
        alt="Post Image"
      />

      <div class="py-6">
        <h1 class="md:text-4xl text-2xl font-semibold">
          {{ title }}
        </h1>
        <p class="opacity-50 text-lg my-4 line-clamp-2">
          {{ description }}
        </p>
        <span class="opacity-50">May 20, 2022</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  thumbnail: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>
