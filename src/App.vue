<script setup lang="ts">
import MainHeader from './components/layout/MainHeader.vue'
import MainFooter from './components/layout/MainFooter.vue'
import HomeView from './views/HomeView.vue'
import AboutMe from './views/AboutMe.vue'
import MySkills from './views/MySkills.vue'
import MyArchiving from './views/MyArchiving.vue'
import MyProject from './views/MyProject.vue'
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <MainHeader />

    <main class="flex-1 overflow-auto p-0 bg-gray-100 mt-0">
      <HomeView />
      <AboutMe />
      <MySkills />
      <MyArchiving />
      <MyProject />
    </main>
    <MainFooter />
  </div>
</template>
