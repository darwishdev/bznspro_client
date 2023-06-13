<script setup lang="ts">
import { Consultunt } from 'components/models';
import ConsultuntPartial from 'components/partials/ConsultuntPartial.vue';

const consultunts: Consultunt[] = [
  {
    name: 'احمد عبد الله',
    title: 'مستشار اداري ومالي',
    img: 'https://static.exploremelon.com/bznspro/consultunt1.png',
  },
  {
    name: 'احمد عبد الله',
    title: 'مستشار قانوني',
    img: 'https://static.exploremelon.com/bznspro/consultunt1.png',
  },
  {
    name: 'احمد عبد الله',
    title: 'مستشار قانوني',
    img: 'https://static.exploremelon.com/bznspro/consultunt1.png',
  },
  {
    name: 'احمد عبد الله',
    title: 'مستشار اداري',
    img: 'https://static.exploremelon.com/bznspro/consultunt1.png',
  },
  {
    name: 'احمد عبد الله',
    title: 'مستشار اداري ومالي',
    img: 'https://static.exploremelon.com/bznspro/consultunt1.png',
  },
  {
    name: 'احمد عبد الله',
    title: 'مستشار اداري ومالي',
    img: 'https://static.exploremelon.com/bznspro/consultunt1.png',
  },
  {
    name: 'احمد عبد الله',
    title: 'مستشار قانوني',
    img: 'https://static.exploremelon.com/bznspro/consultunt1.png',
  },
  {
    name: 'احمد عبد الله',
    title: 'مستشار اداري ',
    img: 'https://static.exploremelon.com/bznspro/consultunt1.png',
  },
];
</script>

<template>
  <div class="consultunts-page">
    <div class="header text-left q-mb-xl">
      <div class="container">
        <h4 class="text-secondary before-line">أعضاء الفريق الاستشاري</h4>
        <h3 class="text-black font-weight-bold">تعرف علي خبرائنا ومستشارينا</h3>
      </div>
    </div>
    <div class="container">
      <div class="consultunts-main flex q-mt-xl gap-md">
        <ConsultuntPartial v-for="c in consultunts" :key="c.name" :consultunt="c" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.consultunts-page {
  .header {
    position: relative;

    &::before {
      content: 'بزنس برو';
      font-family: Cairo;
      font-size: 150px;
      font-weight: bold;
      position: absolute;
      left: 50px;
      top: -30px;
      color: rgba(168, 168, 168, 0.1);
    }

    &::after {
      content: 'مستشارينا';
      font-family: Cairo;
      font-size: 150px;
      font-weight: bold;
      position: absolute;
      right: 50px;
      top: 30px;
      color: rgba(168, 168, 168, 0.1);
    }
  }
}

.consultunts-main {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
