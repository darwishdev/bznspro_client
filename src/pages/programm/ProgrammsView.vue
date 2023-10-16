<script setup lang="ts">
import { ref, computed } from 'vue';
import { SingleProgram } from 'components/models';
import { useRoute } from 'vue-router';

const route = useRoute();
// const tab = ref('mails')
const splitterModel = ref(30)
const { params } = route;
const tab = ref('description');

const tabs = [
  { value: 'الوصف', key: 'description' },
  { value: 'اهداف البرنامج', key: 'goals' },
  { value: 'فيديو تعريفي', key: 'whattolearn' },
  { value: 'خطة البرنامج', key: 'plan' },
];

const infoKeys = [
  { key: 'hours', value: 'عدد ساعات البرنامج' },
  { key: 'date', value: 'تاريخ البرنامج' },
  { key: 'time', value: 'توقيت البرنامج' },
  { key: 'location', value: 'مكان البرنامج' },
];
const program2: SingleProgram = {
  id: 2,
  title: 'دورة تدريبية لبناء خطط الاعمال للشركات',
  day: 22,
  month: 'يوليو',
  img: 'https://static.exploremelon.com/bznspro/progs/single2.png',
  price: 480,
  breif: 'تهدف هذه الدورة التدريبية إلى تزويد المشاركين بالمعرفة والمهارات اللازمة لوضع خطط أعمال ناجحة للشركات. ستتعلم كيفية تحليل السوق، وتحديد الجمهور المستهدف، ووضع استراتيجية التسويق، وتطوير الخطة المالية، وتقييم الأداء. ستتلقى أدوات ومنهجيات عملية للتخطيط والتنفيذ، بالإضافة إلى الاستفادة من الدروس المستفادة من الشركات الناجحة في هذا المجال.',
  description: '<p>تهدف هذه الدورة التدريبية إلى تزويد المشاركين بالمهارات والأدوات اللازمة لبناء خطط الأعمال الناجحة للشركات. ستتعلم كيفية تحليل السوق، وتحديد الجمهور المستهدف، ووضع استراتيجية التسويق، وتطوير الخطة المالية، وتقييم الأداء. ستتلقى أدوات ومنهجيات عملية للتخطيط والتنفيذ، بالإضافة إلى الاستفادة من الدروس المستفادة من الشركات الناجحة في هذا المجال.</p>',
  subscribers: 0,
  hours: 0,
  date: '',
  location: '',
  time: '',
  note: '',
  goals: [],
  whattolearn: [],
  video: 'IG4-i4XTFr0',
  plan: []
};

