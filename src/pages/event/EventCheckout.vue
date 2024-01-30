<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->


<script setup lang="ts">
import type { EventRequestCreateRequest } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/events_request_definitions_pb'
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { useGlobalStore } from 'src/stores/global';
import { Notify } from 'quasar'
import apiClient from 'src/api/ApiClient';
const globalStore = useGlobalStore()
const { params } = useRoute();
const { push } = useRouter();

const state = reactive({
  userName: 'ahmed',
  userEmail: 'ahmed@gmail.com',
  userPhone: '0102202022',
  city: 'الرياض',
  is_shab: false,
  company: 'melon',
  jobTitle: 'مهندس',
});

function onReset() {
  console.log('reset')

}
const event = computed(() => {
  return globalStore.getEventById(parseInt(params.id! as string))
})
function onSubmit() {

  const req: EventRequestCreateRequest = {
    eventId: event.value.eventId,
    userName: state.userName,
    userEmail: state.userEmail,
    userPhone: state.userPhone,
    city: state.city,
    price: event.value.price,
    discount: state.is_shab ? event.value.shabDiscount : event.value.discount,
  } as EventRequestCreateRequest

  apiClient.eventRequestCreate(req).then(resp => {
    console.log(resp)
    Notify.create(globalStore.settingsMap['request_success_notification'])
    push('/')

  })
  console.log('sumbit', req)
}


function convertToPrice(price: number): string {
  return `${price.toFixed(2)} ريال سعودي`;
}
</script>


<template>
  <div class="eventm-checkout" v-if="event">
    <div class="header">
      <div class="container">
        <q-breadcrumbs class="q-my-xl">
          <q-breadcrumbs-el label="البرامج" />
          <q-breadcrumbs-el label="الشركات والاعمال " />
          <q-breadcrumbs-el label="دورة بناء خطط الاعمال" />
        </q-breadcrumbs>
        <div class="form">
          <div class="form-header q-my-xl row items-center">
            <h4 class="q-my-sm text-secondary text-bold q-mr-md">بيانات المشترك </h4>
            <span>(قم بملأ بياناتك الشخصية لاستكمال عملية الدفع)</span>

          </div>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">


            <div class="row">
              <div class="col-md-4 col-12 q-pr-lg q-mb-lg">
                <q-input outlined v-model="state.userName" label="الاسم" lazy-rules :rules="[
                  (val) => (val && val.length > 0) || 'هذا الحقل مطلوب',
                ]" />
              </div>
              <div class="col-md-4 col-12 q-pr-lg q-mb-lg">
                <q-input outlined v-model="state.userEmail" label="الايميل" lazy-rules :rules="[
                  (val) => (val && val.length > 0) || 'هذا الحقل مطلوب',
                ]" />
              </div>
              <div class="col-md-4 col-12 q-pr-lg q-mb-lg">
                <q-input outlined v-model="state.userPhone" label="رقم الهاتف" lazy-rules :rules="[
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

            <hr class="bg-white q-my-xl" />
            <div class="row justify-between items-center">
              <div class="header-info col-md-5 col-12">
                <h4 class="q-my-sm text-secondary text-bold">تفاصيل الدفع</h4>
                <div class="flex">
                  <q-toggle v-model="state.is_shab" label=" خصم عضوية الشاب الريادي" />
                </div>
                <h6 class="q-my-sm text-black"><strong>اسم البرنامج : </strong> {{ event.eventName }}</h6>
                <h6 class="q-my-sm text-black"><strong>سعر البرنامج : </strong> {{ convertToPrice(event.price) }} </h6>
                <h6 class="q-my-sm text-black"><strong>التصنيف : </strong> {{ event.eventName }}</h6>
              </div>
              <div class="card-wrapper col-md-7 col-12">
                <q-card class="bg-white rounded-xl">
                  <q-card-section>
                    <div class="text-h6 q-my-md row justify-between">
                      <span> السعر</span>
                      <span class="price"> {{ convertToPrice(event.price) }}</span>
                    </div>
                    <div v-if="event.discount != 0" class="text-h6 q-my-md row justify-between">
                      <span v-if="state.is_shab"> خصم العضوية ({{ event.shabDiscount }} %) </span>
                      <span v-else> خصم الحجز المبكر ({{ event.discount }} %) </span>
                      <span class="price"> {{ convertToPrice(state.is_shab ? event.shabDiscountAmount :
                        event.discountAmount)
                      }}
                      </span>
                    </div>
                    <hr class="bg-white q-my-sm" />

                    <div class="text-h6 row justify-between">
                      <span> المجموع الكلي</span>
                      <span class="price"> {{ convertToPrice(state.is_shab ? event.shabDiscountFinalPrice :
                        event.finalPrice)
                      }}</span>
                    </div>
                  </q-card-section>


                </q-card>
              </div>

            </div>
            <hr class="bg-white q-my-xl" />
            <div class="payment_method">
              <div class="form-header q-my-xl row items-center">
                <h4 class="q-my-sm text-secondary text-bold q-mr-md">بيانات التحويلات البنكية</h4>
              </div>

              <q-card class="bg-white rounded-xl">
                <q-card-section>
                  <div class="text-h6 q-my-md row justify-between">
                    <span> اسم البنك</span>
                    <span>{{ globalStore.settingsMap['bank_name'] }}</span>
                  </div>
                  <div class="text-h6 q-my-md row justify-between">
                    <span> آيبان</span>
                    <span> {{ globalStore.settingsMap['bank_iban'] }}</span>
                  </div>
                  <div class="text-h6 q-my-md row justify-between">
                    <span> الحساب</span>
                    <span> {{ globalStore.settingsMap['bank_account'] }}</span>
                  </div>

                </q-card-section>


              </q-card>

              <div class="flex q-mt-xl">
                <q-btn label="ارسال" type="submit" color="secondary" class="full-width" />
              </div>


            </div>
          </q-form>


        </div>


      </div>
    </div>

  </div>
</template>
