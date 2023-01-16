<script setup lang="ts">
import { Program } from '../models';
export interface Props {
  program: Program;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="partial"
    @click.prevent="
      $router.push({ name: 'programms-view', params: { id: props.program.id } })
    "
  >
    <div>
      <img
        :src="props.program.img"
        class="full-width"
        :alt="props.program.title"
      />
    </div>
    <div class="program__content">
      <div
        class="q-py-lg column items-center text-left justify-center full-height"
      >
        <h5 class="text-secondary text-bold no-margin full-width">
          {{ props.program.title }}
        </h5>
        <p class="text-h6">
          تتجه شركة بزنس برو نحو نمو ديناميكي و مستدام تتجه شركة بزنس برو نحو
          نمو ديناميكي و مستدام
        </p>
        <q-separator />
        <div class="full-width flex justify-between text-left">
          <span class="text-blue">450 <br />ريال سعودي</span>
          <q-btn
            color="blue"
            rounded
            size="lg"
            @click.prevent="
              $router.push({
                name: 'programms-view',
                params: { id: props.program.id },
              })
            "
            >سجل الان</q-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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
