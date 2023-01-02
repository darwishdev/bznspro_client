<template>
  <q-page class="row app-banner items-center justify-evenly">
    <q-parallax :height="800" :speed="0.5" class="q-pa-lg">
      <template v-slot:media>
        <img src="~assets/banner.png" />
      </template>
      <div class="column full-width">
        <div class="row justify-start">
          <div class="col-5">
            <img src="~assets/slider_1.png" class="banner_img" />
          </div>

          <div class="col-7 justify-center column q-pa-lg">
            <div class="column">
              <h1 class="text-secondary">
                تقدم استشارت <br /><strong class="mr-110">
                  مالية وادارية</strong
                >
              </h1>
              <p class="text-black text-h6 w-100 mr-110">
                بزنس برو يقدم لك خدمات استشارية اون لاين و عبر موقعنا
                لمساعدتك<br />
                ف ادارة شركتك و البزنس الخاص بك
              </p>
              <div class="row">
                <q-btn
                  class="text-center h-50 mr-110"
                  color="secondary"
                  rounded
                  label="تصفح خدماتنا"
                  size="lg"
                  @click="() => $router.push('/contact')"
                />
                <q-btn
                  class="text-center justify-center h-50"
                  flat
                  icon-right="arrow_back"
                  label="اعرف المزيد"
                  size="lg"
                  @click="() => $router.push('/contact')"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="full-width stats bg-secondary flex justify center">
          <div class="stat_item" v-for="(stat, index) in stats" :key="index">
            {{ stat }}
            <p></p>
          </div>
        </div>
      </div>
    </q-parallax>
  </q-page>
  <app-section class-name="goals" center-title center-content>
    <template v-slot:title>
      <h3 class="text-secondary text-weight-medium q-ma-md">
        نقدم كافة انواع الاستشارات
      </h3>
      <p class="text-center text-h6">
        نطرح علي الطاولة العديد من الخدمات الاستشارية القيمة المختلفة التي تؤثر
        <br />
        بشكل مباشر علي الادارات الاساسية
      </p>
    </template>

    <template v-slot:content>
      <div class="col-4" v-for="goal in goals" :key="goal.title">
        <div>
          <h2 class="text-secondary q-ma-md">
            {{ goal.title }} <q-icon :name="goal.icon" />
          </h2>
          <p class="text-h6" v-html="goal.text"></p>
        </div>
      </div>
    </template>
  </app-section>
  <app-section
    class-name="programms"
    color="#162337"
    center-title
    is-column
    center-content
  >
    <template v-slot:title>
      <h3 class="text-white underline text-weight-medium">احدث برامجنا</h3>
    </template>

    <template v-slot:content>
      <div class="row">
        <div
          class="col-6 program"
          v-for="program in programs"
          :key="program.title"
        >
          <div class="row q-pa-lg">
            <div class="col-4">
              <img src="~assets/program1.png" class="" :alt="program.title" />
            </div>
            <div class="col-8 program__content bg-white">
              <div class="date bg-teal">
                <div class="q-pa-sm text-center">
                  <p class="no-padding no-margin text-h4 text-white">11</p>
                  <p class="no-padding no-margin text-h5 text-white">سبتمبر</p>
                </div>
              </div>
              <div
                class="bg-grey program__title column items-center justify-center full-height"
              >
                <h5 class="text-secondary text-bold no-margin full-width">
                  {{ program.title }}
                </h5>
                <p class="text-h6">
                  تتجه شركة بزنس برو نحو<br />
                  نمو ديناميكي و مستدامتتجه شركة بزنس برو نحو<br />
                  نمو ديناميكي و مستدام
                </p>
                <div class="full-width text-left">
                  <q-btn color="blue" size="lg">سجل الان</q-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-center q-mx-auto q-my-lg">
        <q-btn
          icon-right="arrow_back"
          color="grey"
          text-color="secondary"
          size="lg"
          rounded
          >للمزيد من البرامج</q-btn
        >
      </div>
    </template>
  </app-section>

  <q-page class="row app-banner items-center justify-evenly">
    <q-parallax :height="1000" :speed="0.5" class="services q-pa-lg">
      <template v-slot:media>
        <img src="~assets/services_bg.png" />
      </template>
      <div class="container">
        <h3 class="text-black font-weight-bold">تعرف علي خدماتنا</h3>
        <div class="row services_wrapper justify-start">
          <div class="service" v-for="service in services" :key="service.id">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="105.713"
              height="58.491"
              viewBox="0 0 105.713 58.491"
            >
              <g
                id="_9057315_quote_icon"
                data-name="9057315_quote_icon"
                transform="translate(-7 -9)"
              >
                <path
                  id="Path_51"
                  data-name="Path 51"
                  d="M29.265,9H60.558L38.293,67.491H7Z"
                  transform="translate(0)"
                  fill="#e8e8e8"
                />
                <path
                  id="Path_52"
                  data-name="Path 52"
                  d="M34.266,9H65.558L43.293,67.491H12Z"
                  transform="translate(47.154)"
                  fill="#e8e8e8"
                />
              </g>
            </svg>

            <h2 class="font-weight-bold">{{ service.title }}</h2>
            <p>{{ service.content }}</p>
            <q-btn
              class="text-center justify-center h-50"
              flat
              icon-right="arrow_back"
              label="اطلب الخدمة"
              size="lg"
              @click="() => $router.push('/contact')"
            />
          </div>
        </div>
      </div>
    </q-parallax>
  </q-page>

  <app-section center-content :gap="50">
    <template v-slot:content>
      <div class="border-outline">
        <img
          src="~assets/consulting.png"
          alt="your-image-description"
          class=""
        />
      </div>
      <div class="column justify-center">
        <h2
          class="text-secondary text-weight-medium text-weight-medium q-mr-md q-mb-lg"
        >
          نقدم استشارات خاصة
        </h2>
        <p class="text-h6 mx-w-lg q-mb-lg">
          تتجه شركة بيزنيس برو نحو نمو ديناميكي ومستدام مستهدفة
          ازدهارورفاهيةموظفيها والمجتمع والمساهمة في اقتصاد قطر المتنامي ن تنتهي
          صلاحية أشيرة الدخول الخاصة بك. تتضمّن خدماتنا تقديم المعلومات حول
          الوُجهات التعليمية والجامعات والبرامج وإجراءات القبول وأماكن السكن
          وتأشيرات دخول الطلاب وصلاحية أشيرة الدخول الخاصة بك
        </p>
        <div>
          <q-btn
            class="text-center h-50"
            color="secondary"
            rounded
            icon-right="arrow_back"
            label="اعرف المزيد"
            size="lg"
            @click="() => $router.push('/contact')"
          />
        </div>
      </div>
    </template>
  </app-section>
  <app-section
    class-name="prjects"
    color="#162337"
    center-title
    :gap="20"
    is-column
    center-content
  >
    <template v-slot:title>
      <h3 class="text-white text-weight-bold">احدث مشاريعنا</h3>
    </template>

    <template v-slot:content>
      <div class="row no-wrap gap-md">
        <div class="project" v-for="project in projects" :key="project.title">
          <div class="column">
            <img
              :src="project.img"
              class="q-mb-md rounded-borders"
              :alt="project.title"
            />
            <div class="project_content">
              <h6 class="text-white text-bold no-margin full-width">
                {{ project.title }}
              </h6>
              <p class="text-grey">{{ project.cat }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-center q-mx-auto q-my-lg">
        <q-btn
          icon-right="arrow_back"
          color="grey"
          text-color="secondary"
          size="lg"
          rounded
          >المزيد من المشاريع</q-btn
        >
      </div>
    </template>
  </app-section>

  <app-section class-name="testemonials">
    <template v-slot:title>
      <div class="column testemonials_header">
        <h4 class="no-margin">&nbsp;اراء العملاء</h4>
        <h3 class="no-margin">تفقد أراء عملائناالعملاء</h3>
      </div>
    </template>
    <template v-slot:content>
      <div
        class="row gap-xl testemonials_item no-wrap items-center justify-between"
        v-for="t in testemonials"
        :key="t.name"
      >
        <div class="testemonials_item_content">
          <p class="text-h6 q-mb-lg" v-html="t.content"></p>
        </div>
        <div class="column justify-center">
          <div class="row no-wrap q-mb-md">
            <div class="testemonials_letters">
              {{ t.letters }}
            </div>
            <img
              src="~assets/testemonial.png"
              alt="your-image-description"
              class="testemonials_img"
            />
          </div>
          <h4 class="testemonial_name no-margin" v-html="t.name"></h4>
          <p class="testemonial_job no-margin" v-html="t.job"></p>
        </div>
      </div>
    </template>
  </app-section>
</template>

<script setup lang="ts">
import {
  Goal,
  Program,
  Service,
  Testemonial,
  Project,
} from 'components/models';
import AppSection from 'components/layouts/AppSection.vue';

import 'vueperslides/dist/vueperslides.css';
const projects: Project[] = [
  {
    id: 1,
    title: 'مشروع شركة العقاري',
    img: '/src/assets/pr1.png',
    cat: 'ماليات',
  },
  {
    id: 2,
    title: 'تطوير خطة عمل لستارت اب',
    img: '/src/assets/pr2.png',
    cat: 'استشارة ادارية',
  },
  {
    id: 3,
    title: 'استشارة شركات القبيصي',
    img: '/src/assets/pr3.png',
    cat: 'استشارة ',
  },
  {
    id: 4,
    title: 'مشروع شركة البحرين',
    img: '/src/assets/pr4.png',
    cat: 'تسويق',
  },
];
const testemonials: Testemonial[] = [
  {
    name: 'هيثم الاحمدي',
    job: 'مدير التسوق بشركة "نهضة"',
    img: '~assets/testomnial.png',
    letters: 'MD',
    content: `" كل الفخر والسعادة تآتيك عندما تجد شخصاً ذو مهنية واحترافية عالية
            جداَ وتعامل أرقى مما تتصور .. بصراحة التعامل معكم مكسب كبير وأنا
            آعتبركم الركيزة الأساسية لي لتنفيذ كافة الاعمال"`,
  },
];
const stats = [
  'اكثر من 115 استشارة',
  'اكثر من 132 عميل',
  'اكثر من 145 مشروع',
  'اكثر من 190 عميل',
];
const programs: Program[] = [
  {
    id: 1,
    title: 'دورة تدريبية لبناء خطط الاعمال للشركات',
    text: 'مجموعة أفيستا هي شركة تخطيط وتصميم وتشغيل تعمل على إحياء المشروعات الثقافية والترفيهية',
    img: 'prog',
  },
  {
    id: 2,
    title: 'دورة تدريبية لبناء خطط الاعمال للشركات',
    text: 'مجموعة أفيستا هي شركة تخطيط وتصميم وتشغيل تعمل على إحياء المشروعات الثقافية والترفيهية',
    img: '',
  },
];
const goals: Goal[] = [
  {
    title: 'رؤيتنا',
    text: ' تتجه شركة بزنس برو نحو<br /> نمو ديناميكي و مستدام',
    icon: 'explore',
  },
  {
    title: 'رسالتنا',
    text: ' تتجه شركة بزنس برو نحو<br /> نمو ديناميكي و مستدام',
    icon: 'send',
  },
  {
    title: 'هدفنا',
    text: ' تتجه شركة بزنس برو نحو<br /> نمو ديناميكي و مستدام',
    icon: 'diamond',
  },
];

const services: Service[] = [
  {
    id: 1,
    title: 'استشارات مالية',
    content: 'الخدمات الاستشارية القيمةالمختلفة التي تؤثر بشكل',
  },
  {
    id: 1,
    title: 'اسشارات ادارية',
    content: 'الخدمات الاستشارية القيمة المختلفة التي تؤثر بشكل',
  },
  {
    id: 1,
    title: 'تطوير الاعمال والشركات',
    content: 'الخدمات الاستشارية القيمة المختلفة التي تؤثر بشكل',
  },
  {
    id: 1,
    title: 'استشارات مالية',
    content: 'الخدمات الاستشارية القيمة المختلفة التي تؤثر بشكل',
  },
];
</script>
