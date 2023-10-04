<template>
  <div class="navbar w-full max-w-5xl mx-auto px-4">
    <div class="flex-1">
      <NuxtLink to="/">
        <NuxtImg src="/IC.svg" width="32" height="32" alt="IC Logo" />
      </NuxtLink>
    </div>
    <div class="flex-0">
      <ul class="menu menu-horizontal px-0">
        <li>
          <NuxtLink exact-active-class="active" to="/blog">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink exact-active-class="active" to="/blog/link">Links</NuxtLink>
        </li>
        <li>
          <NuxtLink exact-active-class="active" to="/about"
            >About Me <Icon name="mdi:arrow-top-right"></Icon
          ></NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
