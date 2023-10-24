<script setup lang="ts">
import { ref } from 'vue';
import { reactive } from 'vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();

const state = reactive({
  name: '',
  email: '',
  phone: '',
  city: '',
  company: '',
  website: '',
  msg: '',
});
const name = ref(null);
const age = ref(null);
const accept = ref(false);

function onSubmit() {
  if (accept.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'You need to accept the license and terms first',
    });
  } else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted',
    });
  }
}

function onReset() {
  name.value = null;
  age.value = null;
  accept.value = false;
}
</script>

<template>
  <div class="contact-page">
    <div class="header text-left ">
      <div class="container">
        <div class="flex items-center">
          <h4 class="text-blue text-bold underline q-mr-md">تواصل معنا</h4>
          <q-icon color="secondary" name="img:https://static.exploremelon.com/bznspro/icons/contact.svg" size="xl" />
        </div>
        <p class="">
          يسعدنا تواصلك معنا للرد علي استفساراتك او لبحث إمكانية العمل معا
          ومساعدتك علي تطوير شرتكتك والبزنيس الخاص بك, قم بملأ الفورم التالية او
          يمكنك الاتصال بنا مباشرة
        </p>
      </div>
    </div>
    <div class="container">
      <div class="contact-main flex q-my-sm q-pb-xl">
        <div class="form">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <h3 class="underline">طلب استشارة</h3>
            <p class="q-my-xl">
              قم بملأ الفورم التالية و سنقوم بالتواصل معكم قريبا
            </p>

            <div class="row">
              <div class="col-md-6 col-12 q-pr-lg q-mb-lg">
                <q-input outlined v-model="state.name" label="الاسم" lazy-rules :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]" />
              </div>
              <div class="col-md-6 col-12 q-pr-lg q-mb-lg">
                <q-input outlined v-model="state.email" label="الايميل" lazy-rules :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]" />
              </div>
              <div class="col-md-6 col-12 q-pr-lg q-mb-lg">
                <q-input outlined v-model="state.phone" label="رقم الهاتف" lazy-rules :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]" />
              </div>
              <div class="col-md-6 col-12 q-pr-lg q-mb-lg">
                <q-input outlined v-model="state.city" label="الدولة / مدينة" lazy-rules :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]" />
              </div>
              <div class="col-md-6 col-12 q-pr-lg q-mb-lg">
                <q-input outlined v-model="state.company" label="اسم الشركة" lazy-rules :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]" />
              </div>
              <div class="col-md-6 col-12 q-pr-lg q-mb-lg">
                <q-input outlined v-model="state.website" label="الموقع الالكتروني للشركة" lazy-rules :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]" />
              </div>
              <div class="col-12 q-pr-lg q-mb-lg">
                <q-input outlined v-model="state.msg" label="محتوي الرسالة" lazy-rules type="textarea" :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]" />
              </div>
            </div>

            <div class="flex">
              <q-btn label="ارسال" type="submit" color="secondary" class="full-width" />
            </div>
          </q-form>
        </div>
        <div class="contacts">
          <div class="text-left">
            <h5 class="font-weight-bold">او يمكنك التواصل معنا عبر:</h5>
            <q-list clicable class="text-left">
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
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon color="secondary" name="img:https://static.exploremelon.com/bznspro/chevron.svg" size="lg" />
                </q-item-section>

                <q-item-section>
                  السعودية
                  , الرياض
                  , حي النرجس
                  , طريق انس بن مالك

                </q-item-section>
              </q-item>
            </q-list>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.contact-main {
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;

  @media (min-width: 1000px) {
    grid-template-columns: 70% 30%;
  }

  .form {
    padding: 30px;
    border-radius: 20px;
    border: 2px solid $blue;
    box-shadow: -10px 10px 10px rgb(0 0 0 / 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
