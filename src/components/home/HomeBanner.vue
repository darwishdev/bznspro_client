<script setup lang="ts">
import { useGlobalStore } from 'src/stores/global';
import Vue3Autocounter from 'vue3-autocounter';
import AppImage from 'components/base/AppImage.vue'

const globalStore = useGlobalStore()




</script>

<template>
  <div class="app-banner">
    <div class="column full-width">
      <div class="row no-wrap justify-start">
        <div class="banner_img">
          <!-- <h2>{{ globalStore.settingsMap['banner_image'] }}</h2> -->
          <AppImage :src="globalStore.settingsMap['banner_image']" />
          <!-- <img :src="`${globalStore.settingsMap['banner_image']}`" class="" /> -->
        </div>

        <div class="justify-center column">
          <div class="column">
            <div v-html="globalStore.settingsMap['banner_header']"></div>
            <div v-html="globalStore.settingsMap['banner_text']"></div>
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
            <vue3-autocounter separator="" class="counter" ref='counter' :startAmount='0'
              :endAmount="parseInt(globalStore.settingsMap['programms_count'])" :duration='1' :autoinit='true' />
          </strong>
          <span> برنامج </span>
        </div>
        <div class="banner-counter stat_item text-center">
          <span class="plus">+</span>
          <strong>
            <vue3-autocounter separator="" class="counter" ref='counter' :startAmount='0'
              :endAmount="parseInt(globalStore.settingsMap['beneficiary_count'])" :duration='1' :autoinit='true' />
          </strong>
          <span> مستفيد </span>
        </div>
        <div class="banner-counter stat_item text-center">
          <span class="plus">+</span>
          <strong>
            <vue3-autocounter separator="" class="counter" ref='counter' :startAmount='0'
              :endAmount="parseInt(globalStore.settingsMap['projects_count'])" :duration='1' :autoinit='true' />
          </strong>
          <span> مشروع </span>
        </div>
        <div class="banner-counter stat_item text-center">
          <span class="plus">+</span>
          <strong>
            <vue3-autocounter separator="" class="counter" ref='counter' :startAmount='0'
              :endAmount="parseInt(globalStore.settingsMap['consultunts_count'])" :duration='1' :autoinit='true' />
          </strong>
          <span> استشارة </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
