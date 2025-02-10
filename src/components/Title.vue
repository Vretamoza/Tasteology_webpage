<script setup>
import { computed } from 'vue'
import { useAttrs } from 'vue'

const attrs = useAttrs()

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="title-container mx-auto">
    <h1 v-bind="attrs" class="title text-uppercase">{{ props.text }}</h1>
    <div class="underline"></div>
  </div>
</template>

<style scoped>
.title-container {
  display: inline-block;
  text-align: center;
  margin-bottom: 1rem;
  width: fit-content;
}

.title {
  font-size: 30px;
  font-weight: var(--text-light);
  line-height: 33px;
  text-align: center;
  color: var(--white-color) !important;
  margin-bottom: 1rem;
  word-wrap: break-word;
}

.underline {
  width: 100%;
  height: 1px;
  background-color: var(--white-color);
}
</style>
