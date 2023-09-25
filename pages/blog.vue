<template>
  <div class="w-full max-w-2xl mx-auto">
    <TheHeader image="/banner-2.gif">
      <a href="/" class="btn btn-outline btn-circle btn-sm md:btn-md">
        <Icon name="mdi:home-outline" size="22"></Icon>
      </a>
      <a
        href="mailto:michsanm1999@gmail.com"
        class="btn btn-outline btn-circle btn-sm md:btn-md"
      >
        <Icon name="mdi:email-outline" size="22"></Icon>
      </a>
      <a
        href="https://x.com/ichsanspace"
        target="_blank"
        class="btn btn-primary gap-1 btn-sm md:btn-md"
      >
        Follow <Icon name="mdi:twitter" size="22"></Icon>
      </a>
    </TheHeader>

    <section>
      <div class="px-2 py-4">
        <div>
          <h1 class="text-2xl font-bold">My Blog 📝</h1>
          <h2 class="opacity-50">Personal Blog of Ichsan Maulana</h2>
        </div>
      </div>
    </section>

    <section>
      <div class="tabs w-full border-b border-zinc-800">
        <NuxtLink
          to="/blog"
          class="tab flex-1 hover:text-base-content tab-lg md:h-16"
          exact-active-class="tab-active"
          >Posts</NuxtLink
        >
        <NuxtLink
          to="/blog/link"
          exact-active-class="tab-active"
          class="tab flex-1 hover:text-base-content tab-lg md:h-16"
          >Links</NuxtLink
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
import TheFooter from "~/components/TheFooter.vue";
import TheHeader from "~/components/TheHeader.vue";
</script>
