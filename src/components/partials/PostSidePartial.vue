<script setup lang="ts">
import { Blog } from '../models';
export interface Props {
  post: Blog;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="post-side">
    <img :src="props.post.img" :alt="props.post.name" />
    <div class="post_content column justify-between text-left">
      <div>
        <h3 class="text-weight-medium full-width">
          {{ props.post.name }}
        </h3>
        <span class="rounded-borders">{{ props.post.date }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-side {
  display: flex;
  wrap: no-wrap;
  margin-bottom: 20px;
  gap: 10px;
  & h3 {
    font-size: 1rem;
    line-height: 1rem;
  }

  & img {
    max-width: 30%;
    height: auto;
  }
}
</style>
