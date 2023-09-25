<template>
  <section>
    <div class="relative mb-4">
      <BannerHeader :image="image"></BannerHeader>
      <div class="avatar -translate-y-1/2 translate-x-4 absolute">
        <div class="w-32 md:w-40 bg-black rounded-full ring-base-100 ring-4">
          <img src="/me.jpg" />
        </div>
      </div>
      <div class="flex justify-end py-3 px-2 gap-2">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import BannerHeader from "~/components/BannerHeader.vue";

defineProps({
  image: {
    type: String,
    default: "",
  },
});
</script>
