<template>
  <div>
    <div class="flex items-center gap-3">
      <component :is="item?.component" class="w-8 h-8"/>
      <h3 class="text-lg text-black-main font-medium">{{item?.title}}</h3>
    </div>
    <p class="mt-2 font-light leading-4.5 text-sm">{{item?.text}}</p>
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
