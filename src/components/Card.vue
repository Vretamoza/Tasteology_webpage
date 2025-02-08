<script setup>
import ImgModal from "./ImgModal.vue"
import { handleClickAnchor } from "@/utils.js"

const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <a href="#" @click="handleClickAnchor" class="card-container">
    <ImgModal :src="props.img" :alt="props.title" class="w-100" />
    <article class="text-center p-3">
        <h2 class="text-white text-md text-bold">{{ title }}</h2>
        <p class="text-white text-md text-light">{{ text }}</p>
    </article>
</a>
</template>