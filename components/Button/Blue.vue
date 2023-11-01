<template>
  <button class="bg-[#347ED1] hover:bg-[#4d8fda] text-white text-sm rounded-[3px] py-1.5 px-[64px] transition-300">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>