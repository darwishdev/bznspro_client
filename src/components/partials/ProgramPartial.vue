
<script setup lang="ts">
import { defineProps } from 'vue';
import { Program } from '../models';
export interface Props {
  program: Program;
}

const props = defineProps<Props>();
</script>

<template>

  <div class="flex no-wrap">
    <div>
      <img src="~assets/program1.png" class="full-height" :alt="props.program.title" />
    </div>
    <div class="program__content  bg-grey">
      <div class="date bg-teal">
        <div class="q-pa-sm text-center">
          <p class="no-padding no-margin text-h4 text-white">11</p>
          <p class="no-padding no-margin text-h5 text-white">سبتمبر</p>
        </div>
      </div>
      <div class=" q-pa-lg program__title column items-center text-left justify-center full-height">
        <h5 class="text-secondary text-bold no-margin full-width">
          {{ props.program.title }}
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

</template>


<style lang="scss" >
.program {
  &__content {
    position: relative;

    & .date {
      position: absolute;
      width: 100px;
      // height: 100px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      padding: 0%;
      top: 40px;
      transform: translateX(-50%);
      align-items: center;
      flex-direction: column;

      &::after {
        content: 'اخر موعد للتقدم';
        background-color: grey;
        text-align: center;
        color: #fff;
        width: 100%;
        border-radius: 0 0px 10px 10px;
      }
    }
  }

  &__title {
    padding-left: 70px;
    padding-right: 10px;
  }
}
</style>
