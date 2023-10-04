<template>
  <BlogNavbar />

  <div class="w-full max-w-2xl mx-auto md:my-16 my-10 px-4">
    <div class="prose prose-xl">
      <ContentDoc v-slot="{ doc }">
        <ContentRenderer :value="doc">
          <img
            :src="doc.thumbnail"
            class="w-full max-h-[420px] object-cover rounded-2xl"
            alt=""
          />
          <ContentRendererMarkdown
            :value="doc"
            class="prose prose-headings:!no-underline"
          />
        </ContentRenderer>
      </ContentDoc>
    </div>
  </div>
</template>

<script setup>
import BlogNavbar from "~/components/BlogNavbar.vue";
</script>

<style>
.prose > h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
  text-decoration: none !important;
}

.prose h1 {
  font-weight: 600 !important;
}
</style>
