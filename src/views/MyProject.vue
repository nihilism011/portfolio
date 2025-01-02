<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import ProjectView from '@/components/project/ProjectView.vue'
import projects from '@/components/project/projects'
const title = 'PROJECT'
const link = 'project'
</script>
<template>
  <section
    :id="link"
    class="pt-14 pb-12 px-16 flex flex-col items-center justify-center bg-blue-600"
  >
    <div class="mb-10">
      <PageTitle :title="title" :link="link" color="white" />
    </div>
    <div class="grid grid-cols1 lg:grid-cols-2 gap-8">
      <ProjectView v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
  </section>
</template>
