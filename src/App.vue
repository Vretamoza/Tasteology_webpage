<script setup>
import Title from '@/components/Title.vue'
import Card from '@/components/Card.vue'
import ImgModal from '@/components/ImgModal.vue'
import { useDataStore } from '@/stores/data.js'
import { handleClickAnchor } from "@/utils.js"

const dataStore = useDataStore()
</script>

<template>
  <main class="container py-5">
    <section class="row first-floor mb-5">
      <div class="col-12 col-md-6 col-xl-4 d-flex justify-content-center">
        <ImgModal src="/img/Left.png" alt="Boiling food" />
      </div>
      <div class="col-12 col-md-6 col-xl-4 d-flex flex-column align-items-center justify-content-between">
        <ImgModal src="/img/Right Top.png" alt="Pills being classified" />
        <ImgModal src="/img/Right Bottom.png" alt="Egg carton" />
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
      <div class="col-12 col-md-4">
        <Card img="/img/Red Spoon.png" :title="dataStore.firstCardTitle" :text="dataStore.firstCardText"></Card>
      </div>
      <div class="col-12 col-md-4">
        <Card img="/img/Green Spoon.png" :title="dataStore.secondCardTitle" :text="dataStore.secondCardText"></Card>
      </div>
      <div class="col-12 col-md-4">
        <Card img="/img/White Spoon.png" :title="dataStore.thirdCardTitle" :text="dataStore.thirdCardText"></Card>
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
