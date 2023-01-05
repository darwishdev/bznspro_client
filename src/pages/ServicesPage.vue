<script setup lang="ts">
import { ref } from 'vue';
import { Cat, Service } from 'components/models';

const tab = ref(1);
const services: Service[] = [
  {
    id: 1,
    title: 'استشارة مالية',
    img: '/src/assets/service_inner.png',
    content:
      '<p class="text-h6">تعد الاستشارات المالية واحدة من أهم الوسائل المستخدمة في المشاريع الكبرى والصغرى وفي الشركات والمؤسسات، بجانب الاستشارات الإدارية والاستشارات التسويقية، وهما في النهاية أدوات نجاح المشاريع والوصول إلى الحد الأعلى من الأرباح وتقدير حجم السوق جيداً مستقبليّاً، والمستشار المالي هو طريق أي شركة أو مؤسسة نحو التقدم </p>',
  },
  {
    id: 2,
    title: 'استشارة ادارية',
    img: '/src/assets/service_inner.png',
    content:
      '<p class="text-h6">تعد الاستشارات المالية واحدة من أهم الوسائل المستخدمة في المشاريع الكبرى والصغرى وفي الشركات والمؤسسات، بجانب الاستشارات الإدارية والاستشارات التسويقية، وهما في النهاية أدوات نجاح المشاريع والوصول إلى الحد الأعلى من الأرباح وتقدير حجم السوق جيداً مستقبليّاً، والمستشار المالي هو طريق أي شركة أو مؤسسة نحو التقدم </p>',
  },
  {
    id: 3,
    title: 'تسويق',
    img: '/src/assets/service_inner.png',
    content:
      '<p class="text-h6">تعد الاستشارات المالية واحدة من أهم الوسائل المستخدمة في المشاريع الكبرى والصغرى وفي الشركات والمؤسسات، بجانب الاستشارات الإدارية والاستشارات التسويقية، وهما في النهاية أدوات نجاح المشاريع والوصول إلى الحد الأعلى من الأرباح وتقدير حجم السوق جيداً مستقبليّاً، والمستشار المالي هو طريق أي شركة أو مؤسسة نحو التقدم </p>',
  },
  {
    id: 4,
    title: 'خطط اعمال',
    img: '/src/assets/service_inner.png',
    content:
      '<p class="text-h6">تعد الاستشارات المالية واحدة من أهم الوسائل المستخدمة في المشاريع الكبرى والصغرى وفي الشركات والمؤسسات، بجانب الاستشارات الإدارية والاستشارات التسويقية، وهما في النهاية أدوات نجاح المشاريع والوصول إلى الحد الأعلى من الأرباح وتقدير حجم السوق جيداً مستقبليّاً، والمستشار المالي هو طريق أي شركة أو مؤسسة نحو التقدم </p>',
  },
  {
    id: 5,
    title: 'تطوير الشركات',
    img: '/src/assets/service_inner.png',
    content:
      '<p class="text-h6">تعد الاستشارات المالية واحدة من أهم الوسائل المستخدمة في المشاريع الكبرى والصغرى وفي الشركات والمؤسسات، بجانب الاستشارات الإدارية والاستشارات التسويقية، وهما في النهاية أدوات نجاح المشاريع والوصول إلى الحد الأعلى من الأرباح وتقدير حجم السوق جيداً مستقبليّاً، والمستشار المالي هو طريق أي شركة أو مؤسسة نحو التقدم </p>',
  },
  {
    id: 6,
    title: 'استشارة اونلاين',
    img: '/src/assets/service_inner.png',
    content:
      '<p class="text-h6">تعد الاستشارات المالية واحدة من أهم الوسائل المستخدمة في المشاريع الكبرى والصغرى وفي الشركات والمؤسسات، بجانب الاستشارات الإدارية والاستشارات التسويقية، وهما في النهاية أدوات نجاح المشاريع والوصول إلى الحد الأعلى من الأرباح وتقدير حجم السوق جيداً مستقبليّاً، والمستشار المالي هو طريق أي شركة أو مؤسسة نحو التقدم </p>',
  },
  {
    id: 7,
    title: 'استشارة مالية',
    img: '/src/assets/service_inner.png',
    content:
      '<p class="text-h6">تعد الاستشارات المالية واحدة من أهم الوسائل المستخدمة في المشاريع الكبرى والصغرى وفي الشركات والمؤسسات، بجانب الاستشارات الإدارية والاستشارات التسويقية، وهما في النهاية أدوات نجاح المشاريع والوصول إلى الحد الأعلى من الأرباح وتقدير حجم السوق جيداً مستقبليّاً، والمستشار المالي هو طريق أي شركة أو مؤسسة نحو التقدم </p>',
  },
  {
    id: 8,
    title: 'خطة عمل',
    img: '/src/assets/service_inner.png',
    content:
      '<p class="text-h6">تعد الاستشارات المالية واحدة من أهم الوسائل المستخدمة في المشاريع الكبرى والصغرى وفي الشركات والمؤسسات، بجانب الاستشارات الإدارية والاستشارات التسويقية، وهما في النهاية أدوات نجاح المشاريع والوصول إلى الحد الأعلى من الأرباح وتقدير حجم السوق جيداً مستقبليّاً، والمستشار المالي هو طريق أي شركة أو مؤسسة نحو التقدم </p>',
  },
  {
    id: 9,
    title: 'دراسة جدوي',
    img: '/src/assets/service_inner.png',
    content:
      '<p class="text-h6">تعد الاستشارات المالية واحدة من أهم الوسائل المستخدمة في المشاريع الكبرى والصغرى وفي الشركات والمؤسسات، بجانب الاستشارات الإدارية والاستشارات التسويقية، وهما في النهاية أدوات نجاح المشاريع والوصول إلى الحد الأعلى من الأرباح وتقدير حجم السوق جيداً مستقبليّاً، والمستشار المالي هو طريق أي شركة أو مؤسسة نحو التقدم </p>',
  },
  {
    id: 10,
    title: 'دراسة جدوي',
    img: '/src/assets/service_inner.png',
    content:
      '<p class="text-h6">تعد الاستشارات المالية واحدة من أهم الوسائل المستخدمة في المشاريع الكبرى والصغرى وفي الشركات والمؤسسات، بجانب الاستشارات الإدارية والاستشارات التسويقية، وهما في النهاية أدوات نجاح المشاريع والوصول إلى الحد الأعلى من الأرباح وتقدير حجم السوق جيداً مستقبليّاً، والمستشار المالي هو طريق أي شركة أو مؤسسة نحو التقدم </p>',
  },
  {
    id: 11,
    title: 'دراسة جدوي',
    img: '/src/assets/service_inner.png',
    content:
      '<p class="text-h6">تعد الاستشارات المالية واحدة من أهم الوسائل المستخدمة في المشاريع الكبرى والصغرى وفي الشركات والمؤسسات، بجانب الاستشارات الإدارية والاستشارات التسويقية، وهما في النهاية أدوات نجاح المشاريع والوصول إلى الحد الأعلى من الأرباح وتقدير حجم السوق جيداً مستقبليّاً، والمستشار المالي هو طريق أي شركة أو مؤسسة نحو التقدم </p>',
  },
  {
    id: 12,
    title: 'دراسة جدوي',
    img: '/src/assets/service_inner.png',
    content:
      '<p class="text-h6">تعد الاستشارات المالية واحدة من أهم الوسائل المستخدمة في المشاريع الكبرى والصغرى وفي الشركات والمؤسسات، بجانب الاستشارات الإدارية والاستشارات التسويقية، وهما في النهاية أدوات نجاح المشاريع والوصول إلى الحد الأعلى من الأرباح وتقدير حجم السوق جيداً مستقبليّاً، والمستشار المالي هو طريق أي شركة أو مؤسسة نحو التقدم </p>',
  },
];

