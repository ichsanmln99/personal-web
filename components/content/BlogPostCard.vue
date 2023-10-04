<template>
  <NuxtLink class="w-full" :to="url">
    <div
      class="w-full mt-3 max-h-[620px] rounded-xl overflow-hidden border border-zinc-800 bg-base-secondary hover:bg-base-secondary-2 transition"
    >
      <NuxtImg
        sizes="xs:90vw"
        quality="90"
        densities="2x"
        format="webp"
        class="w-full h-full bg-black"
        :src="thumbnail"
        alt="Post Image"
      />

      <div class="p-4 text-base-content">
        <h2 class="h2">{{ title }}</h2>
        <p class="opacity-50 line-clamp-2">
          {{ description }}
        </p>
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
