
<script setup lang="ts">
import components from 'components/home/'
</script>
<template>
  <component v-for="(comp, index) in components" :key="index" :is="comp"></component>
</template>
<style lang="scss" scoped>
.projects {
  & .carousel__slide {
    @media (min-width: 700px) {
      &:nth-child(odd) {
        transform: translateY(30px);
      }
    }
  }
}
</style>


