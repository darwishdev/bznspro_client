<script setup lang="ts">
import AppImage from '../base/AppImage.vue';
import { Blog } from '../models';
import type { BlogsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/blog_blog_definitions_pb';

export interface Props {
  post: BlogsListRow;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="post-side">
    <AppImage :src="props.post.blogImage" :alt="props.post.blogName" />
    <div class="post_content column justify-between text-left">
      <div>
        <h3 class="text-weight-medium full-width">
          {{ props.post.blogName }}
        </h3>
        <span class="rounded-borders">{{ props.post.dateTime }}</span>
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
