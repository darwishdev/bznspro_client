<script setup lang="ts">
import AppImage from 'components/base/AppImage.vue';
import type { TeamMembersListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_team_members_definitions_pb'
export interface Props {
  member: TeamMembersListRow;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="project">
    <div class="column">
      <app-image :src="props.member.teamMemberImage" class="q-mb-md rounded-borders" :alt="props.member.teamMemberName" />
      <div class="props.member_content text-center">
        <h6 class="text-bold no-margin full-width">
          {{ props.member.teamMemberName }}
        </h6>
        <p class=" ">{{ props.member.jobTitle }}</p>
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
