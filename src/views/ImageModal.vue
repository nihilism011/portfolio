<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{
  imageList: string[]
}>()

const currentImg = ref(0)

const prevImg = () => {
  if (currentImg.value != 0) {
    currentImg.value--
  } else {
    currentImg.value = props.imageList.length - 1
  }
}

const nextImg = () => {
  if (currentImg.value != props.imageList.length - 1) {
    currentImg.value++
  } else {
    currentImg.value = 0
  }
}

const disableScroll = () => {
  document.body.style.overflow = 'hidden'
}

const enableScroll = () => {
  document.body.style.overflow = ''
}
const emit = defineEmits<{
  (e: 'close'): void
}>()
const closeView = () => {
  emit('close')
}
const stopPropagation = (event: Event) => {
  event.stopPropagation()
}
const handleEsc = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeView()
  }
}
onMounted(() => {
  disableScroll()
  window.addEventListener('keydown', handleEsc)
})

onBeforeUnmount(() => {
  enableScroll()
  window.removeEventListener('keydown', handleEsc)
})
</script>

<template class="drag-none">
  <div
    @click="closeView"
    class="fixed inset-0 bg-gray-900 bg-opacity-30 flex justify-center items-center drag-none"
  >
    <div
      @click="stopPropagation"
      class="drag-none relative h-600 bg-white rounded-2xl p-4 m-4 flex flex-col justify-center items-center shadow-2xl shadow-black"
    >
      <div @click="closeView" class="cursor-pointer absolute top-0 right-0">
        <mdicon class="drag-none text-gray-700" size="50" name="close-box-outline" />
      </div>
      <div class="flex justify-center items-center drag-none">
        <div class="cursor-pointer" @click="prevImg">
          <mdicon size="70" name="menu-left" />
        </div>
        <div class="img-box size-500">
          <img
            class="size-full object-contain drag-none"
            :src="`https://hastore.dev/portfolio/images/${imageList[currentImg]}`"
            :alt="imageList[currentImg]"
          />
        </div>

        <div class="cursor-pointer drag-none" @click="nextImg">
          <mdicon size="70" name="menu-right" />
        </div>
      </div>
      <div class="flex">
        <div
          v-for="(item, index) in imageList.length"
          :key="index"
          class="h-3 m-1 w-3 rounded-full bg-black cursor-pointer"
          :class="currentImg === index ? 'bg-blue-500' : 'bg-gray-700'"
          @click="currentImg = index"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.size-500 {
  width: 500px;
  height: 500px;
}
.h-600 {
  height: 600px;
}

.img-box img {
  display: block;
  width: 100%;
  height: 100%;
}
.drag-none {
  -webkit-user-drag: none;
  user-select: none;
}
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
