<template>
  <div class="container pt-2.5">
    <h1 class="text-center text-lg md:text-2xl pt-3 md:pt-5 uppercase">ДОСКА БЕСПЛАТНЫХ ОБЪЯВЛЕНИЙ</h1>
    <p class="text-center text-sm md:text-15 mt-1.5 md:mt-2.5">СОВЕРШАЙТЕ БЫСТРУЮ ПРОДАЖУ И ВЫГОДНУЮ ПОКУПКУ В УЗБЕКИСТАНЕ!</p>
    <div class="mt-2.5">
      <p class="text-19 text-[#202020] mb-2.5">Категории</p>
      <div class="grid grid-cols-12 gap-3 max-h-[300px] min-[510px]:max-h-fit overflow-y-scroll">
        <CardCategory v-for="item in data" :item="item" :key="item" class="col-span-12 min-[510px]:col-span-6 lg:col-span-3 md:col-span-4"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  IconsBeauty,
  IconsBuilding,
  IconsCar,
  IconsCat, IconsCoins, IconsFree, IconsFruits,
  IconsGarden, IconsGift, IconsHobby,
  IconsHome,
  IconsKids,
  IconsPC, IconsServices,
  IconsTshirt,
  IconsWork
} from "#components";

const data = [
  {
    component: IconsCar,
    title: "Автотранспорт",
    count: 3,
  },
  {
    component: IconsHome,
    title: "Недвижимость",
    count: 0,
  },
  {
    component: IconsWork,
    title: "Работа",
    count: 1,
  },
  {
    component: IconsBuilding,
    title: "Строительство, ремонт",
    count: 0,
  },
  {
    component: IconsGarden,
    title: "Дом и сад",
    count: 2,
  },
  {
    component: IconsKids,
    title: "Детский мир",
    count: 0,
  },
  {
    component: IconsPC,
    title: "Электроника и бытовая техника",
    count: 6,
  },
  {
    component: IconsTshirt,
    title: "Одежда, обувь, аксессуары",
    count: 0,
  },
  {
    component: IconsCat,
    title: "Животные и растения",
    count: 3,
  },
  {
    component: IconsBeauty,
    title: "Красота, здоровье",
    count: 0,
  },
  {
    component: IconsGift,
    title: "Подарки, сувениры",
    count: 0,
  },
  {
    component: IconsHobby,
    title: " Хобби, отдых и спорт",
    count: 4,
  },
  {
    component: IconsFruits,
    title: " Продукты питания",
    count: 6,
  },
  {
    component: IconsCoins,
    title: " Бизнес",
    count: 9,
  },
  {
    component: IconsServices,
    title: " Услуги",
    count: 3,
  },
  {
    component: IconsFree,
    title: " Отдам даром, обмен",
    count: 1,
  }
]
</script>