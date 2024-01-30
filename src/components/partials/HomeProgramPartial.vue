<script setup lang="ts">
import type { EventsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/events_event_definitions_pb'
import { useGlobalStore } from '../../stores/global';
import AppImage from 'components/base/AppImage.vue';

export interface Props {
  event: EventsListRow;
}
const globalStore = useGlobalStore()
const props = defineProps<Props>();
</script>

<template>
  <div class="flex home-programm program__wrapper partial no-wrap" @click.prevent="
    $router.push({ name: 'events-view', params: { id: props.event.eventId } })
    ">
    <!-- {{  event.eventImage }} -->
    <div class="img__wrapper">
      <app-image :src="props.event.eventImage" class="full-height" :alt="props.event.eventName" />
    </div>
    <div class="program__content bg-grey">
      <div class="date bg-teal">
        <div class="q-pa-sm text-center">
          <p class="no-padding no-margin text-h4 text-white">{{ new Date(props.event.eventDate).getDay() }}</p>
          <p class="no-padding no-margin text-h5 text-white">{{ new Date(props.event.eventDate).toLocaleString('en-US', {
            month: 'long'
          }) }}</p>
        </div>
      </div>
      <div class="q-pa-lg program__title column items-center text-left justify-center full-height">
        <h5 class="text-secondary text-bold no-margin full-width">
          {{ props.event.eventName }}
        </h5>
        <div v-html="props.event.eventBreif" style="margin: 1vh 0;">
        </div>
        <div class="full-width text-left">
          <q-btn color="blue" size="lg" @click.prevent="
            $router.push({
              name: 'events-view',
              params: { id: props.event.eventId },
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

.program__wrapper {
  @media (max-width: 600px) {
    flex-direction: column;

    & .img__wrapper {
      max-height: 250px;

      & img {
        width: 100%;
      }
    }

    & .program__content {
      & .q-pa-lg {
        padding: 30px 20px !important;
      }
    }

    & .date {
      top: 0;
      transform: translate(50%, -79%);
    }
  }
}
</style>
