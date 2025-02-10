<script setup>
import Title from '@/components/Title.vue'
import Card from '@/components/Card.vue'
import ImgModal from '@/components/ImgModal.vue'
import { useDataStore } from '@/stores/data.js'
import { handleClickAnchor } from "@/utils.js"

const dataStore = useDataStore()

const imageLeft = new URL('@/assets/img/Left.png', import.meta.url).href;
const imageRightTop = new URL('@/assets/img/Right Top.png', import.meta.url).href;
const imageRightBottom = new URL('@/assets/img/Right Bottom.png', import.meta.url).href;
const imageRedSpoon = new URL('@/assets/img/Red Spoon.png', import.meta.url).href;
const imageGreenSpoon = new URL('@/assets/img/Green Spoon.png', import.meta.url).href;
const imageWhiteSpoon = new URL('@/assets/img/White Spoon.png', import.meta.url).href;
</script>

<template>
  <main class="container py-5">
    <section class="row first-floor mb-5">
      <div class="col-12 col-md-6 col-xl-4 d-flex justify-content-center">
        <ImgModal :src="imageLeft" alt="Boiling food" />
      </div>
      <div class="col-12 col-md-6 col-xl-4 d-flex flex-column align-items-center justify-content-between">
        <ImgModal :src="imageRightTop" alt="Pills being classified" />
        <ImgModal :src="imageRightBottom" alt="Egg carton" />
      </div>
      <article class="col-12 col-xl-4 order-first order-xl-last">
        <Title :text="dataStore.firstTitle" class="text-center text-lg-start"></Title>
        <p class="article-description">
          {{ dataStore.firstParagraph }}
        </p>

        <a href="#" @click="handleClickAnchor">
          <span class="text-uppercase text-red text-bold text-sm">{{ dataStore.firstArticle }}</span>
          <p class="text-bold text-md text-white">
            {{ dataStore.firstArticleDesc }}
          </p>
        </a>
      </article>
    </section>

    <section class="row second-floor">
      <Title :text="dataStore.secondTitle"></Title>
      <div class="d-flex flex-column flex-md-row gap-1">
        <div class="col-12 col-md-4">
          <Card :img="imageRedSpoon" :title="dataStore.firstCardTitle" :text="dataStore.firstCardText"></Card>
        </div>
        <div class="col-12 col-md-4">
          <Card :img="imageGreenSpoon" :title="dataStore.secondCardTitle" :text="dataStore.secondCardText"></Card>
        </div>
        <div class="col-12 col-md-4">
          <Card :img="imageWhiteSpoon" :title="dataStore.thirdCardTitle" :text="dataStore.thirdCardText"></Card>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.article-description {
  color: var(--white-color);
  font-weight: var(--text-light);
  font-size: var(--text-md);
  line-height: 30px;
}

.first-floor img {
    width: 100% !important;
}
a {
  text-decoration: none;
}
</style>
