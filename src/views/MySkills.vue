<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import SkillItem from '@/components/SkillItem.vue'
const title = 'Skill'
const link = 'skill'
const items = [
  {
    icon: 'code-block-tags',
    title: 'Language',
    contents: [
      { icon: 'language-java', color: '#007396', content: 'Java' },
      { icon: 'language-javascript', color: '#F7DF1E', content: 'JavaScript', fontColor: 'black' },
      { icon: 'language-typescript', color: '#3178C6', content: 'TypeScript' },
    ],
  },
  {
    icon: 'monitor-dashboard',
    title: 'Frontend',
    contents: [
      { icon: 'vuejs', color: '#41B883', content: 'Vue.js' },
      { icon: 'state-machine', color: '#418888', content: 'Pinia' },
      { icon: 'react', color: '#61DAFB', content: 'React.js', fontColor: 'black' },
      { icon: 'tailwind', color: '#06B6D4', content: 'Tailwind CSS' },
    ],
  },
  {
    icon: 'server',
    title: 'Backend',
    contents: [
      { icon: 'server-outline', color: '#6DB33F', content: 'Spring Boot' },
      { icon: 'monitor-edit', color: '#D4E157', content: 'JSP', fontColor: 'black' },
      { icon: 'database', color: '#4CAF50', content: 'JPA' },
      { icon: 'database', color: '#E91E63', content: 'MyBatis' },
      { icon: 'database-outline', color: '#F80000', content: 'Oracle DB' },
      { icon: 'database-outline', color: '#00618A', content: 'MySQL DB' },
    ],
  },
]
</script>

<template>
  <section
    :id="link"
    class="pt-14 pb-16 px-16 flex flex-col items-center justify-center bg-yellow-300"
  >
    <div class="mb-8">
      <PageTitle :title="title" :link="link" />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-6 rounded-2xl shadow-md bg-yellow-100 py-8"
    >
      <div v-for="(item, index) in items" :key="index" class="space-y-6">
        <div class="flex items-center space-x-4">
          <mdicon :name="item.icon" size="30" />
          <div class="text-3xl font-semibold">{{ item.title }}</div>
        </div>
        <div class="grid grid-cols-1 gap-4">
          <SkillItem
            v-for="(skill, index) in item.contents"
            :key="index"
            :fontColor="skill.fontColor"
            :icon="skill.icon"
            :color="skill.color"
            :title="skill.content"
          />
        </div>
      </div>
    </div>
  </section>
</template>
