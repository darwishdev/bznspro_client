<script setup lang="ts">
import { Project } from '../models';
import type { ProjectsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_projects_definitions_pb'
import { useGlobalStore } from '../../stores/global';
import AppImage from 'components/base/AppImage.vue'
const globalStore = useGlobalStore()

export interface Props {
  project: ProjectsListRow;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="project">
    <div class="column">
      <app-image :src="project.projectImage" class="q-mb-md rounded-borders" :alt="props.project.projectName" />
      <div class="props.project_content">
        <h6 class="text-white text-bold no-margin full-width">
          {{ props.project.projectName }}
        </h6>
        <p class="text-grey" data-v-234d8544=""> {{ props.project.categoryName }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project {
  & img {
    width: 300px;
    height: 200px;
    border-radius: 20px;
  }
}
</style>
