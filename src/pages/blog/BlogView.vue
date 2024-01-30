<script setup lang="ts">
import { Blog } from 'components/models';
import PostSidePartial from 'components/partials/PostSidePartial.vue';
import PostRecentPartial from 'components/partials/PostRecentPartial.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Carousel, Slide } from 'vue3-carousel';
import { useGlobalStore } from 'src/stores/global';
import AppImage from 'src/components/base/AppImage.vue';
import type { BlogsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/blog_blog_definitions_pb';

const route = useRoute();
const globalStore = useGlobalStore()
const carouselSettings = {
  itemsToShow: 1,
  dir: 'rtl',
  snapAlign: 'center',
  wrapAround: true,
};

const blog = computed(() => {
  return globalStore.getBlogById(parseInt(route.params.id! as string))
})

// breakpoints are mobile first
// any settings not specified will fallback to the carousel settings

const email = ref('');
const date = 'Aug 24, 2020';
const links = [
  {
    icon: 'facebook',
    url: 'https://www.facebook.com/',
  },
  {
    icon: 'ion-logo-twitter',
    url: 'https://www.twitter.com/',
  },
  {
    icon: 'ion-logo-instagram',
    url: 'https://www.instagram.com/',
  },
];

</script>
<template>
  <div v-if="blog" class="breadcrumbs">
    <div class="container">
      <div class="flex items-center">
        <q-icon clickable @click="$router.push('/blog')" name="img:https://static.exploremelon.com/bznspro/back.svg"
          size="md"></q-icon>
        <span class="cursor-pointer" @click="$router.push('/blog')">المدونة</span>
        <q-icon name="play_arrow" size="md"></q-icon>
        <span>{{ blog.blogName }}</span>
      </div>
    </div>
  </div>

  <div v-if="blog" class="container blog-post">
    <div class="wrapper">
      <div class="title flex items-center">
        <h1>{{ blog.blogName }}</h1>
        <div class="left">
          <q-btn class="text-center full-width" color="secondary" rounded label="مشاركة" />
          <div class="flex">
            <q-btn v-for="link in links" flat round :key="link.icon" :icon="link.icon" />
          </div>
        </div>
      </div>
      <div class="img">
        <app-image :src="blog.blogImage" :alt="blog.blogName" />
      </div>
      <div class="content" v-html="blog.content"></div>
      <q-separator class="q-my-lg lt-md" />
      <div class="column lt-md">
        <h3 class="no-margin">ابرز المقالات:</h3>
        <div class="carousel-container">
          <carousel :settings="carouselSettings">
            <slide v-for="post in globalStore.mostReadBlog" :key="post.blogId">
              <post-recent-partial :post="(post as BlogsListRow)" />
            </slide>
          </carousel>
        </div>
      </div>
      <q-separator class="q-my-lg lt-md" />
      <div class="column lt-md">
        <h3 class="no-margin">مقالات اخري:</h3>
        <div class="carousel-container">
          <carousel :settings="carouselSettings">
            <slide v-for="post in globalStore.mostReadBlog" :key="post.blogId">
              <post-recent-partial :post="(post as BlogsListRow)" />
            </slide>
          </carousel>
        </div>
      </div>
    </div>
    <q-separator vertical class="q-mx-lg gt-md" />
    <div class="sidebar gt-md">
      <div class="column">
        <h6>ابرز المقالات:</h6>
        <post-side-partial v-for="post in globalStore.mostReadBlog" :key="post.blogId" :post="(post as BlogsListRow)" />
      </div>
      <div class="column">
        <h6 class="q-mb-md">اشترك في نشرة الاعمال:</h6>
        <p class="text-grey-9">
          اشترك في النشرة الإخبارية ليصلك كل جديد بشان كل مقال جديد ننشرة في
          المدونة, قم بكتابة البريد الالكتروني الخاص بك واشترك
        </p>
        <q-input v-model="email" outlined class="q-mb-lg" label="قم بكتابة البريد الاكتروني  هنا" />
        <q-btn class="text-center" color="secondary" label="اشترك الان" />
      </div>
      <div class="column">
        <h6>مقالاتٍ اخري:</h6>
        <q-list class="rounded-borders">
          <q-item clickable v-ripple v-for="post in globalStore.mostReadBlog" :key="post.blogId">
            <post-side-partial :post="(post as BlogsListRow)" />
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>
