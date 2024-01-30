<script setup lang="ts">
import { ref } from 'vue';
// import { Service } from 'components/models';
import { useGlobalStore } from 'src/stores/global';
import AppImage from 'src/components/base/AppImage.vue';

const globalStore = useGlobalStore()
const tab = ref(1);
// const services: Service[] = [
//   {
//     id: 1,
//     title: 'الاستشارات الإدارية  ',
//     img: 'https://static.exploremelon.com/bznspro/edarya.webp',
//     content:
//       '<p class="text-h6">نعمل على تحليل البيانات وتقييم الأداء بهدف التخطيط وتطوير الاستراتيجيات لتحسين وزيادة الإنتاجية وتخفيض التكاليف.</p>',
//   },
//   {
//     id: 2,
//     title: 'الاستشارات المالية ',
//     img: 'https://static.exploremelon.com/bznspro/marketing.webp',
//     content:
//       '<p class="text-h6">تحليل وتقييم البيانات المالية وتحسين الأداء المالي للموارد المالية وتقليل الاعباء المالية بشكل فعال لتحقيق الأرباح المستدامة.  </p>',
//   },
//   {
//     id: 3,
//     title: 'الحلول الاستثمارية ',
//     img: 'https://static.exploremelon.com/bznspro/inv.jpeg',
//     content:
//       '<p class="text-h6">نقدم حلول وخطط استثمارية متنوعة في كيفية الاستثمار بشكل فعال لتحقيق أفضل عوائد ممكنة مستدامة على المدى الطويل.  </p>',
//   },
//   {
//     id: 4,
//     title: ' الاستشارات التسويقية ',
//     img: 'https://static.exploremelon.com/bznspro/investsolutions.webp',
//     content:
//       '<p class="text-h6">مساعدة الشركات على تحسين استراتيجيات التسويق وتحقيق أهدافها في إيصال منتجاتها أو خدماتها إلى الجمهور المستهدف لتحقيق نمو في المبيعات</p>',
//   },




// ];

function _getCurrenServiceIndex(): number {
  return globalStore.services.indexOf(
    globalStore.services.filter((service) => service.serviceId == tab.value)[0]
  );
}
function goTo(isNext: boolean) {
  const currentIndex = _getCurrenServiceIndex();
  if (typeof currentIndex == undefined) {
    return;
  }

  const targetSlide = globalStore.services.indexOf(
    globalStore.services[isNext ? currentIndex + 1 : currentIndex - 1]
  );

  console.log(targetSlide);
  if (targetSlide == -1) {
    tab.value = isNext ? globalStore.services[0].serviceId : globalStore.services[globalStore.services.length - 1].serviceId;
    return;
  }

  // prevBtnDisabled.value = !isNext;

  tab.value = globalStore.services[targetSlide].serviceId;
}
</script>

<template>
  <div class="container services-page">

    <div class="main">
      <div class="navigators">
        <q-btn flat size="lg" round class="carousel__prev" @click="goTo(false)" icon="chevron_right" />
        <q-btn flat size="lg" round @click="goTo(true)" class="carousel__next" icon="chevron_left" />
      </div>
      <div class="items-center justify-between flex no-wrap q-mb-lg">
        <!-- <span>تصفح خدماتنا :</span> -->
        <q-tabs dense v-model="tab" active-bg-color="blue" active-color="white" outside-arrows inline-label
          class="cats flex-grow">
          <q-tab v-for="service in globalStore.services" :key="service.serviceId" :name="service.serviceId"
            :label="service.serviceName" />
        </q-tabs>
      </div>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel v-for="service in globalStore.services" :key="service.serviceId" :name="service.serviceId">
          <div class="flex q-mt-lg service-wrapper justify-md-between justify-center">
            <div class="service-content full-width">
              <h4 class="underline h-mr">{{ service.serviceName }}</h4>
              <div v-html="service.breif" class="breif"></div>
              <q-btn color="blue" text-color="white" size="lg" rounded>اطلب الخدمة</q-btn>
            </div>
            <div class="services-page-img">
              <app-image :src="service.serviceImage" :alt="service.serviceName" />
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
    <div class="contacts">
      <div class="text-center">
        <h4 class="font-weight-medium">لديك استفسار بشان خدماتنا؟</h4>

        <q-btn outline size="lg" label="تواصل معنا" color="blue" rounded></q-btn>
      </div>
      <q-separator vertical inset />
      <div class="text-left">
        <h4 class="font-weight-bold">او يمكنك التواصل معنا عبر:</h4>
        <q-list clicable class="text-left q-ml-xl">
          <q-item to="Tel: 123-456-7890" clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="secondary" name="img:https://static.exploremelon.com/bznspro/chevron.svg" size="lg" />
            </q-item-section>

            <q-item-section>BusinessPro@gmail.com</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="secondary" name="img:https://static.exploremelon.com/bznspro/chevron.svg" size="lg" />
            </q-item-section>

            <q-item-section>+966 455 888 25</q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>
