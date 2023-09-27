<template>
  <div class="w-full max-w-2xl mx-auto">
    <HeaderProfile></HeaderProfile>

    <section>
      <div class="tabs w-full border-b border-zinc-800">
        <NuxtLink
          to="/"
          class="tab flex-1 hover:text-base-content tab-lg md:h-16"
          exact-active-class="tab-active"
          >Feed</NuxtLink
        >
        <NuxtLink
          to="/about"
          exact-active-class="tab-active"
          class="tab flex-1 hover:text-base-content tab-lg md:h-16"
          >About</NuxtLink
        >
        <NuxtLink
          to="/projects"
          exact-active-class="tab-active"
          class="tab flex-1 hover:text-base-content tab-lg md:h-16"
          >Projects</NuxtLink
        >
      </div>
      <div>
        <NuxtPage></NuxtPage>
      </div>
    </section>
    <TheFooter></TheFooter>
  </div>
</template>

<script setup>
import HeaderProfile from "~/components/HeaderProfile.vue";
import TheFooter from "~/components/TheFooter.vue";
</script>
