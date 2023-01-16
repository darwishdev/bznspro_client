<script setup lang="ts">
import TeamPartial from 'components/partials/TeamPartial.vue';
import { Team } from 'components/models';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
const carouselSettings = {
  itemsToShow: 1,
  dir: 'rtl',
  snapAlign: 'center',
  wrapAround: true,
};
// breakpoints are mobile first
// any settings not specified will fallback to the carousel settings
const carouselBreakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
};

const members: Team[] = [
  {
    name: 'احمد عبد الله',
    title: 'مسوق الكتروني',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/team/1.png',
  },
  {
    name: 'رشدي حمدين',
    title: 'مطور تطبيقات الادنرويد',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/team/2.png',
  },
  {
    name: 'أسامة أبو يزيد',
    title: 'مدير التسويق',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/team/3.png',
  },
  {
    name: 'محمد عطا الله',
    title: 'مسوق الكتروني',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/team/4.png',
  },
];
</script>

<template>
  <div class="team full-width">
    <div class="container">
      <h4 class="text-secondary">أعضاء فريق العمل</h4>
      <h3 class="text-black font-weight-bold">تعرف علي فريق العمل</h3>

      <carousel :settings="carouselSettings" :breakpoints="carouselBreakpoints">
        <slide v-for="member in members" :key="member.name">
          <team-partial :member="member" />
        </slide>
        <template #addons>
          <navigation />
          <!-- <pagination /> -->
        </template>
      </carousel>
    </div>
  </div>
</template>

<style lang="scss">
.team {
  background-image: url(https://api-st.alshabalriyadi.net/assets/bznspro/team_bg.png);
  padding: 100px 0;

  & h4 {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: -10px;
      width: 4px;
      height: 100%;
      background-color: var(--q-primary);
    }
  }

  & .carousel__prev,
  .carousel__next {
    top: -100px;
    // right: -200px;
    background-color: #002e5f;
    color: #fff;
  }

  .carousel--rtl .carousel__next {
    left: auto !important;
    right: 67px !important;
  }
}
</style>
