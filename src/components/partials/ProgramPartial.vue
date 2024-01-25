<script setup lang="ts">
import { computed } from 'vue';
import type { EventsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/events_event_definitions_pb'
import { useGlobalStore } from '../../stores/global';
const globalStore = useGlobalStore()
export interface Props {
  program: EventsListRow;
}

const props = defineProps<Props>();

const newPrice = computed(() => {
  const program = props.program
  if (!program.discount) {
    return program.price
  }
  const discountAmount = program.price * (program.discount / 100);
  return program.price - discountAmount;
});
</script>

<template>
  <div class="partial" @click.prevent="
    $router.push({ name: 'programms-view', params: { id: props.program.id } })
    ">
    <div>
      <img :src="props.program.img" class="full-width" style="height: 250px;" :alt="props.program.title" />
    </div>
    <div class="program__content">
      <div class="q-py-lg column items-center text-left justify-center full-height">
        <h5 class="text-secondary text-bold no-margin full-width">
          {{ props.program.title }}
        </h5>
        <p class="text-h6">
          {{ props.program.text }}
        </p>
        <q-separator />
        <div class="full-width flex justify-between text-left">
          <div class="flex justify-evenly ">
            <!-- <div class="discont  text-center q-mx-sm" v-if="props.program.discount">
              <del class="text-blue"> {{ props.program.price }} </del>
              <p v-if="props.program.discountExpiresAt">حتي {{ props.program.discountExpiresAt }}</p>
            </div> -->
            <p class="text-blue text-center"> الرياض</p>
          </div>
          <q-btn color="blue" rounded size="lg" @click.prevent="
            $router.push({
              name: 'programms-view',
              params: { id: props.program.id },
            })
            ">سجل الان</q-btn>
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
        content: 'الرياض';
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