const program1: SingleProgram = {
  id: 1,
  video: 'mvhR_luALaA',
  title: 'صناعة الريادة والابتكار في المنظمات والشركات',
  img: 'https://static.exploremelon.com/bznspro/progs/single3.png',
  price: 575,
  day: 15,
  month: 'يوليو',
  discount: 40,
  discountExpiresAt: '10 يوليو',

  breif: ' تركز الورشة على تطوير وتعزيز الإبداع والابتكار الريادي والتفوق بأدوات الذكاء الاصطناعي والعمل على تشجيع التفكير الخلاق من خلال الاستثمار المستقبلي لتحقيق أفكار جديدة وجريئة تتوافق مع تطلعات المستقبل',
  description: `<p>تركز الورشة على تطوير وتعزيز الإبداع والابتكار الريادي والتفوق بأدوات الذكاء الاصطناعي والعمل على تشجيع التفكير الخلاق من خلال الاستثمار المستقبلي لتحقيق أفكار جديدة وجريئة تتوافق مع تطلعات المستقبل.</p>

<p>إدارة العمليات هو مساق مجاني مقدّم من إدراك يساعد المتعلم على استيعاب أهم المفاهيم والمهام الرئيسية المتعلقة بموضوع إدارة العمليات، ليتمكن من شق طريقه المهني في هذا المجال بنجاح وممارسة مسؤولياته وصلاحياته بالشكل الصحيح وفي الوقت والمكان المناسبين. إضافةً إلى ذلك، يوضح المساق أهمية إدارة العمليات والأجزاء الرئيسية فيها وكيفية تصميم وتطوير المنتجات والخدمات في المؤسسة.</p>

<p>تكمن أهمية إدارة العمليات في تحقيق التكامل بين الأقسام المختلفة للمؤسسة، وتُعَد إدارة العمليات من المواضيع الهامة التي تُعنى بها المؤسسات والشركات الكبرى تدور تفاصيل عملها حول كيفية تقديم الخدمات وإنتاج البضائع والسلع لتشمل عدداً من الجوانب، ابتداءً من تصميم المنتجات وإدارة المستودعات والمخازن وحتى تحسين وتطوير أداء إدارة العمليات في الشركات.</p>

<p>تُمثل إدارة العمليات حلقة الوصل بين جميع الوظائف داخل المؤسسات والشركات الكبرى، ومن الضروري جداً الوعي التام بجميع مهام إدارة العمليات ومسؤوليات مدير العمليات كي تسير الوظائف ب
`,

  subscribers: 148,
  hours: 25,
  date: '15  يوليو 2023 ',
  location: 'السعودية ( الرياض )',
  time: '  4.00 م - 09.00 م',
  note: '',
  goals: [
    'توفير مجموعة متنوعة من الدورات التدريبية المكثفة لتطوير مهارات الإدارة والتسويق والتمويل والابتكار في بناء خطط الأعمال الناجحة.',
    'تعزيز قدرات المشاركين على استخدام أدوات قياس الأداء وتحليل البيانات لتحقيق تحسين مستمر واتخاذ القرارات الاستراتيجية المبنية على الحقائق.',
    'تطوير مهارات التواصل والتفاوض والعمل الجماعي من خلال المشاركة في نقاشات نشطة ومحاكاة عملية لتعزيز التعلم وبناء شبكات علاقات مهنية قوية.',
    'تعريف المشاركين بأحدث تقنيات الذكاء الاصطناعي واستخدامها في نمذجة الابتكار وتحليل البيانات لتحقيق تفوق ريادي في مجالات الأعمال المختلفة',
    'تمكين المشاركين من وضع خطط استراتيجية شاملة للمشاريع وتحليل السوق واستراتيجية التسويق وتخطيط الموارد وإدارة المخاطر لتحقيق النجاح المستدام في الأعمال التجارية'
  ],
  whattolearn: [
    'فهم وتطبيق مهارات التواصل الفعّال اللفظي وغير اللفظي لتحسين التفاعل والتواصل في بيئة الأعمال',
    'اكتساب وتطوير مهارات الذكاء العاطفي لفهم وإدارة المشاعر الشخصية والتعامل بفعالية مع الآخرين في سياق العمل',
    'استخدام أدوات تخطيط المشاريع وتطوير خطط مشاريع فعّالة لتحقيق الأهداف وإدارة الموارد والمخاطر بكفاءة',
    'التعرف على أساسيات نمذجة الابتكار باستخدام التقنيات الحديثة للذكاء الاصطناعي وتطبيقها في تحليل البيانات وتطوير حلول إبداعية',
    'تطوير مهارات التحليل والتقييم واستخدام أدوات قياس الأداء لتحقيق تحسين مستمر واتخاذ القرارات الاستراتيجية المبنية على البيانات'
  ],

  plan: [

    {
      title: 'محاكاة عملية',
      breif: 'تجربة عملية تفاعلية تمنحك الفرصة للتعلم من خلال محاكاة أوضاع وظروف العمل الحقيقية'
    },
    {
      title: 'أدوات قياس',
      breif: 'تعلم استخدام أدوات القياس الفعالة لتحليل أداء الشركة واتخاذ القرارات الاستراتيجية المبنية على البيانات'
    },
    {
      title: 'نقاشات نشطة',
      breif: 'المشاركة في نقاشات مفصلة وتبادل الأفكار والآراء مع المشاركين الآخرين لتعزيز التعلم وتوسيع المدارك'
    },
    {
      title: 'شبكة علاقات',
      breif: 'بناء علاقات قوية ومفيدة مع المشاركين والمحاضرين والخبراء في مجال الأعمال وتوسيع شبكتك المهنية'
    },
    {
      title: 'نمذجة الابتكار بواسطة الذكاء الاصطناعي (AI)',
      breif: 'استخدام تقنيات الذكاء الاصطناعي لتحليل البيانات واستخراج الصيحات وتوجيه عملية اتخاذ القرارات للابتكار في المشاريع'
    }
  ]

};


const program = computed(() => {
  return params.id == '1' ? program1 : program2
});

const newPrice = computed(() => {
  if (!program.value.discount) {
    return program.value.price
  }
  const discountAmount = program.value.price * (program.value.discount / 100);
  return program.value.price - discountAmount;
});

function price(): string {
  return `${newPrice.value} ريال سعودي`;
}
</script>

