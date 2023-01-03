<script setup lang="ts">
import AppSection from 'components/layouts/AppSection.vue';
</script>

<template>
  <app-section center-content :gap="50">
    <template v-slot:content>
      <div class="border-outline">
        <img src="~assets/consulting.png" alt="your-image-description" class="" />
      </div>
      <div class="column justify-center">
        <h2 class="text-secondary text-weight-medium  text-lt-md-center text-weight-medium q-mr-md q-mb-lg">
          نقدم استشارات خاصة
        </h2>
        <p class="text-h6 mx-w-md q-mb-lg text-lt-md-center">
          تتجه شركة بيزنيس برو نحو نمو ديناميكي ومستدام مستهدفة
          ازدهارورفاهيةموظفيها والمجتمع والمساهمة في اقتصاد قطر المتنامي ن تنتهي
          صلاحية أشيرة الدخول الخاصة بك. تتضمّن خدماتنا تقديم المعلومات حول
          الوُجهات التعليمية والجامعات والبرامج وإجراءات القبول وأماكن السكن
          وتأشيرات دخول الطلاب وصلاحية أشيرة الدخول الخاصة بك
        </p>
        <div class="text-lt-md-center">
          <q-btn class="text-center h-50" color="secondary" rounded icon-right="arrow_back" label="اعرف المزيد"
            size="lg" @click="() => $router.push('/contact')" />
        </div>
      </div>
    </template>
  </app-section>
</template>
