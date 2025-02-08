<script setup>
import Title from '@/components/Title.vue'
</script>

<template>
  <main class="container py-5">
    <section class="row first-floor mb-5">
      <div class="col-12 col-lg-4 d-flex justify-content-center">
        <img src="/src/assets/img/Left.png" alt="Boiling food" />
      </div>
      <div class="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-between">
        <img src="/src/assets/img/Right Top.png" alt="Pills being classified" />
        <img src="/src/assets/img/Right Bottom.png" alt="Egg carton" />
      </div>
      <article class="col-12 col-lg-4 order-first order-lg-last">
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
</style>
