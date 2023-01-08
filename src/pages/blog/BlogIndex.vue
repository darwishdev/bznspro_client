<script setup lang="ts">
import PostRecentPartial from 'src/components/partials/PostRecentPartial.vue';
import PostPartial from 'components/partials/PostPartial.vue';
import { Blog, Cat } from 'components/models';

import { ref } from 'vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { useRouter } from 'vue-router';
const router = useRouter();
const carouselSettings = {
  itemsToShow: 1,
  dir: 'rtl',
  snapAlign: 'left',
  wrapAround: true,
};
// breakpoints are mobile first
// any settings not specified will fallback to the carousel settings
const carouselBreakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3,
    snapAlign: 'left',
  },
};
const tab = ref(1);

const date = 'Aug 24, 2020';
const links = [
  {
    icon: 'facebook',
    url: 'https://www.facebook.com/',
  },
  {
    icon: 'ion-logo-twitter',
    url: 'https://www.twitter.com/',
  },
  {
    icon: 'ion-logo-instagram',
    url: 'https://www.instagram.com/',
  },
];

const cats: Cat[] = [
  {
    id: 1,
    name: 'الاعمال والشركات',
  },
  {
    id: 2,
    name: 'الاستشارات',
  },
  {
    id: 3,
    name: 'تطوير الشركات',
  },
  {
    id: 4,
    name: 'التسويق',
  },
];
const pageDescription =
  'يسعدنا تواصلك معنا للرد علي استفساراتك او لبحث إمكانية العمل معا ومساعدتك علي تطوير شرتكتك';
const latestBlog: Blog = {
  id: 1,
  name: 'كيف تساهم الاستشارات في تحسين شركتك',
  breif:
    'تتجه شركة بيزنيس برو نحو نمو ديناميكي ومستدام مستهدفةازدهار ورفاهية موظفيها والمجتمع والمساهمة في اقتصاد قطر المتنامي أن تنتهي صلاحية تأشيرة الدخول الخاصة بك',
  cat: 'تسويق',
  img: '/src/assets/blog/main.png',
  date,
};

const mostReads: Blog[] = [
  {
    id: 1,
    views: 10,
    name: 'أهمية التسويق الرقمي  في عالم البيزنيس والشركات',
    cat: 'تسويق',
    img: '/src/assets/blog/m1.png',
    date,
  },
  {
    id: 2,
    views: 10,
    name: '  كيف تطور الاستشارات المالية والإدارية من مشروعك وشركتك',
    cat: 'استشارة',
    img: '/src/assets/blog/m2.png',
    date,
  },
  {
    id: 3,
    views: 10,
    name: 'كيف أكون الاستشارة الاونلاين وكيف تقوم بحجزها',
    cat: 'أعمال',
    img: '/src/assets/blog/m3.png',
    date,
  },
  {
    id: 4,
    views: 10,
    name: 'أهمية التسويق الرقمي  في عالم البيزنيس والشركات',
    cat: 'تسويق',
    img: '/src/assets/blog/m1.png',
    date,
  },
  {
    id: 5,
    views: 10,
    name: '  كيف تطور الاستشارات المالية والإدارية من مشروعك وشركتك',
    cat: 'استشارة',
    img: '/src/assets/blog/m2.png',
    date,
  },
  {
    id: 6,
    views: 10,
    name: 'كيف أكون الاستشارة الاونلاين وكيف تقوم بحجزها',
    cat: 'أعمال',
    img: '/src/assets/blog/m3.png',
    date,
  },
];
const posts: Blog[] = [
  {
    id: 1,
    views: 10,
    name: 'تطوير الاعمال والشركات والبيزنيس من خلال استشارات مع خبراء في المجال',
    cat: 'الاعمال والشركات',
    img: '/src/assets/blog/1.png',
    breif:
      'تتجه شركة بيزنيس برو نحو نمو ديناميكي ومستدام مستهدفة ازدهار ورفاهية موظفيها والمجتمع والمساهمة في اقتصاد قطر المتنامي أن تنتهي صلاحية تأشيرة الدخول الخاصة بك. تتضمّن خدماتنا تقديم المعلومات حول الوُجهات التعليمية والجامعات والبرامج وإجراءات القبول وأماكن السكن وتأشيرات دخول الطلاب',
    date,
    links,
  },

  {
    id: 2,
    views: 10,
    name: 'تطوير الاعمال والشركات والبيزنيس من',
    cat: 'الاعمال والشركات',
    img: '/src/assets/blog/2.png',
    breif:
      'تتجه شركة بيزنيس برو نحو نمو ديناميكي ومستدام مستهدفة ازدهار ورفاهية موظفيها والمجتمع والمساهمة في اقتصاد قطر المتنامي أن تنتهي صلاحية تأشيرة الدخول الخاصة بك. تتضمّن خدماتنا تقديم المعلومات حول الوُجهات التعليمية والجامعات والبرامج وإجراءات القبول وأماكن السكن وتأشيرات دخول الطلاب',
    date,
    links,
  },
  {
    id: 3,
    views: 10,
    name: 'خلال استشارات مع خبراء في المجال',
    cat: 'الاعمال والشركات',
    img: '/src/assets/blog/3.png',
    breif:
      'تتجه شركة بيزنيس برو نحو نمو ديناميكي ومستدام مستهدفة ازدهار ورفاهية موظفيها والمجتمع والمساهمة في اقتصاد قطر المتنامي أن تنتهي صلاحية تأشيرة الدخول الخاصة بك. تتضمّن خدماتنا تقديم المعلومات حول الوُجهات التعليمية والجامعات والبرامج وإجراءات القبول وأماكن السكن وتأشيرات دخول الطلاب',
    date,
    links,
  },
];

