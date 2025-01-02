<script setup lang="ts">
import type { Project } from '@/types'
import ProjectContents from './ProjectContents.vue'
defineProps<{
  project: Project
}>()
</script>
<template>
  <div class="flex flex-col bg-white p-8 rounded-2xl shadow-2xl">
    <div class="flex justify-start items-center">
      <div class="text-lg rounded-lg bg-blue-200 px-2 py-1 font-bold">{{ project.title }}</div>
    </div>
    <div class="text-gray-600 text-sm my-2">{{ project.period }}</div>
    <hr class="mb-2" />
    <div class="font-semibold pb-3">{{ project.subTitle }}</div>
    <ProjectContents :contents="project.explain" class="pb-3" />
    <a :href="project.link" class="text-blue-500 pb-3">{{ project.link }}</a>
    <a v-if="project.link2" :href="project.link2" class="text-blue-500 pb-3">{{ project.link2 }}</a>
    <div class="border border-blue-500 rounded-lg py-1 px-3 bg-blue-50">{{ project.stacks }}</div>
  </div>
</template>
