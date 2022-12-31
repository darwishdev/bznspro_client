<template>
  <q-page class="row items-center justify-evenly">
    <q-parallax :height="600" :speed="0.5" class="rounded-borders">
      <template v-slot:media>
        <img src="~assets/bottom_patern.png" />
      </template>
      <div
        class="row justify-between items-center contact-banner q-pa-lg full-width"
      >
        <h4 class="text-center text-black">
          تطلع لتطوير عمالك و شركتك <br /><strong>مستعد للعمل معنا?</strong>
        </h4>
        <q-btn
          class="text-center h-50"
          color="primary"
          label="تواصل معنا"
          size="lg"
          @click="() => $router.push('/contact')"
        />
      </div>
    </q-parallax>
  </q-page>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { ref } from 'vue';

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1',
  },
  {
    id: 2,
    content: 'ct2',
  },
  {
    id: 3,
    content: 'ct3',
  },
  {
    id: 4,
    content: 'ct4',
  },
  {
    id: 5,
    content: 'ct5',
  },
]);
const meta = ref<Meta>({
  totalCount: 1200,
});
</script>
