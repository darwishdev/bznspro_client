<script setup lang="ts">
import { Blog } from '../models';
import type { BlogsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/blog_blog_definitions_pb';

export interface Props {
  post: BlogsListRow;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="recent-post">
    <div class="column">
      <app-image :src="props.post.blogImage" :alt="props.post.blogName" />
      <div class="post_content q-pa-lg text-left">
        <span class="rounded-borders q-py-sm q-px-md bg-grey">{{
          props.post.categoryName
        }}</span>
        <h6 class="text-bold full-width q-mt-lg q-mb-md">
          {{ props.post.blogName }}
        </h6>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 600px) {
  .carousel__slide--visible {
    .recent-post {
      box-shadow: -10px 10px 30px rgb(0 0 0 / 0.1);
    }
  }
}
.recent-post {
  @media (max-width: 600px) {
    border: 1px solid var(--q-secondary);
  }
  & img {
    width: 100%;
    height: auto;
    border-radius: 20px 20px 0px 0px;
    //    box-shadow: 0 15px 10px rgb(0 0 0 / 0.2);
  }

  & .post_content {
    border-radius: 0px 0px 20px 20px;
    //box-shadow: 0 15px 10px rgb(0 0 0 / 0.2);

    //background-color: red;
  }

  border-radius: 20px;
}
</style>
