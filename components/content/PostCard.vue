<template>
  <div
    class="flex p-4 gap-4 hover:bg-base-secondary post-card"
    :class="{ 'border-b border-zinc-800': !isChaining }"
  >
    <div class="flex flex-col relative">
      <div class="avatar flex-0 z-10">
        <div class="w-12 rounded-full">
          <img src="/me.jpg" />
        </div>
      </div>
      <div
        v-if="isChaining"
        class="absolute h-[calc(100%+3rem)] left-1/2 transform -translate-x-1/2 top-0 -z-0"
      >
        <div class="mx-auto h-full w-1 border-r-2 border-zinc-800"></div>
      </div>
    </div>
    <div>
      <div class="flex items-center md:gap-2 gap-1">
        <h3 class="font-bold break-all line-clamp-1">Ichsan Maulana</h3>
        <span class="opacity-50 line-clamp-1 break-all">@ichsanspace</span>
        <span class="opacity-50 flex-0">·</span>
        <span class="opacity-50 line-clamp-1 break-all">{{ postDate }}</span>
      </div>
      <div>
        <p class="mb-4">
          <slot></slot>
        </p>
        <div
          v-if="media"
          class="w-full max-h-[620px] rounded-xl overflow-hidden bg-black"
        >
          <img
            v-if="mediaType === 'image'"
            class="w-full h-full"
            :src="media"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const dayJs = useDayjs();

const props = defineProps({
  media: {
    type: String,
    default: "",
  },
  mediaType: {
    type: String,
    default: "image",
  },
  date: {
    type: String,
    default: () => new Date().toString(),
    require: String,
  },
  isChaining: {
    type: Boolean,
    default: false,
  },
});

const postDate = computed(() => dayJs(props.date).format("MMM DD, YYYY"));
</script>
