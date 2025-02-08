<script setup>
import Title from '@/components/Title.vue'
import Card from '@/components/Card.vue'
import ImgModal from '@/components/ImgModal.vue'
</script>

<template>
  <main class="container py-5">
    <section class="row first-floor mb-5">
      <div class="col-12 col-md-6 col-xl-4 d-flex justify-content-center">
        <ImgModal src="/src/assets/img/Left.png" alt="Boiling food" />
      </div>
      <div class="col-12 col-md-6 col-xl-4 d-flex flex-column align-items-center justify-content-between">
        <ImgModal src="/src/assets/img/Right Top.png" alt="Pills being classified" />
        <ImgModal src="/src/assets/img/Right Bottom.png" alt="Egg carton" />
      </div>
      <article class="col-12 col-xl-4 order-first order-xl-last">
        <Title text="What does cooking mean?" class="text-center text-lg-start"></Title>
        <p class="article-description">
          Is it simply applying heat to a food product? A way of making certain food safe to eat? Or
          a way to create flavour and make food more appealing? This is just part of what Hervé
          This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke
          to him to find out what his experiments have told him. And in the process even discovered
          the secret to cooking the perfect egg...
        </p>

        <span class="text-uppercase text-red text-bold text-sm">The perfect egg</span>
        <p class="text-bold text-md text-white">
          Keep water between 67 and 68°C for a flavourful, tender yolk
        </p>
      </article>
    </section>

    <section class="row second-floor">
      <Title text="Taste the colours"></Title>
      <div class="col-12 col-md-4">
        <Card img="/src/assets/img/Red Spoon.png" title="RED" text="Red foods remind us of berries and soft fruits, so we anticipate a sweet taste."></Card>
      </div>
      <div class="col-12 col-md-4">
        <Card img="/src/assets/img/Green Spoon.png" title="Green" text="Red foods remind us of berries and soft fruits, so we anticipate a sweet taste."></Card>
      </div>
      <div class="col-12 col-md-4">
        <Card img="/src/assets/img/White Spoon.png" title="White" text="Red foods remind us of berries and soft fruits, so we anticipate a sweet taste."></Card>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.article-description {
  color: var(--white-color);
  font-weight: var(--text-light);
  font-size: var(--text-md);
  line-height: 30px;
}

.first-floor {
  img {
    width: 100% !important;
  }
}
</style>
