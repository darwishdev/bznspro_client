
<script setup lang="ts">
import { Blog } from '../models';
export interface Props {
  post: Blog;
}


const props = defineProps<Props>();
</script>

<template>

  <div class="recent-post">
    <div class="column">
      <img :src="props.post.img" :alt="props.post.name" />
      <div class="post_content q-pa-lg text-left">
        <span class="rounded-borders q-py-sm q-px-md bg-grey">{{ props.post.cat }}</span>
        <h6 class=" text-bold full-width q-mt-lg q-mb-md">
          {{ props.post.name }}
        </h6>

      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.recent-post {
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
  box-shadow: -10px 10px 10px rgb(0 0 0 / 0.2);

}
</style>
