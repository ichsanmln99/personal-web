<template>
  <section>
    <div class="px-2 py-4">
      <div>
        <h1 class="text-2xl font-bold">
          Ichsan Maulana
          <Icon class="text-primary" name="mdi:check-decagram"></Icon>
        </h1>
        <h2 class="opacity-50">@ichsanspace</h2>
      </div>
      <div class="my-3">
        <p>
          Web Developer who can write Frontend and Backend, *mostly frontend
        </p>
      </div>
      <div class="flex gap-3 flex-wrap">
        <div class="flex gap-1 items-center opacity-50">
          <Icon name="mdi:map-marker-outline"></Icon>
          <span>Cianjur, Indonesia</span>
        </div>
        <div class="flex gap-1 items-center">
          <Icon class="opacity-50" name="mdi:link-variant"></Icon>
          <NuxtLink to="/blog" class="text-primary hover:text-primary-focus"
            >/blog</NuxtLink
          >
        </div>
        <div class="flex gap-1 items-center opacity-50">
          <Icon name="mdi:briefcase-outline"></Icon>
          <span>Web Developer</span>
        </div>
        <div class="flex gap-1 items-center opacity-50">
          <Icon name="mdi:calendar-month-outline"></Icon>
          <span>Since 2017</span>
        </div>
      </div>
    </div>
  </section>
</template>
