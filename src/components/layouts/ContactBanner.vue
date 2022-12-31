<template>
  <div class="q-pa-md bg-white">
    <div class="container">
      <q-parallax :height="200" :speed="0.5" class="rounded-borders">
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
    </div>
  </div>
</template>
