<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
const title = 'Project'
const link = 'project'
</script>
<template>
  <section :id="link" class="pt-14 pb-12 flex flex-col items-center justify-center bg-white">
    <div>
      <PageTitle :title="title" :link="link" />
    </div>
  </section>
</template>
