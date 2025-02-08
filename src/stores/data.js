import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const firstTitle = ref("What does cooking mean?")
  const firstParagraph = ref("Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...")
  const firstArticle = ref("The perfect egg")
  const firstArticleDesc = ref("Keep water between 67 and 68°C for a flavourful, tender yolk")
  const secondTitle = ref("Taste the colours")
  const firstCardTitle = ref("RED")
  const firstCardText = ref("Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.")
  const secondCardTitle = ref("Green")
  const secondCardText = ref("Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.")
  const thirdCardTitle = ref("White")
  const thirdCardText = ref("White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat. ")

  return {
    firstTitle,
    firstParagraph,
    firstArticle,
    firstArticleDesc,
    secondTitle,
    firstCardTitle,
    firstCardText,
    secondCardTitle,
    secondCardText,
    thirdCardTitle,
    thirdCardText
   }
})
