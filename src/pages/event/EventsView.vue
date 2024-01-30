<script setup lang="ts">
import { ref, computed, onMounted, Ref } from 'vue';
import AppImage from 'src/components/base/AppImage.vue';
import { useRoute } from 'vue-router';
import apiClient from 'src/api/ApiClient';
const route = useRoute();
import type { EventUpdateRequest } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/events_event_definitions_pb'
import { useGlobalStore } from '../../stores/global';
const globalStore = useGlobalStore()
const splitterModel = ref(30)
const { params } = route;
const tab = ref('description');

const tabs = [
  { value: 'الوصف', key: 'description' },
  { value: 'اهداف البرنامج', key: 'goals' },
  { value: 'فيديو تعريفي', key: 'whattolearn' },
  { value: 'خطة البرنامج', key: 'plan' },
];

const event = computed(() => {
  return globalStore.getEventById(parseInt(route.params.id! as string))
})


</script>

<template>
  <!-- {{ event. }} -->
  <div class="programms-single" v-if="event">
    <div class="header bg-secondary">
      <div class="container">
        <div class="header_wrapper">
          <div class="header-info text-white">
            <q-breadcrumbs>
              <q-breadcrumbs-el label="البرامج" />
              <q-breadcrumbs-el label="الشركات والاعمال " />
              <q-breadcrumbs-el :label="event.eventName" />
            </q-breadcrumbs>
            <h2 class="title">{{ event.eventName }}</h2>
            <p v-html="event.eventBreif" class="text-h5" />


          </div>

          <div class="img">
            <app-image :src="event.constructorImage" :alt="event.constructorName" />
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
                <div v-html="event.eventDescription"></div>
              </q-tab-panel>
              <q-tab-panel name="goals">
                <div class="text-h6 q-my-lg">اهداف البرنامج</div>
                <q-list clicable class="text-left q-ml-xl">
                  <q-item v-for="goal in event.eventGoals" :key="goal" class="q-mb-md">
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
                <iframe width="100%" height="400" :src="`https://www.youtube.com/embed/${event.eventVideo}`"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </q-tab-panel>
              <q-tab-panel name="plan">
                <div class="text-h6 q-my-lg">خطة البرنامج</div>
                <q-list separator class="text-left q-ml-xl">

                  <q-item v-for="step in event.eventPlan" :key="step.title" class="q-py-xl">
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
              <div class="text-center">{{ event.constructorTitle }}</div>

              <div class="flex q-mt-sm">

                <h5 class="text-secondary text-center text-bold no-margin">
                  {{ event.constructorName }}
                </h5>
              </div>

            </div>
            <div class="info-head mobile">
              {{ event.constructorName }}
              <div class="text-center q-pt-sm"></div>

              <div class="flex q-mt-sm">

                <h5 class="text-secondary  q-pa-sm text-center text-bold no-margin">
                  {{ event.eventName }}
                </h5>
              </div>

            </div>
            <div class="info-body">
              <div class="flex q-py-md text-h6 justify-between">
                <span>عدد ساعات البرنامج</span>
                <span class="value">{{
                  event.eventHours }}
                </span>
              </div>
              <div class="flex q-py-md text-h6 justify-between">
                <span>تاريخ البرنامج</span>
                <span class="value">{{
                  event.eventDate }}
                </span>
              </div>
              <div class="flex q-py-md text-h6 justify-between">
                <span>توقيت البرنامج</span>
                <span class="value">{{
                  event.eventStartTime }} - {{ event.eventEndTime }}
                </span>
              </div>
              <div class="flex q-py-md text-h6 justify-between">
                <span>مكان البرنامج</span>
                <span class="value">{{
                  event.eventLocation }}
                </span>
              </div>
              <div class="flex q-py-md text-h6 justify-between">
                <span>مكان البرنامج</span>
                <span class="value">{{
                  event.eventLocation }}
                </span>
              </div>

              <!-- <p class="text-center q-my-xl text-h6">{{ event. }}</p> -->
              <q-btn color="primary" size="xl" label="سجل الان" class="btn"
                @click="() => $router.push({ name: 'events-checkout', params })" />
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
                <div v-html="event.eventDescription"></div>
              </q-tab-panel>
              <q-tab-panel name="goals">
                <div class="text-h6 ">اهداف البرنامج</div>
                <q-list clicable class="text-left ">
                  <q-item v-for="goal in event.eventGoals" :key="goal" class="q-mb-md">
                    <q-item-section avatar>
                      <q-icon color="secondary" name="img:https://static.exploremelon.com/bznspro/chevron.svg"
                        size="lg" />
                    </q-item-section>

                    <q-item-section>{{ goal }}</q-item-section>
                  </q-item>
                </q-list>
              </q-tab-panel>
              <q-tab-panel name="whattolearn">
                <iframe width="100%" height="400" :src="`https://www.youtube.com/embed/${event.eventVideo}`"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </q-tab-panel>
              <q-tab-panel name="plan">
                <div class="text-h6 ">خطة البرنامج</div>
                <q-list separator class="text-left ">
                  <q-item v-for="step in event.eventPlan" :key="step.title" class="q-py-xl">
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
