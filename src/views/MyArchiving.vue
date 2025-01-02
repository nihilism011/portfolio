<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
const title = 'Archiving'
const link = 'archiving'
const gitLink = 'https://github.com/nihilism011'
const goToGit = () => {
  window.open(gitLink, '_blank')
}
</script>
<template>
  <section :id="link" class="pt-14 pb-16 flex flex-col items-center justify-center bg-black">
    <div>
      <div class="mb-8">
        <PageTitle :title="title" :link="link" color="white" />
      </div>
      <div
        @click="goToGit"
        class="cursor-pointer px-6 py-4 rounded-lg bg-white shadow-md transition-all transform hover:scale-105 hover:shadow-lg"
      >
        <div class="flex items-center justify-start">
          <mdicon name="github" size="100" />
          <div class="text-6xl font-bold">GitHub</div>
        </div>
        <div>
          <a rel="noopener noreferrer" target="_blank" :href="gitLink">github.com/nihilism011</a>
        </div>
      </div>
    </div>
  </section>
</template>
