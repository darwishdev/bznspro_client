<script setup lang="ts">
import { ref } from 'vue';
import { Project, ProjectCat } from 'components/models';
import ProjectsPagePartial from 'components/partials/ProjectsPagePartial.vue';

const tab = ref(1);

const projects: Project[] = [
  {
    id: 1,
    title: 'صناعة المبادرات',
    img: 'https://static.exploremelon.com/bznspro/initiative.webp',
    cat: 'الريادة والابتكار',
  },
  {
    id: 2,
    title: 'مصنع البالونات',
    img: 'https://static.exploremelon.com/bznspro/baloon.webp',
    cat: 'دراسة وتحليل السوق',
  },
  {
    id: 3,
    title: 'الاستثمار التجاري ',
    img: 'https://static.exploremelon.com/bznspro/invest.webp',
    cat: ' حصص و اسهم الشركات ',
  },
  {
    id: 4,
    title: 'متجر المكتبة الرقمية',
    img: 'https://static.exploremelon.com/bznspro/ebook.webp',
    cat: 'نموذج عمل تجاري ',
  },
  {
    id: 5,
    title: 'تصميم المنتجات',
    img: 'https://static.exploremelon.com/bznspro/prdesign.webp',
    cat: 'التسويق والابتكار',
  }
];
const projectCats: ProjectCat[] = [
  {
    cat: {
      id: 1,
      name: 'مشاريع استشارية',
    },
    projects,
  },
  {
    cat: {
      id: 2,
      name: 'مشاريع مالية',
    },
    projects,
  },
  {
    cat: {
      id: 3,
      name: 'مشاريع تسويق',
    },
    projects,
  },
  {
    cat: {
      id: 4,
      name: 'تطوير  الشركات',
    },
    projects,
  },
];
</script>

<template>
  <div class="container services-page">
    <div class="header text-center">
      <h1>مشاريعنا</h1>
      <p class="text-h6">
        يسعدنا تواصلك معنا للرد علي استفساراتك او لبحث إمكانية العمل معا
        ومساعدتك علي تطوير شرتكتك
      </p>
    </div>
    <div class="main">
      <div class="items-center justify-center flex no-wrap q-mb-lg">
        <!-- <span class="text-font-bold text-h6">تصفح مشاريعنا :</span> -->
        <q-tabs dense v-model="tab" active-bg-color="blue" active-color="white" outside-arrows inline-label
          class="cats flex-grow">
          <q-tab v-for="cat in projectCats" :key="cat.cat.id" :name="cat.cat.id" :label="cat.cat.name" />
        </q-tabs>
      </div>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel v-for="cat in projectCats" :key="cat.cat.id" :name="cat.cat.id">
          <div class="flex projects-wrapper">
            <projects-page-partial v-for="project in cat.projects" :key="project.id" :project="project" />
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<style lang="scss">
.projects-wrapper {
  gap: 20px;

  & .projects-page-partial {
    max-width: 30%;

    @media (max-width: 1024px) {
      max-width: calc(50% - 10px);
    }

    @media (max-width: 700px) {
      max-width: 100%;

      & .project-name {
        padding: 10px;

        & h6 {
          font-size: 2.2rem;
        }
      }
    }
  }
}
</style>
