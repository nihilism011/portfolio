<script setup lang="ts">
defineProps({
  title: String,
  color: String,
  icon: String,
  fontColor: {
    type: String,
    default: 'white',
  },
})
</script>

<template>
  <div
    class="px-6 py-4 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-lg text-white font-medium text-center flex items-center justify-center space-x-3'"
    :style="`background-color:${color}`"
  >
    <div class="p-2 text-black">
      <mdicon :name="icon" size="30" />
    </div>
    <div :class="`text-xl text-${fontColor}`">{{ title }}</div>
  </div>
</template>