<template>
  <div class="programms-single">
    <div class="header bg-secondary">
      <div class="container">
        <div class="header_wrapper">
          <div class="header-info text-white">
            <q-breadcrumbs>
              <q-breadcrumbs-el label="البرامج" />
              <q-breadcrumbs-el label="الشركات والاعمال " />
              <q-breadcrumbs-el label="دورة بناء خطط الاعمال" />
            </q-breadcrumbs>
            <h2 class="title">{{ program.title }}</h2>
            <p v-html="program.breif" class="text-h5" />


            <!-- <div class="flex no-wrap">
              <q-btn class="text-center" color="primary" size="xl" rounded label="سجل الان"
                @click="() => $router.push({ name: 'programms-checkout', params })" />

            </div> -->
          </div>

          <div class="img">
            <img :src="program.img" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="container">
        <div class="content_wrapper">
          <div class="tabs">
            <q-tabs dense v-model="tab" active-color="primary" indicator-color="primary" align="justify" narrow-indicator>
              <q-tab v-for="t in tabs" :key="t.key" :name="t.key" :label="t.value" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="description">
                <div class="text-h6 q-my-lg">الوصف</div>
                <div v-html="program.description"></div>
              </q-tab-panel>
              <q-tab-panel name="goals">
                <div class="text-h6 q-my-lg">اهداف البرنامج</div>
                <q-list clicable class="text-left q-ml-xl">
                  <q-item v-for="goal in program.goals" :key="goal" class="q-mb-md">
                    <q-item-section avatar>
                      <q-icon color="secondary" name="img:https://static.exploremelon.com/bznspro/chevron.svg"
                        size="lg" />
                    </q-item-section>

                    <q-item-section>{{ goal }}</q-item-section>
                  </q-item>
                </q-list>
              </q-tab-panel>
              <q-tab-panel name="whattolearn">
                <div class="text-h6 q-my-lg">فيديو تعريفي</div>
                <iframe width="100%" height="400" :src="`https://www.youtube.com/embed/${program.video}`"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </q-tab-panel>
              <q-tab-panel name="plan">
                <div class="text-h6 q-my-lg">خطة البرنامج</div>
                <q-list separator class="text-left q-ml-xl">
                  <q-item v-for="step in program.plan" :key="step.title" class="q-py-xl">
                    <q-item-section>
                      <q-item-label class="text-blue q-mb-md text-h5">{{
                        step.title
                      }}</q-item-label>
                      <q-item-label class="text-h6">{{
                        step.breif
                      }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-tab-panel>
            </q-tab-panels>
          </div>
          <div class="info">
            <div class="info-head text-center desktop">
              <div class="text-center">خبير تطوير الاعمال</div>

              <div class="flex q-mt-sm">

                <h5 class="text-secondary text-center text-bold no-margin">
                  احمد عبدالله المنهبي
                </h5>
              </div>

            </div>
            <div class="info-head mobile">
              <div class="text-center q-pt-sm">احمد عبدالله المنهبي</div>

              <div class="flex q-mt-sm">

                <h5 class="text-secondary  q-pa-sm text-center text-bold no-margin">
                  {{ program.title }}
                </h5>
              </div>

            </div>
            <div class="info-body">
              <div class="flex q-py-md text-h6 justify-between" v-for="k in infoKeys" :key="k.key">
                <span>{{ k.value }}</span>
                <span class="value">{{
                  program[k.key as keyof typeof program]
                }}</span>
              </div>
              <p class="text-center q-my-xl text-h6">{{ program.note }}</p>
              <q-btn color="primary" size="xl" label="سجل الان" class="btn"
                @click="() => $router.push({ name: 'programms-checkout', params })" />
            </div>
          </div>
        </div>
        <q-splitter v-model="splitterModel" class="mobile-items" style="height: 250px">

          <template v-slot:before>
            <q-tabs v-model="tab" vertical class="text-teal">
              <q-tab v-for="(t, index) in tabs" :key="index" :name="t.key" :label="t.value" />
            </q-tabs>
          </template>

          <template v-slot:after>
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="description">
                <div class="text-h6 ">الوصف</div>
                <div v-html="program.description"></div>
              </q-tab-panel>
              <q-tab-panel name="goals">
                <div class="text-h6 ">اهداف البرنامج</div>
                <q-list clicable class="text-left ">
                  <q-item v-for="goal in program.goals" :key="goal" class="q-mb-md">
                    <!-- <q-item-section avatar>
                      <q-icon color="secondary" name="img:https://static.exploremelon.com/bznspro/chevron.svg"
                        size="lg" />
                    </q-item-section> -->

                    <q-item-section>{{ goal }}</q-item-section>
                  </q-item>
                </q-list>
              </q-tab-panel>
              <q-tab-panel name="whattolearn">
                <div class="text-h6 ">td]d, juvdtd</div>
                <iframe width="100%" height="400" :src="`https://www.youtube.com/embed/${program.video}`"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </q-tab-panel>
              <q-tab-panel name="plan">
                <div class="text-h6 ">خطة البرنامج</div>
                <q-list separator class="text-left ">
                  <q-item v-for="step in program.plan" :key="step.title" class="q-py-xl">
                    <q-item-section>
                      <q-item-label class="text-blue q-mb-md text-h5">{{
                        step.title
                      }}</q-item-label>
                      <q-item-label class="text-h6">{{
                        step.breif
                      }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-tab-panel>
            </q-tab-panels>
          </template>

        </q-splitter>
      </div>
    </div>
  </div>
</template>
