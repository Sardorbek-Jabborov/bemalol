<template>
  <div class="p-3 bg-[#fff]">
    <div class="flex items-center gap-2.5">
      <IconsCar class="w-[35px] h-[35px]"/>
      <p class="text-xl">Автотранспорт</p>
    </div>
    <ul class="grid grid-cols-12 gap-x-3 gap-y-1.5 mt-1">
      <li v-for="(item, index) in categories"
          class="col-span-12 min-[500px]:col-span-6 lg:col-span-4 flex justify-between relative before:h-[1px] before:bg-[#eee] before:absolute before:bottom-1 before:left-0 before:block before:w-full"
          :key="index">
        <router-link :to="item.url" class="text-sm text-[#0563CD] hover:text-red-main transition-200 pr-2 z-10 bg-white">
          {{ item.title }}
        </router-link>
        <span class="text-13 text-[#AAAABD] z-10 bg-white pl-2">{{ item.count }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {useSeoMeta} from "#imports";
import {categories} from "~/data/categories";

useSeoMeta({
  title: "Авто объявления"
})
</script>