<script setup lang="ts">
export interface Props {
  color?: string;
  gap?: number;
  centerTitle?: boolean;
  centerContent?: boolean;
  isColumn?: boolean;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: '#fff',
  gap: 0,
  centerTitle: false,
  isColumn: false,
  centerContent: false,
});
</script>

<template>
  <div :class="`section q-py-xl ${props.className}`" :style="{ background: props.color }">
    <div class="container">
      <div class="section-header column" :class="{ 'items-center': centerTitle }">
        <slot name="title" />
      </div>
      <div :class="{ 'column': props.isColumn, 'row': !props.isColumn, 'justify-center': props.centerContent }"
        :style="`gap: ${props.gap}px`">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
