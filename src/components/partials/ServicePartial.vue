
<script setup lang="ts">
import { defineProps } from 'vue';
import { Service } from '../models';
export interface Props {
  service: Service;
}

const props = defineProps<Props>();
</script>

<template>

  <div class="service">
    <svg xmlns="http://www.w3.org/2000/svg" width="105.713" height="58.491" viewBox="0 0 105.713 58.491">
      <g id="_9057315_quote_icon" data-name="9057315_quote_icon" transform="translate(-7 -9)">
        <path id="Path_51" data-name="Path 51" d="M29.265,9H60.558L38.293,67.491H7Z" transform="translate(0)"
          fill="#e8e8e8" />
        <path id="Path_52" data-name="Path 52" d="M34.266,9H65.558L43.293,67.491H12Z" transform="translate(47.154)"
          fill="#e8e8e8" />
      </g>
    </svg>

    <h2 class="font-weight-bold">{{ props.service.title }}</h2>
    <p>{{ props.service.content }}</p>
    <q-btn class="text-center justify-center h-50" flat icon-right="arrow_back" label="اطلب الخدمة" size="lg"
      @click="() => $router.push('/contact')" />
  </div>
</template>

