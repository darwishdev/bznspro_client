<script setup lang="ts">
export interface Props {
  color?: string;
  gap?: number;
  className?: string;
  centerTitle?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  color: '#fff',
  centerTitle: true,
  gap: 20,
});
</script>

<template>
  <div
    :class="`section q-py-xl ${props.className}`"
    :style="{ background: props.color }"
  >
    <div
      class="section-header column items-center"
      :class="{ 'text-center': props.centerTitle }"
    >
      <div class="container">
        <slot name="title" />
      </div>
    </div>
    <div class="column" :style="`gap: ${props.gap}px`">
      <slot name="content" />
    </div>
  </div>
</template>
