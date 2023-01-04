<script setup lang="ts">
import TeamSection from 'components/TeamSection.vue';
</script>

<template>
  <div class="container">
    <div class="flex about-wrapper justify-md-between justify-center">
      <div class="about-content">
        <h1>عن بزنس برو</h1>
        <p class="text-h6">
          نطرح على الطاولة العديد من الخدمات الاستشارية القيمة المختلفة التي
          تؤثر بشكل مباشر على الإدارات الأساسية الشركة السعودية الرائدة في تقديم
          خدمات الاستشارات الإدارية والمالية وحلول الاعمال
        </p>
        <p class="text-h6">
          الشركة السعودية الرائدة في تقديم خدمات الاستشارات الإدارية والمالية
          وحلول الاعمال
        </p>
        <p class="text-h6">
          نطرح على الطاولة العديد من الخدمات الاستشارية القيمة المختلفة التي
          تؤثر بشكل مباشر على الإدارات الأساسية الشركة السعودية الرائدة في تقديم
          خدمات الاستشارات الإدارية والمالية وحلول الاعمال
        </p>
      </div>
      <div class="about-img">
        <img src="~assets/about.png" alt="" />
      </div>
    </div>
  </div>
  <team-section />
</template>

<style lang="scss">
.about {
  &-wrapper {
    // gap: 30px;
  }
  &-img {
    & img {
      max-width: 400px;
    }
  }
  &-content {
    & h1 {
      margin: 0 0 50px 0;
      position: relative;
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
