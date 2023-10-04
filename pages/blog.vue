<template>
  <BlogNavbar></BlogNavbar>

  <div
    class="w-full max-w-5xl mx-auto grid grid-cols-6 md:gap-20 gap-14 md:mt-16 mt-10 px-4"
  >
    <div class="md:col-span-2 col-span-6">
      <div class="avatar mb-4">
        <div class="w-24 bg-black rounded-full ring-base-100 ring-4">
          <NuxtImg
            width="96"
            height="96"
            densities="2x"
            format="webp"
            alt="Ichsan Maulana"
            src="/me.jpg"
          />
        </div>
      </div>
      <div>
        <div class="mb-2">
          <h1 class="text-xl font-bold">Ichsan Maulana</h1>
          <h2 class="opacity-50">@ichsanspace</h2>
        </div>
        <p>
          Web Developer who can write Frontend and Backend, *mostly frontend
        </p>
      </div>
    </div>
    <div class="md:col-span-4 col-span-6 flex flex-col gap-8">
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>

<script setup>
import BlogNavbar from "~/components/BlogNavbar.vue";
</script>
