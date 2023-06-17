<template>
  <div class="contact-banner q-pa-md bg-white">
    <div class="container">
      <q-parallax :height="200" :speed="0.5" class="rounded-borders">
        <template v-slot:media>
          <img src="https://static.exploremelon.com/bznspro/bottom_patern.png" />
        </template>
        <div class="row justify-between items-center contact-banner q-pa-lg full-width">
          <h4 class="text-center no-margin text-black">
            تطلع لتطوير عمالك و شركتك <br /><strong>مستعد للعمل معنا?</strong>
          </h4>
          <div class="q-mx-auto q-mt-md">
            <q-btn class="text-center h-50" color="primary" label="تواصل معنا" size="lg"
              @click="() => $router.push('/contact')" />
          </div>
        </div>
      </q-parallax>
    </div>
  </div>
</template>
    