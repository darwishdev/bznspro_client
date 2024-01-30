<script setup lang="ts">
import { Blog } from '../models';
import type { BlogsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/blog_blog_definitions_pb';
export interface Props {
  post: BlogsListRow;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="post">
    <app-image :src="props.post.blogImage" :alt="props.post.blogName" />
    <div class="post_content column justify-between q-pa-lg text-left">
      <div>
        <span class="rounded-borders q-py-sm q-px-md bg-grey">{{
          props.post.categoryName
        }}</span>
        <h4 class="text-weight-medium full-width q-mt-lg q-mb-md">
          {{ props.post.blogName }}
        </h4>
        <span class="rounded-borders q-py-sm q-px-md">{{
          props.post.dateTime
        }}</span>
        <p class="text-h5 text-grey-7 q-mt-md" v-html="props.post.breif"></p>
      </div>
      <div class="flex justify-between">
        <div class="flex">
          <!-- <q-btn
            v-for="link in props.post.links"
            flat
            round
            :key="link.icon"
            :icon="link.icon"
          /> -->
        </div>
        <q-btn
          outline
          color="blue"
          icon-right="arrow_back"
          label="قراءة المزيد"
        ></q-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post {
  display: flex;
  wrap: no-wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  & img {
    max-width: 30%;
    height: auto;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
}
</style>
