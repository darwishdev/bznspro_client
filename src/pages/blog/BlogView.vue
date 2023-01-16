<script setup lang="ts">
import { Blog } from 'components/models';
import PostSidePartial from 'components/partials/PostSidePartial.vue';
import PostRecentPartial from 'components/partials/PostRecentPartial.vue';
import { ref } from 'vue';

import { Carousel, Slide } from 'vue3-carousel';
const carouselSettings = {
  itemsToShow: 1,
  dir: 'rtl',
  snapAlign: 'center',
  wrapAround: true,
};
// breakpoints are mobile first
// any settings not specified will fallback to the carousel settings

const email = ref('');
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

const postContent = `<p> إليك المثال العملي التالي الذي يشرح ماهية البرمجة:
</p>
<p>إن كنت تتوقع زيارة صديق لك اليوم، واتصل بك ليقول لك: "أنا واقف بجانب الحديقة ولا أعرف كيف أصل إلى منزلك". أنت عادةً تمر كل يوم من جانب الحديقة وتعرف الطريق بينها وبين منزلك شبرًا بشبر. برأيك هل ينفع إن قلت له: "منزلي معروف وقريب من الحديقة وأنا كل يوم أمر من جانبها"؟ لا، بالتأكيد. تحتاج إلى أن تقسِّم المشكلة إلى أجزاء تمثل خطوات بسيطة يستطيع صديقك فهمها وتنفيذها.
</p>
<p>مثلًا، أخبره أن ينفذ الأوامر التالية: "سر إلى الأمام عشرة أمتار" ثم "اتجه إلى اليمين" ثم "سر إلى نهاية الشارع" ثم "اتجه إلى اليسار". أخبره بعد ذلك: "عُدَّ الأبنية الموجودة على اليسار حتى تصل إلى البناء الرابع" ثم "اصعد إلى الطابق الثاني" ثم "اطرق على الباب الذي سيظهر أمامك". مبارك! بهذه الطريقة، تستطيع أن تدل صديقك على منزلك بدقة. البرمجة هي الشيء نفسه تمامًا. فهل ترى التعابير المكتوبة بين قوسين؟ إنها التعابير التي تكتب بإحدى لغات البرمجة والتي تخاطب الحاسوب بدلًا من صديقك السابق.
</p>
<p>لغات البرمجة هي مجموعة من المفردات والقواعد اللغوية التي تشكل لغةً وسيطةً للتخاطب مع الحاسوب وأمره بتنفيذ تعليمات وأشياء محدَّدة. فلا الحاسوب يفهم لغة البشر ولا البشر يفهمون لغة الحاسوب، لذا كان هنالك حاجة ملحة لوجود لغة وسيطة يفهمها كلاهما؛ نتيجةً لذلك، انبثق مفهوم لغة البرمجة.
</p>
<p>بعبارة أخرى، لو أردنا أن نقول للحاسوب "افعل كذا"، فسنحتاج إلى لغةٍ مشتركةٍ بيننا وبينه ليفهم ما نبتغيه، وهنا يأتي دور لغات البرمجة، إذ يمكنك أن تعدّ لغات البرمجة على أنها وسيط بين المبرمج والحاسوب.
</p>
<p>يهتم المبرمج بالتفكير في تسلسل الخطوات التي على الحاسوب القيام بها لإتمام العمل المطلوب منه (مثل حساب العمر اعتمادًا على تاريخ الولادة)، ثم كتابة هذه الخطوات بترتيب منطقي بإحدى لغات البرمجة.
</p>
<p>ربما لاحظتَ في الجملة السابقة أن جزءًا من مهمة المبرمج هو التفكير المنطقي، وهذا يجعلنا ننتقل إلى السؤال الشائع "هل أستطيع تعلم البرمجة وأصبح مبرمجًا؟" أو "هل أنا مؤهل لأصبح مبرمجًا؟".
    لماذا تتعلم البرمجة؟</p>
<p>يبدو أن تعلم البرمجة ليس بالصعوبة التي توقعتها، لكنك تريد حافزًا يجعلك تتعلم البرمجة.
</p>
<p>تسمع كثيرًا أن البرمجة هي مجال المستقبل، وأن وظائف المبرمجين ستكتسح مجال التوظيف في السنوات القادمة؟ أستطيع أن أؤكد لك ذلك، كما أنَّ وظائف البرمجة هي من أعلى الوظائف دخلًا.
</p>
<p>فلو كنت تريد بدء مشوارك الاحترافي وتريد عملًا مستقرًا وذا دخلٍ ممتاز، فإن تعلم البرمجة والعمل بها هو أفضل خيارٍ أمامك.
</p>
<p>وظائف البرمجة مريحة عمومًا، فالعمل كله مكتبي أمام حاسوب في بيئة مريحة ومناسبة، وأغلبية الشركات تتبع نظام العمل 40 ساعة في الأسبوع (أي 5 أيام لمدة 8 ساعات يوميًا)، ولا تغفل عن قدرتك على العمل عن بعد من خلال الانترنت أو كمستقل في أوقات فراغك.
</p>
<p>تعلم البرمجة سيوسع أفق تفكيرك كثيرًا، خصوصًا أن تعاملك مع الحاسوب يتبع إلى التفكير المنطقي، وستجد أن البرمجة ستسهل لك القيام بأمور أخرى في الحاسوب.
    ما عليك معرفته لتصبح مبرمجًا
    </p>
<p>يتردد الكثيرون في تعلم البرمجة متذرعين بأن مستواهم في الرياضيات ليس ممتازًا، وهذا ليس صحيحًا، فصحيحٌ أنَّ هنالك أمور تعترضك أثناء أداء عملك كمبرمج تتطلب خبرة في الرياضيات، إلا أنَّه قد تمر عليك فترات طويلة لا تحتاج فيها إلى مسائل رياضية.
</p>
<p>
    كل ما يلزمك للبدء في تعلم البرمجة هو الأساسيات التي يعرفها الجميع. إلى حين اعتراضك أية مسألة أو مشكلة تتطلب مهارة في الرياضيات، هنالك الكثير من المصادر والمراجع التي تستطيع الرجوع إليها آنذاك. بعبارة أخرى، أجِّل هذا الأمر قليلًا ولا تخف. الأهم من ذلك هو أن تكون قادرًا على التفكير بشكل منطقي.
    التفكير المنطقي
    </p>
<p>التفكير المنطقي هو المهارة التي تجمع كافة المبرمجين تحت مظلة واحدة، وهي أساس كتابة الخوارزميات، إذ يجب أن تكون قادرًا على اكتساب هذه المهارة وتطويرها.
    الخوارزميات
    </p>
<p>كلمة "الخوارزميات" هي الكلمة المرعبة التي ينفر منها البعض، فكل ما يتخيلونه عند ذكرها هو الرياضيات المعقدة والمعادلات الطويلة والرموز العجيبة، لكن الأمر بسيط جدًا؛ فالخوازرميات هي تطبيقٌ للتفكير المنطقي في خطوات متسلسلة واضحة تمامًا لحل مشكلة ما.
</p>
<p>لكي أوضِّح لك أن الخوارزميات ليست أمرًا معقدًا، سأخبرك بكيفية كتابة برنامج يسأل المستخدم عن سنة ميلاده، ثم يعيد عمره الحالي بالسنوات. </p>
`;
const post: Blog = {
  id: 1,
  name: 'كيف تساهم الاستشارات في تحسين شركتك',
  breif:
    'تتجه شركة بيزنيس برو نحو نمو ديناميكي ومستدام مستهدفةازدهار ورفاهية موظفيها والمجتمع والمساهمة في اقتصاد قطر المتنامي أن تنتهي صلاحية تأشيرة الدخول الخاصة بك',
  cat: 'تسويق',
  img: 'https://api-st.alshabalriyadi.net/assets/bznspro/blog/single.png',
  date,
};

