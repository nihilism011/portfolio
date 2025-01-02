<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import AboutMeItem from '@/components/AboutMeItem.vue'
const title = 'About Me'
const link = 'about-me'
const items = [
  { icon: 'account', title: '이름', content: '하현수' },
  { icon: 'calendar-check', title: '생년월일', content: '92.01.19' },
  { icon: 'map-marker', title: '위치', content: '인천광역시 계양구' },
  { icon: 'phone', title: '연락처', content: '010-5290-2267' },
  { icon: 'email', title: '이메일', content: 'nihilism011@gmail.com' },
  {
    icon: 'pencil',
    title: '학력',
    content: '한국공학대학교<br>구)한국산업기술대학교<br>기계공학과',
  },
]
</script>
<template>
  <section :id="link" class="pt-14 pb-12 flex flex-col items-center justify-center bg-white">
    <PageTitle :title="title" :link="link" />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 justify-center p-10">
      <AboutMeItem
        v-for="(item, index) in items"
        :key="index"
        :icon="item.icon"
        :title="item.title"
        :content="item.content"
      />
    </div>
  </section>
</template>
