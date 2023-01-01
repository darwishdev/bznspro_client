<template>
  <q-page class="row app-banner items-center justify-evenly">
    <q-parallax :height="600" :speed="0.5" class="q-pa-lg">
      <template v-slot:media>
        <img src="~assets/banner.png" />
      </template>
      <div class="row justify-start">
        <div
          class="
            column
            justify-between
            items-start
            contact-banner
            q-pa-lg
            full-width
          "
        >
          <h1 class="text-center text-secondary">
            تقدم استشارت <br /><strong>مالية وادارية</strong>
          </h1>
          <p class="text-black text-h6 w-100">
            بزنس برو يقدم لك خدمات استشارية اون لاين و عبر موقعنا لمساعدتك<br />
            ف ادارة شركتك و البزنس الخاص بك
          </p>
          <div class="row">
            <q-btn
              class="text-center h-50"
              color="secondary"
              rounded
              label="تصفح خدماتنا"
              size="lg"
              @click="() => $router.push('/contact')"
            />
            <q-btn
              class="text-center justify-center h-50"
              flat
              icon-right="arrow_back"
              label="اعرف المزيد"
              size="lg"
              @click="() => $router.push('/contact')"
            />
          </div>
        </div>
      </div>
    </q-parallax>
  </q-page>
  <div class="goals q-ma-xl">
    <div class="container">
      <div class="section-header column items-center">
        <h3 class="text-secondary text-weight-medium q-ma-md">
          نقدم كافة انواع الاستشارات
        </h3>
        <p class="text-center text-h6">
          نطرح علي الطاولة العديد من الخدمات الاستشارية القيمة المختلفة التي
          تؤثر
          <br />
          بشكل مباشر علي الادارات الاساسية
        </p>
      </div>
      <div class="row justify-center items-center">
        <div class="col-4" v-for="goal in goals" :key="goal.title">
          <h2 class="text-secondary q-ma-md">
            {{ goal.title }} <q-icon :name="goal.icon" />
          </h2>
          <p class="text-h6" v-html="goal.text"></p>
        </div>
      </div>
    </div>
  </div>
  <div class="programs bg-secondary q-pa-lg q-my-xl">
    <div class="container">
      <div class="section-header column items-center">
        <h3 class="text-white underline text-weight-medium q-ma-md">
          احدث برامجنا
        </h3>
      </div>
      <div class="row justify-center items-center">
        <div
          class="col-6 program"
          v-for="program in programs"
          :key="program.title"
        >
          <div class="row q-pa-lg">
            <div class="col-4">
              <img src="~assets/program1.png" class="" :alt="program.title" />
            </div>
            <div class="col-8 program__content bg-white">
              <div class="date bg-secondary">
                <div class="q-pa-sm text-center">
                  <p class="no-padding no-margin text-h4 text-white">11</p>
                  <p class="no-padding no-margin text-h5 text-white">سبتمبر</p>
                </div>
              </div>
              <div
                class="
                  program__title
                  column
                  items-center
                  justify-center
                  full-height
                "
              >
                <h5 class="text-secondary text-bold no-margin">
                  {{ program.title }}
                </h5>
                <p class="text-h6">
                  تتجه شركة بزنس برو نحو<br />
                  نمو ديناميكي و مستدامتتجه شركة بزنس برو نحو<br />
                  نمو ديناميكي و مستدام
                </p>
                <dev class="full-width text-left">
                  <q-btn color="secondary" size="lg">سجل الان</q-btn>
                </dev>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Goal, Program } from 'components/models';

import 'vueperslides/dist/vueperslides.css';
const programs: Program[] = [
  {
    id: 1,
    title: 'دورة تدريبية لبناء خطط الاعمال للشركات',
    text: 'prog',
    img: 'prog',
  },
  {
    id: 2,
    title: 'prog',
    text: 'prog',
    img: '',
  },
];
const goals: Goal[] = [
  {
    title: 'رؤيتنا',
    text: ' تتجه شركة بزنس برو نحو<br /> نمو ديناميكي و مستدام',
    icon: 'explore',
  },
  {
    title: 'رسالتنا',
    text: ' تتجه شركة بزنس برو نحو<br /> نمو ديناميكي و مستدام',
    icon: 'send',
  },
  {
    title: 'هدفنا',
    text: ' تتجه شركة بزنس برو نحو<br /> نمو ديناميكي و مستدام',
    icon: 'diamond',
  },
];
</script>