const mostReads: Blog[] = [
  {
    id: 1,
    views: 10,
    name: 'أهمية التسويق الرقمي  في عالم البيزنيس والشركات',
    cat: 'تسويق',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/blog/m1.png',
    date,
  },
  {
    id: 2,
    views: 10,
    name: '  كيف تطور الاستشارات المالية والإدارية من مشروعك وشركتك',
    cat: 'استشارة',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/blog/m2.png',
    date,
  },
  {
    id: 3,
    views: 10,
    name: 'كيف أكون الاستشارة الاونلاين وكيف تقوم بحجزها',
    cat: 'أعمال',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/blog/m3.png',
    date,
  },
  {
    id: 4,
    views: 10,
    name: 'أهمية التسويق الرقمي  في عالم البيزنيس والشركات',
    cat: 'تسويق',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/blog/main.png',
    date,
  },
];
</script>
<template>
  <div class="breadcrumbs">
    <div class="container">
      <div class="flex items-center">
        <q-icon
          clickable
          @click="$router.push('/blog')"
          name="img:https://api-st.alshabalriyadi.net/assets/bznspro/back.svg"
          size="md"
        ></q-icon>
        <span class="cursor-pointer" @click="$router.push('/blog')"
          >المدونة</span
        >
        <q-icon name="play_arrow" size="md"></q-icon>
        <span>مقال "كيف تساهم الاستشارات ...."</span>
      </div>
    </div>
  </div>

  <div class="container blog-post">
    <div class="wrapper">
      <div class="title flex items-center">
        <h1>{{ post.name }}</h1>
        <div class="left">
          <q-btn
            class="text-center full-width"
            color="secondary"
            rounded
            label="مشاركة"
          />
          <div class="flex">
            <q-btn
              v-for="link in links"
              flat
              round
              :key="link.icon"
              :icon="link.icon"
            />
          </div>
        </div>
      </div>
      <div class="img">
        <img :src="post.img" alt="" />
      </div>
      <div class="content" v-html="postContent"></div>
      <q-separator class="q-my-lg lt-md" />
      <div class="column lt-md">
        <h3 class="no-margin">ابرز المقالات:</h3>
        <div class="carousel-container">
          <carousel :settings="carouselSettings">
            <slide v-for="post in mostReads" :key="post.id">
              <post-recent-partial :post="post" />
            </slide>
          </carousel>
        </div>
      </div>
      <q-separator class="q-my-lg lt-md" />
      <div class="column lt-md">
        <h3 class="no-margin">مقالات اخري:</h3>
        <div class="carousel-container">
          <carousel :settings="carouselSettings">
            <slide v-for="post in mostReads" :key="post.id">
              <post-recent-partial :post="post" />
            </slide>
          </carousel>
        </div>
      </div>
    </div>
    <q-separator vertical class="q-mx-lg gt-md" />
    <div class="sidebar gt-md">
      <div class="column">
        <h6>ابرز المقالات:</h6>
        <post-side-partial
          v-for="post in mostReads"
          :key="post.id"
          :post="post"
        />
      </div>
      <div class="column">
        <h6 class="q-mb-md">اشترك في نشرة الاعمال:</h6>
        <p class="text-grey-9">
          اشترك في النشرة الإخبارية ليصلك كل جديد بشان كل مقال جديد ننشرة في
          المدونة, قم بكتابة البريد الالكتروني الخاص بك واشترك
        </p>
        <q-input
          v-model="email"
          outlined
          class="q-mb-lg"
          label="قم بكتابة البريد الاكتروني  هنا"
        />
        <q-btn class="text-center" color="secondary" label="اشترك الان" />
      </div>
      <div class="column">
        <h6>مقالاتٍ اخري:</h6>
        <q-list class="rounded-borders">
          <q-item clickable v-ripple v-for="post in mostReads" :key="post.id">
            <post-side-partial :post="post" />
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>
