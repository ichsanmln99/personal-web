<template>
  <TheHeader>
    <a
      href="mailto:michsanm1999@gmail.com"
      class="btn btn-outline btn-circle btn-sm md:btn-md"
    >
      <Icon name="mdi:email-outline" size="22"></Icon>
    </a>
    <a
      href="https://www.linkedin.com/in/ichsanmln99"
      class="btn btn-outline btn-circle btn-sm md:btn-md"
      target="_blank"
    >
      <Icon name="mdi:linkedin" size="22"></Icon>
    </a>
    <a
      href="https://x.com/ichsanspace"
      target="_blank"
      class="btn btn-primary gap-1 btn-sm md:btn-md"
    >
      Follow <Icon name="mdi:twitter" size="22"></Icon>
    </a>
  </TheHeader>
  <TheProfile></TheProfile>
</template>

<script setup>
import TheHeader from "./TheHeader.vue";
import TheProfile from "./TheProfile.vue";
</script>
