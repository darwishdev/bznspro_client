<script setup lang="ts">
import { Testemonial } from '../models';
export interface Props {
  testemonial: Testemonial;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="row q-mt-lg full-width gap-md testemonials_item items-center justify-sm-between"
  >
    <div class="testemonials_item_content">
      <p class="text-h6 q-mb-lg" v-html="props.testemonial.content"></p>
    </div>
    <div class="column justify-center">
      <div class="row no-wrap q-mb-md">
        <div class="testemonials_letters">
          {{ props.testemonial.letters }}
        </div>
        <img
          src="https://api-st.alshabalriyadi.net/assets/bznspro/testemonial.png"
          alt="your-image-description"
          class="testemonials_img"
        />
      </div>
      <h4
        class="testemonial_name no-margin text-center"
        v-html="props.testemonial.name"
      ></h4>
      <p
        class="testemonial_job no-margin text-center"
        v-html="props.testemonial.job"
      ></p>
    </div>
  </div>
</template>
