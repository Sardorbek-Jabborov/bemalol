<template>
  <router-link to="/">
    <div
        class="group py-1.5 px-3 flex justify-between items-center bg-white w-full rounded hover:shadow-[0_5px_20px_0_rgba(0,0,0,0.1)] transition-300">
      <div class="flex gap-4 items-center overflow-hidden whitespace-nowrap">
        <component :is="item?.component"/>
        <p class="truncate pr-3 group-hover:text-[#CC3256] text-sm transition-300">{{ item?.title }}</p>
      </div>
      <span class="text-[#aaa] text-sm">{{ item?.count }}</span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    component: {
      required: true,
    },
    title: {
      required: true,
      type: String,
    },
    count: {
      required: true,
      type: Number
    }
  }
})
</script>