
<script setup lang="ts">
import { Blog } from '../models';
export interface Props {
  post: Blog;
}


const props = defineProps<Props>();
</script>

<template>

  <div class="post">
    <img :src="props.post.img" :alt="props.post.name" />
    <div class="post_content column justify-between q-pa-lg text-left">
      <div>
        <span class="rounded-borders q-py-sm q-px-md bg-grey">{{ props.post.cat }}</span>
        <h3 class=" text-weight-medium full-width q-mt-lg q-mb-md">
          {{ props.post.name }}
        </h3>
        <span class="rounded-borders q-py-sm q-px-md ">{{ props.post.date }}</span>
        <p class="text-h5 text-grey-7 q-mt-md">{{ props.post.breif }}</p>
      </div>
      <div class="flex justify-between">
        <div class="flex">
          <q-btn v-for="link in props.post.links" flat round :key="link.icon" :icon="link.icon" />
        </div>
        <q-btn outline color="blue" icon-right="arrow_back" label="قراءة المزيد"></q-btn>

      </div>

    </div>
  </div>

</template>


<style lang="scss" scoped>
.post {
  display: flex;
  wrap: no-wrap;

  @media(max-width: 768px) {
    flex-direction: column;
  }

  & img {
    max-width: 30%;
    height: auto;

    @media(max-width: 768px) {
      max-width: 100%;
    }

  }


}
</style>
