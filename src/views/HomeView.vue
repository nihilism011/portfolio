<template>
  <section id="home" class="flex items-center justify-center bg-center pt-40 pb-32 bg-img">
    <div class="bg-overlay text-center p-5 sm:p-8 md:p-10 lg:p-12 text-white">
      <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-5">{{ '<하현수>' }}</h2>
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">신입 개발자 포트폴리오</h2>
      <hr class="mt-10 mb-10 border-4 m-20 border-r-4" />
      <div class="text-base sm:text-lg md:text-xl lg:text-2xl">안녕하세요.</div>
      <div class="text-base sm:text-lg md:text-xl lg:text-2xl">
        프로그래밍과 문제 해결을 사랑하는 신입 개발자.
      </div>
      <div class="text-base sm:text-lg md:text-xl lg:text-2xl">어제보다 오늘이 더 나은 개발자.</div>
      <div class="text-base sm:text-lg md:text-xl lg:text-2xl">하현수입니다.</div>
    </div>
  </section>
</template>

<style scoped>
.bg-img {
  background-image: url('@/assets/img/homeView-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
.bg-overlay {
  background-color: rgba(0, 0, 0, 0.4); /* 반투명 검정 배경 */
}
</style>
