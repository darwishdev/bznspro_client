<script setup lang="ts">
import BlogPartial from 'components/partials/BlogPartial.vue';
import { Blog, Cat } from 'components/models';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
const carouselSettings = {
  itemsToShow: 1,
  dir: 'rtl',
  snapAlign: 'center',
  wrapAround: true,
};
// breakpoints are mobile first
// any settings not specified will fallback to the carousel settings
const carouselBreakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
};

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
    id: 1,
    name: 'الاستشارات',
  },
  {
    id: 1,
    name: 'تطوير الشركات',
  },
  {
    id: 1,
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
    id: 1,
    views: 10,
    name: '  كيف تطور الاستشارات المالية والإدارية من مشروعك وشركتك',
    cat: 'استشارة',
    img: '/src/assets/blog/m2.png',
    date,
  },
  {
    id: 1,
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
    id: 1,
    views: 10,
    name: 'تطوير الاعمال والشركات والبيزنيس من',
    cat: 'الاعمال والشركات',
    img: '/src/assets/blog/1.png',
    breif:
      'تتجه شركة بيزنيس برو نحو نمو ديناميكي ومستدام مستهدفة ازدهار ورفاهية موظفيها والمجتمع والمساهمة في اقتصاد قطر المتنامي أن تنتهي صلاحية تأشيرة الدخول الخاصة بك. تتضمّن خدماتنا تقديم المعلومات حول الوُجهات التعليمية والجامعات والبرامج وإجراءات القبول وأماكن السكن وتأشيرات دخول الطلاب',
    date,
    links,
  },
  {
    id: 1,
    views: 10,
    name: 'خلال استشارات مع خبراء في المجال',
    cat: 'الاعمال والشركات',
    img: '/src/assets/blog/1.png',
    breif:
      'تتجه شركة بيزنيس برو نحو نمو ديناميكي ومستدام مستهدفة ازدهار ورفاهية موظفيها والمجتمع والمساهمة في اقتصاد قطر المتنامي أن تنتهي صلاحية تأشيرة الدخول الخاصة بك. تتضمّن خدماتنا تقديم المعلومات حول الوُجهات التعليمية والجامعات والبرامج وإجراءات القبول وأماكن السكن وتأشيرات دخول الطلاب',
    date,
    links,
  },
];
</script>
<template>
  <h2>not implemented</h2>
</template>
