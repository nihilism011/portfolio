<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
const title = 'Archiving'
const link = 'archiving'
</script>
<template>
  <section :id="link" class="pt-14 pb-12 flex flex-col items-center justify-center bg-black">
    <div>
      <PageTitle :title="title" :link="link" color="white" />
    </div>
  </section>
</template>
