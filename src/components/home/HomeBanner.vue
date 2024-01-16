<script setup lang="ts">
import Vue3Autocounter from 'vue3-autocounter';
const stats = [
  {
    label: 'برنامج',
    number: 100,
  },
  {
    label: 'مستفيد',
    number: 2000,
  },
  {
    label: 'مشروع',
    number: 350,
  },
  {
    label: 'استشارة',
    number: 1100,
  }
];
</script>

<template>
  <div class="app-banner">
    <div class="column full-width">
      <div class="row no-wrap justify-start">
        <div class="banner_img">
          <img src="https://static.exploremelon.com/bznspro/slider_1.png" class="" />
        </div>

        <div class="justify-center column">
          <div class="column">
            <h1 class="text-secondary" style="margin-bottom : 20px">
              خدمات استشارية <br /><strong class="mr-110"> لتطوير اعمالك </strong>
            </h1>
            <p class="text-black text-h6 w-100 mr-110">

              نساعد الشركات و المنظمات على تحقيق النمو و الاستدامة <br /> لصناعة حلول مؤثرة

            </p>
            <div class="row no-wrap banner-btns">
              <q-btn class="text-center mr-110" color="secondary" rounded label=" اتصل بنا "
                @click="() => $router.push('/contact')" />
              <q-btn class="text-center justify-center" flat icon-right="chevron_left" label="اعرف المزيد"
                @click="() => $router.push('/about')" />
            </div>
          </div>
        </div>
      </div>
      <div class="full-width stats no-wrap bg-secondary flex justify center">
        <div class="banner-counter stat_item text-center" v-for="(stat, index) in stats" :key="index">
          <span class="plus">+</span>
          <strong>
            <vue3-autocounter separator="" class="counter" ref='counter' :startAmount='0' :endAmount='stat.number'
              :duration='1' :autoinit='true' />
          </strong>
          <span>{{ stat.label }} </span>

        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
