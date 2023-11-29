<template>
  <div class="container pt-2.5">
    <h1 class="text-center text-lg md:text-2xl pt-3 md:pt-5 uppercase">ДОСКА БЕСПЛАТНЫХ ОБЪЯВЛЕНИЙ</h1>
    <p class="text-center text-sm md:text-15 mt-1.5 md:mt-2.5">СОВЕРШАЙТЕ БЫСТРУЮ ПРОДАЖУ И ВЫГОДНУЮ ПОКУПКУ В УЗБЕКИСТАНЕ!</p>
    <div class="mt-2.5">
      <p class="text-19 text-black-main mb-2.5">Категории</p>
      <div class="grid grid-cols-12 gap-3 max-h-[300px] min-[510px]:max-h-fit overflow-y-scroll min-[510px]:overflow-auto">
        <CardCategory v-for="item in categories" :item="item" :key="item" class="col-span-12 min-[510px]:col-span-6 lg:col-span-3 md:col-span-4"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {categories} from "~/data/categories";
</script>