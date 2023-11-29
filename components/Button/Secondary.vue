<template>
  <button class="text-white text-sm rounded-[3px] py-1.5 px-2 transition-200"
          :class="btnStyle">
    <span class="w-full">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import {computed} from "vue"

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    validator: (value: string) => ['blue', 'orange'].includes(value),
    default: 'blue',
  }
})

const btnStyle = computed(() => {
  switch (props.variant) {
    case 'blue':
      return 'bg-blue-main hover:bg-[#4d8fda]'
    case 'orange':
      return 'bg-[#ffab23] hover:bg-[#febc51]'
    case 'green':
      return 'bg-[#55BB00] hover:bg-[#6c1]'
  }
})
</script>