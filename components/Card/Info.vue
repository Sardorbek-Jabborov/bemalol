<template>
  <div class="px-4">
    <component :is="item?.component" class="mx-auto"/>
    <p class="text-center text-15 md:text-lg font-medium mt-3">{{item?.title}}</p>
    <p class="text-center text-xs md:text-13 text-[#777] font-light">{{item?.text}}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    component: true,
    title: String,
    text: String
  }
})
</script>