<template>
  <NuxtLink :to="url">
    <div
      class="w-full mt-3 max-h-[620px] rounded-xl overflow-hidden border border-zinc-800 bg-base-secondary hover:bg-base-secondary-2 transition"
    >
      <img class="w-full h-full" :src="media" />
      <div class="p-4 text-base-content">
        <h2 class="h2">Judulnya duluan</h2>
        <p class="opacity-50 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit saepe
          ipsa magni illo quisquam officia voluptates! Necessitatibus, harum id.
          Eligendi sequi fugit officia at porro incidunt harum, repudiandae
          debitis nesciunt.
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  media: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    default: "",
  },
});
</script>
