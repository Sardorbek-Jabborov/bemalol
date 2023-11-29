<template>
  <router-link :to="item.url">
    <div
        class="group py-1.5 px-3 flex justify-between items-center bg-white w-full rounded hover:shadow-[0_5px_20px_0_rgba(0,0,0,0.1)] transition-200">
      <div class="flex gap-4 items-center overflow-hidden whitespace-nowrap">
        <component :is="item.icon"/>
        <p class="truncate pr-3 group-hover:text-red-light text-sm transition-200">{{ item?.title }}</p>
      </div>
      <span class="text-[#aaa] text-sm">{{ item?.count }}</span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    icon: {
      required: true,
    },
    title: {
      required: true,
      type: String,
    },
    count: {
      required: true,
      type: Number
    },
    url: {
      type: String,
    }
  }
})
</script>