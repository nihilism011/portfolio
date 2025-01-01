<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
const title = 'Skill'
const link = 'skill'
</script>
<template>
  <section :id="link" class="pt-14 pb-12 flex flex-col items-center justify-center bg-yellow-300">
    <div>
      <PageTitle :title="title" :link="link" />
    </div>
  </section>
</template>
