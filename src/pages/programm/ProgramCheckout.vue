<script setup lang="ts">
import { reactive, computed } from 'vue';
import { SingleProgram } from 'components/models';
import { useRoute } from 'vue-router';

const route = useRoute();
const { params } = route;

const state = reactive({
  name: '',
  email: '',
  phone: '',
  city: '',
  company: '',
  jobTitle: '',
  msg: '',
});

function onReset() {
  console.log('reset')

}
function onSubmit() {
  console.log('sumbit')
}
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
  plan: []
};

const program1: SingleProgram = {
  id: 1,
  title: 'صناعة الريادة والابتكار في المنظمات والشركات',
  category: 'الاعمال و الشركات',
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
  note: 'يقام البرنامج في أحد قاعات فنادق الدرجة الأولى + يشمل شهادة إتمام البرنامج',
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

function priceBeforeDiscount(): string {
  return `${(program.value.price).toFixed(2)} ريال سعودي`;
}

function priceAfterDiscount(): string {
  return `${(newPrice.value).toFixed(2)} ريال سعودي`;
}

function discont(): string {
  const discountAmount = program.value.price * (program.value.discount / 100);
  return `${(discountAmount).toFixed(2)} ريال سعودي`;
}


function tax(): string {
  return `${(newPrice.value * .1).toFixed(2)} ريال سعودي`;
}

function total(): string {
  return `${(newPrice.value * 1.1).toFixed(2)} ريال سعودي`;
}
</script>


<template>
  <div class="programm-checkout">
    <div class="header">
      <div class="container">
        <q-breadcrumbs class="q-my-xl">
          <q-breadcrumbs-el label="البرامج" />
          <q-breadcrumbs-el label="الشركات والاعمال " />
          <q-breadcrumbs-el label="دورة بناء خطط الاعمال" />
        </q-breadcrumbs>
        <div class="row justify-between items-center">
          <div class="header-info col-md-5 col-12">

            <h4 class="q-my-sm text-secondary text-bold">تفاصيل الدفع</h4>
            <h6 class="q-my-sm text-black"><strong>اسم البرنامج : </strong> {{ program1.title }}</h6>
            <h6 class="q-my-sm text-black"><strong>سعر البرنامج : </strong> {{ priceAfterDiscount() }}</h6>
            <h6 class="q-my-sm text-black"><strong>التصنيف : </strong> {{ program1.title }}</h6>
          </div>
          <div class="card-wrapper col-md-7 col-12">
            <q-card class="bg-white rounded-xl">
              <q-card-section>
                <div class="text-h6 q-my-md row justify-between">
                  <span> السعر</span>
                  <span class="price"> {{ priceBeforeDiscount() }}</span>
                </div>
                <div v-if="program.discount" class="text-h6 q-my-md row justify-between">
                  <span> الخصم ({{ program.discount }} %) </span>
                  <span class="price"> {{ discont() }}</span>
                </div>
                <div v-if="program.discount" class="text-h6 q-my-md row justify-between">
                  <span> السعر بعد الخصم</span>
                  <span class="price"> {{ priceAfterDiscount() }}</span>
                </div>
                <div class="text-h6 q-my-md row justify-between">
                  <span> الضريبة (10%) </span>
                  <span class="price"> {{ tax() }}</span>
                </div>
                <hr class="bg-white q-my-sm" />

                <div class="text-h6 row justify-between">
                  <span> المجموع الكلي</span>
                  <span class="price"> {{ total() }}</span>
                </div>
              </q-card-section>


            </q-card>
          </div>

        </div>
        <hr class="bg-white q-my-xl" />
        <div class="form">
          <div class="form-header q-my-xl row items-center">
            <h4 class="q-my-sm text-secondary text-bold q-mr-md">بيانات المشترك </h4>
            <span>(قم بملأ بياناتك الشخصية لاستكمال عملية الدفع)</span>

          </div>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">


            <div class="row">
              <div class="col-md-4 col-12 q-pr-lg q-mb-lg">
                <q-input outlined v-model="state.name" label="الاسم" lazy-rules :rules="[
                  (val) => (val && val.length > 0) || 'هذا الحقل مطلوب',
                ]" />
              </div>
              <div class="col-md-4 col-12 q-pr-lg q-mb-lg">
                <q-input outlined v-model="state.email" label="الايميل" lazy-rules :rules="[
                  (val) => (val && val.length > 0) || 'هذا الحقل مطلوب',
                ]" />
              </div>
              <div class="col-md-4 col-12 q-pr-lg q-mb-lg">
                <q-input outlined v-model="state.phone" label="رقم الهاتف" lazy-rules :rules="[
                  (val) => (val && val.length > 0) || 'هذا الحقل مطلوب',
                ]" />
              </div>
              <div class="col-md-4 col-12 q-pr-lg q-mb-lg">
                <q-input outlined v-model="state.city" label="الدولة / مدينة" lazy-rules :rules="[
                  (val) => (val && val.length > 0) || 'هذا الحقل مطلوب',
                ]" />
              </div>
              <div class="col-md-4 col-12 q-pr-lg q-mb-lg">
                <q-input outlined v-model="state.company" label="اسم الشركة" lazy-rules :rules="[
                  (val) => (val && val.length > 0) || 'هذا الحقل مطلوب',
                ]" />
              </div>
              <div class="col-md-4 col-12 q-pr-lg q-mb-lg">
                <q-input outlined v-model="state.jobTitle" label="المسمى الوظيفي" lazy-rules :rules="[
                  (val) => (val && val.length > 0) || 'هذا الحقل مطلوب',
                ]" />
              </div>

            </div>

          </q-form>


        </div>
        <hr class="bg-white q-my-xl" />
        <div class="payment_method">
          <div class="form-header q-my-xl row items-center">
            <h4 class="q-my-sm text-secondary text-bold q-mr-md">وسيلة الدفع </h4>
          </div>
          <div class="flex">
            <q-btn label="ارسال" type="submit" color="secondary" class="full-width" />
          </div>


        </div>
      </div>
    </div>

  </div>
</template>
