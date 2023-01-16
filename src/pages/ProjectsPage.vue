<script setup lang="ts">
import { ref } from 'vue';
import { Project, ProjectCat } from 'components/models';
import ProjectsPagePartial from 'components/partials/ProjectsPagePartial.vue';

const tab = ref(1);

const projects: Project[] = [
  {
    id: 1,
    title: 'شركة متجر',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/projects/1.png',
  },
  {
    id: 2,
    title: 'الشاب الريادي',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/projects/2.png',
  },
  {
    id: 3,
    title: ' منصة المنتور',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/projects/3.png',
  },
  {
    id: 4,
    title: 'منصة ادراك',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/projects/4.png',
  },
  {
    id: 5,
    title: 'شركة الروضة',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/projects/5.png',
  },
  {
    id: 6,
    title: 'تطبيق شازلونج',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/projects/6.png',
  },
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
        <span class="text-font-bold text-h6">تصفح مشاريعنا :</span>
        <q-tabs
          dense
          v-model="tab"
          active-bg-color="blue"
          active-color="white"
          outside-arrows
          inline-label
          class="cats flex-grow"
        >
          <q-tab
            v-for="cat in projectCats"
            :key="cat.cat.id"
            :name="cat.cat.id"
            :label="cat.cat.name"
          />
        </q-tabs>
      </div>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel
          v-for="cat in projectCats"
          :key="cat.cat.id"
          :name="cat.cat.id"
        >
          <div class="flex projects-wrapper">
            <projects-page-partial
              v-for="project in cat.projects"
              :key="project.id"
              :project="project"
            />
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
  }
}
</style>
