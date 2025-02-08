<script setup>
import { computed, useAttrs } from 'vue'

const attrs = useAttrs()

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
  }
})

const modalId = computed(() => `modal-${btoa(props.src).replace(/=/g, '')}`)
</script>

<template>
  <img v-bind="attrs" :src="props.src" :alt="props.alt" data-bs-toggle="modal" :data-bs-target="`#${modalId}`" />

  <div class="modal fade" :id="modalId" tabindex="-1" role="dialog" :aria-labelledby="`${modalId}-title`">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <img class="modalImage" :src="props.src" :alt="props.alt" />
      </div>
    </div>
  </div>
</template>