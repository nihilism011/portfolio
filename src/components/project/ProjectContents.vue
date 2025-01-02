<script setup lang="ts">
defineProps<{
  contents: string[]
}>()
</script>
<template>
  <ul class="list-disc list-inside pl-4">
    <li v-for="(content, i) in contents" :key="i">{{ content }}</li>
  </ul>
</template>
