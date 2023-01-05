<script setup lang="ts">
import { Project } from '../models';
export interface Props {
  project: Project;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="projects-page-partial">
    <div class="column">
      <img :src="props.project.img" class="q-mb-md rounded-borders" :alt="props.project.title" />
      <div class="project-name">
        <h6 class="text-bold no-margin full-width">
          {{ props.project.title }}
        </h6>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects-page-partial {
  position: relative;
  transition: all 0.3s;
  margin-bottom: 40px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }

  & img {
    width: 100%;
    height: auto;
    border-radius: 0px;
  }

  & .project-name {
    position: absolute;
    bottom: 20px;
    padding: 0 30px;
    text-align: center;
    color: #fff;
    display: inline;
    right: 0px;
    background-color: #488ad1;

    &::before {
      content: '';
      position: absolute;
      height: 2px;
      width: 300px;
      background-color: #488ad1;
      right: 0;
      bottom: 0;

      @media (max-width: 1024px) {
        width: 100px;
      }
    }

    &::after {
      content: '';
      position: absolute;
      width: 2px;
      height: 250px;
      background-color: #488ad1;
      right: 0;
      bottom: 0;

      @media (max-width: 1024px) {
        height: 150px;
      }
    }
  }
}
</style>
