<script setup lang="ts">
const stats = [
  'اكثر من 115 استشارة',
  'اكثر من 132 عميل',
  'اكثر من 145 مشروع',
  'اكثر من 190 عميل',
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
            <h1 class="text-secondary">
              تقدم استشارت <br /><strong class="mr-110"> مالية وادارية</strong>
            </h1>
            <p class="text-black text-h6 w-100 mr-110">
              بزنس برو يقدم لك خدمات استشارية اون لاين و عبر موقعنا لمساعدتك<br />
              ف ادارة شركتك و البزنس الخاص بك
            </p>
            <div class="row no-wrap">
              <q-btn class="text-center mr-110" color="secondary" rounded label="تصفح خدماتنا"
                @click="() => $router.push('/services')" />
              <q-btn class="text-center justify-center" flat icon-right="arrow_back" label="اعرف المزيد"
                @click="() => $router.push('/about')" />
            </div>
          </div>
        </div>
      </div>
      <div class="full-width stats no-wrap bg-secondary flex justify center">
        <div class="stat_item" v-for="(stat, index) in stats" :key="index">
          {{ stat }}
        </div>
      </div>
    </div>
  </div>
</template>
