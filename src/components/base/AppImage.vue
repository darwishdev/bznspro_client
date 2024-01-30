
<script setup lang="ts">
// import Image, { type ImageSlots } from 'primevue/image';
import { QImg } from 'quasar';
import { h, ref, inject, resolveComponent } from 'vue';


type SizeObj = { width: number, height?: number }
type Size = SizeObj | number

const imageComponent = resolveComponent('q-img')

type AppImageProps = {
  src: string
  ratio?: number
  // imageProps?: ImageProps
  size?: Size
}

const props = defineProps<AppImageProps>();
// const slots = defineSlots<ImageSlots>();
const defaultWidth = 150
// get needed urls provided by package config
const baseImageUrl = process.env.IMG_BASE
const fallBackImageUrl = process.env.IMG_FALLBACK
const imageSrc = ref(props.src ? `${baseImageUrl}${props.src}` : fallBackImageUrl)


const sizeObj: SizeObj | undefined = typeof props.size === 'number' ? { width: props.size } : props.size

// function to render the primevue image component
const renderImage = () => {
  // let src = fallBackImageUrl
  // if (props.src != "") src = baseImageUrl + props.src
  return h('img', {
    src: `${baseImageUrl}${props.src}`,
  })
}
const update = (src: string) => {
  imageSrc.value = `${baseImageUrl}${src}`
}

defineExpose({ update })
</script>

<template>
  <component :is="renderImage" />
</template>
<style>
img {
  background-color: var(--fk-bg-input);
  border-radius: 5px;
}
</style>
