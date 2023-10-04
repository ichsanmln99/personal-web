<template>
  <div class="flex flex-col gap-8">
    <ContentList path="/posts" :query="query">
      <template #default="{ list }">
        <template v-for="post in list" :key="post._path">
          <BlogPostCard2
            :title="post.title"
            :description="post.description"
            :thumbnail="post.thumbnail"
            :url="post._path"
          ></BlogPostCard2>
        </template>
        <div class="mt-4 mb-10 flex justify-between">
          <div>
            <NuxtLink
              v-if="page > 0"
              :to="{ path: '/blog', query: { page: '1' } }"
              class="btn btn-ghost"
            >
              Previous
            </NuxtLink>
          </div>
          <div>
            <NuxtLink
              v-if="list.length > 0 && list.length === 5"
              :to="{ path: '/blog', query: { page: '2' } }"
              class="btn btn-ghost"
            >
              Next
            </NuxtLink>
          </div>
        </div>
      </template>
      <template #not-found>
        <div class="text-center my-32">
          <p class="mb-5">No articles found.</p>
          <NuxtLink v-if="route.query.page" to="/blog" class="btn btn-ghost"
            >Back to Home</NuxtLink
          >
        </div>
      </template>
    </ContentList>
  </div>
</template>

<script setup>
import BlogPostCard2 from "~/components/content/BlogPostCard2.vue";
const limitPerPage = 5;
const route = useRoute();
const page = computed(() => route.query.page - 1);
const skip = computed(() => limitPerPage * page.value || 0);

const query = computed(() => ({
  path: "/posts",
  limit: limitPerPage,
  skip: skip.value,
}));
</script>
