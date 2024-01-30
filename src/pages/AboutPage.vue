<script setup lang="ts">
import TeamSection from 'components/TeamSection.vue';
import AppImage from 'src/components/base/AppImage.vue';
import { useGlobalStore } from 'src/stores/global';
const globalStore = useGlobalStore()
</script>

<template>
  <div class="container">
    <div class="flex about-wrapper justify-md-between justify-center">
      <div class="about-content">
        <h2 style="font-weight: bold;"> بزنس برو | Business Pro </h2>
        <div v-html="globalStore.settingsMap['about']"></div>
      </div>
      <div class="about-img">
        <app-image :src="globalStore.settingsMap['about_image']" alt="بزنس برو | Business Pro" />
      </div>
    </div>
  </div>
  <team-section />
</template>

<style lang="scss">
.about {
  &-wrapper {
    // gap: 30px;
    margin: 100px 0;
  }

  &-img {
    & img {
      max-width: 400px;

      @media (max-width : 500px) {
        max-width: 100%;


      }
    }
  }

  &-content {
    & h1 {
      margin: 0 0 50px 0;
      position: relative;

      @media (max-width:700px) {
        font-size: 56px;

      }

      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 50px;
        height: 3px;
        background-color: #002e5f;
      }
    }

    & p {
      max-width: 600px;
    }
  }
}
</style>
