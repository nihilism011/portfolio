<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'black',
  },
})
</script>
<template>
  <div :class="`text-${color}`" class="flex items-center justify-center">
    <a :href="'#' + link" link class="hover:scale-110 hover:text-blue-400 transition-all">
      <mdicon name="link-variant" size="45" degree="45" />
    </a>
    <h2 class="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold">
      {{ title }}
    </h2>
  </div>
</template>