function _getCurrenServiceIndex(): number {
  return services.indexOf(
    services.filter((service) => service.id == tab.value)[0]
  );
}
function goTo(isNext: boolean) {
  const currentIndex = _getCurrenServiceIndex();
  if (typeof currentIndex == undefined) {
    return;
  }

  const targetSlide = services.indexOf(
    services[isNext ? currentIndex + 1 : currentIndex - 1]
  );

  console.log(targetSlide)
  if (targetSlide == -1) {
    tab.value = isNext ? services[0].id : services[services.length - 1].id;
    return;
  }

  // prevBtnDisabled.value = !isNext;

  tab.value = services[targetSlide].id;
}
</script>

<template>
  <div class="container services-page">
    <div class="header text-center">
      <h1>خدماتنا</h1>
      <p class="text-h6">
        يسعدنا تواصلك معنا للرد علي استفساراتك او لبحث إمكانية العمل معا
        ومساعدتك علي تطوير شرتكتك
      </p>
    </div>
    <div class="main">
      <div class="navigators">
        <q-btn flat size="lg" round class="carousel__prev" @click="goTo(false)" icon="chevron_right" />
        <q-btn flat size="lg" round @click="goTo(true)" class="carousel__next" icon="chevron_left" />
      </div>
      <div class="items-center justify-between flex no-wrap q-mb-lg">
        <span>تصفح خدماتنا :</span>
        <q-tabs dense v-model="tab" active-bg-color="blue" active-color="white" outside-arrows inline-label
          class="cats flex-grow">
          <q-tab v-for="service in services" :key="service.id" :name="service.id" :label="service.title" />
        </q-tabs>
      </div>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel v-for="service in services" :key="service.id" :name="service.id">
          <div class="flex q-mt-lg no-wrap service-wrapper justify-md-between justify-center">
            <div class="service-content full-width">
              <h4 class="underline h-mr">{{ service.title }}</h4>
              <div v-html="service.content" class="breif"></div>
              <q-btn color="blue" text-color="white" size="lg" rounded>اطلب الخدمة</q-btn>
            </div>
            <div class="services-page-img">
              <img :src="service.img" alt="" />
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
              <q-icon color="secondary" name="img:/src/assets/chevron.svg" size="lg" />
            </q-item-section>

            <q-item-section>BusinessPro@gmail.com</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="secondary" name="img:/src/assets/chevron.svg" size="lg" />
            </q-item-section>

            <q-item-section>+966 455 888 25</q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>
