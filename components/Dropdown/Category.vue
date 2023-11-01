<template>
  <div class="w-[240px]">
    <CommonDropdown>
      <ul class="max-h-[336px] overflow-y-scroll">
        <li v-for="item in data" :key="item" class="flex gap-3 items-center py-2 hover:bg-gray-200 px-2 ">
          <component :is="item.component" class="w-7 h-7"/>
          <p class="text-15">{{ item.title }}</p>
        </li>
      </ul>
    </CommonDropdown>
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
