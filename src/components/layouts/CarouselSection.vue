<script setup lang="ts">
import { defineProps } from 'vue';
export interface Props {
  color?: string;
  gap?: number;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: '#fff',
  gap: 20,
});
</script>

<template>
  <div :class="`section q-py-xl ${props.className}`" :style="{ background: props.color }">
    <div class="section-header column text-center items-center">
      <div class="container">
        <slot name="title" />
      </div>
    </div>
    <div class="column" :style="`gap: ${props.gap}px`">
      <slot name="content" />
    </div>
  </div>
</template>
