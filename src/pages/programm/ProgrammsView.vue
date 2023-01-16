<script setup lang="ts">
import { ref } from 'vue';
import { SingleProgram } from 'components/models';

const tab = ref('description');

const tabs = [
  { value: 'الوصف', key: 'description' },
  { value: 'اهداف البرنامج', key: 'goals' },
  { value: 'ماذا ستتعلم', key: 'whattolearn' },
  { value: 'خطة البرنامج', key: 'plan' },
];

const infoKeys = [
  { key: 'hours', value: 'عدد ساعات البرنامج' },
  { key: 'date', value: 'تاريخ البرنامج' },
  { key: 'time', value: 'توقيت البرنامج' },
  { key: 'location', value: 'مكان البرنامج' },
];
const program: SingleProgram = {
  id: 1,
  price: 450,
  title: 'دورة تدريبية لبناء خطط الاعمال للشركات',
  breif:
    'برنامج مسك "طريق المستقبل" يُمكنك من اكتساب المهارات الأكثر طلبًا في سوق العمل البرنامج عدداً من الدورات التدريبية المتنوعة مباشرة',
  img: 'https://api-st.alshabalriyadi.net/assets/bznspro/progs/single.png',
  description: `<p>إدارة العمليات هو مساق مجاني مقدّم من إدراك يساعد المتعلم على استيعاب أهم المفاهيم و والمهام الرئيسية المتعلقة بموضوع إدارة العمليات، ليتمكن من شق طريقه المهني في هذا المجال بنجاح وممارسة مسؤولياته وصلاحياته بالشكل الصحيح وفي الوقت والمكان المناسبين. إضافةً إلى ذلك، يوضح المساق أهمية إدارة العمليات والأجزاء الرئيسية فيها وكيفية تصميم وتطوير المنتجات والخدمات في المؤسسة.
</p>
  <p>تكمن أهمية إدارة العمليات في تحقيق التكامل بين الأقسام المختلفة للمؤسسة، وتُعَد إدارة العمليات من المواضيع الهامة التي تُعنى بها المؤسسات والشركات الكبرى تدور تفاصيل عملها حول كيفية تقديم الخدمات وإنتاج البضائع والسلع لتشمل عدداً من الجوانب، ابتداءً من تصميم المنتجات وإدارة المستودعات والمخازن وحتى تحسين وتطوير أداء إدارة العمليات في الشركات.
</p>
  <p>تُمثل إدارة العمليات حلقة الوصل بين جميع الوظائف داخل المؤسسات والشركات الكبرى، ومن الضروري جداً الوعي التام بجميع مهام إدارة العمليات ومسؤوليات مدير العمليات كي تسير الوظائف بكل سلاسة دون مواجهة أي عقبات. تشمل هذه الوظائف، تحصيل الموارد بجميع أشكالها مثل الموارد البشرية والمواد الخام والآلات والمعلومات وحتى الأموال والوظائف التحويلية.</p>`,
  subscribers: 148,
  hours: 25,
  date: '30  نوفمبر 2022 ',
  location: 'الرياض',
  time: 'Pm 09.00 : 05.00',
  note: 'يقام البرنامج في أحد قاعات فنادق الدرجة الأولى + يشمل شهادة إتمام البرنامج',
  goals: [
    'البرنامج عدداً من الدورات التدريبية المتنوعة بالإضافة إلى العديد',
    ' ليس فقط لإدارة كيفية إنتاج البضائع والخدمات وإنما لدراسة العمليات الخدماتية',
    'يهدف مساق إدارة العمليات إلى توضيح المفاهيم الأساسية',
    'سيتعرف المتعلم على بعض الأدوات المستخدمة في تصميم هيكلة إدارة العمليات',
  ],
  whattolearn: [
    'البرنامج عدداً من الدورات التدريبية المتنوعة بالإضافة إلى العديد',
    ' ليس فقط لإدارة كيفية إنتاج البضائع والخدمات وإنما لدراسة العمليات الخدماتية',
    'يهدف مساق إدارة العمليات إلى توضيح المفاهيم الأساسية',
    'سيتعرف المتعلم على بعض الأدوات المستخدمة في تصميم هيكلة إدارة العمليات',
  ],
  plan: [
    {
      title: 'الوحدة الاولي',
      breif: 'ستتمكن عند إتمام الدورة من تطبيق مهارات التواصل الفعّال اللفظية',
    },
    {
      title: 'الوحدة الثانية',
      breif: 'ستتمكن عند إتمام الدورة من توظيف مهارات الذكاء العاطفي بنجاح',
    },
    {
      title: 'الوحدة الثالثة',
      breif:
        'ستتمكن عند إتمام الدورة من بناء خطة للمشروع باستخدام أدوات تخطيط المشاريع',
    },
  ],
};

