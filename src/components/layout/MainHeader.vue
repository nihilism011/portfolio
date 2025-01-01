<script setup lang="ts">
const links = [
  { name: 'AboutMe', href: '#about-me' },
  { name: 'Skill', href: '#skill' },
  { name: 'Archiving', href: '#archiving' },
  { name: 'Project', href: '#project' },
]
</script>

<template>
  <header class="bg-black text-white p-4 fixed top-0 w-full z-10 h-20">
    <div class="container mx-auto flex justify-between items-center h-full">
      <a href="#home">
        <h1
          class="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold hover:text-blue-400 transition-colors duration-500 cursor-pointer"
        >
          Ha's Portfolio
        </h1></a
      >
      <nav>
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.href"
          class="mx-2 text-xs sm:text-lg md:text-lg lg:text-xl hover:text-blue-400 transition-colors duration-500"
        >
          {{ link.name }}
        </a>
      </nav>
    </div>
  </header>
</template>
