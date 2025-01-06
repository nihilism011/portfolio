<script setup lang="ts">
defineProps({
  title: String,
  content: String,
  icon: String,
})
</script>
<template>
  <div
    class="flex items-center p-4 border border-gray-200 rounded-lg shadow-md h-32 w-80 transition-all transform hover:scale-105 hover:shadow-lg"
  >
    <mdicon :name="icon" size="40" class="text-black mr-4" />
    <div>
      <div class="font-semibold text-lg">{{ title }}</div>
      <div class="text-gray-600" v-html="content"></div>
    </div>
  </div>
</template>