function price(val: number): string {
  return `${val} ريال سعودي`;
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
            <p class="text-blue-8 text-h6">
              {{ program.subscribers }} مشتركا بهذه الدورة
            </p>

            <div class="flex no-wrap">
              <q-btn
                class="text-center"
                color="primary"
                size="xl"
                rounded
                label="سجل الان"
                @click="() => $router.push('/contact')"
              />
              <q-btn
                class="text-center justify-center"
                size="xl"
                flat
                icon-right="arrow_back"
                label="اعرف المزيد عن الدورة"
                @click="() => $router.push('/contact')"
              />
            </div>
          </div>

          <div class="img">
            <img
              src="https://api-st.alshabalriyadi.net/assets/bznspro/progs/single2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="container">
        <div class="content_wrapper">
          <div class="tabs">
            <q-tabs
              dense
              v-model="tab"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab
                v-for="t in tabs"
                :key="t.key"
                :name="t.key"
                :label="t.value"
              />
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
                  <q-item
                    v-for="goal in program.goals"
                    :key="goal"
                    class="q-mb-md"
                  >
                    <q-item-section avatar>
                      <q-icon
                        color="secondary"
                        name="img:https://api-st.alshabalriyadi.net/assets/bznspro/chevron.svg"
                        size="lg"
                      />
                    </q-item-section>

                    <q-item-section>{{ goal }}</q-item-section>
                  </q-item>
                </q-list>
              </q-tab-panel>
              <q-tab-panel name="whattolearn">
                <div class="text-h6 q-my-lg">ماذا ستتعلم</div>
                <q-list class="text-left q-ml-xl">
                  <q-item
                    v-for="goal in program.whattolearn"
                    :key="goal"
                    class="q-mb-md"
                  >
                    <q-item-section avatar>
                      <q-icon
                        color="secondary"
                        name="img:https://api-st.alshabalriyadi.net/assets/bznspro/chevron.svg"
                        size="lg"
                      />
                    </q-item-section>

                    <q-item-section>{{ goal }}</q-item-section>
                  </q-item>
                </q-list>
              </q-tab-panel>
              <q-tab-panel name="plan">
                <div class="text-h6 q-my-lg">خطة البرنامج</div>
                <q-list separator class="text-left q-ml-xl">
                  <q-item
                    v-for="step in program.plan"
                    :key="step.title"
                    class="q-py-xl"
                  >
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
            <div class="info-head">
              <span>سعر البرنامج</span><br />
              <h5 class="text-secondary text-center text-bold no-margin">
                {{ price(program.price) }}
              </h5>
            </div>
            <div class="info-body">
              <div
                class="flex q-py-md text-h6 justify-between"
                v-for="k in infoKeys"
                :key="k.key"
              >
                <span>{{ k.value }}</span>
                <span class="value">{{
                  program[k.key as keyof typeof program]
                }}</span>
              </div>
              <p class="text-center q-my-xl text-h6">{{ program.note }}</p>
              <q-btn color="primary" size="xl" label="سجل الان" class="btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