function goToPost(id: number) {
  router.push({
    name: 'blog-view',
    params: { id },
  });
}
</script>
<template>
  <div class="container blog-page">
    <div class="header text-center">
      <h1>المدونة</h1>
      <p class="text-h6">
        {{ pageDescription }}
      </p>
    </div>
    <div class="latest" @click.prevent="goToPost(latestBlog.id)">
      <div class="flex no-wrap">
        <div class="latest-content column justify-center bg-grey q-pa-lg">
          <span class="text-h6 font-cairo">احدث المقالات في المدونة</span>
          <h4 class="text-bold q-my-lg">{{ latestBlog.name }}</h4>
          <p class="text-h5 q-mt-md">{{ latestBlog.breif }}</p>
          <div>
            <q-btn
              outline
              label="اقرأ المزيد"
              color="blue"
              size="xl"
              @click.prevent="
                $router.push({
                  name: 'blog-view',
                  params: { id: latestBlog.id },
                })
              "
            />
          </div>
        </div>
        <div class="img">
          <img :src="latestBlog.img" class="full-height" />
        </div>
      </div>
    </div>
    <div class="recents q-mt-xl">
      <h4 class="underline">الاكثر قراءة</h4>

      <carousel
        :settings="carouselSettings"
        dir="rtl"
        :breakpoints="carouselBreakpoints"
      >
        <slide v-for="post in mostReads" :key="post.id">
          <post-recent-partial
            @click.prevent="goToPost(post.id)"
            :key="post.id"
            :post="post"
          />
        </slide>
        <template #addons>
          <navigation />
          <!-- <pagination /> -->
        </template>
      </carousel>
    </div>
    <div class="main q-my-xl">
      <div class="items-center flex no-wrap q-my-xl">
        <span class="text-h4">المقالات :</span>
        <q-tabs
          dense
          v-model="tab"
          active-bg-color="blue"
          active-color="white"
          outside-arrows
          inline-label
          class="cats flex-grow"
        >
          <q-tab
            v-for="cat in cats"
            :key="cat.id"
            :name="cat.id"
            :label="cat.name"
          />
        </q-tabs>
      </div>

      <q-tab-panels v-for="cat in cats" :key="cat.id" v-model="tab" animated>
        <q-tab-panel v-for="post in posts" :key="post.id" :name="post.id">
          <post-partial
            @click.prevent="goToPost(post.id)"
            :post="post"
            class="q-mt-xl"
          />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>
