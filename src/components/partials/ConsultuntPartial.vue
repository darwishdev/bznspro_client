<script setup lang="ts">
import { Consultunt } from '../models';
export interface Props {
  consultunt: Consultunt;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="consultunt">
    <q-responsive :ratio="1">
      <div class="consultunt-img">
        <img
          src="https://api-st.alshabalriyadi.net/assets/bznspro/consultunt1.png"
          class=""
          :alt="props.consultunt.title"
        />
      </div>
    </q-responsive>
    <div class="consultunt__content">
      <div
        class="q-pa-lg column items-center text-center justify-center full-height"
      >
        <h5 class="text-blue text-bold no-margin full-width">
          {{ props.consultunt.name }}
        </h5>
        <p class="text-h6">
          {{ props.consultunt.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.consultunt {
  &-img {
    background-color: $greyDarken;
    border-radius: 50%;
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
