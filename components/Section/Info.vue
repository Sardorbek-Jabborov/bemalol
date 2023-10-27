<template>
  <div class="container mt-4 md:mt-11 mb-2">
    <h3 class="text-center text-lg md:text-xl uppercase pt-1.5 md:pt-2.5">УДАЧНЫЙ ВЫБОР ДЛЯ ВСЕХ И ДЛЯ КАЖДОГО!</h3>
    <p class="text-center text-sm mt-2">Найди свое среди тысяч товаров, опубликованных на нашем сайте</p>
    <div class="grid grid-cols-12 gap-y-4 my-9">
      <CardInfo v-for="item in data" :item="item" :key="item" class="col-span-6 md:col-span-3 odd:border-r md:border-r border-[#E5E5E5] last:border-r-0"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {IconsAdverts, IconsMarket, IconsRegion, IconsRubric} from "#components";

const data = [
  {
    component: IconsAdverts,
    title: "30 объявлений",
    text: "Объявления от частных лиц и организаций"
  },
  {
    component: IconsRubric,
    title: "2140 рубрик",
    text: "Размещайте объявление на любую тематику легко и быстро"
  },
  {
    component: IconsRegion,
    title: "235 регионов",
    text: "Находите выгодные предложения в соседних регионах"
  },
  {
    component: IconsMarket,
    title: "17 магазинов",
    text: "Информация о компании повысит доверие к вашему бизнесу"
  },
]
</script>