<script setup lang="ts">
import type { TestemonialsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_testemonials_definitions_pb'
import { useGlobalStore } from '../../stores/global';
import AppImage from '../base/AppImage.vue';
const globalStore = useGlobalStore()
export interface Props {
  testemonial: TestemonialsListRow;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="row q-mt-lg full-width gap-md testemonials_item items-center justify-sm-between">
    <div class="testemonials_item_content">
      <p class="text-h6 q-mb-lg" v-html="props.testemonial.breif"></p>
    </div>
    <div class="column justify-center">
      <AppImage :src="testemonial.testemonialImage" :alt="testemonial.testemonialName" class="testemonials_img"
        style="margin:auto" />
      <div class="row no-wrap q-mb-md">
        <!-- <h2>{{ testemonial.testemonialImage }}</h2> -->

      </div>
      <h4 class="testemonial_name no-margin text-center" v-html="props.testemonial.testemonialName"></h4>
      <p class="testemonial_job no-margin text-center" v-html="props.testemonial.testemonialTitle"></p>
    </div>
  </div>
</template>
