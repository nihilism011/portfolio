<script setup lang="ts">
import type { Project } from '@/types'
import ProjectContents from './ProjectContents.vue'
import ImageModal from '@/views/ImageModal.vue'
import { ref } from 'vue'
defineProps<{
  project: Project
}>()
const imageView = ref(false)
const imageViewClose = () => {
  imageView.value = false
}
</script>
<template>
  <div class="flex flex-col bg-white p-8 rounded-2xl shadow-2xl">
    <div class="flex justify-start items-center">
      <div class="text-lg rounded-lg bg-blue-200 px-2 py-1 font-bold">{{ project.title }}</div>
      <div
        @click="imageView = true"
        v-if="project.imgList"
        class="hidden sm:flex justify-center items-center ml-2 cursor-pointer border text-lg rounded-lg px-2 py-1"
      >
        <mdicon name="image" />
        이미지
      </div>
    </div>
    <div class="text-gray-600 text-sm my-2">{{ project.period }}</div>
    <hr class="mb-2" />
    <div class="font-semibold pb-3">{{ project.subTitle }}</div>
    <ProjectContents :contents="project.explain" class="pb-3" />
    <a :href="project.link" target="_blank" class="text-blue-500 pb-3">{{ project.link }}</a>
    <a v-if="project.link2" target="_blank" :href="project.link2" class="text-blue-500 pb-3">{{
      project.link2
    }}</a>
    <div class="border border-blue-500 rounded-lg py-1 px-3 bg-blue-50">{{ project.stacks }}</div>
    <ImageModal @close="imageViewClose" v-if="imageView" :image-list="project.imgList ?? []" />
  </div>
</template>
