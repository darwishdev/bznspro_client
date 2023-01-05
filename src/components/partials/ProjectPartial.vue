
<script setup lang="ts">
import { Project } from '../models';
export interface Props {
  project: Project;
}

const props = defineProps<Props>();
</script>

<template>

  <div class="project">
    <div class="column">
      <img :src="props.project.img" class="q-mb-md rounded-borders" :alt="props.project.title" />
      <div class="props.project_content">
        <h6 class="text-white text-bold no-margin full-width">
          {{ props.project.title }}
        </h6>
        <p class="text-grey">{{ props.project.cat }}</p>
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.project {
  & img {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
}
</style>
