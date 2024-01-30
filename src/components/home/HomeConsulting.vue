<script setup lang="ts">
import AppSection from 'components/layouts/AppSection.vue';
import { Service } from 'components/models';
import { useGlobalStore } from 'stores/global'
import { ref } from 'vue'
import AppImage from 'components/base/AppImage.vue';

const globalStore = useGlobalStore()
const tab = ref(1);

function _getCurrenServiceIndex(): number {
  return globalStore.programs.indexOf(
    globalStore.programs.filter((program) => program.programId == tab.value)[0]
  );
}
function goTo(isNext: boolean) {
  const currentIndex = _getCurrenServiceIndex();
  if (typeof currentIndex == undefined) {
    return;
  }

  const targetSlide = globalStore.programs.indexOf(
    globalStore.programs[isNext ? currentIndex + 1 : currentIndex - 1]
  );

  if (targetSlide == -1) {
    tab.value = isNext ? globalStore.programs[0].programId : globalStore.programs[globalStore.programs.length - 1].programId;
    return;
  }

  // prevBtnDisabled.value = !isNext;

  tab.value = globalStore.programs[targetSlide].programId;
}
</script>

<template>
  <app-section class="home-consulting" center-content :gap="50">
    <template v-slot:content>
      <div class="main w-full" style="width:100%">
        <div class="navigators">
          <q-btn flat size="lg" round class="carousel__prev" @click="goTo(false)" icon="chevron_right" />
          <q-btn flat size="lg" round @click="goTo(true)" class="carousel__next" icon="chevron_left" />
        </div>
        <h3 class="text-black font-weight-bold">تعرف على برامجنا</h3>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel v-for="program in globalStore.programs" :key="program.programId" :name="program.programId">
            <div class="flex q-mt-lg service-wrapper justify-md-between justify-center">
              <div class="service-content ">
                <h4 class=" mb-4 h-mr" style="font-weight: 600; font-size: 32px;margin-bottom: 30px;">{{
                  program.programName }}
                </h4>
                <div v-html="program.breif" class="breif"></div>
              </div>

              <div class=" ">

                <app-image style="border-radius : 10px ; width:500px;height: 280px;" :src="program.programImage"
                  :alt="program.programName" />
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </template>
  </app-section>
</template>

<style lang="scss">
.home-consulting {
  & .main {
    position: relative;

    .navigators {
      position: absolute;
      right: 0;
    }
  }

}

.service-content {

  & .breif {
    margin-top: 30px;
    max-width: 600px;
    padding-right: 40px;
  }

  img {
    width: 500px !important;
  }

  & .q-btn {
    @media (max-width: 700px) {
      width: 100%;
    }
  }
}

.navigators {
  display: flex;
  margin: 80px 0;

  @media (max-width: 700px) {
    display: none;
    // gap: 10px;

    // .carousel__prev,
    // .carousel__next {
    //   transform: rotate(0);
    // }
  }

  & button {
    background-color: $blue;
    color: #fff;

    &.carousel__next {
      position: absolutewzsa;
      top: 0 !important;
      left: auto !important;
      right: 0 !important;

      @media (min-width: 700px) {
        position: absolute;
        transform: translateX(0);
      }
    }

    &.carousel__prev {
      position: absolutewzsa;
      top: 0 !important;
      left: auto !important;
      right: 0 !important;

      @media (min-width: 700px) {
        position: absolute;
        transform: translateX(-200%);
      }
    }
  }
}
</style>
