<script setup lang="ts">
import AppSection from 'components/layouts/AppSection.vue';
import { Service } from 'components/models';
import { ref } from 'vue'
const tab = ref(1);
const services: Service[] = [
  {
    id: 1,
    title: 'الشاب الريادي',
    img: 'https://static.exploremelon.com/bznspro/service_inner.png',
    content:
      '<p class="text-h6">تعد الاستشارات المالية واحدة من أهم الوسائل المستخدمة في المشاريع الكبرى والصغرى وفي الشركات والمؤسسات، بجانب الاستشارات الإدارية والاستشارات التسويقية، وهما في النهاية أدوات نجاح المشاريع والوصول إلى الحد الأعلى من الأرباح وتقدير حجم السوق جيداً مستقبليّاً، والمستشار المالي هو طريق أي شركة أو مؤسسة نحو التقدم </p>',
  },
  {
    id: 2,
    title: 'التدريب المهني',
    img: 'https://static.exploremelon.com/bznspro/service_inner.png',
    content:
      '<p class="text-h6">تعد الاستشارات المالية واحدة من أهم الوسائل المستخدمة في المشاريع الكبرى والصغرى وفي الشركات والمؤسسات، بجانب الاستشارات الإدارية والاستشارات التسويقية، وهما في النهاية أدوات نجاح المشاريع والوصول إلى الحد الأعلى من الأرباح وتقدير حجم السوق جيداً مستقبليّاً، والمستشار المالي هو طريق أي شركة أو مؤسسة نحو التقدم </p>',
  },
  {
    id: 3,
    title: 'الشاب الريادي',
    img: 'https://static.exploremelon.com/bznspro/service_inner.png',
    content:
      '<p class="text-h6">تعد الاستشارات المالية واحدة من أهم الوسائل المستخدمة في المشاريع الكبرى والصغرى وفي الشركات والمؤسسات، بجانب الاستشارات الإدارية والاستشارات التسويقية، وهما في النهاية أدوات نجاح المشاريع والوصول إلى الحد الأعلى من الأرباح وتقدير حجم السوق جيداً مستقبليّاً، والمستشار المالي هو طريق أي شركة أو مؤسسة نحو التقدم </p>',
  },
  {
    id: 4,
    title: 'التدريب المهني',
    img: 'https://static.exploremelon.com/bznspro/service_inner.png',
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

  console.log(targetSlide);
  if (targetSlide == -1) {
    tab.value = isNext ? services[0].id : services[services.length - 1].id;
    return;
  }

  // prevBtnDisabled.value = !isNext;

  tab.value = services[targetSlide].id;
}
</script>

<template>
  <app-section class="home-consulting" center-content :gap="50">
    <template v-slot:content>
      <div class="main">
        <div class="navigators">
          <q-btn flat size="lg" round class="carousel__prev" @click="goTo(false)" icon="chevron_right" />
          <q-btn flat size="lg" round @click="goTo(true)" class="carousel__next" icon="chevron_left" />
        </div>
        <h3 class="text-black font-weight-bold">تعرف على برامجنا</h3>

        <!-- <div class="items-center justify-between flex no-wrap q-mb-lg">
          <q-tabs dense v-model="tab" active-bg-color="blue" active-color="white" outside-arrows inline-label
            class="cats flex-grow">
            <q-tab v-for="service in services" :key="service.id" :name="service.id" :label="service.title" />
          </q-tabs>
        </div> -->

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel v-for="service in services" :key="service.id" :name="service.id">
            <div class="flex q-mt-lg service-wrapper justify-md-between justify-center">
              <div class="service-content ">
                <h4 class="underline mb-4 h-mr">{{ service.title }}</h4>
                <div v-html="service.content" class="breif"></div>
                <q-btn color="blue" text-color="white" size="lg" @click="$router.push({ name: 'about' })" rounded>اعرف
                  المزيد</q-btn>
              </div>

              <div class=" ">

                <img style="border-radius : 10px" :src="service.img" alt="" />
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </template>
  </app-section>
</template>

<style lang="scss">
.home-consulting {
  & .main {
    position: relative;

    .navigators {
      position: absolute;
      right: 0;
    }
  }

}

.service-content {

  & .breif {
    margin-top: 30px;
    max-width: 600px;
    padding-right: 40px;
  }

  & .q-btn {
    @media (max-width: 700px) {
      width: 100%;
    }
  }
}

.navigators {
  display: flex;
  margin: 80px 0;

  @media (max-width: 700px) {
    display: none;
    // gap: 10px;

    // .carousel__prev,
    // .carousel__next {
    //   transform: rotate(0);
    // }
  }

  & button {
    background-color: $blue;
    color: #fff;

    &.carousel__next {
      position: absolutewzsa;
      top: 0 !important;
      left: auto !important;
      right: 0 !important;

      @media (min-width: 700px) {
        position: absolute;
        transform: translateX(0);
      }
    }

    &.carousel__prev {
      position: absolutewzsa;
      top: 0 !important;
      left: auto !important;
      right: 0 !important;

      @media (min-width: 700px) {
        position: absolute;
        transform: translateX(-200%);
      }
    }
  }
}
</style>
