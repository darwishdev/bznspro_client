<script setup lang="ts">
import { useGlobalStore } from 'src/stores/global';
import Vue3Autocounter from 'vue3-autocounter';
const globalStore = useGlobalStore()

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
          <img :src="`${globalStore.baseImg}${globalStore.settings.filter((setting) => setting.settingKey == 'banner_image')[0].settingValue}`" class="" />
        </div>

        <div class="justify-center column">
          <div class="column">
            <div v-html="globalStore.settings.filter((setting) => setting.settingKey == 'banner_header')[0].settingValue"></div>
            <div v-html="globalStore.settings.filter((setting) => setting.settingKey == 'banner_text')[0].settingValue"></div>
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
        <div class="banner-counter stat_item text-center">
          <span class="plus">+</span>
          <strong>
            <vue3-autocounter separator="" class="counter" ref='counter' :startAmount='0' :endAmount="globalStore.settings.filter((setting) => setting.settingKey == 'programms_count')[0].settingValue"
              :duration='1' :autoinit='true' />
          </strong>
          <span> برنامج </span>
        </div>
        <div class="banner-counter stat_item text-center">
          <span class="plus">+</span>
          <strong>
            <vue3-autocounter separator="" class="counter" ref='counter' :startAmount='0' :endAmount="globalStore.settings.filter((setting) => setting.settingKey == 'beneficiary_count')[0].settingValue"
              :duration='1' :autoinit='true' />
          </strong>
          <span> مستفيد </span>
        </div>
        <div class="banner-counter stat_item text-center">
          <span class="plus">+</span>
          <strong>
            <vue3-autocounter separator="" class="counter" ref='counter' :startAmount='0' :endAmount="globalStore.settings.filter((setting) => setting.settingKey == 'projects_count')[0].settingValue"
              :duration='1' :autoinit='true' />
          </strong>
          <span> مشروع </span>
        </div>
        <div class="banner-counter stat_item text-center">
          <span class="plus">+</span>
          <strong>
            <vue3-autocounter separator="" class="counter" ref='counter' :startAmount='0' :endAmount="globalStore.settings.filter((setting) => setting.settingKey == 'consultunts_count')[0].settingValue"
              :duration='1' :autoinit='true' />
          </strong>
          <span> استشارة </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
