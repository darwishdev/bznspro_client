<script setup lang="ts">
import { defineProps } from 'vue';
import { Team } from '../models';
export interface Props {
  member: Team;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="project">
    <div class="column">
      <img
        :src="props.member.img"
        class="q-mb-md rounded-borders"
        :alt="props.member.title"
      />
      <div class="props.member_content text-center">
        <h6 class="text-bold no-margin full-width">
          {{ props.member.title }}
        </h6>
        <p class="text-grey">{{ props.member.title }}</p>
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
